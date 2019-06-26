 import React, { useState,useEffect } from 'react'

export const useWindowResize =  () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleSize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleSize);
      return () => {
        window.removeEventListener('resize', handleSize);
      };
  });
  return width;
}
