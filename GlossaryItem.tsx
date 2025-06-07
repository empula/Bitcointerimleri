import React from 'react';

interface GlossaryItemProps {
  term: string;
  definition: string;
}

const GlossaryItem: React.FC<GlossaryItemProps> = ({ term, definition }) => {
  return (
    <div className="p-6 bg-gray-900 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:bg-gray-800/70 border border-gray-700/50 hover:border-purple-500/50">
      <h3 className="text-xl font-semibold text-purple-400 mb-2 tracking-tight">{term}</h3>
      <p className="text-gray-300 leading-relaxed text-base">{definition}</p>
    </div>
  );
};

export default GlossaryItem;
