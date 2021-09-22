import React, { useEffect, useState } from 'react'

export const BackToTopBtn = () => {

    const scrollToTop = (e:any) => {
      e.preventDefault()
      window.scrollTo(0,0)
    }

    const [ backToTopBtnActive, setBackToTopBtnActive ] = useState(false);

    useEffect(() => {
        const updatePosition = () => {
          if(window.pageYOffset > 600) { 
            setBackToTopBtnActive(true);
          } else {
            setBackToTopBtnActive(false)
          }
        }
        window.addEventListener("scroll", updatePosition);
        updatePosition();
        return () => window.removeEventListener("scroll", updatePosition);
      }, []);

    

    return ( <>
        { backToTopBtnActive  
            ? <div className="fixed-action-btn" id="back-to-top-btn" >
                <i className="bi bi-arrow-up-circle-fill" onClick={scrollToTop}></i>
              </div>  
            : null
        } </>)
}