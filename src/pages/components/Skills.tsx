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
    return (
       <section className="skills">
           <h2 className="skill-title" data-section="skills" data-value="title">Skills</h2>

           <div className="slider">
                <ul className="slide">
                  <SlideLi 
                    skillUrlLogo = "./assets/skills/skill-html.png"
                    detailsOf    = "html"
                    tech         = "HTML"
                  />

                  <SlideLi 
                    skillUrlLogo = "./assets/skills/skill-css.png"
                    detailsOf    = "css"
                    tech         = "CSS"
                  />

                  <BsFillArrowLeftCircleFill className="btn-slide btn-slide_left" onClick={()=> slideLeft()}/>
                  <BsFillArrowRightCircleFill className="btn-slide btn-slide_right" onClick={()=> slideRight()}/>
                </ul>
                
           </div>
       </section>
    );
};