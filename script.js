const aboutme = document.getElementById("aboutme");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const experience = document.getElementById("experience");
const contact = document.getElementById("contact");
const certificates = document.getElementById("certificates");

aboutme.classList.add("fade-in");

function toggleAboutMe() {
    skills.style.visibility = "hidden";
    projects.style.visibility = "hidden";
    experience.style.visibility = "hidden";
    contact.style.visibility = "hidden";
    certificates.style.visibility = "hidden";
    aboutme.style.visibility = "visible";  
}

function toggleSkills() {
    aboutme.style.visibility = "hidden";
    projects.style.visibility = "hidden";
    experience.style.visibility = "hidden";
    contact.style.visibility = "hidden";
    certificates.style.visibility = "hidden";
    skills.style.visibility = "visible";
}

function toggleProjects() {
    skills.style.visibility = "hidden";
    aboutme.style.visibility = "hidden";
    experience.style.visibility = "hidden";
    contact.style.visibility = "hidden";
    certificates.style.visibility = "hidden";
    projects.style.visibility = "visible";
}

function toggleExperience() {
    skills.style.visibility = "hidden";
    projects.style.visibility = "hidden";
    aboutme.style.visibility = "hidden";
    contact.style.visibility = "hidden";
    certificates.style.visibility = "visible";
    experience.style.visibility = "visible";
}

function toggleContact() {
    skills.style.visibility = "hidden";
    projects.style.visibility = "hidden";
    experience.style.visibility = "hidden";
    aboutme.style.visibility = "hidden";
    certificates.style.visibility = "hidden";
    contact.style.visibility = "visible";
}