interface WatchAboutText {
    title: string;
    paragraph: string;
    dataValueTitle: string;
    dataValueText: string;
}

export default function AboutText({title, paragraph, dataValueTitle, dataValueText}:WatchAboutText): JSX.Element {
  return (
    <div className="about-text">
        <span className="about-text_title" data-section="about" data-value={dataValueTitle}>{ title }</span>
        <p className="about-text_p" data-section="about" data-value={dataValueText}>{ paragraph }</p>
    </div>
  )
}