/* SVGs are URLs by default (this is CORRECT) */
import HomeIcon from "@/assets/icons/home.svg";
import ProjectsIcon from "@/assets/icons/projects.svg";
import ExperienceIcon from "@/assets/icons/experience.svg";
import UserIcon from "@/assets/icons/user.svg";
import ContactIcon from "@/assets/icons/contact.svg";

export function getActiveRouterData() {
  return [
    { name: "Home", path: "/", icon: HomeIcon},
    { name: "About", path: "/about", icon: UserIcon },
    { name: "Experience", path: "/experience", icon: ExperienceIcon },
    { name: "Projects", path: "/projects", icon: ProjectsIcon },
    { name: "Contact", path: "/contact", icon: ContactIcon },
  ];
}
