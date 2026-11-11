import React from 'react';
import { Video } from 'lucide-react';
import { DIVISIONS } from '../config/services';
import { DivisionPageTemplate } from '../components/DivisionPageTemplate';

export const Media: React.FC = () => {
  const division = DIVISIONS.find((d) => d.id === 'media')!;
  return (
    <DivisionPageTemplate
      division={division}
      icon={<Video className="w-6 h-6 text-[#9B30FF]" />}
    />
  );
};
