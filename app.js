html

    .hero-gradient {
        background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #06b6d4 100%);
    }
    
    .dark-section {
        background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
    }
    
    .card-hover {
        transition: all 0.3s ease;
    }
    
    .card-hover:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    }
    
    .service-icon {
        transition: transform 0.3s ease;
    }
    
    .card-hover:hover .service-icon {
        transform: scale(1.1);
    }
    
    .dropdown {
        position: relative;
        display: inline-block;
    }
    
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: white;
        min-width: 200px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1000;
        border-radius: 8px;
        top: 100%;
        left: 0;
    }
    
    .dropdown:hover .dropdown-content {
        display: block;
    }
    
    .dropdown-content a {
        color: #374151;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        border-radius: 6px;
        margin: 4px;
        transition: background-color 0.2s;
    }
    
    .dropdown-content a:hover {
        background-color: #f3f4f6;
    }
    
    .professional-card {
        background: white;
        border-radius: 12px;
        padding: 24px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        border: 1px solid #e5e7eb;
    }
    
    .professional-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }
    
    .filter-btn {
        transition: all 0.2s ease;
    }
    
    .filter-btn.active {
        background-color: #2563eb;
        color: white;
        border-color: #2563eb;
    }
    
    .loading-spinner {
        border: 4px solid #f3f4f6;
        border-top: 4px solid #3b82f6;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
        margin: 0 auto;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .error-state, .empty-state {
        text-align: center;
        padding: 48px 24px;
        color: #6b7280;
    }
    
    .empty-state-icon {
        font-size: 4rem;
        margin-bottom: 16px;
    }
    
    .retry-btn {
        background-color: #3b82f6;
        color: white;
        padding: 8px 16px;
        border-radius: 6px;
        border: none;
        cursor: pointer;
        transition: background-color 0.2s;
    }
    
    .retry-btn:hover {
        background-color: #2563eb;
    }
    
    .btn-loading {
        opacity: 0.7;
        cursor: not-allowed;
    }
    
    .input-error {
        border-color: #ef4444 !important;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
    }
    
    .error-message {
        color: #ef4444;
        font-size: 0.875rem;
        margin-top: 4px;
    }
    
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 9999;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification.success {
        background-color: #10b981;
    }
    
    .notification.error {
        background-color: #ef4444;
    }
    
    .notification.warning {
        background-color: #f59e0b;
    }
    
    .notification.info {
        background-color: #3b82f6;
    }
    
    @media (max-width: 768px) {
        .dropdown-content {
            position: fixed;
            left: 50%;
            transform: translateX(-50%);
            width: 90vw;
            max-width: 300px;
        }
    }
</style>

            <div class="hidden md:flex space-x-6">
                <a onclick="showPage('home')" class="nav-link text-gray-300 hover:text-blue-400 transition-colors cursor-pointer" data-translate="home">Home</a>
                
                <div class="dropdown">
                    <a class="nav-link text-gray-300 hover:text-blue-400 transition-colors cursor-pointer" data-translate="services">Services ▼</a>
                    <div class="dropdown-content">
                        <a onclick="showPage('plumbers')">🔧 <span data-translate="plumbers">Plumbers</span></a>
                        <a onclick="showPage('electricians')">⚡ <span data-translate="electricians">Electricians</span></a>
                        <a onclick="showPage('contractors')">🏗️ <span data-translate="contractors">Contractors</span></a>
                        <a onclick="showPage('civilengineers')">👨‍💼 <span data-translate="civilEngineers">Civil Engineers</span></a>
                        <a onclick="showPage('designers')">🎨 <span data-translate="designers">Designers</span></a>
                    </div>
                </div>
                
                <div class="dropdown">
                    <a class="nav-link text-gray-300 hover:text-blue-400 transition-colors cursor-pointer" data-translate="labor">Labor ▼</a>
                    <div class="dropdown-content">
                        <a onclick="showPage('skilledlabor')">👷‍♂️ <span data-translate="skilledLabor">Skilled Labor</span></a>
                        <a onclick="showPage('unskilledlabor')">👷 <span data-translate="unskilledLabor">Unskilled Labor</span></a>
                        <a onclick="showPage('painters')">🎨 <span data-translate="painters">Painters</span></a>
                        <a onclick="showPage('carpenters')">🔨 <span data-translate="carpenters">Carpenters</span></a>
                    </div>
                </div>
                
                <div class="dropdown">
                    <a class="nav-link text-gray-300 hover:text-blue-400 transition-colors cursor-pointer" data-translate="equipment">Equipment ▼</a>
                    <div class="dropdown-content">
                        <a onclick="showPage('machinery')">🚜 <span data-translate="machineryOperators">Machinery Operators</span></a>
                        <a onclick="showPage('workshops')">🔧 <span data-translate="workshops">Workshops</span></a>
                    </div>
                </div>

                <a onclick="showPage('projects')" class="nav-link text-gray-300 hover:text-blue-400 transition-colors cursor-pointer" data-translate="projects">Projects</a>
            </div>
            
            <div class="flex space-x-4 items-center">
                <div class="dropdown">
                    <button class="bg-gray-700 text-white px-3 py-2 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer text-sm">
                        🌐 <span id="currentLanguage">English</span> ▼
                    </button>
                    <div class="dropdown-content" style="min-width: 180px; max-height: 300px; overflow-y: auto;">
                        <a onclick="changeLanguage('en', 'English')">🇬🇧 English</a>
                        <a onclick="changeLanguage('hi', 'हिंदी')">🇮🇳 हिंदी (Hindi)</a>
                        <a onclick="changeLanguage('bn', 'বাংলা')">🇧🇩 বাংলা (Bengali)</a>
                        <a onclick="changeLanguage('te', 'తెలుగు')">📍 తెలుగు (Telugu)</a>
                        <a onclick="changeLanguage('mr', 'मराठी')">📍 मराठी (Marathi)</a>
                        <a onclick="changeLanguage('ta', 'தமிழ்')">📍 தமிழ் (Tamil)</a>
                        <a onclick="changeLanguage('gu', 'ગુજરાતી')">📍 ગુજરાતી (Gujarati)</a>
                        <a onclick="changeLanguage('ur', 'اردو')">📍 اردو (Urdu)</a>
                        <a onclick="changeLanguage('kn', 'ಕನ್ನಡ')">📍 ಕನ್ನಡ (Kannada)</a>
                        <a onclick="changeLanguage('or', 'ଓଡ଼ିଆ')">📍 ଓଡ଼ିଆ (Odia)</a>
                        <a onclick="changeLanguage('pa', 'ਪੰਜਾਬੀ')">📍 ਪੰਜਾਬੀ (Punjabi)</a>
                        <a onclick="changeLanguage('ml', 'മലയാളം')">📍 മലയാളം (Malayalam)</a>
                    </div>
                </div>
                <button id="loginBtn" onclick="showLoginModal()" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors" data-translate="login">Login</button>
                <button id="signupBtn" onclick="showSignupModal()" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors" data-translate="signup">Sign Up</button>
            </div>
        </div>
    </div>
</nav>

<!-- HOME PAGE -->
<div id="home" class="page active">
    <!-- Hero Section -->
    <section class="hero-gradient text-white py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-5xl font-bold mb-6" data-translate="heroTitle">Complete Construction Ecosystem</h1>
            <p class="text-xl mb-8 max-w-3xl mx-auto" data-translate="heroSubtitle">From skilled professionals to heavy machinery - find everything you need for your construction project in one place!</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button onclick="scrollToSection('services')" class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" data-translate="exploreServices">Explore Services</button>
                <button onclick="scrollToSection('join')" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors" data-translate="joinProfessional">Join as Professional</button>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-16 dark-section">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center text-white mb-12" data-translate="completeConstructionServices">Complete Construction Services</h2>
            
            <!-- Professional Services -->
            <div class="mb-12">
                <h3 class="text-2xl font-bold text-white mb-6" data-translate="professionalServices">🏗️ Professional Services</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    <div onclick="showPage('plumbers')" class="text-center p-6 bg-gray-800 rounded-xl card-hover border border-gray-700 cursor-pointer">
                        <div class="service-icon text-5xl mb-3">🔧</div>
                        <h4 class="text-lg font-semibold mb-2 text-white" data-translate="plumbers">Plumbers</h4>
                        <p class="text-gray-300 text-sm">Water supply, drainage, pipe repairs</p>
                    </div>
                    <div onclick="showPage('electricians')" class="text-center p-6 bg-gray-800 rounded-xl card-hover border border-gray-700 cursor-pointer">
                        <div class="service-icon text-5xl mb-3">⚡</div>
                        <h4 class="text-lg font-semibold mb-2 text-white" data-translate="electricians">Electricians</h4>
                        <p class="text-gray-300 text-sm">Wiring, electrical repairs, installations</p>
                    </div>
                    <div onclick="showPage('contractors')" class="text-center p-6 bg-gray-800 rounded-xl card-hover border border-gray-700 cursor-pointer">
                        <div class="service-icon text-5xl mb-3">🏗️</div>
                        <h4 class="text-lg font-semibold mb-2 text-white" data-translate="contractors">Contractors</h4>
                        <p class="text-gray-300 text-sm">Complete construction projects</p>
                    </div>
                    <div onclick="showPage('civilengineers')" class="text-center p-6 bg-gray-800 rounded-xl card-hover border border-gray-700 cursor-pointer">
                        <div class="service-icon text-5xl mb-3">👨‍💼</div>
                        <h4 class="text-lg font-semibold mb-2 text-white" data-translate="civilEngineers">Civil Engineers</h4>
                        <p class="text-gray-300 text-sm">Design, planning, project supervision</p>
                    </div>
                    <div onclick="showPage('designers')" class="text-center p-6 bg-gray-800 rounded-xl card-hover border border-gray-700 cursor-pointer">
                        <div class="service-icon text-5xl mb-3">🎨</div>
                        <h4 class="text-lg font-semibold mb-2 text-white" data-translate="designers">Designers</h4>
                        <p class="text-gray-300 text-sm">Architectural & interior design</p>
                    </div>
                </div>
            </div>

            <!-- Labor Services -->
            <div class="mb-12">
                <h3 class="text-2xl font-bold text-white mb-6" data-translate="laborServices">👷 Labor Services</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div onclick="showPage('skilledlabor')" class="text-center p-6 bg-gray-800 rounded-xl card-hover border border-gray-700 cursor-pointer">
                        <div class="service-icon text-5xl mb-3">👷‍♂️</div>
                        <h4 class="text-lg font-semibold mb-2 text-white" data-translate="skilledLabor">Skilled Labor</h4>
                        <p class="text-gray-300 text-sm">Masonry, welding, specialized work</p>
                    </div>
                    <div onclick="showPage('unskilledlabor')" class="text-center p-6 bg-gray-800 rounded-xl card-hover border border-gray-700 cursor-pointer">
                        <div class="service-icon text-5xl mb-3">👷</div>
                        <h4 class="text-lg font-semibold mb-2 text-white" data-translate="unskilledLabor">Unskilled Labor</h4>
                        <p class="text-gray-300 text-sm">General labor, loading, cleaning</p>
                    </div>
                    <div onclick="showPage('painters')" class="text-center p-6 bg-gray-800 rounded-xl card-hover border border-gray-700 cursor-pointer">
                        <div class="service-icon text-5xl mb-3">🎨</div>
                        <h4 class="text-lg font-semibold mb-2 text-white" data-translate="painters">Painters</h4>
                        <p class="text-gray-300 text-sm">Interior, exterior, decorative painting</p>
                    </div>
                    <div onclick="showPage('carpenters')" class="text-center p-6 bg-gray-800 rounded-xl card-hover border border-gray-700 cursor-pointer">
                        <div class="service-icon text-5xl mb-3">🔨</div>
                        <h4 class="text-lg font-semibold mb-2 text-white" data-translate="carpenters">Carpenters</h4>
                        <p class="text-gray-300 text-sm">Woodwork, furniture, installations</p>
                    </div>
                </div>
            </div>

            <!-- Equipment & Machinery -->
            <div>
                <h3 class="text-2xl font-bold text-white mb-6" data-translate="equipmentMachinery">🚜 Equipment & Machinery</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div onclick="showPage('machinery')" class="text-center p-6 bg-gray-800 rounded-xl card-hover border border-gray-700 cursor-pointer">
                        <div class="service-icon text-5xl mb-3">🚜</div>
                        <h4 class="text-lg font-semibold mb-2 text-white" data-translate="machineryOperators">Machinery Operators</h4>
                        <p class="text-gray-300 text-sm">JCB, excavators, cranes, heavy equipment</p>
                    </div>
                    <div onclick="showPage('workshops')" class="text-center p-6 bg-gray-800 rounded-xl card-hover border border-gray-700 cursor-pointer">
                        <div class="service-icon text-5xl mb-3">🔧</div>
                        <h4 class="text-lg font-semibold mb-2 text-white" data-translate="workshops">Workshops</h4>
                        <p class="text-gray-300 text-sm">Tool rental, equipment repair, fabrication</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Join as Professional Section -->
    <section id="join" class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center text-gray-800 mb-12" data-translate="joinAsProfessional">Join as a Professional</h2>
            <div class="bg-gray-50 p-8 rounded-xl">
                <form id="professionalForm" class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2" data-translate="fullName">Full Name *</label>
                            <input type="text" id="fullName" required class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2" data-translate="phoneNumber">Phone Number *</label>
                            <input type="tel" id="phone" required class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        </div>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2" data-translate="emailAddress">Email Address *</label>
                        <input type="email" id="email" required class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2" data-translate="serviceCategory">Service Category *</label>
                            <select id="category" required class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option value="">Select Category</option>
                                <option value="plumbers">Plumber</option>
                                <option value="electricians">Electrician</option>
                                <option value="contractors">Contractor</option>
                                <option value="civilengineers">Civil Engineer</option>
                                <option value="designers">Designer</option>
                                <option value="skilledlabor">Skilled Labor</option>
                                <option value="unskilledlabor">Unskilled Labor</option>
                                <option value="painters">Painter</option>
                                <option value="carpenters">Carpenter</option>
                                <option value="machinery">Machinery Operator</option>
                                <option value="workshops">Workshop Owner</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2" data-translate="yearsExperience">Years of Experience *</label>
                            <select id="experience" required class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option value="">Select Experience</option>
                                <option value="0-1 years">0-1 years</option>
                                <option value="2-5 years">2-5 years</option>
                                <option value="6-10 years">6-10 years</option>
                                <option value="10+ years">10+ years</option>
                            </select>
                        </div>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2" data-translate="serviceArea">Service Area/Location *</label>
                        <input type="text" id="serviceArea" required placeholder="City, District, or Areas you serve" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2" data-translate="servicesDescription">Services Description</label>
                        <textarea id="description" rows="4" placeholder="Describe your services, specializations, and what makes you unique..." class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2" data-translate="ratePerDay">Rate per Day/Hour (Optional)</label>
                        <input type="text" id="rate" placeholder="e.g., ₹500/day or ₹50/hour" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    </div>
                    
                    <div class="flex items-center">
                        <input type="checkbox" id="terms" required class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                        <label for="terms" class="ml-2 block text-sm text-gray-700">I agree to the Terms of Service and Privacy Policy</label>
                    </div>
                    
                    <button type="submit" id="professionalSubmitBtn" class="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-colors font-semibold" data-translate="registerProfessional">Register as Professional</button>
                </form>
            </div>
        </div>
    </section>
</div>

<!-- PROJECTS PAGE -->
<div id="projects" class="page">
    <section class="hero-gradient text-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div class="text-6xl mb-4">🏗️</div>
            <h1 class="text-4xl font-bold mb-4" data-translate="constructionProjects">Construction Projects</h1>
            <p class="text-xl mb-6 max-w-3xl mx-auto">Browse available projects or post your own construction needs</p>
        </div>
    </section>

    <!-- Create Project Section -->
    <section id="createProjectSection" class="py-8 bg-white shadow-sm" style="display: none;">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 class="text-2xl font-bold mb-6" data-translate="postNewProject">Post a New Project</h3>
            <form id="projectForm" class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2" data-translate="projectTitle">Project Title *</label>
                        <input type="text" id="projectTitle" required class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2" data-translate="budget">Budget (₹)</label>
                        <input type="number" id="projectBudget" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    </div>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2" data-translate="location">Location</label>
                    <input type="text" id="projectLocation" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2" data-translate="projectDescription">Project Description *</label>
                    <textarea id="projectDescription" required rows="4" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <button type="submit" id="projectSubmitBtn" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold" data-translate="postProject">Post Project</button>
            </form>
        </div>
    </section>

    <!-- Projects List -->
    <section class="py-12 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center mb-8">
                <h2 class="text-3xl font-bold text-gray-800" data-translate="availableProjects">Available Projects</h2>
                <div class="text-gray-600">
                    <span id="projectsCount">0</span> projects found
                </div>
            </div>
            <div id="projectsGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Content will be loaded by JavaScript -->
            </div>
        </div>
    </section>
</div>

<!-- Login Modal -->
<div id="loginModal" class="fixed inset-0 bg-black bg-opacity-50 hidden z-50 flex items-center justify-center">
    <div class="bg-white p-8 rounded-xl max-w-md w-full mx-4">
        <div class="flex justify-between items-center mb-6">
            <h3 class="text-2xl font-bold" data-translate="login">Login</h3>
            <button onclick="hideLoginModal()" class="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
        </div>
        <form id="loginForm" class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2" data-translate="emailAddress">Email</label>
                <input type="email" id="loginEmail" required class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2" data-translate="password">Password</label>
                <input type="password" id="loginPassword" required class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            </div>
            <button type="submit" id="loginSubmitBtn" class="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold" data-translate="login">Login</button>
        </form>
        <p class="text-center mt-4 text-gray-600">Don't have an account? <button type="button" onclick="hideLoginModal(); showSignupModal();" class="text-blue-600 hover:underline">Sign up</button></p>
    </div>
</div>

<!-- Signup Modal -->
<div id="signupModal" class="fixed inset-0 bg-black bg-opacity-50 hidden z-50 flex items-center justify-center">
    <div class="bg-white p-8 rounded-xl max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div class="flex justify-between items-center mb-6">
            <h3 class="text-2xl font-bold" data-translate="createAccount">Create Account</h3>
            <button onclick="hideSignupModal()" class="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
        </div>
        <form id="signupForm" class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2" data-translate="fullName">Full Name *</label>
                    <input type="text" id="signupName" required class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <div id="signupNameError" class="error-message hidden"></div>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2" data-translate="phoneNumber">Phone Number *</label>
                    <input type="tel" id="signupPhone" required pattern="[0-9]{10}" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <div id="signupPhoneError" class="error-message hidden"></div>
                </div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2" data-translate="emailAddress">Email Address *</label>
                <input type="email" id="signupEmail" required class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <div id="signupEmailError" class="error-message hidden"></div>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2" data-translate="city">City *</label>
                <input type="text" id="signupCity" required class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <div id="signupCityError" class="error-message hidden"></div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2" data-translate="password">Password *</label>
                    <input type="password" id="signupPassword" required minlength="6" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <div id="signupPasswordError" class="error-message hidden"></div>
                    <div class="text-xs text-gray-500 mt-1">Minimum 6 characters</div>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2" data-translate="confirmPassword">Confirm Password *</label>
                    <input type="password" id="signupConfirmPassword" required minlength="6" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <div id="signupConfirmPasswordError" class="error-message hidden"></div>
                </div>
            </div>
            <div class="flex items-center">
                <input type="checkbox" id="signupTerms" required class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                <label for="signupTerms" class="ml-2 block text-sm text-gray-700">I agree to the Terms of Service and Privacy Policy *</label>
            </div>
            <button type="submit" id="signupSubmitBtn" class="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-colors font-semibold" data-translate="createAccount">Create Account</button>
        </form>
        <p class="text-center mt-4 text-gray-600">Already have an account? <button type="button" onclick="hideSignupModal(); showLoginModal();" class="text-blue-600 hover:underline">Login</button></p>
    </div>
</div>

<!-- Footer -->
<footer class="bg-gray-900 text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
                <h3 class="text-xl font-bold mb-4">🏗️ Build Better</h3>
                <p class="text-gray-300">Complete construction ecosystem connecting professionals with customers across India.</p>
            </div>
            <div>
                <h4 class="font-semibold mb-4">For Customers</h4>
                <ul class="space-y-2 text-gray-300">
                    <li><a href="#" class="hover:text-white">Find Professionals</a></li>
                    <li><a href="#" class="hover:text-white">Post a Job</a></li>
                    <li><a href="#" class="hover:text-white">Safety Tips</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-semibold mb-4">For Professionals</h4>
                <ul class="space-y-2 text-gray-300">
                    <li><a href="#" class="hover:text-white">Join Platform</a></li>
                    <li><a href="#" class="hover:text-white">Manage Profile</a></li>
                    <li><a href="#" class="hover:text-white">Success Stories</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-semibold mb-4">Support</h4>
                <ul class="space-y-2 text-gray-300">
                    <li><a href="#" class="hover:text-white">Help Center</a></li>
                    <li><a href="#" class="hover:text-white">Contact Us</a></li>
                    <li><a href="#" class="hover:text-white">Report Issue</a></li>
                </ul>
            </div>
        </div>
        <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Build Better. All rights reserved.</p>
        </div>
    </div>
</footer>

<!-- Notification Container -->
<div id="notificationContainer"></div>

<script src="app.js"></script>