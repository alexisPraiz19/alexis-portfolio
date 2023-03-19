import ProjectCard from "../common/ProjectCard";

export default function Projects() {
  return (
    <section className="projects">
        <h2 className="project-title" data-section="projects" data-value="title">projects</h2>

        <ProjectCard 
        langs="#api #responsive #html #css #js"
        urlImage="./assets/projects/project-url-shortly.png"
        demo="https://alexispraiz19.github.io/url-shotering/"
        code="https://github.com/alexisPraiz19/url-shotering"
        cardClass="project1"
        />

        <ProjectCard 
        langs="#html #css #js #api #responsive"
        urlImage="./assets/projects/project-ip-address-taker.png"
        demo="https://alexispraiz19.github.io/IP-address-tracker/"
        code="https://github.com/alexisPraiz19/IP-address-tracker"
        cardClass="project2"
        />
        
        <ProjectCard 
        langs="#html #css #js #webpack #babel"
        urlImage="./assets/projects/project-bookmark.png"
        demo="https://alexispraiz19.github.io/bookmark-landing-page/"
        code="https://github.com/alexisPraiz19/bookmark-landing-page"
        cardClass="project3"
        />

        <ProjectCard 
        langs="#react #router #js #responsive #css"
        urlImage="./assets/projects/project-space-turism.png"
        demo="https://alexispraiz19.github.io/space-turism/"
        code="https://github.com/alexisPraiz19/space-turism"
        cardClass="project4"
        />

        <ProjectCard 
        langs="#react #typescript #context #sass #responsive"
        urlImage="./assets/projects/project-todo-app.png"
        demo="https://alexispraiz19.github.io/todo-app/"
        code="https://github.com/alexisPraiz19/todo-app"
        cardClass="project5"
        />

      <div className="wave-container">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="wave"><path d="M0.00,50.10 C150.00,150.33 349.20,-50.10 500.00,50.10 L500.00,150.33 L0.00,150.33 Z" style={{"stroke": "none", fill:"#171717",}}></path></svg>*
      </div>
    </section>
  );
}
