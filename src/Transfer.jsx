import React, { useState } from 'react';

export default function Transfer() {
  const [otpSent, setOtpSent] = useState(false);
  const [done, setDone] = useState(false);
  const [txnId, setTxnId] = useState('');
  const [form, setForm] = useState({
    fromAccount: '',
    beneficiaryAccount: '',
    ifsc: '',
    amount: '',
    mode: 'NEFT',
    otp: ''
  });

  const onChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const sendOtp = () => { setOtpSent(true); alert('OTP sent for transfer confirmation'); };

  const submit = (e) => {
    e.preventDefault();
    if (!otpSent || !form.otp) return alert('Please verify OTP');
    setTxnId('TXN' + Math.floor(100000 + Math.random() * 900000));
    setDone(true);
  };

  return (
    <div className="banking-page">
      <div className="banking-card">
        <h1 className="banking-title">Bank to Bank Transfer</h1>
        <div className="banking-subtitle">Transfer money securely with OTP confirmation</div>

        {!done ? (
          <form className="banking-form" onSubmit={submit}>
            <div className="form-row">
              <label>From Account Number</label>
              <input name="fromAccount" value={form.fromAccount} onChange={onChange} required />
            </div>
            <div className="form-row">
              <label>Beneficiary Account Number</label>
              <input name="beneficiaryAccount" value={form.beneficiaryAccount} onChange={onChange} required />
            </div>
            <div className="form-row">
              <label>IFSC Code</label>
              <input name="ifsc" value={form.ifsc} onChange={onChange} required />
            </div>
            <div className="form-row">
              <label>Transfer Amount (₹)</label>
              <input type="number" name="amount" value={form.amount} onChange={onChange} required />
            </div>
            <div className="form-row">
              <label>Mode of Transfer</label>
              <select name="mode" value={form.mode} onChange={onChange}>
                <option value="NEFT">NEFT</option>
                <option value="RTGS">RTGS</option>
                <option value="IMPS">IMPS</option>
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
              <button className="primary-btn" type="submit">Transfer</button>
              <a className="back-home" href="/">Return to Home</a>
            </div>
          </form>
        ) : (
          <div className="confirm-box">
            <div><strong>Transfer Completed.</strong></div>
            <div>Transaction ID: <strong>{txnId}</strong></div>
            <a className="back-home" href="/">Return to Home</a>
          </div>
        )}
      </div>
    </div>
  );
}



