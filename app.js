gsap.registerPlugin(ScrollTrigger);
    
// get all needed DOM elements
const hero = document.querySelector('.hero-wrapper');
const aboutHeader = document.querySelector('.about-me h2');
const aboutMeArr = document.querySelectorAll('.about-me p');
const aboutButton = document.querySelector('.button');
const skillsHeader = document.querySelector('.skills h2');
const skills = document.querySelector('.skills-wrapper');
const projectsHeader = document.querySelector('.projects h2');
const cards = document.querySelectorAll('.card-container a');



// hero landing animation
gsap.to(hero, {opacity: 0, scrollTrigger: {
    trigger: hero,
    start: 'top top',
    end: 'bottom+=200',
    scrub: true,
}});

// about me section
gsap.from(aboutHeader, 2, {opacity: 0, y:-200, ease: "expo.inOut", scrollTrigger: {
    trigger: aboutHeader,
    start: "top center",
}});

gsap.from(aboutMeArr[0], 1, {opacity: 0, x:-200, ease: "expo.inOut", scrollTrigger: {
    trigger: aboutMeArr[0],
    start: "top center",
}})

gsap.from(aboutMeArr[1], 1, {opacity: 0, x:200, ease: "expo.inOut", scrollTrigger: {
    trigger: aboutMeArr[1],
    start: "top center+=100px",
}});

gsap.from(aboutButton, 1, {opacity: 0, y:200, ease: "expo.inOut", scrollTrigger: {
    trigger: aboutMeArr[1],
    start: "bottom 80%",
}});

// skills section
gsap.from(skillsHeader, 2, {opacity: 0, y:-200, ease: "expo.inOut", scrollTrigger: {
    trigger: skillsHeader,
    start: "bottom 70%",
}});

gsap.from(skills, 2, {opacity: 0, x:-200, ease: "expo.inOut", scrollTrigger: {
    trigger: skills,
    start: "center center+=30%",
}});

//projects
gsap.from(projectsHeader, 2, {opacity: 0, y:-200, ease: "expo.inOut", scrollTrigger: {
    trigger: projectsHeader,
    start: "bottom 70%",
}});



// gsap.from(".skills h2", 2, {opacity: 0, x:-200, ease: "expo.inOut", scrollTrigger: {
//     trigger: '.skills',
//     start: "top bottom",
// }});

// gsap.from(".skills-wrapper", 2, {opacity: 0, y:-200, ease: "expo.inOut", scrollTrigger: {
//     trigger: '.skills',
//     start: "top center",
// }});

// gsap.from(".projects", 2, {opacity: 0, x:200, ease: "expo.inOut", scrollTrigger: {
//     trigger: '.projects',
//     start: "100px center",
// }});