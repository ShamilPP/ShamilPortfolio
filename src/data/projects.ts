export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  logo: string;
  logoBackgroundColor?: string;
  images: string[];
  github: string;
  liveLink: string;
  featured?: boolean;
  isNotShowHome?: boolean;
}

export const projects: Record<string, Project> = {
  ookchat: {
    id: "ookchat",
    title: "Ook Chat – AI Chat App",
    description:
      "AI chatbot powered by Gemini API with voice interaction and content filtering features.",
    fullDescription:
      "Ook Chat is an AI-powered chat app built with Gemini API integration. It supports natural conversation using speech-to-text and text-to-speech. Safety features like toxicity detection are also built-in for a cleaner chat experience.",
    features: [
      "Smart responses via Gemini API function calling",
      "Speech-to-text and text-to-speech support",
      "Real-time context-aware conversation memory",
      "Inappropriate content filtering using AI",
      "Serverless functions for optimized backend",
      "Offline mode with local caching",
    ],
    technologies: [
      "Flutter",
      "Gemini API",
      "TTS & STT",
      "TensorFlow Lite",
      "Serverless Backend",
    ],
    logo: "/assets/projects/ookchat/logo.png",
    logoBackgroundColor: "white",
    images: [
      "/assets/projects/ookchat/logo.png",
    ],
    github: "https://github.com/shamilpp/ookchat",
    liveLink: "",
    featured: true,
  },

  systemstate: {
    id: "systemstate",
    title: "SystemState – Flutter Plugin",
    description:
      "Flutter plugin to access real-time system states like battery, Wi-Fi, volume, and more.",
    fullDescription:
      "SystemState is a Flutter plugin published on pub.dev, offering access to native Android and iOS system states. It supports real-time updates and event listening for battery status, network, audio levels, and more.",
    features: [
      "Battery level, charging, and temperature status",
      "Wi-Fi and mobile data monitoring",
      "Volume adjustment and mute detection",
      "Method Channels for native Android (Kotlin) & iOS (Swift)",
      "Real-time event listeners",
      "System state synchronization and updates",
    ],
    technologies: ["Flutter", "Kotlin", "Swift", "Method Channels", "Pub.dev"],
    logo: "/assets/projects/systemstate/logo.png",
    images: ["/assets/projects/systemstate/logo.png"],
    github: "https://github.com/ShamilPP/systemstate",
    liveLink: "https://pub.dev/packages/system_state",
  },

  gymio: {
    id: "gymio",
    title: "Gymio – Gym Management App",
    description:
      "Gym management app with multi-role access, QR-based attendance, and payment management system.",
    fullDescription:
      "Gymio is a comprehensive gym management app built with Flutter. The backend uses Node.js, Express, and MongoDB, hosted on AWS. It features multi-role access (Admin, Gym Owners, Members), JWT authentication, CI/CD for backend, Fastlane for automated Play Store deployment, QR-based attendance, and payment management.",
    features: [
      "Built with Clean Architecture for scalability and maintainability",
      "Secured with JWT Auth and multi-role access (Admin, Gym Owners, Members)",
      "Implemented CI/CD pipelines for backend and Fastlane for Play Store uploads",
      "Added QR-based attendance and payment management systems",
      "Hierarchical structure: Admin creates Gym Owners, and Gym Owners manage Members",
    ],
    technologies: [
      "Flutter",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS",
      "JWT",
      "Fastlane",
      "CI/CD",
    ],
    logo: "/assets/projects/gymio/logo.png",
    logoBackgroundColor: "white",
    images: [
      "/assets/projects/gymio/logo.png",
      "/assets/projects/gymio/image1.png",
      "/assets/projects/gymio/image2.png",
      "/assets/projects/gymio/image3.png",
      "/assets/projects/gymio/image4.png",
      "/assets/projects/gymio/image5.png",
      "/assets/projects/gymio/image6.png",
    ],
    github: "",
    liveLink: "https://play.google.com/store/apps/details?id=com.shamil.gymio",
    featured: true,
  },

  flukefy: {
    id: "flukefy",
    title: "Flukefy – E-Commerce App",
    description:
      "Full-featured e-commerce solution with Firebase backend, MVVM architecture, and admin panel.",
    fullDescription:
      "Flukefy is a comprehensive e-commerce app developed using Flutter with a Firebase backend. It offers real-time data handling, Firebase Authentication, and role-based screen management. A separate admin app is included for handling products, orders, and user activities efficiently.",
    features: [
      "MVVM architecture with Provider state management",
      "Firebase Authentication for secure login and registration",
      "Admin panel for managing users, orders, and products",
      "Real-time product and order updates",
      "Secure payments with Razorpay integration",
      "In-app notifications using FCM",
      "Modular and scalable codebase",
    ],
    technologies: [
      "Flutter",
      "Firebase",
      "Provider",
      "Razorpay",
      "FCM",
      "MVVM Architecture",
    ],
    logo: "/assets/projects/flukefy/logo.png",
    logoBackgroundColor: "black",
    images: [
      "/assets/projects/flukefy/logo.png",
      "/assets/projects/flukefy/image1.png",
    ],
    github: "https://github.com/ShamilPP/Flukefy",
    liveLink: "",
  },

  oneiro: {
    id: "oneiro",
    title: "Oneiro – E-Commerce",
    description:
      "Cross-platform e-commerce system with REST API backend and admin dashboard.",
    fullDescription:
      "Oneiro is a robust e-commerce solution featuring customer and admin modules. Built using Flutter and integrated with REST APIs, it allows smooth communication between frontend and backend for managing products, orders, and users efficiently.",
    features: [
      "Custom REST API integration with error handling",
      "Admin dashboard for product, order, and user control",
      "MVVM architecture for maintainable code",
      "Customer-friendly UI with product browsing and checkout",
      "Phone number OTP authentication",
      "Multi-language support and responsiveness",
    ],
    technologies: ["Flutter", "REST API", "MVVM", "BLoC", "SQLite"],
    logo: "/assets/projects/oneiro/logo.png",
    images: [
      "/assets/projects/oneiro/logo.png",
      "/assets/projects/oneiro/image1.png",
      "/assets/projects/oneiro/image2.png",
      "/assets/projects/oneiro/image3.png",
    ],
    github: "",
    liveLink:
      "https://play.google.com/store/apps/details?id=com.goodone.product_book",
    featured: true,
  },

  baithulmaal: {
    id: "baithulmaal",
    title: "Baithulmaal – Finance App",
    description:
      "Financial management tool for donations, expenses, and budgeting with Firebase backend.",
    fullDescription:
      "Baithulmaal is a community-focused financial management app built using Flutter and Firebase. It provides tools for fund tracking, donation recording, budgeting, and admin-managed workflows, all following the MVVM architecture.",
    features: [
      "Role-based access for admins and members",
      "Transaction recording and categorization",
      "Donation and fund management",
      "PDF generation for reports",
      "Integrated admin panel with authentication",
      "Firebase Cloud Functions for automation",
    ],
    technologies: [
      "Flutter",
      "Firebase",
      "MVVM",
      "Cloud Functions",
      "PDF Generation",
    ],
    logo: "",
    images: [],
    github: "https://github.com/ShamilPP/Baitulmaal",
    liveLink: "",
  },

  kleanit: {
    id: "kleanit",
    title: "KleanIt – Online Cleaning Service",
    description:
      "Cleaning service booking system with multi-role access and Stripe payment integration.",
    fullDescription:
      "KleanIt is a full-service cleaning booking platform with dedicated apps for customers, salesmen, and admins. Features include service tracking, role-based UI, FCM notifications, in-app wallet, and Stripe integration.",
    features: [
      "Role-based screens for Customer, Salesman, and Admin",
      "Stripe and in-app wallet payments",
      "Real-time provider tracking and service booking",
      "Push notifications using FCM",
      "In-app chat and notification system",
    ],
    technologies: ["Flutter", "Stripe", "Firebase", "BLoC", "REST API", "FCM"],
    logo: "/assets/projects/kleanit/logo.png",
    images: [
      "/assets/projects/kleanit/logo.png",
      "/assets/projects/kleanit/image1.jpg",
      "/assets/projects/kleanit/image2.jpg",
      "/assets/projects/kleanit/image3.jpg",
      "/assets/projects/kleanit/image4.jpg",
      "/assets/projects/kleanit/image5.jpg",
      "/assets/projects/kleanit/image6.jpg",
    ],
    github: "",
    liveLink: "",
    featured: true,
  },

  inventoryms: {
    id: "inventoryms",
    title: "Inventory Management System",
    description:
      "Offline-capable inventory and order tracking solution with analytics dashboard.",
    fullDescription:
      "A robust inventory management app built with Flutter. It includes separate Admin and Salesman apps for managing stock, processing orders, and viewing reports. Works offline and provides detailed analytics for business performance.",
    features: [
      "Offline support for low-network environments",
      "Separate Admin and Salesman apps",
      "Detailed order and stock reporting",
      "Role-based access control",
    ],
    technologies: ["Flutter", "REST API", "BLoC", "SQLite", "MVVM"],
    logo: "/assets/projects/inventory/logo.png",
    images: [
      "/assets/projects/inventory/logo.png",
      "/assets/projects/inventory/image1.jpg",
      "/assets/projects/inventory/image2.jpg",
      "/assets/projects/inventory/image3.jpg",
      "/assets/projects/inventory/image4.png",
      "/assets/projects/inventory/image5.png",
      "/assets/projects/inventory/image6.png",
      "/assets/projects/inventory/image7.png",
      "/assets/projects/inventory/image8.png",
      "/assets/projects/inventory/image9.png",
    ],
    github: "",
    liveLink: "",
  },

  esm: {
    id: "esm",
    title: "ESM – SaaS Platform",
    description:
      "SaaS-based service management app with role-based access and offline support.",
    fullDescription:
      "ESM (Enterprise Service Manager) is a SaaS platform designed to help freelancers and organizations manage operations with customizable roles and workflows. It includes offline functionality and real-time analytics for performance monitoring.",
    features: [
      "Multi-role system (Admin, Salesman, Customer)",
      "Offline mode support for low-network zones",
      "Service booking and provider tracking",
      "Integrated in-app wallet and Stripe payments",
      "Admin-side analytics and reporting",
      "Real-time push notifications using FCM",
    ],
    technologies: [
      "Flutter",
      "Firebase",
      "GetX",
      "REST API",
      "Stripe",
      "FCM",
    ],
    logo: "/assets/projects/esm/logo.png",
    images: [
      "/assets/projects/esm/logo.png",
      "/assets/projects/esm/image1.jpg",
      "/assets/projects/esm/image2.jpg",
      "/assets/projects/esm/image3.jpg",
      "/assets/projects/esm/image4.jpg",
      "/assets/projects/esm/image5.jpg",
    ],
    github: "",
    liveLink: "",
  },

  metado: {
    id: "metado",
    title: "Metado – Online Meat & Fish Delivery",
    description:
      "Multi-role meat and fish delivery system with admin, vendor, and delivery apps.",
    fullDescription:
      "Metado is a multi-role app system for managing meat and fish delivery. Vendors manage products, customers place orders, and delivery boys fulfill them. Real-time updates, daily earnings tracking, and Razorpay integration are included.",
    features: [
      "Multi-role apps: Admin, Vendor, Delivery, Customer",
      "Real-time delivery and order tracking",
      "Daily earnings and order summaries",
      "Razorpay payment gateway integration",
    ],
    technologies: ["Flutter", "REST API", "Razorpay", "Clean Architecture"],
    logo: "/assets/projects/metado/logo.png",
    images: [
      "/assets/projects/metado/image1.jpg",
      "/assets/projects/metado/image2.jpg",
      "/assets/projects/metado/image3.jpg",
      "/assets/projects/metado/image4.jpg",
      "/assets/projects/metado/image5.jpg",
      "/assets/projects/metado/image6.jpg",
      "/assets/projects/metado/image7.jpg",
    ],
    github: "",
    liveLink: "",
  },

  myline: {
    id: "myline",
    title: "MyLine – E-Commerce App",
    description:
      "Mobile e-commerce app with OTP-based phone authentication and scalable architecture.",
    fullDescription:
      "MyLine is a smooth and responsive Flutter e-commerce application using REST API backend. It features OTP-based phone number authentication, MVVM architecture for maintainability, and a user-friendly UI.",
    features: [
      "OTP-based phone number authentication",
      "MVVM architecture for scalable code",
      "REST API integration for data exchange",
      "Responsive UI for enhanced user experience",
    ],
    technologies: ["Flutter", "REST API", "MVVM", "OTP Auth"],
    logo: "",
    images: [],
    github: "",
    liveLink: "",
    isNotShowHome: true,
  },

  mithra: {
    id: "mithra",
    title: "Mithra – School Management App",
    description:
      "A school management system for student attendance, grades, and admin panel management.",
    fullDescription:
      "Mithra is a school management app developed using Flutter. It includes features for student management, attendance tracking, grade management, and a separate admin panel for handling various school operations.",
    features: [
      "Admin and teacher dashboards",
      "Attendance and grade management",
      "Real-time student data synchronization",
      "Role-based access control",
      "Push notifications for attendance and grades",
      "Modular codebase for scalability",
    ],
    technologies: ["Flutter", "Firebase", "MVVM", "Provider"],
    logo: "",
    images: [],
    github: "https://github.com/shamilpp/mithra",
    liveLink: "",
    isNotShowHome: true,
  },
};

export const projectList = Object.values(projects);
export const featuredProjects = projectList.filter((p) => p.featured);
export const homeProjects = projectList.filter((p) => !p.isNotShowHome && !p.featured);
