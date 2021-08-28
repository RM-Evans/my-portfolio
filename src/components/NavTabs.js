import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import menuIcon from '@iconify-icons/heroicons-outline/menu';
// import circleX from '@iconify-icons/akar-icons/circle-x';

// Props are passed through our functional component.
function NavTabs(props) {
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const hamburgerToggle = (tab) => {
        // console.log(tab.target.innerHTML);
        // on click tab, then close hamburger
        props.handlePageChange(tab.target.innerHTML);
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

    const hamburgerButton = <div className="hamburgerContainer">{hamburgerOpen ? null : <Icon icon={menuIcon} onClick={hamburgerToggle} height={45} />}</div>;
    {/* <button onClick={hamburgerToggle} */ }


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
                            //click events use their own scope
                            onClick={(e) => hamburgerToggle(e)}
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



