const Resume = () => {
    return (
      <section id="resume" className="resume">
        <h2>Lebenslauf</h2>
        <div className="pdf-viewer">
          <embed src="/Lebenslauf.pdf" type="application/pdf" width="100%" height="600px" />
        </div>
        <a href="/Lebenslauf.pdf" download className="download-resume">Lebenslauf Herunterladen</a>
      </section>
    );
  };
  
  export default Resume;
  