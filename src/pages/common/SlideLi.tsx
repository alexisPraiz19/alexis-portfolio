// Tools
import { Link } from 'react-router-dom';
import { HiCheckCircle } from 'react-icons/hi';


interface WatchSlideLi{
  skillUrlLogo: string;
  tech: string;
  detailsOf: string;
  display?:string;
}
// Componente principal de exportación
export default function SlideLi({ skillUrlLogo, tech , detailsOf, display }:WatchSlideLi): JSX.Element {
  return (
    <li className="card">
      <figure className="logo-skill_figure">
        <img src={skillUrlLogo} alt="skill" className="logo-skill"/>
        <figcaption className="tech">{ tech }</figcaption>
      </figure>

      <button className={`details-button ${display}`}>
        <Link to={`/read-details/${detailsOf}`} className="read-details_link" data-section="skills" data-value="details">read details</Link>
      </button>
    </li>
  );
};
