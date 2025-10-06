import React, { useState } from 'react';

export default function CurrentAccount() {
  const [done, setDone] = useState(false);
  const [appId, setAppId] = useState('');
  const [form, setForm] = useState({
    businessName: '', businessProof: null, pan: '', gst: '', addressProof: null,
    contact: '', email: '', initialDeposit: ''
  });

  const onChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'file' ? files[0] : value }));
  };

  const submit = (e) => {
    e.preventDefault();
    setAppId('APP' + Math.floor(100000 + Math.random() * 900000));
    setDone(true);
  };

  return (
    <div className="banking-page">
      <div className="banking-card">
        <h1 className="banking-title">Current Account</h1>
        <div className="banking-subtitle">Unlimited transactions, overdraft facility, ideal for business use</div>

        {!done ? (
          <form className="banking-form" onSubmit={submit}>
            <div className="form-row"><label>Business Name</label><input name="businessName" value={form.businessName} onChange={onChange} required /></div>
            <div className="form-row"><label>PAN</label><input name="pan" value={form.pan} onChange={onChange} required /></div>
            <div className="form-row"><label>GST</label><input name="gst" value={form.gst} onChange={onChange} /></div>
            <div className="form-row"><label>Business Proof (Udyam/Registration)</label><input type="file" name="businessProof" onChange={onChange} accept=".pdf,.jpg,.jpeg,.png" required /></div>
            <div className="form-row"><label>Address Proof</label><input type="file" name="addressProof" onChange={onChange} accept=".pdf,.jpg,.jpeg,.png" required /></div>
            <div className="form-row"><label>Contact Phone</label><input name="contact" value={form.contact} onChange={onChange} required /></div>
            <div className="form-row"><label>Email</label><input type="email" name="email" value={form.email} onChange={onChange} required /></div>
            <div className="form-row"><label>Initial Deposit (optional)</label><input type="number" name="initialDeposit" value={form.initialDeposit} onChange={onChange} /></div>
            <div className="confirm-box">Business-friendly features with <strong>overdraft</strong> and <strong>unlimited transactions</strong>.</div>
            <div className="banking-actions">
              <button className="primary-btn" type="submit">Apply</button>
              <a className="back-home" href="/">Return to Home</a>
            </div>
          </form>
        ) : (
          <div className="confirm-box">
            <div><strong>Application Submitted.</strong></div>
            <div>Reference ID: <strong>{appId}</strong></div>
            <a className="back-home" href="/">Return to Home</a>
          </div>
        )}
      </div>
    </div>
  );
}



