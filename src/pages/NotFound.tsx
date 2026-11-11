import React from 'react';
import { PageHero } from '../components/PageHero';
import { Button } from '../components/Button';

export const NotFound: React.FC = () => {
  return (
    <div className="relative">
      <PageHero
        badge="Error 404"
        title="Page Not"
        titleHighlight="Found."
        description="The page you are looking for does not exist or has been relocated within the DIGIBU directory."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: '404' },
        ]}
      >
        <Button to="/" variant="primary" showArrow>
          Return to Home
        </Button>
        <Button to="/services" variant="secondary">
          Explore Services
        </Button>
      </PageHero>
    </div>
  );
};
