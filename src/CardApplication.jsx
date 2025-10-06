import React, { useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const cardNames = {
  hni: 'HNI Emperio Metal Debit Card',
  business: 'Business Debit Card (Platinum)',
  empower: 'RuPay Empower Her Debit Card',
  classic: 'Classic Debit Card (Rupay / Visa)',
  qsparc: 'Qsparc Debit Card (Rupay)',
  platinum: 'Platinum Debit Card (Rupay / Visa/Master)'
};

export default function CardApplication() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const title = useMemo(() => cardNames[slug] || 'Card Application', [slug]);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ minHeight: '100vh', background: '#f5f6fa', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '40px 16px', width: '100%' }}>
      <div style={{ width: 760, maxWidth: '100%', background: '#fff', borderRadius: 18, boxShadow: '0 18px 50px rgba(13,71,161,0.18)', overflow: 'hidden', margin: '0 auto', border: '1px solid #e7eefb' }}>
        <div style={{ padding: '20px 28px', background: 'linear-gradient(90deg,#1976d2 0%, #0057b7 100%)', color: '#fff' }}>
          <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700 }}>{title}</h2>
          <p style={{ margin: '6px 0 0 0', opacity: 0.9 }}>Please fill in all details to apply.</p>
        </div>
        {!submitted ? (
        <form
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          style={{ padding: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, background: 'linear-gradient(180deg,#ffffff 0%, #f7fbff 100%)' }}
        >
          <div>
            <label>Full Name *</label>
            <input type="text" required style={inputStyle} placeholder="Enter full name" />
          </div>
          <div>
            <label>Age *</label>
            <input type="number" min={18} max={120} required style={inputStyle} placeholder="18" />
          </div>
          <div>
            <label>Gender *</label>
            <select required style={inputStyle}>
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Non-binary</option>
              <option>Prefer not to say</option>
            </select>
          </div>
          <div>
            <label>Phone Number *</label>
            <input type="tel" required style={inputStyle} placeholder="+91 98765 43210" />
          </div>
          <div>
            <label>Email *</label>
            <input type="email" required style={inputStyle} placeholder="name@example.com" />
          </div>
          <div>
            <label>Country *</label>
            <input type="text" required style={inputStyle} placeholder="India" />
          </div>
          <div>
            <label>State/Region *</label>
            <input type="text" required style={inputStyle} placeholder="Maharashtra" />
          </div>
          <div>
            <label>City *</label>
            <input type="text" required style={inputStyle} placeholder="Mumbai" />
          </div>
          <div style={{ gridColumn: '1 / span 2' }}>
            <label>Address *</label>
            <input type="text" required style={inputStyle} placeholder="House No, Street, Area" />
          </div>
          <div>
            <label>National ID Type *</label>
            <select required style={inputStyle}>
              <option value="">Select</option>
              <option>Aadhaar</option>
              <option>PAN</option>
              <option>Passport</option>
              <option>Voter ID</option>
              <option>Driving Licence</option>
            </select>
          </div>
          <div>
            <label>National ID Number *</label>
            <input type="text" required style={inputStyle} placeholder="Enter ID number" />
          </div>
          <div>
            <label>Employment Status *</label>
            <select required style={inputStyle}>
              <option value="">Select</option>
              <option>Employed</option>
              <option>Self-employed</option>
              <option>Student</option>
              <option>Unemployed</option>
              <option>Retired</option>
            </select>
          </div>
          <div>
            <label>Monthly Income (₹) *</label>
            <input type="number" required style={inputStyle} placeholder="50000" />
          </div>
          <div style={{ gridColumn: '1 / span 2' }}>
            <label>Captcha *</label>
            <div style={{ display: 'flex', gap: 12 }}>
              <input type="text" style={{ ...inputStyle, flex: 1 }} placeholder="Type the characters" />
              <button type="button" style={secondaryButtonStyle}>Refresh</button>
            </div>
          </div>
          <div style={{ gridColumn: '1 / span 2', display: 'flex', justifyContent: 'space-between', gap: 12, marginTop: 8 }}>
            <button type="button" onClick={() => navigate(-1)} style={secondaryButtonStyle}>Back</button>
            <div style={{ display: 'flex', gap: 12 }}>
              <button type="reset" style={secondaryButtonStyle}>Clear</button>
              <button type="submit" style={primaryButtonStyle}>Apply for {title}</button>
            </div>
          </div>
        </form>
        ) : (
          <div style={{ padding: 32, textAlign: 'center', background: 'linear-gradient(180deg,#ffffff 0%, #f6fff9 100%)' }}>
            <div style={{ fontSize: 54, marginBottom: 12 }}>✅</div>
            <h3 style={{ margin: '0 0 8px 0', color: '#2e7d32' }}>Application Submitted</h3>
            <p style={{ margin: 0, color: '#2e7d32', fontWeight: 600 }}>User successfully applied and you will receive an email regarding this.</p>
            <p style={{ margin: '8px 0 0 0', color: '#2e7d32' }}>If any queries, contact bank.</p>
            <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center', gap: 12 }}>
              <button onClick={() => navigate('/')} style={primaryButtonStyle}>Go to Home</button>
              <button onClick={() => setSubmitted(false)} style={secondaryButtonStyle}>Apply Another</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px 12px',
  borderRadius: 10,
  border: '1px solid #d6d9de',
  fontSize: 16,
  boxSizing: 'border-box'
};

const primaryButtonStyle = {
  background: 'linear-gradient(90deg,#1976d2,#0b5cc4)',
  color: '#fff',
  border: 'none',
  padding: '12px 22px',
  borderRadius: 12,
  fontWeight: 700,
  fontSize: 16,
  cursor: 'pointer'
};

const secondaryButtonStyle = {
  background: '#eef3fb',
  color: '#0b5cc4',
  border: '1px solid #cfe0fb',
  padding: '12px 20px',
  borderRadius: 12,
  fontWeight: 600,
  fontSize: 16,
  cursor: 'pointer'
};


