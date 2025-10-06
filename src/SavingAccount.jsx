import React, { useState } from 'react';

export default function SavingAccount() {
  const [done, setDone] = useState(false);
  const [appId, setAppId] = useState('');
  const [form, setForm] = useState({
    fullName: '', dob: '', address: '', phone: '', email: '',
    idProof: null, initialDeposit: '',
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
        <h1 className="banking-title">Savings Account</h1>
        <div className="banking-subtitle">Earn interest with easy access, debit card, and low minimum balance</div>

        {!done ? (
          <form className="banking-form" onSubmit={submit}>
            <div className="form-row"><label>Full Name</label><input name="fullName" value={form.fullName} onChange={onChange} required /></div>
            <div className="form-row"><label>Date of Birth</label><input type="date" name="dob" value={form.dob} onChange={onChange} required /></div>
            <div className="form-row"><label>Contact Phone</label><input name="phone" value={form.phone} onChange={onChange} required /></div>
            <div className="form-row"><label>Email</label><input type="email" name="email" value={form.email} onChange={onChange} required /></div>
            <div className="form-row"><label>Address</label><textarea name="address" value={form.address} onChange={onChange} rows="3" required /></div>
            <div className="form-row"><label>ID Proof (Aadhaar/PAN/Passport)</label><input type="file" name="idProof" onChange={onChange} accept=".pdf,.jpg,.jpeg,.png" required /></div>
            <div className="form-row"><label>Initial Deposit Amount (₹)</label><input type="number" name="initialDeposit" value={form.initialDeposit} onChange={onChange} required /></div>
            <div className="confirm-box">
              Interest Rate: <strong>3.5% p.a.</strong> • Free ATM/Debit Card • Low minimum balance
            </div>
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



