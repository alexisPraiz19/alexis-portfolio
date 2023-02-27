export default function MenuLi({link, href, icon, dataValue}:any) {
  return (
    <li className="menu-li">
        <a href={href} className = "menu-link"> {icon}
            <span data-section="menu" data-value={dataValue}>{link}</span> 
        </a>
    </li>
  )
}
