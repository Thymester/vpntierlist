import React from 'react';
import './TierList.css';

const TierList = () => {
  const tiers = ['A', 'B', 'C', 'D', 'Blacklist'];

  const vpnData = {
    A: ['TorGuard (82.25)', 'SurfShark (77)', 'NordVPN (76.25)', 'Hide.Me (75)', 'ProtonVPN (72)'],
    B: ['Private Internet Access (68.5)', 'VyprVPN (62.5)', 'ExpressVPN (61)'],
    C: ['IvacyVPN (59)', 'CactusVPN (56.5)', 'Mullvad (56)', 'PureVPN (56)', 'Cyberghost (55)', 'AdGuard (55)', 'AirVPN (51.5)', 'AzireVPN (50)'],
    D: ['IPVanish (49)', 'oVPN (46)', 'VPN Unlimited (44)', 'Zenmate (47.5)', 'HideIPVPN (43.5)', 'HolaVPN (45.5)', 'BraveVPN (32)', 'AvastVPN (24)'],
    Blacklist: ['Windscribe (62)', 'iVPN (40)']
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
        <div className="intro-text">
        <img
          src="https://images.squarespace-cdn.com/content/v1/624ca49488b09931099fa0be/88fe6ed1-78c3-4d62-91e6-88498fb419f5/ArmyHat_make_this_image_into_a_discord_logo_but_more_hacker_the_93d0d4f1-aa2e-4a10-a289-36e31e7a1fdc.png?format=100w 100w, https://images.squarespace-cdn.com/content/v1/624ca49488b09931099fa0be/88fe6ed1-78c3-4d62-91e6-88498fb419f5/ArmyHat_make_this_image_into_a_discord_logo_but_more_hacker_the_93d0d4f1-aa2e-4a10-a289-36e31e7a1fdc.png?format=300w 300w, https://images.squarespace-cdn.com/content/v1/624ca49488b09931099fa0be/88fe6ed1-78c3-4d62-91e6-88498fb419f5/ArmyHat_make_this_image_into_a_discord_logo_but_more_hacker_the_93d0d4f1-aa2e-4a10-a289-36e31e7a1fdc.png?format=500w 500w, https://images.squarespace-cdn.com/content/v1/624ca49488b09931099fa0be/88fe6ed1-78c3-4d62-91e6-88498fb419f5/ArmyHat_make_this_image_into_a_discord_logo_but_more_hacker_the_93d0d4f1-aa2e-4a10-a289-36e31e7a1fdc.png?format=750w 750w, https://images.squarespace-cdn.com/content/v1/624ca49488b09931099fa0be/88fe6ed1-78c3-4d62-91e6-88498fb419f5/ArmyHat_make_this_image_into_a_discord_logo_but_more_hacker_the_93d0d4f1-aa2e-4a10-a289-36e31e7a1fdc.png?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/624ca49488b09931099fa0be/88fe6ed1-78c3-4d62-91e6-88498fb419f5/ArmyHat_make_this_image_into_a_discord_logo_but_more_hacker_the_93d0d4f1-aa2e-4a10-a289-36e31e7a1fdc.png?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/624ca49488b09931099fa0be/88fe6ed1-78c3-4d62-91e6-88498fb419f5/ArmyHat_make_this_image_into_a_discord_logo_but_more_hacker_the_93d0d4f1-aa2e-4a10-a289-36e31e7a1fdc.png?format=2500w 2500w"
          alt="Discord Logo"
          className="discord-logo"
        />
        <h3 className="main-heading">
          Why is Tom Spark the best VPN resource?
        </h3>
        <p>
          No sponsored advertisements: ✅<br />
          No Youtube ads on ANY videos: ✅<br />
          Transparent + community driven rating system: ✅<br />
          Responsive on Discord: ✅<br />
          8+ Years Reviewing VPNs: ✅<br />
          (Affiliate Links on this site directly support me, but are completely optional)
        </p>
        <p>—————————————————————————————</p>
      </div>
      <div className="intro-text">
      <h3 className='main-heading'>Tom’s Favorite Products:
      </h3>
          <p>
          Best Anti-Doxx Tool: Incogni code "tomspark" extra 10% off!
          <br />
          Get Cheaper Streaming services: Gamsgo code "spark" 10% off!
          <br />
          Want a smart display to show BTC prices or other cool info? Watch this review.
        </p>
        <p>—————————————————————————————</p>
      </div>
      <div className="intro-text">
        <h3>VPN TIER LIST 2024 6.0</h3>
        <p>The tier list reflects latest scores as scored <a href="https://docs.google.com/spreadsheets/d/1BvDJng1YUUQPX6QvbGwEi1Gr-CsnWnqpqaNHy91Og9w/edit" target="_blank" rel="noopener noreferrer">here</a>.</p>
        <p>
          The numbers usually include a link to a video review, but the tier list changes enough it’s impossible to keep all reviews up to date (since I am a one man army). This list will update the scores with videos as they come out.
        </p>
        <p>—————————————————————————————</p>
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
    </div>
  );
};

export default TierList;
