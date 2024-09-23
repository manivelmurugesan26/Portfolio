import React from 'react';

function Certificates() {
  const certificates = [
    {
      title: "Java Full Stack Developer Certification",
      issuer: "KodNest",
      date: "February 2024",
      link: "https://in.docworkspace.com/d/sIJbUjtWxAbGqs7cG?sa=wa2&ps=1&fn=Kodnest%20-%20KODHUU5Q9.pdf",
    },
    {
      title: "Front End Developer Certification",
      issuer: "ParkQwik",
      date: "August 2024",
      link: "https://in.docworkspace.com/d/sIMzUjtWxAbCTxLcG?sa=wa2&ps=1&fn=Manivel%20Internship%20Certificate.pdf",

    },
    {
      title: "React Native certification",
      issuer: "ParkQwik",
      date: "August 2024",
      link: "https://in.docworkspace.com/d/sID7UjtWxAcqSxLcG?sa=wa2&ps=1&fn=ManivelCertificate.pdf",
    }
  ];

  return (
    <section id="certificates" className="certificates-section">
      <h2>Certificates</h2>
      <div className="certificate-list">
        {certificates.map((cert, index) => (
          <div className="certificate-item" key={index}>
            <h3>{cert.title}</h3>
            <p><strong>Issuer:</strong> {cert.issuer}</p>
            <p><strong>Date:</strong> {cert.date}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="certificate-link">
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
