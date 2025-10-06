import React, { useState } from 'react';

export default function Deposits() {
  const [step, setStep] = useState('form');
  const [txnId, setTxnId] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [form, setForm] = useState({
    customerId: '',
    accountNumber: '',
    accountType: 'savings',
    amount: '',
    mode: 'cash',
    otp: ''
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const sendOtp = () => {
    setOtpSent(true);
    alert('OTP sent to your registered mobile number');
  };

  const submit = (e) => {
    e.preventDefault();
    if (!otpSent || !form.otp) {
      alert('Please verify OTP before submitting.');
      return;
    }
    const id = 'TXN' + Math.floor(100000 + Math.random() * 900000);
    setTxnId(id);
    setStep('done');
  };

  return (
    <div className="banking-page">
      <div className="banking-card">
        <h1 className="banking-title">Deposit Funds</h1>
        <div className="banking-subtitle">Enter deposit details and confirm with OTP</div>

        {step === 'form' && (
          <form className="banking-form" onSubmit={submit}>
            <div className="form-row">
              <label>Customer ID</label>
              <input name="customerId" value={form.customerId} onChange={onChange} required />
            </div>
            <div className="form-row">
              <label>Account Number</label>
              <input name="accountNumber" value={form.accountNumber} onChange={onChange} required />
            </div>
            <div className="form-row">
              <label>Account Type</label>
              <select name="accountType" value={form.accountType} onChange={onChange}>
                <option value="savings">Savings</option>
                <option value="current">Current</option>
              </select>
            </div>
            <div className="form-row">
              <label>Deposit Amount (₹)</label>
              <input type="number" name="amount" value={form.amount} onChange={onChange} required />
            </div>
            <div className="form-row">
              <label>Mode of Deposit</label>
              <select name="mode" value={form.mode} onChange={onChange}>
                <option value="cash">Cash</option>
                <option value="cheque">Cheque</option>
                <option value="online">Online</option>
              </select>
            </div>
            <div className="form-row">
              <label>OTP</label>
              <div style={{ display: 'flex', gap: 8 }}>
                <input name="otp" value={form.otp} onChange={onChange} placeholder="Enter OTP" />
                <button type="button" className="secondary-btn" onClick={sendOtp}>Send OTP</button>
              </div>
            </div>
            <div className="banking-actions">
              <button className="primary-btn" type="submit">Confirm Deposit</button>
              <a className="back-home" href="/">Return to Home</a>
            </div>
          </form>
        )}

        {step === 'done' && (
          <div className="confirm-box">
            <div><strong>Deposit Successful.</strong></div>
            <div>Transaction ID: <strong>{txnId}</strong></div>
            <a className="back-home" href="/">Return to Home</a>
          </div>
        )}
      </div>
    </div>
  );
}



