/* SVGs are URLs by default (this is CORRECT) */
import HomeIcon from "@/assets/icons/home.svg";
import ProjectsIcon from "@/assets/icons/projects.svg";
import ExperienceIcon from "@/assets/icons/experience.svg";
import UserIcon from "@/assets/icons/user.svg";
import ContactIcon from "@/assets/icons/contact.svg";

export function getActiveRouterData() {
  return [
    {
      name: "Home",
      path: "/",
      icon: HomeIcon,
      id: "home-container",
      url: "",
      type: "section",
      action: "scroll", // "SCROLL",  "NAVIGATE", "NONE", "NUDGE", "ROUTE"
    },
    {
      name: "About",
      path: "/about",
      icon: UserIcon,
      id: "about-container",
      url: "",
      type: "about",
      action: "scroll", // "SCROLL",  "NAVIGATE", "NONE", "NUDGE", "ROUTE"
    },
    {
      name: "Experience",
      path: "/experience",
      icon: ExperienceIcon,
      id: "experience-container",
      url: "",
      type: "section",
      action: "scroll", // "SCROLL",  "NAVIGATE", "NONE", "NUDGE", "ROUTE"
    },
    {
      name: "Projects",
      path: "/projects",
      icon: ProjectsIcon,
      id: "projects-container",
      url: "",
      type: "section",
      action: "scroll", // "SCROLL",  "NAVIGATE", "NONE", "NUDGE", "ROUTE"
    },
    {
      name: "Contact",
      path: "/contact",
      icon: ContactIcon,
      id: "contact-container",
      url: "",
      type: "section",
      action: "scroll", // "SCROLL",  "NAVIGATE", "NONE", "NUDGE", "ROUTE"
    },
    // {
    //   name: "Blog",
    //   path: "/blog",
    //   icon: ContactIcon,
    //   id: "blog-container",
    //   url: "",
    //   type: "section",
    //   action: "NAVIGATE", // "SCROLL",  "NAVIGATE", "NONE", "NUDGE", "ROUTE"
    // },
  ];
}
