import React from 'react';
import './About.css';
import Footer from './Footer';

const About = () => {
  return (
    <div className="about-container">
      <h2>WHO IS TOM?</h2>
      <p>
        I’m a computer geek who loves gadgets, video games, fantasy books, and exercise. In my spare time I love to tinker,
        create, and to prod. I love to do 3d printing, advanced smart home integrations, and I love anything related to security and privacy.
      </p>
      
      <h2>HOW DOES THIS WEBSITE MAKE MONEY?</h2>
      <p>
        I make money through affiliate links which you click on voluntarily. I don’t accept sponsorships on the channel,
        and only recommend products I use everyday.
      </p>
      
      <h2>WHY DO YOU REVIEW VPNS?</h2>
      <p>
        I’ve always been interested in internet privacy and software. When it comes to VPNs, there is a lot of misinformation
        out there that makes it confusing for users to pick VPNs. There are several websites that review VPNs that are owned
        by the VPN company itself, and there are now several VPN review channels on Youtube that are done by paid voice actors.
      </p>
      
      <h2>MORE QUESTIONS?</h2>
      <p>
        Write me a message on Discord! Don’t PM me first, and ask to chat with me publicly about what you wish to discuss.
      </p>
    </div>
  );
};

export default About;
