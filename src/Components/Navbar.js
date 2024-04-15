import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({isLibOpen, setIsLibOpen}) => {
    const handleLibClick = () => {
        setIsLibOpen((isLibOpen) => !isLibOpen);
    };

    return(
        <div>
            <nav>
                <h1>FONERGE MUSIC ♫</h1>
                <button onClick={handleLibClick}>
                    <FontAwesomeIcon
                        icon={isLibOpen ? faChevronLeft : faBars}
                        size="2x" 
                    />
                </button>
            </nav>
        </div>
    );
};

export default Navbar;