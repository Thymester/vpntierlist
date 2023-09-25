import React from 'react';
import './TierList.css';

const TierList = () => {
  const tiers = ['A', 'B', 'C', 'D', 'Blacklist'];

  const vpnData = {
    A: ['TorGuard (82.25)', 'SurfShark (77)', 'NordVPN (76.25)', 'Hide.Me (75)', 'ProtonVPN (72)'],
    B: ['Private Internet Access (68.5)', 'VyprVPN (62.5)', 'ExpressVPN (61)'],
    C: ['IvacyVPN (59)', 'CactusVPN (56.5)', 'Mullvad (56)', 'PureVPN (56)', 'Cyberghost (55)', 'AdGuard (55)', 'AirVPN (51.5)', 'AzireVPN (50)'],
    D: ['IPVanish (49)', 'oVPN (46)', 'VPN Unlimited (44)', 'Zenmate (47.5)', 'HideIPVPN (43.5)', 'HolaVPN (45.5)', 'BraveVPN (32)', 'AvastVPN (24)'],
    Blacklist: ['Windscribe (62)', 'iVPN (40)'],
  };

  const vpnLinks = {
    'TorGuard (82.25)': 'https://torguard.net/aff/TomSpark20223090.php',
    'SurfShark (77)': 'https://surfshark.com/pricing?slug=incogni&frequency=24&coupon=surfsharkdeal&transaction_id=102f8c78ec703f6f36bcd62d8f2da5&offer_id=1389&affiliate_id=9447&source=&aff_sub=&recurring_goal_id=1381',
    'NordVPN (76.25)': 'https://nordvpn.com/?utm_term&utm_content',
    'Hide.Me (75)': 'https://hide.me/en/?friend=tomspark',
    'ProtonVPN (72)': 'https://account.protonvpn.com/pricing?language=en&hfp=true&url_id=0&phfp=true',
    'Private Internet Access (68.5)': 'https://www.privateinternetaccess.com/offer/save-now-savelift?coupon=2Y2M&brand=vpntierl&noForceCondition=true&aff_id=18512&source=gen',
    'VyprVPN (62.5)': 'https://www.vyprvpn.com/',
    'ExpressVPN (61)': 'https://www.expressvpn.com/',
    'IvacyVPN (59)': 'https://www.ivacy.com/',
    'CactusVPN (56.5)': 'https://www.cactusvpn.com/',
    'Mullvad (56)': 'https://mullvad.net/en',
    'PureVPN (56)': 'https://www.purevpn.com/',
    'Cyberghost (55)': 'https://www.cyberghostvpn.com/en_US/',
    'AdGuard (55)': 'https://adguard-vpn.com/en/welcome.html',
    'AirVPN (51.5)': 'https://airvpn.org/?referred_by=210424',
    'AzireVPN (50)': 'https://www.azirevpn.com/',
    'IPVanish (49)': 'https://www.ipvanish.com/',
    'oVPN (46)': 'https://www.ovpn.com/en',
    'VPN Unlimited (44)': 'https://www.vpnunlimited.com/',
    'Zenmate (47.5)': 'https://zenmate.com/',
    'HideIPVPN (43.5)': 'https://www.hideipvpn.com/',
    'HolaVPN (45.5)': 'https://hola.org/',
    'BraveVPN (32)': 'https://brave.com/firewall-vpn/',
    'AvastVPN (24)': 'https://www.avast.com/en-us/secureline-vpn#pc',
  };

  return (
    <div className="tier-list">
        <img
          src="https://images.squarespace-cdn.com/content/v1/624ca49488b09931099fa0be/88fe6ed1-78c3-4d62-91e6-88498fb419f5/ArmyHat_make_this_image_into_a_discord_logo_but_more_hacker_the_93d0d4f1-aa2e-4a10-a289-36e31e7a1fdc.png?format=100w 100w, https://images.squarespace-cdn.com/content/v1/624ca49488b09931099fa0be/88fe6ed1-78c3-4d62-91e6-88498fb419f5/ArmyHat_make_this_image_into_a_discord_logo_but_more_hacker_the_93d0d4f1-aa2e-4a10-a289-36e31e7a1fdc.png?format=300w 300w, https://images.squarespace-cdn.com/content/v1/624ca49488b09931099fa0be/88fe6ed1-78c3-4d62-91e6-88498fb419f5/ArmyHat_make_this_image_into_a_discord_logo_but_more_hacker_the_93d0d4f1-aa2e-4a10-a289-36e31e7a1fdc.png?format=500w 500w, https://images.squarespace-cdn.com/content/v1/624ca49488b09931099fa0be/88fe6ed1-78c3-4d62-91e6-88498fb419f5/ArmyHat_make_this_image_into_a_discord_logo_but_more_hacker_the_93d0d4f1-aa2e-4a10-a289-36e31e7a1fdc.png?format=750w 750w, https://images.squarespace-cdn.com/content/v1/624ca49488b09931099fa0be/88fe6ed1-78c3-4d62-91e6-88498fb419f5/ArmyHat_make_this_image_into_a_discord_logo_but_more_hacker_the_93d0d4f1-aa2e-4a10-a289-36e31e7a1fdc.png?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/624ca49488b09931099fa0be/88fe6ed1-78c3-4d62-91e6-88498fb419f5/ArmyHat_make_this_image_into_a_discord_logo_but_more_hacker_the_93d0d4f1-aa2e-4a10-a289-36e31e7a1fdc.png?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/624ca49488b09931099fa0be/88fe6ed1-78c3-4d62-91e6-88498fb419f5/ArmyHat_make_this_image_into_a_discord_logo_but_more_hacker_the_93d0d4f1-aa2e-4a10-a289-36e31e7a1fdc.png?format=2500w 2500w"
          alt="Discord Logo"
          className="discord-logo"
        />
        <img 
          src="https://images.squarespace-cdn.com/content/v1/624ca49488b09931099fa0be/d005807c-9572-4b1e-b49d-2fc018b4d4ee/chrome_N7rlpgXkbO.png?format=2500w"
          alt="Tom Comparison Chart"
          className="tom-comp-chart"
          width="800"
          height="600"
        />
        <div className="top-container">
        <div className="tom-spark-container">
        <h3 className="main-heading">
          Why is Tom Spark the best VPN resource?
        </h3>
        <p>
        -We don’t believe in invasive advertisements, so we don’t use any YouTube ads for monetization. <br></br><br></br>
        -We don’t believe in asking for donations for low quality content. All content is 100% free—that means no paid videos and no Patreon. <br></br><br></br>
        -You don’t have to pay for memberships. All channel members get free emojis and roles in the discord. <br></br><br></br>
        -We don’t use expensive third party merch services that source products from China. <br></br><br></br>
        -We don’t accept paid sponsors that could jeopardize our review process. <br></br><br></br>
        -Only high quality products that met our strict rating criteria are monetized through optional affiliate links. <br></br><br></br>
        </p>
      </div>
      <div className="tom-spark-container">
      <h3 className='main-heading'>Tom’s Favorite Products:
      </h3>
          <p>
          Best Anti-Doxx Tool: <a href="https://supporttomspark.com/incogni" target="_blank" rel="noopener noreferrer">Incogni</a> extra 10% off!
          <br />
          Get Cheaper Streaming services: <a href="https://supporttomspark.com/gamsgo" target="_blank" rel="noopener noreferrer">Gamsgo</a> code "spark" 10% off!
          <br />
          Want a smart display to show BTC prices or other cool info? Watch <a href="https://www.youtube.com/watch?pp=ygUQdGlkYnl0IHRvbSBzcGFyaw%3D%3D&t=57s&v=XEPqLqHweDA" target="_blank" rel="noopener noreferrer">this review</a>.
        </p>
      </div>
      </div>
      <div className="tierlist-container">
      <div className="tom-spark-container">
        <h3>VPN TIER LIST 2024 6.0</h3>
        <p>The tier list reflects latest scores as scored <a href="https://docs.google.com/spreadsheets/d/1BvDJng1YUUQPX6QvbGwEi1Gr-CsnWnqpqaNHy91Og9w/edit" target="_blank" rel="noopener noreferrer">here</a>.</p>
        <p>
          The numbers usually include a link to a video review, but the tier list changes enough it’s impossible to keep all reviews up to date (since I am a one man army). This list will update the scores with videos as they come out.
        </p>
      </div>
      <div className="tiers-container">
        {tiers.map((tier, index) => (
          <div className="tier" key={index}>
            <h2>{tier}</h2>
            <div className="items">
              {vpnData[tier].map((vpn, vpnIndex) => (
                <div className="vpn-item" key={vpnIndex}>
                  <a href={vpnLinks[vpn]} target="_blank" rel="noopener noreferrer" className="vpn-link">
                    {vpn}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="blacklist-container">
      <h3>What does Blacklist mean?</h3>
      <p>These VPNs are separated and penalized with a point reduction since they have harassed or spread misinformation about the tier list. <br /> <br />
         Any VPN listed here can appeal to be re-instated by contacting me on Twitter or Discord.
      </p>
      </div>
      </div>
      <div className="updates-container">
        <h3>VPN Tier List 6.0 Updates - 8/2023:</h3>
        <ul>
          <li>+Added requirement for 5+ Netflix regions supported</li>
          <li>+Added requirement for automatic compatibility with Netflix / other services</li>
          <li>+Changed Review process to include half points, 0 points, and revision to “Company’s response to Criticism”, based on how VPNs respond to negative reviews</li>
          <li>+Added multiple new features that are becoming popular in VPNs that increase the value proposition such as these below:</li>
          <ul>
            <li>VPN routers</li>
            <li>Cloud apps</li>
            <li>Password managers</li>
            <li>Encrypted Storage</li>
            <li>Encrypted Email</li>
            <li>Antivirus</li>
            <li>Data breach alerts</li>
            <li>Data broker removal tools</li>
            <li>Email Alias features</li>
          </ul>
        </ul>
        
        <h3>VPN Tier List 5.0 Updates - 6/2023:</h3>
        <ul>
          <li>+Added requirement for v2ray support (an important proxy that works great in censored countries)</li>
          <li>+Added requirement for live chat since more VPNs are supporting it again</li>
          <li>+Added requirements for PC GUI since users find ugly or unwieldy apps annoying</li>
        </ul>
      </div>
    </div>
  );
};

export default TierList;
