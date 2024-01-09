const aboutme = document.getElementById("aboutme");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const experience = document.getElementById("experience");
const contact = document.getElementById("contact");
const certificates = document.getElementById("certificates");

aboutme.classList.add("fade-in");

function toggleAboutMe() {
    skills.classList.remove("fade-in");
    projects.classList.remove("fade-in");
    experience.classList.remove("fade-in");
    contact.classList.remove("fade-in");
    certificates.classList.remove("fade-in");
    aboutme.classList.add("fade-in");  
}

function toggleSkills() {
    aboutme.classList.remove("fade-in");
    projects.classList.remove("fade-in");
    experience.classList.remove("fade-in");
    contact.classList.remove("fade-in");
    certificates.classList.remove("fade-in");
    skills.classList.add("fade-in");
}

function toggleProjects() {
    aboutme.classList.remove("fade-in");
    skills.classList.remove("fade-in");
    experience.classList.remove("fade-in");
    contact.classList.remove("fade-in");
    certificates.classList.remove("fade-in");
    projects.classList.add("fade-in");
}

function toggleExperience() {
    aboutme.classList.remove("fade-in");
    skills.classList.remove("fade-in");
    projects.classList.remove("fade-in");
    contact.classList.remove("fade-in");
    experience.classList.add("fade-in");
    certificates.classList.add("fade-in");
}

function toggleContact() {
    aboutme.classList.remove("fade-in");
    skills.classList.remove("fade-in");
    projects.classList.remove("fade-in");
    experience.classList.remove("fade-in");
    certificates.classList.remove("fade-in");
    contact.classList.add("fade-in");
}