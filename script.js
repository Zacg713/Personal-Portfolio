const aboutme = document.getElementById("aboutme");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const experience = document.getElementById("experience");
const contact = document.getElementById("contact");

aboutme.classList.add("fade-in");

function toggleAboutMe() {
    aboutme.classList.add("fade-in");
    skills.classList.remove("fade-in");
    projects.classList.remove("fade-in");
    experience.classList.remove("fade-in");
    contact.classList.remove("fade-in");
}

function toggleSkills() {
    skills.classList.add("fade-in");
    aboutme.classList.remove("fade-in");
    projects.classList.remove("fade-in");
    experience.classList.remove("fade-in");
    contact.classList.remove("fade-in");
}

function toggleProjects() {
    projects.classList.add("fade-in");
    aboutme.classList.remove("fade-in");
    skills.classList.remove("fade-in");
    experience.classList.remove("fade-in");
    contact.classList.remove("fade-in");
}

function toggleExperience() {
    experience.classList.add("fade-in");
    aboutme.classList.remove("fade-in");
    skills.classList.remove("fade-in");
    projects.classList.remove("fade-in");
    contact.classList.remove("fade-in");
}

function toggleContact() {
    contact.classList.add("fade-in");
    aboutme.classList.remove("fade-in");
    skills.classList.remove("fade-in");
    projects.classList.remove("fade-in");
    experience.classList.remove("fade-in");
}