// Icons
import { FaTools } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import {TbBrandVscode } from "react-icons/tb";
import { BiGitBranch } from "react-icons/bi";
import { FaFolder } from "react-icons/fa";
import { FaAutoprefixer } from "react-icons/fa";
import { SiPrettier } from "react-icons/si";
import { AiFillPhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";


// Componente principal de exportación
export default function Footer(): JSX.Element {
  return (
    <footer className="footer" id="footer">
      {/* Lista de herramientas */}
      <div className="tools">
        <h3><span data-section="footer" data-value="tools">Tools</span> <FaTools/></h3>

        <ul className="tools-ul">
          <li><SiVite/> Vite</li>
          <li><TbBrandVscode/> Visual Studio Code</li>
          <li><BiGitBranch/> Git Graph</li>
          <li><FaFolder/> Material Icons</li>
          <li><FaAutoprefixer/> Auto Prefixer</li>
          <li><SiPrettier/> Prettier</li>
        </ul>
      </div>
      
      {/* Lista de contacto */}
      <div className="contact">
        <h3><span data-section="footer" data-value="contact">Contact</span> <AiFillPhone/></h3>

        <ul className="contact-ul">
          <li><HiOutlineMail/> alexispraiz18@gmail.com <span data-section="footer" data-value="preference">&#60;preference&#62;</span></li>
          <li><FaWhatsapp/> +54 1160461511</li>
          <li><a href="https://github.com/alexisPraiz19" target="_blank"><AiFillGithub/> alexisPraiz19</a></li>
        </ul>
      </div>
    </footer>
  )
}
