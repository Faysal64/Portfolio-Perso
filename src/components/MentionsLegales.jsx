import React from 'react';
import '../styles/Footer.css';
import content from '../data/content.json';

function MentionsLegales() {
  const { legal, footer } = content;

  return (
    <div className="footer-container" style={{ paddingTop: '100px' }}>
      <h2>{legal.title}</h2>

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
  );
}

export default MentionsLegales;
