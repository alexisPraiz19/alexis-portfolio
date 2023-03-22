// Herramientas
import { useParams } from "react-router-dom";
import { useEffect } from "react";

// Componente principal de exportación
export default function LinkFolder(): JSX.Element {
  const { skill } = useParams();

  useEffect(()=>{
    const link = document.querySelector(".link-folder") as HTMLAnchorElement;
      
    if(skill == "html") link.setAttribute("href", "https://drive.google.com/drive/folders/1DEPkC-8wzseT8mFhv_l-UPJ8_qoQ8K4_?usp=share_link");
    if(skill == "css") link.setAttribute("href", "https://drive.google.com/drive/folders/1zBFDNe4mXY36uYmhHhiz7_5sQuOTpIps?usp=share_link")
    if(skill == "js") link.setAttribute("href", "https://drive.google.com/drive/folders/1zs2qhM16S8cGpnNtF_DiJCHvK6pcDOUd?usp=share_link") ;
    if(skill == "react") link.setAttribute("href", "https://drive.google.com/drive/folders/1ylGwahf3DPc7q8uXNor9HMUa51eDWu_M?usp=share_link") ;
    if(skill == "sass") link.setAttribute("href", "https://drive.google.com/drive/folders/1Efkv7RnLyG0GT0XrXU02MbxI295xhCI5?usp=sharing") ;
    if(skill == "typescript") link.setAttribute("href", "https://drive.google.com/drive/folders/1T_XSVzoj6FOUq81W98-PZj_6DKzRwKKF?usp=sharing") ;
    if(skill == "git") link.setAttribute("href", "https://drive.google.com/drive/folders/1KvTqOVV5MLyJ5hpjq2ClE-G9aTmFkw7V?usp=sharing") ;
  })

  return (
    <div className="doc-container">
        <p data-section="doc" data-value="doc-text">
            During my study period I was writing down every concept that I was learning
            thus generating a record.
            It has happened to all of us to forget some method or function, when it happens to me I go to this
            record to remember some concept that will be useful to build a solution.
        </p>

        <a target="_blank" className="link-folder">
            <span data-section="doc" data-value="link">You can take a look at my log about</span> { skill }
        </a>
     </div>
  )
}
