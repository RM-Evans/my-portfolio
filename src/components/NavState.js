import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Resume from './pages/Resume/Resume';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';


function NavState() {
    // Using useState, set the default value for currentPage to 'About'
    const [currentPage, handlePageChange] = useState('About');

    // The renderPage method uses a switch statement to render the appropriate current page
    const renderPage = () => {
        switch (currentPage) {
            case 'About':
                return <About />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume />
            default:
                return <About />;
        }
    };

    return (
        <div>
            {/* Pass the state value and the setter as props to NavTabs */}
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} foobarbaz={123} />
            {/* Call the renderPage function passing in the currentPage */}
            <div>{renderPage(currentPage)}</div>
        </div>
    );
}

export default NavState;
