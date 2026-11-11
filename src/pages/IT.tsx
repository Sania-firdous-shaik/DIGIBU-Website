import React from 'react';
import { Code2 } from 'lucide-react';
import { DIVISIONS } from '../config/services';
import { DivisionPageTemplate } from '../components/DivisionPageTemplate';

export const IT: React.FC = () => {
  const division = DIVISIONS.find((d) => d.id === 'it')!;
  return (
    <DivisionPageTemplate
      division={division}
      icon={<Code2 className="w-6 h-6 text-[#FFD500]" />}
    />
  );
};
