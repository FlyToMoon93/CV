import React from 'react';
import { Grid } from '@mui/material';
import AboutMe from './About';
import Education from './Education';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Contact from './Contact';

export interface ContentProps {
  currentSection: string | null;
}

const MyInfo: React.FC<ContentProps> = ({ currentSection }) => {
  return (
    <div>
      <Grid>
        {currentSection === 'skills' && <Skills />}
        {currentSection === 'bildungsweg' && <Education />}
        {currentSection === 'berufserfahrung' && <WorkExperience />}
        {currentSection === 'kontakt' && <Contact />}
     
      </Grid>
    </div>
  );
};

export default MyInfo;
