import React, { useMemo, useState } from 'react';

export default function Credit() {
  const [tab, setTab] = useState('options');
  const [emiInput, setEmiInput] = useState({ amount: '', rate: '', tenure: '' });

  const emi = useMemo(() => {
    const p = parseFloat(emiInput.amount);
    const r = parseFloat(emiInput.rate) / 1200; // monthly interest
    const n = parseInt(emiInput.tenure || '0', 10) * 12; // years to months
    if (!p || !r || !n) return 0;
    return Math.round((p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
  }, [emiInput]);

  return (
    <div className="banking-page">
      <div className="banking-card">
        <h1 className="banking-title">Credit Services</h1>
        <div className="banking-subtitle">Apply for loans, view cards, and check your credit score</div>

        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          <button className="secondary-btn" onClick={() => setTab('options')}>Options</button>
          <button className="secondary-btn" onClick={() => setTab('emi')}>EMI Calculator</button>
        </div>

        {tab === 'options' && (
          <div className="banking-form">
            <div className="form-row">
              <label>Account Number</label>
              <input placeholder="Enter account number" />
            </div>
            <div className="form-row">
              <label>Choose Service</label>
              <select>
                <option>Apply for Loan</option>
                <option>View Credit Card Info</option>
                <option>Check Credit Score</option>
              </select>
            </div>
            <div className="form-row">
              <label>Upload Documents (if applying for loan)</label>
              <input type="file" />
            </div>
            <div className="banking-actions">
              <button className="primary-btn">Proceed</button>
              <a className="back-home" href="/">Return to Home</a>
            </div>
          </div>
        )}

        {tab === 'emi' && (
          <div className="banking-form">
            <div className="form-row">
              <label>Loan Amount (₹)</label>
              <input type="number" value={emiInput.amount} onChange={(e) => setEmiInput({ ...emiInput, amount: e.target.value })} />
            </div>
            <div className="form-row">
              <label>Annual Interest Rate (%)</label>
              <input type="number" step="0.01" value={emiInput.rate} onChange={(e) => setEmiInput({ ...emiInput, rate: e.target.value })} />
            </div>
            <div className="form-row">
              <label>Tenure (Years)</label>
              <input type="number" value={emiInput.tenure} onChange={(e) => setEmiInput({ ...emiInput, tenure: e.target.value })} />
            </div>
            <div className="confirm-box">
              Estimated EMI: <strong>₹{emi.toLocaleString()}</strong>
            </div>
            <a className="back-home" href="/">Return to Home</a>
          </div>
        )}
      </div>
    </div>
  );
}



