// app.js - Build Better Frontend Application

// ==========================================
// CONFIGURATION & GLOBAL VARIABLES
// ==========================================

const CONFIG = {
    API_BASE_URL: 'https://build-better.onrender.com/api',
    STORAGE_KEYS: {
        AUTH_TOKEN: 'authToken',
        USER_DATA: 'userData'
    },
    CATEGORIES: {
        'plumbers': 'plumber',
        'electricians': 'electrician', 
        'contractors': 'contractor',
        'civilengineers': 'civilengineer',
        'skilledlabor': 'skilledlabor',
        'unskilledlabor': 'unskilledlabor',
        'painters': 'painter',
        'carpenters': 'carpenter',
        'machinery': 'machinery',
        'workshops': 'workshop'
    },
    CATEGORY_ICONS: {
        plumber: '🔧',
        electrician: '⚡',
        contractor: '🏗️',
        civilengineer: '👨‍💼',
        skilledlabor: '👷‍♂️',
        unskilledlabor: '👷',
        painter: '🎨',
        carpenter: '🔨',
        machinery: '🚜',
        workshop: '🔧'
    },
    CATEGORY_NAMES: {
        plumber: 'Plumbers',
        electrician: 'Electricians',
        contractor: 'Contractors',
        civilengineer: 'Civil Engineers',
        skilledlabor: 'Skilled Labor',
        unskilledlabor: 'Unskilled Labor',
        painter: 'Painters',
        carpenter: 'Carpenters',
        machinery: 'Machinery Operators',
        workshop: 'Workshops'
    }
};

// Global state
let appState = {
    currentUser: null,
    authToken: localStorage.getItem(CONFIG.STORAGE_KEYS.AUTH_TOKEN),
    professionalData: {},
    filteredData: {},
    currentFilters: {},
    isLoading: false
};

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

class Utils {
    static showNotification(message, type = 'info', duration = 3000) {
        const container = document.getElementById('notificationContainer');
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        container.appendChild(notification);
        
        // Trigger animation
        setTimeout(() => notification.classList.add('show'), 100);
        
        // Remove notification
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => container.removeChild(notification), 300);
        }, duration);
    }

    static showLoading(containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = `
            <div class="col-span-full text-center py-8">
                <div class="loading-spinner"></div>
                <div class="text-lg mt-4 text-gray-600">Loading professionals...</div>
            </div>
        `;
    }

    static formatExperience(experience) {
        if (!experience) return '2-5 years';
        return experience.includes('year') ? experience : `${experience} years`;
    }

    static extractExperienceNumber(experience) {
        if (!experience) return 3;
        const match = experience.match(/(\d+)/);
        return match ? parseInt(match[1]) : 3;
    }

    static formatRate(rate) {
        if (!rate) return '₹500/day';
        return rate.startsWith('₹') ? rate : `₹${rate}`;
    }

    static scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    static generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
}

// ==========================================
// API SERVICE
// ==========================================

class ApiService {
    static async call(endpoint, options = {}) {
        const url = `${CONFIG.API_BASE_URL}${endpoint}`;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
             credentials: "include",  
            ...options
        };
        
        if (appState.authToken) {
            config.headers.Authorization = `Bearer ${appState.authToken}`;
        }
        
        try {
            const response = await fetch(url, config);
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.message || `HTTP ${response.status}: Request failed`);
            }
            
            return data;
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    // Authentication endpoints
    static async login(email, password) {
        return this.call('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });
    }

    static async register(name, email, password, role = 'customer') {
        return this.call('/auth/register', {
            method: 'POST',
            body: JSON.stringify({ email, password, role })
        });
    }

    // Professional endpoints
    static async getProfessionals(category) {
        return this.call(`/professionals/${category}`);
    }

    static async createProfessional(professionalData) {
        return this.call('/professionals', {
            method: 'POST',
            body: JSON.stringify(professionalData)
        });
    }

    // Project endpoints
    static async getProjects() {
        return this.call('/projects');
    }

    static async getMyProjects() {
        return this.call('/projects/my-projects');
    }

    static async createProject(title, description) {
        return this.call('/projects', {
            method: 'POST',
            body: JSON.stringify({ title, description })
        });
    }

    static async updateProject(id, data) {
        return this.call(`/projects/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    }

    static async deleteProject(id) {
        return this.call(`/projects/${id}`, {
            method: 'DELETE'
        });
    }

    // Services endpoints
    static async getServices(filters = {}) {
        let endpoint = '/services';
        const params = new URLSearchParams();
        
        if (filters.location) params.append('location', filters.location);
        if (filters.category) params.append('category', filters.category);
        
        if (params.toString()) {
            endpoint += '?' + params.toString();
        }
        
        return this.call(endpoint);
    }

    static async createService(serviceData) {
        return this.call('/services', {
            method: 'POST',
            body: JSON.stringify(serviceData)
        });
    }
}

// ==========================================
// AUTHENTICATION MANAGER
// ==========================================

class AuthManager {
    static init() {
        if (appState.authToken) {
            this.updateUI(true);
            // Optionally validate token here
        }
    }

    static async login(email, password) {
        try {
            const response = await ApiService.login(email, password);
            
            appState.authToken = response.token;
            appState.currentUser = response.user;
            
            localStorage.setItem(CONFIG.STORAGE_KEYS.AUTH_TOKEN, appState.authToken);
            localStorage.setItem(CONFIG.STORAGE_KEYS.USER_DATA, JSON.stringify(appState.currentUser));
            
            this.updateUI(true);
            Utils.showNotification(`Welcome back, ${appState.currentUser.email}!`, 'success');
            
            return response;
        } catch (error) {
            Utils.showNotification('Login failed: ' + error.message, 'error');
            throw error;
        }
    }

    static async register(email, password, userType) {
        try {
            await ApiService.register(email, password, userType);
            Utils.showNotification('Registration successful! Please login with your credentials.', 'success');
        } catch (error) {
            Utils.showNotification('Registration failed: ' + error.message, 'error');
            throw error;
        }
    }

    static logout() {
        localStorage.removeItem(CONFIG.STORAGE_KEYS.AUTH_TOKEN);
        localStorage.removeItem(CONFIG.STORAGE_KEYS.USER_DATA);
        
        appState.authToken = null;
        appState.currentUser = null;
        
        this.updateUI(false);
        Utils.showNotification('Logged out successfully', 'info');
        
        // Redirect to home
        PageManager.showPage('home');
    }

    static updateUI(isLoggedIn) {
        const loginBtn = document.getElementById('loginBtn');
        const signupBtn = document.getElementById('signupBtn');
        
        if (isLoggedIn) {
            loginBtn.textContent = 'Dashboard';
            loginBtn.onclick = () => this.showDashboard();
            signupBtn.textContent = 'Logout';
            signupBtn.onclick = () => this.logout();
        } else {
            loginBtn.textContent = 'Login';
            loginBtn.onclick = () => ModalManager.showLogin();
            signupBtn.textContent = 'Sign Up';
            signupBtn.onclick = () => ModalManager.showSignup();
        }
    }

    static showDashboard() {
        Utils.showNotification('Dashboard feature coming soon! You can create projects and manage your profile.', 'info');
    }
}

// ==========================================
// PAGE MANAGER
// ==========================================

class PageManager {
    static showPage(pageId) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        // Show selected page
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
        } else {
            // Create dynamic service page if it doesn't exist
            this.createServicePage(pageId);
        }
        
        // Update nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // Load professionals if it's a service page
        if (CONFIG.CATEGORIES[pageId]) {
            ProfessionalManager.loadProfessionals(pageId);
        }
        
        // Scroll to top
        window.scrollTo(0, 0);
    }

    static createServicePage(category) {
        const apiCategory = CONFIG.CATEGORIES[category];
        if (!apiCategory) return;

        const icon = CONFIG.CATEGORY_ICONS[apiCategory];
        const name = CONFIG.CATEGORY_NAMES[apiCategory];
        
        const pageHTML = `
            <div id="${category}" class="page active">
                <section class="hero-gradient text-white py-16">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div class="text-6xl mb-4">${icon}</div>
                        <h1 class="text-4xl font-bold mb-4">Professional ${name}</h1>
                        <p class="text-xl mb-6 max-w-3xl mx-auto">Expert ${name.toLowerCase()} services for all your construction needs</p>
                    </div>
                </section>
                
                <section class="py-8 bg-white shadow-sm">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="flex flex-wrap gap-4 items-center justify-between">
                            <div class="flex flex-wrap gap-2">
                                <button type="button" onclick="ProfessionalManager.filterByExperience('${category}', 'all')" class="filter-btn active px-4 py-2 rounded-lg border border-gray-300 hover:bg-blue-600 hover:text-white">All Experience</button>
                                <button type="button" onclick="ProfessionalManager.filterByExperience('${category}', '0-2')" class="filter-btn px-4 py-2 rounded-lg border border-gray-300 hover:bg-blue-600 hover:text-white">0-2 Years</button>
                                <button type="button" onclick="ProfessionalManager.filterByExperience('${category}', '3-5')" class="filter-btn px-4 py-2 rounded-lg border border-gray-300 hover:bg-blue-600 hover:text-white">3-5 Years</button>
                                <button type="button" onclick="ProfessionalManager.filterByExperience('${category}', '6-10')" class="filter-btn px-4 py-2 rounded-lg border border-gray-300 hover:bg-blue-600 hover:text-white">6-10 Years</button>
                                <button type="button" onclick="ProfessionalManager.filterByExperience('${category}', '10+')" class="filter-btn px-4 py-2 rounded-lg border border-gray-300 hover:bg-blue-600 hover:text-white">10+ Years</button>
                            </div>
                            <div class="flex items-center space-x-4">
                                <select id="${category}LocationFilter" onchange="ProfessionalManager.filterByLocation('${category}')" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                                    <option value="all">All Locations</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Bangalore">Bangalore</option>
                                    <option value="Chennai">Chennai</option>
                                    <option value="Pune">Pune</option>
                                    <option value="Hyderabad">Hyderabad</option>
                                </select>
                                <select id="${category}SortBy" onchange="ProfessionalManager.sortProfessionals('${category}')" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                                    <option value="rating">Sort by Rating</option>
                                    <option value="experience">Sort by Experience</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section class="py-12 bg-gray-50">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="flex justify-between items-center mb-8">
                            <h2 class="text-3xl font-bold text-gray-800">Available ${name}</h2>
                            <div class="text-gray-600">
                                <span id="${category}Count">0</span> professionals found
                            </div>
                        </div>
                        <div id="${category}Grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <!-- Content will be loaded by JavaScript -->
                        </div>
                    </div>
                </section>
            </div>
        `;
        
        // Insert the page before the footer
        const footer = document.querySelector('footer');
        footer.insertAdjacentHTML('beforebegin', pageHTML);
    }
}

// ==========================================
// PROFESSIONAL MANAGER
// ==========================================

class ProfessionalManager {
    static async loadProfessionals(category) {
        try {
            const apiCategory = CONFIG.CATEGORIES[category];
            if (!apiCategory) {
                console.error('Invalid category:', category);
                return;
            }
            
            // Show loading state
            Utils.showLoading(category + 'Grid');
            
            // Fetch professionals from API
            const data = await ApiService.getProfessionals(apiCategory);
            
            // Transform API data to match frontend format
            const transformedData = data.map(professional => ({
                id: professional._id,
                name: professional.name,
                category: professional.category,
                location: professional.location,
                experience: Utils.formatExperience(professional.experience),
                experienceNum: Utils.extractExperienceNumber(professional.experience),
                rating: professional.rating || (4.0 + Math.random() * 1.0).toFixed(1),
                reviews: professional.reviews || Math.floor(Math.random() * 50) + 5,
                rate: professional.rate || Math.floor(Math.random() * 500) + 300,
                rateDisplay: Utils.formatRate(professional.rate),
                phone: professional.phone || '+91 98765 43210',
                specialties: professional.specialties || ['General Work'],
                description: professional.description || 'Experienced professional ready to help with your project.',
                availability: professional.availability || 'Available',
                verified: professional.verified || Math.random() > 0.5,
                emergency: professional.emergency || Math.random() > 0.8
            }));
            
            appState.professionalData[apiCategory] = transformedData;
            appState.filteredData[category] = [...transformedData];
            
            this.renderProfessionals(category);
            this.updateCount(category);
            
        } catch (error) {
            console.error('Error loading professionals:', error);
            // Show empty state on error
            appState.filteredData[category] = [];
            this.renderProfessionals(category);
            this.updateCount(category);
        }
    }

    static renderProfessionals(category) {
        const grid = document.getElementById(category + 'Grid');
        const data = appState.filteredData[category] || [];
        
        if (data.length === 0) {
            this.renderEmptyState(grid, category);
            return;
        }
        
        grid.innerHTML = data.map(professional => this.createProfessionalCard(professional)).join('');
    }

    static renderEmptyState(container, category) {
        const apiCategory = CONFIG.CATEGORIES[category];
        const icon = CONFIG.CATEGORY_ICONS[apiCategory];
        const name = CONFIG.CATEGORY_NAMES[apiCategory];
        
        container.innerHTML = `
            <div class="empty-state col-span-full">
                <div class="empty-state-icon">${icon}</div>
                <h3 class="text-xl font-semibold mb-2">No ${name} Available</h3>
                <p>Be the first professional to join this category!</p>
                <button onclick="PageManager.showPage('home'); setTimeout(() => Utils.scrollToSection('join'), 100);" class="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">Join as Professional</button>
            </div>
        `;
    }

    static createProfessionalCard(professional) {
        return `
            <div class="professional-card">
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <h3 class="text-xl font-bold text-gray-800">${professional.name}</h3>
                        <p class="text-gray-600">${professional.experience} experience</p>
                        <p class="text-gray-600">📍 ${professional.location}</p>
                    </div>
                    <div class="text-right">
                        <div class="flex items-center mb-1">
                            <span class="text-yellow-500">⭐</span>
                            <span class="font-semibold ml-1">${professional.rating}</span>
                            <span class="text-gray-500 text-sm ml-1">(${professional.reviews})</span>
                        </div>
                        <p class="text-lg font-bold text-green-600">${professional.rateDisplay}</p>
                    </div>
                </div>
                
                <div class="mb-4">
                    <div class="flex flex-wrap gap-2 mb-3">
                        ${professional.specialties.map(specialty => 
                            `<span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">${specialty}</span>`
                        ).join('')}
                    </div>
                    <p class="text-gray-700 text-sm">${professional.description}</p>
                </div>
                
                <div class="flex justify-between items-center pt-4 border-t border-gray-200">
                    <div class="text-sm text-gray-600">
                        <p>📞 ${professional.phone}</p>
                        <p>🕒 ${professional.availability}</p>
                    </div>
                    <div class="flex space-x-2">
                        ${professional.verified ? '<span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">✓ Verified</span>' : ''}
                        ${professional.emergency ? '<span class="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">🚨 Emergency</span>' : ''}
                    </div>
                </div>
                
                <div class="mt-4 flex space-x-2">
                    <button onclick="ProfessionalManager.contactProfessional('${professional.phone}')" class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">Contact</button>
                    <button onclick="ProfessionalManager.viewProfile('${professional.id}')" class="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors">View Profile</button>
                </div>
            </div>
        `;
    }

    static updateCount(category) {
        const countElement = document.getElementById(category + 'Count');
        if (countElement) {
            countElement.textContent = appState.filteredData[category]?.length || 0;
        }
    }

    static filterByExperience(category, experience) {
        // Update active filter button
        const filterButtons = document.querySelectorAll(`#${category} .filter-btn`);
        filterButtons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        
        const apiCategory = CONFIG.CATEGORIES[category];
        const data = appState.professionalData[apiCategory] || [];
        
        if (experience === 'all') {
            appState.filteredData[category] = [...data];
        } else {
            appState.filteredData[category] = data.filter(professional => {
                const exp = professional.experienceNum;
                switch(experience) {
                    case '0-2': return exp <= 2;
                    case '3-5': return exp >= 3 && exp <= 5;
                    case '6-10': return exp >= 6 && exp <= 10;
                    case '10+': return exp > 10;
                    default: return true;
                }
            });
        }
        
        this.renderProfessionals(category);
        this.updateCount(category);
    }

    static filterByLocation(category) {
        const location = document.getElementById(category + 'LocationFilter').value;
        const apiCategory = CONFIG.CATEGORIES[category];
        const data = appState.professionalData[apiCategory] || [];
        
        if (location === 'all') {
            appState.filteredData[category] = [...data];
        } else {
            appState.filteredData[category] = data.filter(professional => 
                professional.location === location
            );
        }
        
        this.renderProfessionals(category);
        this.updateCount(category);
    }

    static sortProfessionals(category) {
        const sortBy = document.getElementById(category + 'SortBy').value;
        const data = appState.filteredData[category] || [];
        
        data.sort((a, b) => {
            switch(sortBy) {
                case 'rating': return b.rating - a.rating;
                case 'experience': return b.experienceNum - a.experienceNum;
                case 'price-low': return a.rate - b.rate;
                case 'price-high': return b.rate - a.rate;
                default: return 0;
            }
        });
        
        this.renderProfessionals(category);
    }

    static contactProfessional(phone) {
        window.open(`tel:${phone}`, '_self');
    }

    static viewProfile(id) {
        Utils.showNotification('Profile viewing feature will be available soon!', 'info');
    }

    static async registerProfessional(formData) {
        try {
            const professionalData = {
                name: formData.fullName,
                category: formData.category,
                location: formData.serviceArea,
                experience: formData.experience,
                description: formData.description,
                rate: formData.rate,
                phone: formData.phone,
                email: formData.email
            };
            
            await ApiService.createProfessional(professionalData);
            Utils.showNotification('Professional registration successful! You can now be found by customers.', 'success');
            
        } catch (error) {
            Utils.showNotification('Registration failed: ' + error.message, 'error');
            throw error;
        }
    }
}

// ==========================================
// MODAL MANAGER
// ==========================================

class ModalManager {
    static showLogin() {
        document.getElementById('loginModal').classList.remove('hidden');
    }

    static hideLogin() {
        document.getElementById('loginModal').classList.add('hidden');
    }

    static showSignup() {
        document.getElementById('signupModal').classList.remove('hidden');
    }

    static hideSignup() {
        document.getElementById('signupModal').classList.add('hidden');
    }
}

// ==========================================
// FORM HANDLERS
// ==========================================

class FormHandlers {
    static initializeLoginForm() {
        document.getElementById('loginForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            try {
                await AuthManager.login(email, password);
                ModalManager.hideLogin();
                this.reset();
            } catch (error) {
                // Error already handled in AuthManager
            }
        });
    }

    static initializeSignupForm() {
        document.getElementById('signupForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const name = document.getElementById('signupName').value;
            
            if (!userType) {
                Utils.showNotification('Please select whether you are a customer or professional', 'error');
                return;
            }
            
            try {
                await AuthManager.register(name, email, password, userType);
                ModalManager.hideSignup();
                ModalManager.showLogin();
                this.reset();
            } catch (error) {
                // Error already handled in AuthManager
            }
        });
    }

    static initializeProfessionalForm() {
        document.getElementById('professionalForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = {
                fullName: document.getElementById('fullName').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                category: document.getElementById('category').value,
                experience: document.getElementById('experience').value,
                serviceArea: document.getElementById('serviceArea').value,
                description: document.getElementById('description').value,
                rate: document.getElementById('rate').value
            };
            
            try {
                await ProfessionalManager.registerProfessional(formData);
                this.reset();
            } catch (error) {
                // Error already handled in ProfessionalManager
            }
        });
    }
}

// ==========================================
// APPLICATION INITIALIZATION
// ==========================================

class App {
    static init() {
        // Initialize authentication
        AuthManager.init();
        
        // Initialize form handlers
        FormHandlers.initializeLoginForm();
        FormHandlers.initializeSignupForm();
        FormHandlers.initializeProfessionalForm();
        
        // Set up global functions for HTML onclick handlers
        this.setupGlobalFunctions();
        
        // Load home page by default
        PageManager.showPage('home');
        
        console.log('Build Better App initialized successfully!');
    }

    static setupGlobalFunctions() {
        // Make functions available globally for HTML onclick handlers
        window.showPage = PageManager.showPage.bind(PageManager);
        window.showLoginModal = ModalManager.showLogin;
        window.hideLoginModal = ModalManager.hideLogin;
        window.showSignupModal = ModalManager.showSignup;
        window.hideSignupModal = ModalManager.hideSignup;
        window.scrollToSection = Utils.scrollToSection;
        window.ProfessionalManager = ProfessionalManager;
        window.PageManager = PageManager;
    }
}

// ==========================================
// START APPLICATION
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    App.init();
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        App,
        AuthManager,
        PageManager,
        ProfessionalManager,
        ApiService,
        Utils
    };
}