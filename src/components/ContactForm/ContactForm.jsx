import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="contact-form-row">
        <div className="contact-form-row-copy-item">
          <p className="primary lg">Let’s Craft Ads That Convert</p>
        </div>
        <div className="contact-form-row-copy-item">
          <p className="primary sm">&copy; 2025</p>
        </div>
      </div>

      <div className="contact-form-row">
        <div className="contact-form-col">
          <div className="contact-form-header">
            <h3>Start a Conversation</h3>
            <p>
              Got a product that needs killer short-form ads? 
              Let’s talk about creating scroll-stopping content that hooks fast 
              and drives results.
            </p>
          </div>
        </div>

        <div className="contact-form-col">
          <div className="form-item">
            <input type="text" placeholder="Name" />
          </div>
          <div className="form-item">
            <input type="text" placeholder="Email" />
          </div>
          <div className="form-item">
            <textarea rows={6} placeholder="Tell us about your project" />
          </div>
          
          {/* Package Selection */}
          <div className="form-item">
            <p className="package-label">Select Package:</p>
            <div className="package-options">
              <div className="package-option">
                <input type="radio" name="package" id="standard" value="standard" />
                <label htmlFor="standard">Standard</label>
              </div>
              <div className="package-option">
                <input type="radio" name="package" id="pro" value="pro" />
                <label htmlFor="pro">Pro</label>
              </div>
              <div className="package-option">
                <input type="radio" name="package" id="epic" value="epic" />
                <label htmlFor="epic">Epic</label>
              </div>
            </div>
          </div>

          <div className="form-item">
            <button className="btn">Send Message</button>
          </div>
        </div>
      </div>
      
      {/* Full-width features section */}
      <div className="contact-features">
        <div className="feature-item">
          <p className="primary sm">Available for Brands & Agencies</p>
        </div>
        <div className="feature-item">
          <p className="primary sm">Working Worldwide</p>
        </div>
        <div className="feature-item">
          <p className="primary sm">Custom videos & UGC, built to convert</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;