// Tools
import TypewriterComponent from 'typewriter-effect';
import changeLanguage from '../../typescript/language';
import { useEffect } from 'react';

export default function TypeWriterEffect() {
  return (
    <TypewriterComponent
        options={{
           strings: ["Recruiter!", "Viewer!", "World!"],
           autoStart: true,
           loop: true,
        }}
    />
  );
};
