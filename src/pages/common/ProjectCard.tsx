import { Link } from "react-router-dom";

interface CardRules {
  langs: string;
  urlImage: string;
  demo: string;
  code: string;
  cardClass: string;
}

export default function ProjectCard({langs, urlImage, demo, code, cardClass}:CardRules): JSX.Element{
    return (
        <div className={`project-card ${cardClass}`}>
            <figure className="fig-card">
               <figcaption className="fig-langs">
                  {langs}
               </figcaption>
  
               <img src={urlImage} alt="project-image" className="project-img"/>
            </figure>

            <div className="demo-code">
                <button className="demo project-btn">
                   <Link to={demo} target="_blank" className="link">demo</Link>
                </button>

                <button className="code project-btn">
                   <Link to={code} target="_blank" className="link">github</Link>
                </button>
            </div>
        </div>
  );
};
