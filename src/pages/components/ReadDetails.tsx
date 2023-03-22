// Common component para reutilizar código
import SecondaryMenu from "../common/SecondaryMenu";
import ContentDetailsOf from "../common/ContentDetailsOf";
import Particle from "../common/Particle";

// Componente principal de exportación
export default function ReadDetails(): JSX.Element {
  return (
    <main className="read-details">
        <Particle/>

        <div className="read-details_content">
            <SecondaryMenu/>
            <ContentDetailsOf/>
        </div>
    </main>
  )
}
