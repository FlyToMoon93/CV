// components/WorkExperience.js
import React from 'react';

const WorkExperience = () => {
  return (
    <div>
      <h2>Berufserfahrungen</h2>
      <div style={{ marginBottom: '20px' }}>
        <h3>Softwareentwickler bei ABC GmbH</h3>
        <p><strong>Zeitraum:</strong> Januar 2023 - heute</p>
        <p><strong>Aufgaben:</strong></p>
        <ul>
          <li>Entwicklung von Webanwendungen mit React und Node.js</li>
          <li>Wartung und Verbesserung bestehender Systeme</li>
          <li>Zusammenarbeit mit dem Team zur Erstellung innovativer Lösungen</li>
        </ul>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <h3>Praktikant im Bereich Webentwicklung bei XYZ AG</h3>
        <p><strong>Zeitraum:</strong> Juni 2022 - Dezember 2022</p>
        <p><strong>Aufgaben:</strong></p>
        <ul>
          <li>Unterstützung bei der Entwicklung von Webseiten und Webapplikationen</li>
          <li>Testen und Debuggen von Code</li>
          <li>Erstellung von Dokumentationen und Reports</li>
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
