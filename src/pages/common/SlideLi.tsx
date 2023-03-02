// Tools
import { Link } from 'react-router-dom';
import { HiCheckCircle } from 'react-icons/hi';

export default function SlideLi({ skillUrlLogo, tech , detailsOf }:any): JSX.Element {
  return (
    <li className="card">
      <figure className="logo-skill_figure">
        <img src={skillUrlLogo} alt="skill" className="logo-skill"/>
        <figcaption className="tech">{ tech }</figcaption>
      </figure>

      <button className="details-button">
        <Link to={`/read-details/${detailsOf}`} className="read-details_link" data-section="skills" data-value="details">read details</Link>
      </button>
    </li>
  );
};
