// Tools
import { useEffect } from 'react';

// Icons
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

// Common component
import SlideLi from '../common/SlideLi';

// TS logic
import { slideLeft, slideRight } from "../../typescript/slider"

export default function Skills(){
  useEffect(()=>{
    const slideContainer:Element          = document.querySelector(".slide")!;
    const skillCards:NodeListOf<Element>  = document.querySelectorAll(".card");
    const lastCard:Element                = skillCards[skillCards.length - 1];

    slideContainer.insertAdjacentElement('afterbegin', lastCard);
  });
  
  return (
    <section className="skills">
      <h2 className="skill-title" data-section="skills" data-value="title">Skills</h2>
        <div className="slider">
          {/*skill list*/}
          <ul className="slide">
            {/*html*/}
            <SlideLi 
              skillUrlLogo = "./assets/skills/skill-html.png"
              detailsOf    = "html"
              tech         = "HTML"
            />
            {/*css*/}
            <SlideLi 
              skillUrlLogo = "./assets/skills/skill-css.png"
              detailsOf    = "css"
              tech         = "CSS"
            />
            {/*js*/}
            <SlideLi 
              skillUrlLogo = "./assets/skills/skill-js.png"
              detailsOf    = "js"
              tech         = "JavaScript"
            />
            {/*react*/}
            <SlideLi 
              skillUrlLogo = "./assets/skills/skill-react.png"
              detailsOf    = "react"
              tech         = "React JS"
            />
            {/*sass*/}
            <SlideLi 
              skillUrlLogo = "./assets/skills/skill-sass.png"
              detailsOf    = "sass"
              tech         = "SASS"
            />
            {/*ts*/}
            <SlideLi 
              skillUrlLogo = "./assets/skills/skill-typescript.png"
              detailsOf    = "typescript"
              tech         = "TypeScript"
            />
            {/*git*/}
            <SlideLi 
              skillUrlLogo = "./assets/skills/skill-git.webp"
              detailsOf    = "git"
              tech         = "Git"
            />
            {/*github*/}
            <SlideLi 
              skillUrlLogo = "./assets/skills/skill-github.png"
              detailsOf    = "github"
              tech         = "GitHub"
            />

            <BsFillArrowLeftCircleFill className="btn-slide btn-slide_left" onClick={()=> slideLeft()}/>
            <BsFillArrowRightCircleFill className="btn-slide btn-slide_right" onClick={()=> slideRight()}/>
          </ul>             
        </div>
    </section>
  );
};