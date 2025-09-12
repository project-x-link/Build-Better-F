// ==========================================
// LANGUAGE TRANSLATIONS
// ==========================================

const TRANSLATIONS = {
    en: {
        // Navigation
        home: 'Home',
        services: 'Services',
        labor: 'Labor',
        equipment: 'Equipment',
        projects: 'Projects',
        login: 'Login',
        signup: 'Sign Up',
        logout: 'Logout',
        
        // Hero Section
        heroTitle: 'Complete Construction Ecosystem',
        heroSubtitle: 'From skilled professionals to heavy machinery - find everything you need for your construction project in one place!',
        exploreServices: 'Explore Services',
        joinProfessional: 'Join as Professional',
        
        // Services
        professionalServices: '🏗️ Professional Services',
        laborServices: '👷 Labor Services',
        equipmentMachinery: '🚜 Equipment & Machinery',
        
        // Categories
        plumbers: 'Plumbers',
        electricians: 'Electricians',
        contractors: 'Contractors',
        civilEngineers: 'Civil Engineers',
        designers: 'Designers',
        skilledLabor: 'Skilled Labor',
        unskilledLabor: 'Unskilled Labor',
        painters: 'Painters',
        carpenters: 'Carpenters',
        machineryOperators: 'Machinery Operators',
        workshops: 'Workshops',
        
        // Forms
        fullName: 'Full Name',
        phoneNumber: 'Phone Number',
        emailAddress: 'Email Address',
        password: 'Password',
        confirmPassword: 'Confirm Password',
        city: 'City',
        required: 'Required',
        
        // Buttons
        contact: 'Contact',
        viewProfile: 'View Profile',
        refresh: 'Refresh',
        createAccount: 'Create Account',
        
        // Messages
        welcomeBack: 'Welcome back',
        loginFailed: 'Login failed',
        registrationSuccessful: 'Registration successful! Please login with your credentials.',
        
        // Projects
        constructionProjects: 'Construction Projects',
        availableProjects: 'Available Projects',
        postNewProject: 'Post a New Project',
        projectTitle: 'Project Title',
        budget: 'Budget',
        location: 'Location',
        projectDescription: 'Project Description',
        postProject: 'Post Project',
        
        // Professional Registration
        joinAsProfessional: 'Join as a Professional',
        serviceCategory: 'Service Category',
        yearsExperience: 'Years of Experience',
        serviceArea: 'Service Area/Location',
        servicesDescription: 'Services Description',
        ratePerDay: 'Rate per Day/Hour (Optional)',
        registerProfessional: 'Register as Professional',
        
        // Additional
        completeConstructionServices: 'Complete Construction Services'
    },
    hi: {
        // Navigation
        home: 'होम',
        services: 'सेवाएं',
        labor: 'श्रमिक',
        equipment: 'उपकरण',
        projects: 'परियोजनाएं',
        login: 'लॉगिन',
        signup: 'साइन अप',
        logout: 'लॉगआउट',
        
        // Hero Section
        heroTitle: 'संपूर्ण निर्माण पारिस्थितिकी तंत्र',
        heroSubtitle: 'कुशल पेशेवरों से लेकर भारी मशीनरी तक - अपनी निर्माण परियोजना के लिए आवश्यक सब कुछ एक ही स्थान पर खोजें!',
        exploreServices: 'सेवाएं देखें',
        joinProfessional: 'पेशेवर के रूप में जुड़ें',
        
        // Services
        professionalServices: '🏗️ पेशेवर सेवाएं',
        laborServices: '👷 श्रमिक सेवाएं',
        equipmentMachinery: '🚜 उपकरण और मशीनरी',
        
        // Categories
        plumbers: 'प्लंबर',
        electricians: 'इलेक्ट्रीशियन',
        contractors: 'ठेकेदार',
        civilEngineers: 'सिविल इंजीनियर',
        designers: 'डिजाइनर',
        skilledLabor: 'कुशल श्रमिक',
        unskilledLabor: 'अकुशल श्रमिक',
        painters: 'पेंटर',
        carpenters: 'बढ़ई',
        machineryOperators: 'मशीनरी ऑपरेटर',
        workshops: 'वर्कशॉप',
        
        // Forms
        fullName: 'पूरा नाम',
        phoneNumber: 'फोन नंबर',
        emailAddress: 'ईमेल पता',
        password: 'पासवर्ड',
        confirmPassword: 'पासवर्ड की पुष्टि करें',
        city: 'शहर',
        required: 'आवश्यक',
        
        // Buttons
        contact: 'संपर्क करें',
        viewProfile: 'प्रोफाइल देखें',
        refresh: 'रीफ्रेश',
        createAccount: 'खाता बनाएं',
        
        // Messages
        welcomeBack: 'वापस स्वागत है',
        loginFailed: 'लॉगिन असफल',
        registrationSuccessful: 'पंजीकरण सफल! कृपया अपनी साख के साथ लॉगिन करें।',
        
        // Projects
        constructionProjects: 'निर्माण परियोजनाएं',
        availableProjects: 'उपलब्ध परियोजनाएं',
        postNewProject: 'नई परियोजना पोस्ट करें',
        projectTitle: 'परियोजना शीर्षक',
        budget: 'बजट',
        location: 'स्थान',
        projectDescription: 'परियोजना विवरण',
        postProject: 'परियोजना पोस्ट करें',
        
        // Professional Registration
        joinAsProfessional: 'एक पेशेवर के रूप में जुड़ें',
        serviceCategory: 'सेवा श्रेणी',
        yearsExperience: 'अनुभव के वर्ष',
        serviceArea: 'सेवा क्षेत्र/स्थान',
        servicesDescription: 'सेवाओं का विवरण',
        ratePerDay: 'दैनिक/घंटे की दर (वैकल्पिक)',
        registerProfessional: 'पेशेवर के रूप में पंजीकरण करें',
        
        // Additional
        completeConstructionServices: 'संपूर्ण निर्माण सेवाएं'
    }
};

// ==========================================
// ENHANCED LANGUAGE SYSTEM
// ==========================================

let appState = {
    currentLanguage: localStorage.getItem('selectedLanguage') || 'en',
    currentUser: null,
    authToken: localStorage.getItem('authToken'),
    professionalData: {},
    filteredData: {},
    projectsData: [],
    isLoading: false
};

// Enhanced language switching that works unlimited times
function changeLanguage(langCode, langName) {
    console.log(`🌐 Switching language from ${appState.currentLanguage} to ${langCode}`);
    
    appState.currentLanguage = langCode;
    localStorage.setItem('selectedLanguage', langCode);
    
    // Update the language display
    document.getElementById('currentLanguage').textContent = langName;
    
    // Apply translations to all elements with data-translate attribute
    updateAllTranslations();
    
    showNotification(`Language changed to ${langName}`, 'success');
    console.log(`✅ Language successfully changed to ${langCode}`);
}

function t(key) {
    const translations = TRANSLATIONS[appState.currentLanguage] || TRANSLATIONS.en;
    return translations[key] || TRANSLATIONS.en[key] || key;
}

function updateAllTranslations() {
    console.log(`🔄 Updating all translations to: ${appState.currentLanguage}`);
    
    // Find all elements with data-translate attribute
    const translatableElements = document.querySelectorAll('[data-translate]');
    
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translatedText = t(key);
        
        // Handle different element types
        if (element.tagName === 'INPUT' && element.type === 'submit') {
            element.value = translatedText;
        } else if (element.tagName === 'INPUT' && element.placeholder) {
            // Don't change placeholder for now, handle separately if needed
        } else {
            // For navigation items with dropdown arrows
            if (element.textContent.includes('▼')) {
                element.textContent = translatedText + ' ▼';
            } else {
                element.textContent = translatedText;
            }
        }
    });
    
    // Handle special cases for auth buttons when user is logged in
    updateAuthButtonsIfLoggedIn();
    
    console.log(`✅ Updated ${translatableElements.length} translatable elements`);
}

function updateAuthButtonsIfLoggedIn() {
    if (appState.currentUser) {
        const loginBtn = document.getElementById('loginBtn');
        const signupBtn = document.getElementById('signupBtn');
        
        if (loginBtn && loginBtn.textContent.startsWith('Hi,')) {
            // Keep the user greeting, don't translate
            return;
        }
        
        if (signupBtn && signupBtn.textContent === 'Logout') {
            signupBtn.textContent = t('logout');
        }
    }
}

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
        'plumbers': 'plumbers',
        'electricians': 'electricians', 
        'contractors': 'contractors',
        'civilengineers': 'engineers',
        'skilledlabor': 'skilled-labor',
        'unskilledlabor': 'unskilled-labor',
        'painters': 'painters',
        'carpenters': 'carpenters',
        'machinery': 'machinery',
        'workshops': 'workshops',
        'designers': 'designers'
    },
    CATEGORY_ICONS: {
        plumbers: '🔧',
        electricians: '⚡',
        contractors: '🏗️',
        civilengineers: '👨‍💼',
        skilledlabor: '👷‍♂️',
        unskilledlabor: '👷',
        painters: '🎨',
        carpenters: '🔨',
        machinery: '🚜',
        workshops: '🔧',
        designers: '🎨'
    },
    CATEGORY_NAMES: {
        plumbers: 'Plumbers',
        electricians: 'Electricians',
        contractors: 'Contractors',
        civilengineers: 'Civil Engineers',
        skilledlabor: 'Skilled Labor',
        unskilledlabor: 'Unskilled Labor',
        painters: 'Painters',
        carpenters: 'Carpenters',
        machinery: 'Machinery Operators',
        workshops: 'Workshops',
        designers: 'Designers'
    }
};

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

function showNotification(message, type = 'info', duration = 5000) {
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
        setTimeout(() => {
            if (container.contains(notification)) {
                container.removeChild(notification);
            }
        }, 300);
    }, duration);
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function setButtonLoading(buttonId, isLoading) {
    const button = document.getElementById(buttonId);
    if (isLoading) {
        button.classList.add('btn-loading');
        button.disabled = true;
    } else {
        button.classList.remove('btn-loading');
        button.disabled = false;
    }
}

function clearFieldError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.getElementById(fieldId + 'Error');
    
    if (field) {
        field.classList.remove('input-error');
    }
    if (errorDiv) {
        errorDiv.classList.add('hidden');
        errorDiv.textContent = '';
    }
}

function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.getElementById(fieldId + 'Error');
    
    if (field) {
        field.classList.add('input-error');
    }
    if (errorDiv) {
        errorDiv.classList.remove('hidden');
        errorDiv.textContent = message;
    }
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone.replace(/\s+/g, ''));
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
            signal: AbortSignal.timeout(15000),
            ...options
        };
        
        if (appState.authToken) {
            config.headers.Authorization = `Bearer ${appState.authToken}`;
        }
        
        try {
            console.log(`🌐 Making API call to: ${url}`);
            const response = await fetch(url, config);
            
            if (!response.ok) {
                let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
                
                try {
                    const errorData = await response.json();
                    errorMessage = errorData.message || errorData.error || errorMessage;
                } catch (e) {
                    // Ignore JSON parsing errors
                }
                
                if (response.status === 401) {
                    localStorage.removeItem(CONFIG.STORAGE_KEYS.AUTH_TOKEN);
                    localStorage.removeItem(CONFIG.STORAGE_KEYS.USER_DATA);
                    appState.authToken = null;
                    appState.currentUser = null;
                    updateAuthUI(false);
                    showNotification('Session expired. Please login again.', 'warning');
                    throw new Error('Session expired');
                }
                
                throw new Error(errorMessage);
            }
            
            const data = await response.json();
            return data;
            
        } catch (error) {
            console.error('🚨 API Error:', error);
            
            if (error.name === 'TypeError' && error.message.includes('fetch')) {
                throw new Error('Network Error: Cannot connect to backend server.');
            } else if (error.name === 'TimeoutError' || error.message.includes('timeout')) {
                throw new Error('Request Timeout: Backend is taking too long to respond.');
            } else {
                throw error;
            }
        }
    }

    static async login(email, password) {
        return this.call('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });
    }

    static async register(userData) {
        return this.call('/auth/register', {
            method: 'POST',
            body: JSON.stringify(userData)
        });
    }

    static async getProfessionals(category) {
        return this.call(`/professionals/${category}`);
    }

    static async createProfessional(professionalData) {
        return this.call('/professionals', {
            method: 'POST',
            body: JSON.stringify({
                name: professionalData.fullName,
                category: professionalData.category,
                experience: professionalData.experience,
                phone: professionalData.phone,
                email: professionalData.email,
                serviceArea: professionalData.serviceArea,
                description: professionalData.description,
                rate: professionalData.rate
            })
        });
    }

    static async getProjects() {
        return this.call('/projects');
    }

    static async createProject(projectData) {
        return this.call('/projects', {
            method: 'POST',
            body: JSON.stringify(projectData)
        });
    }
}

// ==========================================
// AUTHENTICATION FUNCTIONS
// ==========================================

function updateAuthUI(isLoggedIn) {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const createProjectSection = document.getElementById('createProjectSection');
    
    if (isLoggedIn && appState.currentUser) {
        loginBtn.textContent = `Hi, ${appState.currentUser.name}`;
        loginBtn.onclick = () => showDashboard();
        signupBtn.textContent = t('logout');
        signupBtn.onclick = () => logout();
        
        if (createProjectSection) {
            createProjectSection.style.display = 'block';
        }
    } else {
        loginBtn.textContent = t('login');
        loginBtn.onclick = () => showLoginModal();
        signupBtn.textContent = t('signup');
        signupBtn.onclick = () => showSignupModal();
        
        if (createProjectSection) {
            createProjectSection.style.display = 'none';
        }
    }
}

function showDashboard() {
    showNotification('Dashboard: View your projects and manage your profile here!', 'info');
}

function logout() {
    localStorage.removeItem(CONFIG.STORAGE_KEYS.AUTH_TOKEN);
    localStorage.removeItem(CONFIG.STORAGE_KEYS.USER_DATA);
    
    appState.authToken = null;
    appState.currentUser = null;
    
    updateAuthUI(false);
    showNotification('Logged out successfully', 'info');
    
    showPage('home');
}

// ==========================================
// MODAL FUNCTIONS
// ==========================================

function showLoginModal() {
    document.getElementById('loginModal').classList.remove('hidden');
}

function hideLoginModal() {
    document.getElementById('loginModal').classList.add('hidden');
}

function showSignupModal() {
    document.getElementById('signupModal').classList.remove('hidden');
}

function hideSignupModal() {
    document.getElementById('signupModal').classList.add('hidden');
}

// ==========================================
// PAGE MANAGEMENT
// ==========================================

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    } else {
        createServicePage(pageId);
    }
    
    if (CONFIG.CATEGORIES[pageId]) {
        loadProfessionals(pageId);
    } else if (pageId === 'projects') {
        loadProjects();
    }
    
    window.scrollTo(0, 0);
}

function createServicePage(category) {
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
                            <button type="button" onclick="filterByExperience('${category}', 'all')" class="filter-btn active px-4 py-2 rounded-lg border border-gray-300 hover:bg-blue-600 hover:text-white">All Experience</button>
                            <button type="button" onclick="filterByExperience('${category}', '0-2')" class="filter-btn px-4 py-2 rounded-lg border border-gray-300 hover:bg-blue-600 hover:text-white">0-2 Years</button>
                            <button type="button" onclick="filterByExperience('${category}', '3-5')" class="filter-btn px-4 py-2 rounded-lg border border-gray-300 hover:bg-blue-600 hover:text-white">3-5 Years</button>
                            <button type="button" onclick="filterByExperience('${category}', '6-10')" class="filter-btn px-4 py-2 rounded-lg border border-gray-300 hover:bg-blue-600 hover:text-white">6-10 Years</button>
                            <button type="button" onclick="filterByExperience('${category}', '10+')" class="filter-btn px-4 py-2 rounded-lg border border-gray-300 hover:bg-blue-600 hover:text-white">10+ Years</button>
                        </div>
                        <div class="flex items-center space-x-4">
                            <button onclick="loadProfessionals('${category}')" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" data-translate="refresh">Refresh</button>
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
    
    const footer = document.querySelector('footer');
    footer.insertAdjacentHTML('beforebegin', pageHTML);
}

// ==========================================
// PROFESSIONAL MANAGEMENT
// ==========================================

async function loadProfessionals(category) {
    try {
        const apiCategory = CONFIG.CATEGORIES[category];
        if (!apiCategory) {
            console.error('Invalid category:', category);
            return;
        }
        
        showLoadingState(category + 'Grid');
        
        const data = await ApiService.getProfessionals(apiCategory);
        
        appState.professionalData[apiCategory] = data;
        appState.filteredData[category] = [...data];
        
        renderProfessionals(category);
        updateCount(category);
        
    } catch (error) {
        console.error('Error loading professionals:', error);
        showErrorState(category + 'Grid', error.message, () => loadProfessionals(category));
        appState.filteredData[category] = [];
        updateCount(category);
    }
}

function showLoadingState(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = `
            <div class="col-span-full text-center py-8">
                <div class="loading-spinner"></div>
                <div class="text-lg mt-4 text-gray-600">Loading professionals...</div>
            </div>
        `;
    }
}

function showErrorState(containerId, errorMessage, retryFunction) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = `
            <div class="error-state col-span-full">
                <div class="text-4xl mb-4">⚠️</div>
                <h3 class="text-xl font-semibold mb-2">Failed to Load Data</h3>
                <p class="mb-4">${errorMessage}</p>
                <button onclick="(${retryFunction.toString()})()" class="retry-btn">Try Again</button>
            </div>
        `;
    }
}

function renderProfessionals(category) {
    const grid = document.getElementById(category + 'Grid');
    const data = appState.filteredData[category] || [];
    
    if (!grid) return;
    
    if (data.length === 0) {
        renderEmptyState(grid, category);
        return;
    }
    
    grid.innerHTML = data.map(professional => createProfessionalCard(professional)).join('');
}

function renderEmptyState(container, category) {
    const apiCategory = CONFIG.CATEGORIES[category];
    const icon = CONFIG.CATEGORY_ICONS[apiCategory];
    const name = CONFIG.CATEGORY_NAMES[apiCategory];
    
    container.innerHTML = `
        <div class="empty-state col-span-full">
            <div class="empty-state-icon">${icon}</div>
            <h3 class="text-xl font-semibold mb-2">No ${name} Available Yet</h3>
            <p>Be the first professional to join this category!</p>
            <button onclick="showPage('home'); setTimeout(() => scrollToSection('join'), 100);" class="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors" data-translate="joinProfessional">Join as Professional</button>
        </div>
    `;
}

function createProfessionalCard(professional) {
    const phone = professional.phone || '+91 98765 43210';
    const rate = professional.rate || '₹500/day';
    const experience = professional.experience || '2-5 years';
    const serviceArea = professional.serviceArea || 'Multiple locations';
    const name = professional.name || professional.fullName || 'Professional';
    
    return `
        <div class="professional-card">
            <div class="flex justify-between items-start mb-4">
                <div>
                    <h3 class="text-xl font-bold text-gray-800">${name}</h3>
                    <p class="text-gray-600">${experience} experience</p>
                    <p class="text-gray-600">📍 ${serviceArea}</p>
                </div>
                <div class="text-right">
                    <div class="flex items-center mb-1">
                        <span class="text-yellow-500">⭐</span>
                        <span class="font-semibold ml-1">4.5</span>
                        <span class="text-gray-500 text-sm ml-1">(12)</span>
                    </div>
                    <p class="text-lg font-bold text-green-600">${rate}</p>
                </div>
            </div>
            
            <div class="mb-4">
                <p class="text-gray-700 text-sm">${professional.description || 'Experienced professional ready to help with your project.'}</p>
            </div>
            
            <div class="flex justify-between items-center pt-4 border-t border-gray-200">
                <div class="text-sm text-gray-600">
                    <p>📞 ${phone}</p>
                    <p>📧 ${professional.email}</p>
                </div>
                <div class="flex space-x-2">
                    <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">✓ Verified</span>
                </div>
            </div>
            
            <div class="mt-4 flex space-x-2">
                <button onclick="contactProfessional('${phone}')" class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors" data-translate="contact">Contact</button>
                <button onclick="viewProfile('${professional._id}')" class="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors" data-translate="viewProfile">View Profile</button>
            </div>
        </div>
    `;
}

function updateCount(category) {
    const countElement = document.getElementById(category + 'Count');
    if (countElement) {
        countElement.textContent = appState.filteredData[category]?.length || 0;
    }
}

function filterByExperience(category, experience) {
    const filterButtons = document.querySelectorAll(`#${category} .filter-btn`);
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const apiCategory = CONFIG.CATEGORIES[category];
    const data = appState.professionalData[apiCategory] || [];
    
    if (experience === 'all') {
        appState.filteredData[category] = [...data];
    } else {
        appState.filteredData[category] = data.filter(professional => {
            const exp = professional.experience || '';
            switch(experience) {
                case '0-2': return exp.includes('0-1') || exp.includes('1-2');
                case '3-5': return exp.includes('2-5') || exp.includes('3-5');
                case '6-10': return exp.includes('6-10');
                case '10+': return exp.includes('10+');
                default: return true;
            }
        });
    }
    
    renderProfessionals(category);
    updateCount(category);
}

function contactProfessional(phone) {
    window.open(`tel:${phone}`, '_self');
}

function viewProfile(id) {
    showNotification('Profile viewing feature will be available soon!', 'info');
}

// ==========================================
// PROJECT MANAGEMENT
// ==========================================

async function loadProjects() {
    try {
        showLoadingState('projectsGrid');
        
        const data = await ApiService.getProjects();
        appState.projectsData = data;
        
        renderProjects();
        updateProjectsCount();
        
    } catch (error) {
        console.error('Error loading projects:', error);
        showErrorState('projectsGrid', error.message, loadProjects);
        appState.projectsData = [];
        updateProjectsCount();
    }
}

function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    const data = appState.projectsData || [];
    
    if (!grid) return;
    
    if (data.length === 0) {
        grid.innerHTML = `
            <div class="empty-state col-span-full">
                <div class="empty-state-icon">🏗️</div>
                <h3 class="text-xl font-semibold mb-2">No Projects Available</h3>
                <p>Be the first to post a construction project!</p>
                ${appState.currentUser ? '<p class="mt-2 text-blue-600">Use the form above to create a new project.</p>' : '<p class="mt-2 text-blue-600">Login to post your project.</p>'}
            </div>
        `;
        return;
    }
    
    grid.innerHTML = data.map(project => createProjectCard(project)).join('');
}

function createProjectCard(project) {
    const userName = project.userId?.name || project.userId?.username || 'Anonymous';
    const budget = project.budget ? `₹${project.budget.toLocaleString()}` : 'Budget not specified';
    const location = project.location || 'Location not specified';
    
    return `
        <div class="professional-card">
            <div class="mb-4">
                <h3 class="text-xl font-bold text-gray-800 mb-2">${project.title}</h3>
                <p class="text-gray-600 text-sm mb-2">Posted by: ${userName}</p>
                <p class="text-gray-700">${project.description}</p>
            </div>
            
            <div class="flex justify-between items-center pt-4 border-t border-gray-200">
                <div class="text-sm text-gray-600">
                    <p>💰 ${budget}</p>
                    <p>📍 ${location}</p>
                </div>
                <div class="text-xs text-gray-500">
                    ${new Date(project.createdAt || Date.now()).toLocaleDateString()}
                </div>
            </div>
            
            <div class="mt-4">
                <button onclick="contactForProject('${project._id}')" class="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">Express Interest</button>
            </div>
        </div>
    `;
}

function updateProjectsCount() {
    const countElement = document.getElementById('projectsCount');
    if (countElement) {
        countElement.textContent = appState.projectsData?.length || 0;
    }
}

function contactForProject(projectId) {
    showNotification('Contact feature will be available soon! Project ID: ' + projectId, 'info');
}

// ==========================================
// FORM VALIDATION & HANDLERS
// ==========================================

function validateSignupForm() {
    let isValid = true;
    
    ['signupName', 'signupPhone', 'signupEmail', 'signupCity', 'signupPassword', 'signupConfirmPassword'].forEach(clearFieldError);
    
    const name = document.getElementById('signupName').value.trim();
    const phone = document.getElementById('signupPhone').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const city = document.getElementById('signupCity').value.trim();
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    
    if (!name || name.length < 2) {
        showFieldError('signupName', 'Name must be at least 2 characters long');
        isValid = false;
    }
    
    if (!phone) {
        showFieldError('signupPhone', 'Phone number is required');
        isValid = false;
    } else if (!validatePhone(phone)) {
        showFieldError('signupPhone', 'Please enter a valid 10-digit phone number');
        isValid = false;
    }
    
    if (!email) {
        showFieldError('signupEmail', 'Email is required');
        isValid = false;
    } else if (!validateEmail(email)) {
        showFieldError('signupEmail', 'Please enter a valid email address');
        isValid = false;
    }
    
    if (!city || city.length < 2) {
        showFieldError('signupCity', 'City is required');
        isValid = false;
    }
    
    if (!password) {
        showFieldError('signupPassword', 'Password is required');
        isValid = false;
    } else if (password.length < 6) {
        showFieldError('signupPassword', 'Password must be at least 6 characters long');
        isValid = false;
    }
    
    if (!confirmPassword) {
        showFieldError('signupConfirmPassword', 'Please confirm your password');
        isValid = false;
    } else if (password !== confirmPassword) {
        showFieldError('signupConfirmPassword', 'Passwords do not match');
        isValid = false;
    }
    
    return isValid;
}

function initializeForms() {
    // Login Form
    document.getElementById('loginForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        setButtonLoading('loginSubmitBtn', true);
        
        try {
            const response = await ApiService.login(email, password);
            
            appState.authToken = response.token;
            appState.currentUser = response.user;
            
            localStorage.setItem(CONFIG.STORAGE_KEYS.AUTH_TOKEN, appState.authToken);
            localStorage.setItem(CONFIG.STORAGE_KEYS.USER_DATA, JSON.stringify(appState.currentUser));
            
            updateAuthUI(true);
            showNotification(`${t('welcomeBack')}, ${appState.currentUser.name}!`, 'success');
            hideLoginModal();
            this.reset();
            
        } catch (error) {
            showNotification(t('loginFailed') + ': ' + error.message, 'error');
        } finally {
            setButtonLoading('loginSubmitBtn', false);
        }
    });

    // Signup Form
    document.getElementById('signupForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        if (!validateSignupForm()) {
            return;
        }
        
        const userData = {
            name: document.getElementById('signupName').value.trim(),
            phone: document.getElementById('signupPhone').value.trim(),
            email: document.getElementById('signupEmail').value.trim(),
            city: document.getElementById('signupCity').value.trim(),
            password: document.getElementById('signupPassword').value
        };
        
        setButtonLoading('signupSubmitBtn', true);
        
        try {
            await ApiService.register(userData);
            showNotification(t('registrationSuccessful'), 'success');
            hideSignupModal();
            showLoginModal();
            this.reset();
            
        } catch (error) {
            showNotification('Registration failed: ' + error.message, 'error');
        } finally {
            setButtonLoading('signupSubmitBtn', false);
        }
    });

    // Professional Registration Form
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
        
        setButtonLoading('professionalSubmitBtn', true);
        
        try {
            await ApiService.createProfessional(formData);
            showNotification('Professional registration successful! You can now be found by customers.', 'success');
            this.reset();
            
        } catch (error) {
            showNotification('Registration failed: ' + error.message, 'error');
        } finally {
            setButtonLoading('professionalSubmitBtn', false);
        }
    });

    // Project Form
    const projectForm = document.getElementById('projectForm');
    if (projectForm) {
        projectForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            if (!appState.currentUser) {
                showNotification('Please login to create a project', 'warning');
                showLoginModal();
                return;
            }
            
            const projectData = {
                title: document.getElementById('projectTitle').value,
                description: document.getElementById('projectDescription').value,
                budget: document.getElementById('projectBudget').value ? parseInt(document.getElementById('projectBudget').value) : undefined,
                location: document.getElementById('projectLocation').value
            };
            
            setButtonLoading('projectSubmitBtn', true);
            
            try {
                await ApiService.createProject(projectData);
                showNotification('Project created successfully!', 'success');
                this.reset();
                loadProjects();
                
            } catch (error) {
                showNotification('Failed to create project: ' + error.message, 'error');
            } finally {
                setButtonLoading('projectSubmitBtn', false);
            }
        });
    }
}

// ==========================================
// INITIALIZATION
// ==========================================

function initializeApp() {
    // Initialize language
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    const languageNames = {
        'en': 'English',
        'hi': 'हिंदी',
        'bn': 'বাংলা',
        'te': 'తెలుగు',
        'mr': 'मराठी',
        'ta': 'தமிழ்',
        'gu': 'ગુજરાતી',
        'ur': 'اردو',
        'kn': 'ಕನ್ನಡ',
        'or': 'ଓଡ଼ିଆ',
        'pa': 'ਪੰਜਾਬੀ',
        'ml': 'മലയാളം',
        'as': 'অসমীয়া',
        'mai': 'मैथिली',
        'mag': 'मगही',
        'bho': 'भोजपुरी',
        'ne': 'नेपाली',
        'sa': 'संस्कृत',
        'sd': 'سنڌي',
        'ks': 'कॉशुर',
        'doi': 'डोगरी',
        'mni': 'মৈতৈলোন্',
        'sat': 'ᱥᱟᱱᱛᱟᱲᱤ'
    };
    
    appState.currentLanguage = savedLanguage;
    document.getElementById('currentLanguage').textContent = languageNames[savedLanguage] || 'English';
    
    // Apply translations if not English
    if (savedLanguage !== 'en') {
        setTimeout(() => updateAllTranslations(), 100);
    }
    
    // Check for existing authentication
    if (appState.authToken) {
        try {
            const userData = localStorage.getItem(CONFIG.STORAGE_KEYS.USER_DATA);
            if (userData) {
                appState.currentUser = JSON.parse(userData);
                updateAuthUI(true);
            }
        } catch (error) {
            console.error('Error parsing user data:', error);
            localStorage.removeItem(CONFIG.STORAGE_KEYS.AUTH_TOKEN);
            localStorage.removeItem(CONFIG.STORAGE_KEYS.USER_DATA);
        }
    }
    
    // Initialize forms
    initializeForms();
}

// ==========================================
// EVENT LISTENERS
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        const activePage = document.querySelector('.page.active');
        if (activePage && activePage.id === 'projects') {
            loadProjects();
        }
    }
});