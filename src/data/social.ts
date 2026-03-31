import { FaLinkedinIn, FaGithub, FaStackOverflow, FaInstagram } from "react-icons/fa";
import type { IconType } from "react-icons";

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shamilpp/",
    icon: FaLinkedinIn,
  },
  {
    name: "GitHub",
    url: "https://github.com/ShamilPP",
    icon: FaGithub,
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/19262615/shamil",
    icon: FaStackOverflow,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/_shhaamil__/",
    icon: FaInstagram,
  },
];

export const email = "shamilpp4115@gmail.com";
