import { useState, useEffect } from 'react';
import {useLocation } from 'react-router-dom';

const PageFade = ({ children }) => {
  const location = useLocation();
  const [opacity, setOpacity] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  

  useEffect(() => {
    setOpacity(0);
  }, [location.pathname]);

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
      setIsLoaded(true);
    }, 1000);
  }, [location.pathname]);

  return (
    <div style={{ opacity }} className="page-fade" >
      {isLoaded ? children : null}
    </div>
  );
};

export default PageFade;
