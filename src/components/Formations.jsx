import content from '../data/content.json';
import '../styles/Formations.css';

function Formations() {
  const { formations, labels } = content;

  return (
    <section id='formations' className="formations-section">
      <h2>{labels.formationsTitle}</h2>
      <div className="timeline">
        {formations.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="content">
              <span className="year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
        <div className="line" />
      </div>
    </section>
  );
}

export default Formations;
