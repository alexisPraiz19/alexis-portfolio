// Herramientas
import {HashLink as Link} from "react-router-hash-link";

// Componente principal de exportación
export default function MenuLi({link, href, icon, dataValue}:any) {
  return (
    <li className="menu-li">
        <Link smooth to={href} className = "menu-link"> {icon}
            <span data-section="menu" data-value={dataValue}>{link}</span> 
        </Link>
    </li>
  )
}
