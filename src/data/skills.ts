export interface SkillCategory {
  name: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages & Frameworks",
    items: ["Flutter", "Dart", "Node.js"],
  },
  {
    name: "State Management",
    items: ["BLoC", "Provider", "GetX"],
  },
  {
    name: "Backend & Cloud",
    items: ["Firebase", "Firestore", "Cloud Functions", "MongoDB", "SQLite"],
  },
  {
    name: "Tools & DevOps",
    items: ["Git", "Fastlane", "Xcode", "Postman", "Flutter DevTools", "CI/CD"],
  },
  {
    name: "Architecture",
    items: ["MVVM", "Clean Architecture", "REST API", "Dependency Injection"],
  },
  {
    name: "Integrations",
    items: ["Razorpay", "Stripe", "Push Notifications", "Background Services"],
  },
];
