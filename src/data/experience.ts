export interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    company: "L-EARNINGS QUEST PRIVATE LIMITED",
    role: "Flutter Developer",
    period: "May 2025 – Present",
    bullets: [
      "Developed scalable Flutter apps using Clean Architecture and BLoC",
      "Integrated REST APIs and third-party SDKs for enhanced functionality",
      "Deployed production builds to Play Store and App Store",
    ],
  },
  {
    company: "Spydo Technologies",
    role: "Flutter Developer",
    period: "Mar 2024 – Apr 2025",
    bullets: [
      "Built client-based Flutter applications with optimized performance",
      "Solved complex logic and improved application stability",
      "Managed Play Store deployments and release updates",
    ],
  },
  {
    company: "Freelance",
    role: "Flutter Developer",
    period: "Jan 2023 – Mar 2024",
    bullets: [
      "Delivered custom Flutter apps based on client requirements",
      "Implemented REST APIs and Firebase backend services",
      "Published stable builds to Play Store with optimized performance",
    ],
  },
];
