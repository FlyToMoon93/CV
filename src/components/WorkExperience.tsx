import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';

const WorkExperience = () => {
  return (
    <section id="work-experience" style={sectionStyle}>
      <div style={contentStyle}>
        <Typography variant="h3" component="h2" align="center" style={headerStyle}>
          BERUFSERFAHRUNGEN
        </Typography>

        {/* TÜV SÜD Digital Service GmbH */}
        <Card style={cardStyle}>
          <CardContent>
            <Typography variant="h5" style={titleStyle}>TÜV SÜD Digital Service GmbH, München</Typography>
            <Typography variant="subtitle1" color="textSecondary">04/2023 - aktuell</Typography>
            <Typography variant="body1" style={contentText}>
              <strong>Werkstudent</strong>
              <ul>
                <li>Erstellung von Testfällen auf Basis von User Stories für TÜV SÜD Online-Shops in Azure DevOps Test Plans.</li>
                <li>Manuelle Durchführung von User Acceptance Tests unterschiedlicher TÜV SÜD Online-Shops.</li>
                <li>Testautomatisierung und Skriptentwicklung mittels Cypress in JavaScript.</li>
                <li>Erstellung von KPI-Dashboards für alle TÜV SÜD Online-Shops in Microsoft Excel mit Hilfe von Power Pivot, Power Query und Visual Basic.</li>
                <li>Setup und Anpassung von komplexen Online-Formularen in 123Formbuilder mit Hilfe von HTML und CSS sowie Einrichtung von Business-Workflows.</li>
                <li>Page-Setup und Content-Pflege für verschiedene TÜV SÜD Online-Shops mit Hilfe des Online-Shop Backoffices sowie Anpassung des Designs durch HTML und CSS.</li>
              </ul>
            </Typography>
          </CardContent>
        </Card>

        {/* Techmatrix Consulting GmbH */}
        <Card style={cardStyle}>
          <CardContent>
            <Typography variant="h5" style={titleStyle}>Techmatrix Consulting GmbH, Ingolstadt</Typography>
            <Typography variant="subtitle1" color="textSecondary">02/2021 - 09/2022</Typography>
            <Typography variant="body1" style={contentText}>
              <strong>Werkstudent, Praktikant, Frontend Entwickler</strong>
              <ul>
                <li>HTML: Strukturierung</li>
                <li>CSS: Styling</li>
                <li>JavaScript: Interaktion</li>
                <li>TypeScript: Typsicherheit</li>
                <li>React.js: Komponenten</li>
                <li>Next.js: Routing</li>
                <li>React UI: Benutzeroberfläche.</li>
              </ul>
            </Typography>
          </CardContent>
        </Card>

        {/* Media-Saturn Deutschland GmbH */}
        <Card style={cardStyle}>
          <CardContent>
            <Typography variant="h5" style={titleStyle}>Media-Saturn Deutschland GmbH</Typography>
            <Typography variant="subtitle1" color="textSecondary">12/2015 - 02/2016</Typography>
            <Typography variant="body1" style={contentText}>
              <strong>Praktikant</strong>
              <ul>
                <li>Wettbewerbs-Preisrecherche (Online)</li>
                <li>Übertragung des Wettbewerbs in Excel-Dateien</li>
              </ul>
            </Typography>
          </CardContent>
        </Card>

      </div>
    </section>
  );
};

// Styles
const sectionStyle = {
  padding: '50px',
  backgroundColor: '#e3e3e3', // Heller, neutraler Hintergrund für bessere Lesbarkeit
};

const contentStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
};

const headerStyle = {
  fontWeight: 'bold',
  color: '#333', // Dunklere Schriftfarbe für besseren Kontrast
  marginBottom: '40px',
};

const cardStyle = {
  marginBottom: '30px',
  borderRadius: '12px',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)', // Subtile Schatten für einen modernen Look
  backgroundColor: '#ffffff', // Heller Hintergrund für die Karten
  padding: '20px',
};

const titleStyle = {
  fontWeight: 'bold',
  color: '#1976d2', // Klare, kräftige Farbe für die Titel
};

const contentText = {
  marginBottom: '20px',
  fontSize: '16px',
  color: '#555', // Dunklere Schrift für bessere Lesbarkeit
};

export default WorkExperience;
