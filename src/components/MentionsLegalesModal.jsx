import React from 'react';
import '../styles/MentionsModal.css';
import content from '../data/content.json';

function MentionsLegalesModal({ isOpen, onClose }) {
  const { legal, footer } = content;

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{legal.title}</h2>
          <button className="modal-close" onClick={onClose} aria-label="Fermer">
            &times;
          </button>
        </div>

        <div className="footer-text">
          <p><strong>{legal.editor} :</strong> {footer.author}</p>
          <p><strong>{legal.publisher} :</strong> {footer.author}</p>
          <p><strong>{legal.emailLabel} :</strong> {footer.email}</p>
          <p><strong>{legal.hosting} :</strong> {legal.hostingDetail}</p>
          <p><strong>{legal.dataUsage} :</strong> {legal.dataUsageDetail}</p>
          <p><strong>{legal.intellectual} :</strong> {legal.intellectualDetail}</p>
          <p><strong>{legal.terms} :</strong> {legal.termsDetail}</p>
        </div>
      </div>
    </div>
  );
}

export default MentionsLegalesModal;
