export interface TermDefinitionPair {
  term: string;
  definition: string;
}

export interface GlossarySectionData {
  letter: string;
  entries: TermDefinitionPair[];
}
