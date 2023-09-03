import React, {useEffect, useState} from "react"
import {MENU_ITEMS} from "../../constants"
import "./DynamicMenu.scss"


const DynamicMenu = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showDropdown, setShowDropdown] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(false)

    const [visibleMenu, setVisibleMenu] = useState([])
    const [nonVisibleMenu, setNonVisibleMenu] = useState([])
  
    useEffect(() => {
      // Update window width when the window is resized
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    useEffect(() => {
    let nav = document.querySelector(".navigation-menu")

    if (nav) {
        let width = nav.offsetWidth;
        let count= Math.floor(width/125) 
        if(count< MENU_ITEMS.length)
        {
          setShowDropdown(true);
          setVisibleMenu(MENU_ITEMS.slice(0, count)); // Display the first 4 items
          setNonVisibleMenu(MENU_ITEMS.slice(count)); // Store the remaining items
        }
        else {
          setShowDropdown(false);
          setVisibleMenu(MENU_ITEMS); // Display all items
          setNonVisibleMenu([]); // No items are hidden
        }
      }

     
    }, [windowWidth]);
    return (
        <div className="navigation-menu"  >
            {visibleMenu.map((item, index) => {
                return (
                    <div
                        key ={index} 
                        className ="menu-item">
                        {item}
                    </div>
                )
            })}
            {showDropdown ? (
            <div className="dropdown-menu-wrapper"
                onMouseEnter={() => setActiveDropdown(true)}
                onMouseLeave={() => setActiveDropdown(false)}
            >
                <div className="show-button">
                    MORE
                </div>
                {activeDropdown ? (
                    <div className="dropdown-menu">
                        {
                            nonVisibleMenu.map((item) => {
                                return (
                                    <div className="dropdown-menu-item">
                                        {item}
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : null} 
            </div>) : null}
        </div>
            
    )
}

export default DynamicMenu