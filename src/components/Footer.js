import React from 'react';

import { Icon, InlineIcon } from '@iconify/react';
import githubAlt from '@iconify-icons/fa-brands/github-alt';
import instagramIcon from '@iconify-icons/il/instagram';
import linkedinIcon from '@iconify-icons/cib/linkedin';

const Footer = () => {
    return <footer>
        <div class="footer-container">
            <div class="footer-links">
                <a href="https://github.com/RM-Evans" >{<Icon icon={githubAlt} width="80" height="80" />}</a>
                <a href="https://www.instagram.com/michaelucky13/">{<Icon icon={instagramIcon} width="74px" height="74px" color="#eb3f98" />}</a>
                <a href="https://www.linkedin.com/in/richard-michael-evans-b33912126" class="linked-in-icon">{<Icon icon={linkedinIcon} width="60px" height="60px" color="#0073B1" />}</a>
            </div>
        </div>

    </footer>;
};

export default Footer;


