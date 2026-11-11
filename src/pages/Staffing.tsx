import React from 'react';
import { Users } from 'lucide-react';
import { DIVISIONS } from '../config/services';
import { DivisionPageTemplate } from '../components/DivisionPageTemplate';

export const Staffing: React.FC = () => {
  const division = DIVISIONS.find((d) => d.id === 'staffing')!;
  return (
    <DivisionPageTemplate
      division={division}
      icon={<Users className="w-6 h-6 text-[#FFD500]" />}
    />
  );
};
