// Common component
import AboutText from "../common/AboutText";

// Componente de exportación
export default function About(): JSX.Element{
  return (
    <section className="about">
        {/* notificación */}
      <p className="notification" data-section="about" data-value="notification">
        This section is made in order to make known the type of person
        that you will use or consider.
      </p>
      
        {/* este "about text" es diferente a los demás porque este no es un componente y es direrente en cuanto estructura. Tuve que hacerlo así para más facilidad a la hora de estilizar en sass */}
      <div className="about-text">
        <span className="about-text_title" data-section="about" data-value="basic_dates">basic dates</span>
        <p className="about-text_p">
          <span data-section="about" data-value="name">Full name: Alexis Leonel Praiz</span> <br/>
          <span data-section="about" data-value="age">Age: 19 years</span> <br/>
          <span data-section="about" data-value="birthday">Birthday Date: May 20th</span> <br/>
          <span data-section="about" data-value="location">Location: Argentina, Buenos Aires</span>
        </p>
      </div>
        
        {/* common component para reutilizar código */}
      <AboutText 
        title     = "hobbies"
        paragraph = "Studying new programming concepts, practice Piano, study English, read and interpret other people's code through educational videos on YouTube, play videogames."
        dataValueTitle = "hobbie-title"
        dataValueText  = "hobbie-text"
      />

      <AboutText 
        title     = "personality"
        paragraph = 'Very dedicated and dutiful, responsible, patient, kind, good relationship with colleagues, introverted, productive, I always seek to progress on a personal and professional level, in general I consider myself quite competent although sometimes I get the famous "impostor syndrome" but I dont I let myself win'
        dataValueTitle = "personality-title"
        dataValueText  = "personality-text"
      />
    </section>
  )
}
