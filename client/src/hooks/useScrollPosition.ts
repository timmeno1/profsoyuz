
import { useEffect, useState } from "react";


export const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
  
    useEffect(() => {
      const updatePosition = () => {
        if(window.pageYOffset > 600) { 
            setScrollPosition(window.pageYOffset);
        } else {
            setScrollPosition(0);
        }
      }
      window.addEventListener("scroll", updatePosition);
      updatePosition();
      return () => window.removeEventListener("scroll", updatePosition);
    }, []);
  
    return scrollPosition;
  };