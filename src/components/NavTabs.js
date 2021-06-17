import React, { useEffect, useState } from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import menuIcon from '@iconify-icons/heroicons-outline/menu';

// Props are passed through our functional component.
function NavTabs(props) {
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const hamburgerToggle = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

    const [hamburgerShows, setHamburgerShows] = useState(window.innerWidth < 500);

    const updateMedia = () => {
        setHamburgerShows(window.innerWidth < 500);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    }, []);

    const hamburgerButton = <button onClick={hamburgerToggle}>{hamburgerOpen ? "Close" : <Icon icon={menuIcon} />}</button>;

    // const navShows = window.innerWidth > 500;

    return (

        <div className="hamburger">
            {hamburgerShows ? hamburgerButton : ""}


            <ul className={` menuNav ${hamburgerOpen ? " showMenu" : ""}`}>
                {tabs.map((tab) => (
                    <li className={tab.toLowerCase() + ' nav-item sweep-to-right ' + (props.currentPage === tab ? 'active' : '')} key={tab}>
                        <a
                            href={'#' + tab.toLowerCase()}
                            // Whenever a tab is clicked on,
                            // the current page is set through the handlePageChange props.
                            onClick={() => props.handlePageChange(tab)}
                            className={
                                props.currentPage === tab ? 'nav-link active' : 'nav-link'
                            }
                        >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
            {/* nav nav-tabs */}
            {/* <ul className={`menuNav ${hamburgerOpen ? " showMenu" : ""}`}>
                <li>test</li>
                <li>test</li>
            </ul> */}


            {/* MY DESKTOP NAVIGATION */}
            {hamburgerShows ? "" : <ul className={`nav nav-tabs`}>
                {tabs.map((tab) => (
                    <li className={tab.toLowerCase() + ' nav-item sweep-to-right ' + (props.currentPage === tab ? 'active' : '')} key={tab}>
                        <a
                            href={'#' + tab.toLowerCase()}
                            // Whenever a tab is clicked on,
                            // the current page is set through the handlePageChange props.
                            onClick={() => props.handlePageChange(tab)}
                            className={
                                props.currentPage === tab ? 'nav-link active' : 'nav-link'
                            }
                        >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>}



        </div>

    );
}

export default NavTabs;


// npm install --save-dev @iconify/react @iconify-icons/heroicons-outline
