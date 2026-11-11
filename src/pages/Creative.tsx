import React from 'react';
import { Palette } from 'lucide-react';
import { DIVISIONS } from '../config/services';
import { DivisionPageTemplate } from '../components/DivisionPageTemplate';

export const Creative: React.FC = () => {
  const division = DIVISIONS.find((d) => d.id === 'creative')!;
  return (
    <DivisionPageTemplate
      division={division}
      icon={<Palette className="w-6 h-6 text-[#FFD500]" />}
    />
  );
};
