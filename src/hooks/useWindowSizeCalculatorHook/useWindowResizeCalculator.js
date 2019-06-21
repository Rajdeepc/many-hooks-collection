 import React, { useState } from 'react'

export const useWindowResize =  () => {
  const [width, setWidth] = useState(widnow.innerWidth);
  useEffect(() => {
    const handleSize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleSize);
      return () => {
        window.removeEventListener('resize', handleSize);
      };
  });
  return width;
}
