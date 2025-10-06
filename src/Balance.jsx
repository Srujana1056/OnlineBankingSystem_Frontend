import React, { useState } from 'react';

export default function Balance() {
  const [authenticated, setAuthenticated] = useState(false);
  const [form, setForm] = useState({ accountNumber: '', password: '', otp: '' });

  const authenticate = () => {
    if (form.accountNumber && (form.password || form.otp)) {
      setAuthenticated(true);
    } else {
      alert('Enter account number and password or OTP');
    }
  };

  return (
    <div className="banking-page">
      <div className="banking-card">
        <h1 className="banking-title">Check Bank Balance</h1>
        <div className="banking-subtitle">Authenticate to view your account details</div>

        {!authenticated ? (
          <div className="banking-form">
            <div className="form-row">
              <label>Account Number</label>
              <input value={form.accountNumber} onChange={(e)=>setForm({...form, accountNumber: e.target.value})} />
            </div>
            <div className="form-row">
              <label>Password (or request OTP)</label>
              <input type="password" value={form.password} onChange={(e)=>setForm({...form, password: e.target.value})} />
            </div>
            <div className="form-row">
              <label>OTP</label>
              <input value={form.otp} onChange={(e)=>setForm({...form, otp: e.target.value})} placeholder="Enter OTP if requested" />
            </div>
            <div className="banking-actions">
              <button className="secondary-btn" onClick={()=>alert('OTP sent to your mobile')}>Send OTP</button>
              <button className="primary-btn" onClick={authenticate}>View Balance</button>
              <a className="back-home" href="/">Return to Home</a>
            </div>
          </div>
        ) : (
          <div className="confirm-box">
            <div><strong>Available Balance:</strong> ₹1,24,560.50</div>
            <div><strong>Account Type:</strong> Savings</div>
            <div style={{ marginTop: 12 }}><strong>Last Transactions</strong></div>
            <ul>
              <li>IMPS Credit ₹5,000 (TXN823451)</li>
              <li>UPI Debit ₹250 (TXN234551)</li>
              <li>ATM Withdrawal ₹2,000 (TXN923144)</li>
            </ul>
            <a className="back-home" href="/">Return to Home</a>
          </div>
        )}
      </div>
    </div>
  );
}



