const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});

let slides=["1.jpg","2.jpg","3.jpg"]
         let titles=["Car Acquisition System","Personal Portfolio Website","Common Applications"]
         let desc=["◆ Developed a Java based system to check if the person buying a car is eligible to buy a car based on age and their annual salary by comparing the salary and price of the car.◆ The system took in input from the user and calculated and gave the output according to conditions that were applied.◆ Created UML class diagrams for the main methods involved.◆ Conducted JUnit tests to validate system functionality and reliability.",
         "◆ Created a website template for myself which included all my details, resume, projects and contact information using HTML5, CSS and JavaScript ◆ Made it responsive using media queries.◆ Made a next and previous project explorer using JavaScript.",
         "◆ Implemented Scanner, Array Lists, Loops, Calendar Libraries, applied Drawio to create flowcharts and used UMLet to create  UML class Diagrams.◆ Used the Java Serializable Object Editor for a project and modified files."]
      let i=0,y
      let showslides=()=>{

            let x=document.querySelector("#slider1")
            let t=document.querySelector("#title")
            let d=document.querySelector("#desc")
            x.src="projects/"+slides[i]
            t.innerHTML=titles[i]
            d.innerHTML=titles[i]
            d.innerHTML=desc[i]
      }
         let nextslide=()=>{
         
         if (i<slides.length-1)
            {
         i++
         showslides()
                        }            
         }
         let previousslide=()=>{
            if(i>0)
            {
               i--
               showslides()

            }   
               } 