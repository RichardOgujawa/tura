/*--SCROLL UI--*/
let body = document.getElementsByTagName('body');
let scrollText = document.getElementById('scroll-text');

console.log(document.body.scrollHeight);
/*Find out how far the window is scrolled down*/
/*How wide is the window*/
/*Pl*/
window.addEventListener("scroll", ()=>{
    let scrollTop = window.scrollY;
    let bodyHeight = body.scrollHeight;

    /*Whe the window gets to the projects section move the scroll text down half of the way*/

})
/*Whe the window gets to the contact form move the scroll text all the way down to the bottom*/

/*--PROJECT IMAGES--*/
/*Create a variable for the pictures*/
let pictures = document.querySelectorAll('.projects__pictures');

/*Create a variable for the carousel details*/
let projectsTitle = document.getElementById('projects-title'); 
let projectsDescription= document.getElementById('projects-description'); 

/*Create JSON for the slides and thier data */
let projectsJSON = 
[
    {
        "title" : "Nike", 
        "description": "Vestibulum euismod accumsan tortor non fermentum. Proin iaculis, tellus sed egestas malesuada, arcu neque pretium dolor, at euismod sapien mauris eu lorem."
    }, 
    {
        "title" : "Coke Zero", 
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam libero augue, sollicitudin consequat pellentesque in, dapibus vitae lorem."
    },
    {
        "title" : "Gameboy", 
        "description": "Proin vestibulum felis in lorem tempor, nec porttitor lacus convallis. Nulla commodo, purus a porta faucibus, magna sem ultrices sem, at posuere lorem justo et nisi."
    }
]

/*Function that will remove all the active classes*/


// console.log(checkClasses());
/*Automatically add or remove activeDesktop depending on the window width*/
window.addEventListener("resize", ()=>{

    if (window.innerWidth >= 950 && !pictures[0].classList.contaians('activeDesktop')){
        pictures[1].classList.add('activeDesktop');
        projectsTitle.innerHTML = projectsJSON[0].title; 
        projectsDescription.innerHTML = projectsJSON[0].description; 
        console.log("added");
    } else {
        removeActiveDesktop(pictures);
    }
})

/*Check which picture is clicked*/
pictures.forEach((picture, index) => 
    picture.addEventListener("click", ()=>{
        /*If the width of the body is 1087 or more do all this*/
        if (window.innerWidth >= 950){
            console.log("greater")
        /*Change title and description to match picture*/
        projectsTitle.innerHTML = projectsJSON[index].title; 
        projectsDescription.innerHTML = projectsJSON[index].description; 
        
        
        /*Cycle through code and remove any active classes*/
        removeActiveDesktop(pictures);

        /*Give active class to selected picture */
        pictures[index].classList.add('activeDesktop');}

        /*If the width of the body is less than 1087 do nothing*/
        else {
            removeActiveDesktop(pictures);
            console.log("too small g");
            return;
        }
}))



/*Smaller Screen Sizes*/



