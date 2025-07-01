import React from 'react';
import { useNavigate } from 'react-router-dom';
import OrchidsPresentation from './OrchidsPresentation';

const OrchidsContainer = ({ orchids }) => {
  const navigate = useNavigate();

  const handleNavigateToDetail = (index) => {
    navigate(`/orchid/${index}`);
  };

  return (
    <div className="orchids-container">
      <OrchidsPresentation 
        orchids={orchids} 
        onNavigateToDetail={handleNavigateToDetail} 
      />
    </div>
  );
};

export default OrchidsContainer;
