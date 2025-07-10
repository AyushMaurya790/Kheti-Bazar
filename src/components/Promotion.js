import React from 'react';
import '../styles/Promotion.css';
import { FaMedal } from 'react-icons/fa';
import BottomNavbar from './BottomNavbar';

function Promotion() {
  const inviteLink = 'https://kheti-xbazardhxz.top/home/register?invite=9GQ1GQV7';

  const handleCopy = () => {
    navigator.clipboard.writeText(inviteLink);
    alert('Link copied to clipboard!');
  };

  return (
    <>
      <div className="promotion-wrapper">
        <h2 className="promotion-title">Promotion</h2>

        {/* Stats Box */}
        <div className="stats-box">
          <div>
            <p>Total People</p>
            <h3>1674</h3>
          </div>
          <div>
            <p>Total Rebate</p>
            <h3>₹129516</h3>
          </div>
        </div>

        {/* Invite Link */}
        <div className="invite-box">
          <div className="invite-label">🎉 Invitation Link</div>
          <div className="invite-link">
            <span>{inviteLink}</span>
            <button onClick={handleCopy}>Copy link</button>
          </div>
        </div>

        {/* First Level */}
        <div className="first-level">
          <FaMedal className="medal-icon" />
          <span>First Level</span>
          <a href="#" className="view-more">View more &gt;</a>
        </div>

        {/* Rebate Summary Box */}
        <div className="rebate-box">
          <div>
            <h4>10%</h4>
            <p>Rebate ratio</p>
          </div>
          <div>
            <h4>₹129516.00</h4>
            <p>Rebate</p>
          </div>
          <div>
            <h4>1674</h4>
            <p>Quantity</p>
          </div>
        </div>

        {/* New Commission Info Section */}
        <div className="commission-info">
          <p>
            You can invite <strong>A</strong> to become your first-level team member, then <strong>A</strong> invites <strong>B</strong> to become your second-level team member, and <strong>B</strong> invites <strong>C</strong> to become your third-level team member.
          </p>

          <ul className="commission-list">
            <li><strong>A</strong> invests in Product 1 — You get commission <span className="commission-amount">₹80</span></li>
            <li><strong>B</strong> invests in Product 1 — You get commission <span className="commission-amount">₹0</span></li>
            <li><strong>C</strong> invests in Product 1 — You get commission <span className="commission-amount">₹0</span></li>
          </ul>

          <p className="highlight">
            💡 The main sources of high commissions: The more friends you invite and the higher their investment, the more commissions you can earn.
          </p>
        </div>
      </div>

      <BottomNavbar />
    </>
  );
}

export default Promotion;
