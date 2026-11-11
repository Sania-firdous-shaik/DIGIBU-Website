import React from 'react';
import { TrendingUp } from 'lucide-react';
import { DIVISIONS } from '../config/services';
import { DivisionPageTemplate } from '../components/DivisionPageTemplate';

export const Digital: React.FC = () => {
  const division = DIVISIONS.find((d) => d.id === 'digital')!;
  return (
    <DivisionPageTemplate
      division={division}
      icon={<TrendingUp className="w-6 h-6 text-[#9B30FF]" />}
    />
  );
};
