import React from 'react';
import { GlossarySectionData } from '../types';
import GlossaryItem from './GlossaryItem';

interface GlossarySectionComponentProps { // Renamed to avoid conflict with GlossarySectionData if it were in same file
  section: GlossarySectionData;
}

const GlossarySectionComponent: React.FC<GlossarySectionComponentProps> = ({ section }) => {
  return (
    <section id={`section-${section.letter}`} className="scroll-mt-24"> {/* scroll-mt for potential fixed header */}
      <h2 className="text-4xl font-bold mb-10 pb-3 border-b-2 border-gray-700 text-gray-100 tracking-wider">
        {section.letter}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {section.entries.map((entry, index) => (
          <GlossaryItem key={`${section.letter}-${index}`} term={entry.term} definition={entry.definition} />
        ))}
      </div>
    </section>
  );
};

export default GlossarySectionComponent;
