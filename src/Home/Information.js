import React, { useState } from 'react';
import '../styles/Information.css';
import { FaArrowLeft, FaUserPlus, FaCheck, FaRegCopy } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import BottomNavbar from '../components/BottomNavbar';

const Information = () => {
  const [copied, setCopied] = useState(false);
  const invitationLink = "https://kheti-bazar.vercel.app/";

  const handleCopy = () => {
    navigator.clipboard.writeText(invitationLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <motion.div
        className="info-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="info-header">
          <button className="back-button" aria-label="Go back">
            <FaArrowLeft />
          </button>
          <h1 className="info-title">Share & Earn</h1>
        </div>

        <motion.div className="info-card 3d-card" whileHover={{ scale: 1.02 }}>
          <motion.div
            className="info-icon"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          >
            <FaUserPlus size={36} color="#10b981" />
          </motion.div>

          <div className="info-details">
            <p className="info-label">Your Referral Link</p>
            <a
              href={invitationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="info-link"
            >
              {invitationLink}
            </a>
          </div>

          <motion.button
            className={`copy-button ${copied ? 'copied' : ''}`}
            onClick={handleCopy}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.span
                  key="copied"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="copy-text"
                >
                  <FaCheck /> Copied!
                </motion.span>
              ) : (
                <motion.span
                  key="copy"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="copy-text"
                >
                  <FaRegCopy /> Copy Link
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>

        <div className="info-footer">
          <p>
            Invite your friends to join Kheti Bazar. Earn rewards every time someone signs up using your referral link!
          </p>
        </div>
      </motion.div>

      <BottomNavbar />
    </>
  );
};

export default Information;
