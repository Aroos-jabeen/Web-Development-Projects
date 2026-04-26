let text=document.getElementById('quality');
let titles=["Web Developer","Ux Desinger","Frontend Developer","Problem Solver"];
let titleIndex=0;
let charIndex=0;
function changeText(){
    let currentTitle=titles[titleIndex];
    text.style.color='#E36C39'
    text.innerText=currentTitle.slice(0,charIndex);
    if(charIndex<currentTitle.length){
        charIndex++;
    }
    else{
        charIndex=1;
        titleIndex=(titleIndex+1)%titles.length;
    }
    setTimeout(changeText,160);
}
changeText();

const navLinks = document.querySelectorAll('header nav a[href^="#"]');
const contentSections = document.querySelectorAll("section");

function showSection(sectionId) {
    contentSections.forEach((section) => {
        if (section.id === sectionId) {
            section.style.display = section.id === "main" ? "flex" : "block";
        } else {
            section.style.display = "none";
        }
    });
}

showSection("main");

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").replace("#", "");
        if (targetId) {
            showSection(targetId);
        }
    });
});
