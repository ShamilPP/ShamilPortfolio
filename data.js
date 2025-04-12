const projectsData = {
    ookchat: {
        title: "Ook Chat – AI Chat App",
        description: "AI chatbot powered by Gemini API with voice interaction and content filtering features.",
        fullDescription: "Ook Chat is an AI-powered chat app built with Gemini API integration. It supports natural conversation using speech-to-text and text-to-speech. Safety features like toxicity detection are also built-in for a cleaner chat experience.",
        features: [
            "Smart responses via Gemini API function calling",
            "Speech-to-text and text-to-speech support",
            "Real-time context-aware conversation memory",
            "Inappropriate content filtering using AI",
            "Serverless functions for optimized backend",
            "Offline mode with local caching"
        ],
        technologies: ["Flutter", "Gemini API", "TTS & STT", "TensorFlow Lite", "Serverless Backend"],
        logo: "assets/projects/ookchat/logo.png",
        logoBackgroundColor: "white",
        images: [
            // "assets/projects/ookchat/image1.jpg",
            "assets/projects/ookchat/image2.jpg",
            "assets/projects/ookchat/image3.jpg",
            "assets/projects/ookchat/image4.jpg"
        ],
        github: "https://github.com/shamilpp/ookchat",
        liveLink: ""
    },

    systemstate: {
        title: "SystemState – Flutter Plugin",
        description: "Flutter plugin to access real-time system states like battery, Wi-Fi, volume, and more.",
        fullDescription: "SystemState is a Flutter plugin published on pub.dev, offering access to native Android and iOS system states. It supports real-time updates and event listening for battery status, network, audio levels, and more.",
        features: [
            "Battery level, charging, and temperature status",
            "Wi-Fi and mobile data monitoring",
            "Volume adjustment and mute detection",
            "Method Channels for native Android (Kotlin) & iOS (Swift)",
            "Real-time event listeners",
            "System state synchronization and updates"
        ],
        technologies: ["Flutter", "Kotlin", "Swift", "Method Channels", "Pub.dev"],
        logo: "assets/projects/systemstate/logo.png",
        images: [
            "assets/projects/systemstate/logo.png",
            "assets/projects/systemstate/image2.jpg",
            "assets/projects/systemstate/image3.jpg",
            "assets/projects/systemstate/image4.jpg"
        ],
        github: "https://github.com/ShamilPP/systemstate",
        liveLink: "https://pub.dev/packages/system_state"
    },

    flukefy: {
        title: "Flukefy – E-Commerce App",
        description: "Full-featured e-commerce solution with Firebase backend, MVVM architecture, and admin panel for managing orders, users, and products.",
        fullDescription: "Flukefy is a comprehensive e-commerce app developed using Flutter with a Firebase backend. It offers real-time data handling, Firebase Authentication, and role-based screen management. A separate admin app is included for handling products, orders, and user activities efficiently.",
        features: [
            "MVVM architecture with Provider state management",
            "Firebase Authentication for secure login and registration",
            "Admin panel for managing users, orders, and products",
            "Real-time product and order updates",
            "Secure payments with Razorpay integration",
            "In-app notifications using FCM",
            "Modular and scalable codebase"
        ],
        technologies: ["Flutter", "Firebase", "Provider", "Razorpay", "FCM", "MVVM Architecture"],
        logo: "assets/projects/flukefy/logo.png",
        logoBackgroundColor: "black",
        images: [
            "assets/projects/flukefy/logo.png",
            "assets/projects/flukefy/image1.png",
            "assets/projects/flukefy/image2.jpg",
            "assets/projects/flukefy/image3.jpg",
            "assets/projects/flukefy/image4.jpg",
            "assets/projects/flukefy/image5.jpg"
        ],
        github: "https://github.com/ShamilPP/Flukefy",
        liveLink: ""
    },
    oneiro: {
        title: "Oneiro – E-Commerce",
        description: "Cross-platform e-commerce system with REST API backend and admin dashboard for managing store operations.",
        fullDescription: "Oneiro is a robust e-commerce solution featuring customer and admin modules. Built using Flutter and integrated with REST APIs, it allows smooth communication between frontend and backend for managing products, orders, and users efficiently.",
        features: [
            "Custom REST API integration with error handling",
            "Admin dashboard for product, order, and user control",
            "MVVM architecture for maintainable code",
            "Customer-friendly UI with product browsing and checkout",
            "Phone number OTP authentication",
            "Multi-language support and responsiveness"
        ],
        technologies: ["Flutter", "REST API", "MVVM", "BLoC", "SQLite"],
        logo: "https://dummyimage.com/600x400/cccccc/ffffff&text=No+Image",
        images: [
            "assets/projects/oneiro/image1.jpg",
            "assets/projects/oneiro/image2.jpg",
            "assets/projects/oneiro/image3.jpg",
            "assets/projects/oneiro/image4.jpg",
            "assets/projects/oneiro/image5.jpg"
        ],
        github: "",
        liveLink: "https://play.google.com/store/apps/details?id=com.goodone.product_book&hl=onero"
    },

    baithulmaal: {
        title: "Baithulmaal – Finance App",
        description: "Financial management tool for donations, expenses, and budgeting with Firebase backend and integrated admin control.",
        fullDescription: "Baithulmaal is a community-focused financial management app built using Flutter and Firebase. It provides tools for fund tracking, donation recording, budgeting, and admin-managed workflows, all following the MVVM architecture.",
        features: [
            "Role-based access for admins and members",
            "Transaction recording and categorization",
            "Donation and fund management",
            "PDF generation for reports",
            "Integrated admin panel with authentication",
            "Firebase Cloud Functions for automation"
        ],
        technologies: ["Flutter", "Firebase", "MVVM", "Cloud Functions", "PDF Generation"],
        logo: "https://dummyimage.com/600x400/cccccc/ffffff&text=No+Image",
        images: [
            "assets/projects/baithulmaal/image1.jpg",
            "assets/projects/baithulmaal/image2.jpg",
            "assets/projects/baithulmaal/image3.jpg",
            "assets/projects/baithulmaal/image4.jpg",
            "assets/projects/baithulmaal/image5.jpg",
            "assets/projects/baithulmaal/image6.jpg"
        ],
        github: "https://github.com/ShamilPP/Baitulmaal",
        liveLink: ""
    },
    kleanit: {
        title: "KleanIt – Online Cleaning Service",
        description: "Cleaning service booking system with multi-role access and Stripe payment integration.",
        fullDescription: "KleanIt is a full-service cleaning booking platform with dedicated apps for customers, salesmen, and admins. Features include service tracking, role-based UI, FCM notifications, in-app wallet, and Stripe integration.",
        features: [
            "Role-based screens for Customer, Salesman, and Admin",
            "Stripe and in-app wallet payments",
            "Real-time provider tracking and service booking",
            "Push notifications using FCM",
            "In-app chat and notification system"
        ],
        technologies: ["Flutter", "Stripe", "Firebase", "Bloc", "REST API", "FCM"],
        logo: "https://dummyimage.com/600x400/cccccc/ffffff&text=No+Image",
        images: [
            "assets/projects/kleanit/image1.jpg",
            "assets/projects/kleanit/image2.jpg",
            "assets/projects/kleanit/image3.jpg"
        ],
        github: "",
        liveLink: ""
    },

    inventoryms: {
        title: "Inventory Management System",
        description: "Offline-capable inventory and order tracking solution with analytics dashboard.",
        fullDescription: "A robust inventory management app built with Flutter. It includes separate Admin and Salesman apps for managing stock, processing orders, and viewing reports. Works offline and provides detailed analytics for business performance.",
        features: [
            "Offline support for low-network environments",
            "Separate Admin and Salesman apps",
            "Detailed order and stock reporting",
            "Role-based access control"
        ],
        technologies: ["Flutter", "REST API", "Bloc", "SQLite", "MVVM"],
        logo: "https://dummyimage.com/600x400/cccccc/ffffff&text=No+Image",
        images: [
            "assets/projects/inventoryms/image1.jpg",
            "assets/projects/inventoryms/image2.jpg",
            "assets/projects/inventoryms/image3.jpg"
        ],
        github: "",
        liveLink: ""
    },

    esm: {
        title: "ESM – SaaS Platform",
        description: "SaaS-based service management app with role-based access and offline support.",
        fullDescription: "ESM (Enterprise Service Manager) is a SaaS platform designed to help freelancers and organizations manage operations with customizable roles and workflows. It includes offline functionality and real-time analytics for performance monitoring.",
        features: [
            "Multi-role system (Admin, Salesman, Customer)",
            "Offline mode support for low-network zones",
            "Service booking and provider tracking",
            "Integrated in-app wallet and Stripe payments",
            "Admin-side analytics and reporting",
            "Real-time push notifications using FCM"
        ],
        technologies: ["Flutter", "Firebase", "GetX", "REST API", "Stripe", "FCM"],
        logo: "https://dummyimage.com/600x400/cccccc/ffffff&text=No+Image",
        images: [
            "assets/projects/esm/image1.jpg",
            "assets/projects/esm/image2.jpg",
            "assets/projects/esm/image3.jpg",
            "assets/projects/esm/image4.jpg",
            "assets/projects/esm/image5.jpg"
        ],
        github: "",
        liveLink: ""
    },
    metado: {
        title: "Metado – Online Meat & Fish Delivery",
        description: "Multi-role meat and fish delivery system with admin, vendor, and delivery apps.",
        fullDescription: "Metado is a multi-role app system for managing meat and fish delivery. Vendors manage products, customers place orders, and delivery boys fulfill them. Real-time updates, daily earnings tracking, and Razorpay integration are included.",
        features: [
            "Multi-role apps: Admin, Vendor, Delivery, Customer",
            "Real-time delivery and order tracking",
            "Daily earnings and order summaries",
            "Razorpay payment gateway integration"
        ],
        technologies: ["Flutter", "REST API", "Razorpay", "Clean architeture"],
        logo: "https://dummyimage.com/600x400/cccccc/ffffff&text=No+Image",
        images: [
            "assets/projects/metado/image1.jpg",
            "assets/projects/metado/image2.jpg",
            "assets/projects/metado/image3.jpg"
        ],
        github: "",
        liveLink: ""
    },

    myline: {
        title: "MyLine – E-Commerce App",
        description: "Mobile e-commerce app with OTP-based phone authentication and scalable architecture.",
        fullDescription: "MyLine is a smooth and responsive Flutter e-commerce application using REST API backend. It features OTP-based phone number authentication, MVVM architecture for maintainability, and a user-friendly UI to enhance shopping experience.",
        features: [
            "OTP-based phone number authentication",
            "MVVM architecture for scalable code",
            "REST API integration for data exchange",
            "Responsive UI for enhanced user experience"
        ],
        technologies: ["Flutter", "REST API", "MVVM", "OTP Auth"],
        logo: "https://dummyimage.com/600x400/cccccc/ffffff&text=No+Image",
        images: [
            "assets/projects/myline/image1.jpg",
            "assets/projects/myline/image2.jpg",
            "assets/projects/myline/image3.jpg"
        ],
        github: "",
        liveLink: "",
        isNotShowHome: true,

    },
    mithra: {
        title: "Mithra – School Management App",
        description: "A school management system for student attendance, grades, and admin panel management.",
        fullDescription: "Mithra is a school management app developed using Flutter. It includes features for student management, attendance tracking, grade management, and a separate admin panel for handling various school operations.",
        features: [
            "Admin and teacher dashboards",
            "Attendance and grade management",
            "Real-time student data synchronization",
            "Role-based access control",
            "Push notifications for attendance and grades",
            "Modular codebase for scalability"
        ],
        technologies: ["Flutter", "Firebase", "MVVM", "Provider"],
        logo: "https://dummyimage.com/600x400/cccccc/ffffff&text=No+Image",
        images: [
            "assets/projects/mithra/image1.jpg",
            "assets/projects/mithra/image2.jpg",
            "assets/projects/mithra/image3.jpg"
        ],
        github: "https://github.com/shamilpp/mithra",
        liveLink: "",
        isNotShowHome: true,
    },

};
