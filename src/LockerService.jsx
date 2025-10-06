import React, { useState } from 'react';

export default function LockerService() {
  const [done, setDone] = useState(false);
  const [refId, setRefId] = useState('');
  const [form, setForm] = useState({
    accountNumber: '', lockerSize: 'small', kyc: null, nominee: ''
  });

  const onChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'file' ? files[0] : value }));
  };

  const submit = (e) => {
    e.preventDefault();
    setRefId('LOC' + Math.floor(100000 + Math.random() * 900000));
    setDone(true);
  };

  return (
    <div className="banking-page">
      <div className="banking-card">
        <h1 className="banking-title">Locker Service</h1>
        <div className="banking-subtitle">Small / Medium / Large lockers with high security</div>

        {!done ? (
          <form className="banking-form" onSubmit={submit}>
            <div className="form-row"><label>Existing Account Number</label><input name="accountNumber" value={form.accountNumber} onChange={onChange} required /></div>
            <div className="form-row"><label>Preferred Locker Size</label>
              <select name="lockerSize" value={form.lockerSize} onChange={onChange}>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
            <div className="form-row"><label>KYC Documents</label><input type="file" name="kyc" onChange={onChange} accept=".pdf,.jpg,.jpeg,.png" required /></div>
            <div className="form-row"><label>Nominee</label><input name="nominee" value={form.nominee} onChange={onChange} /></div>
            <div className="confirm-box">Annual charges vary by size. Priority allocation for existing customers.</div>
            <div className="banking-actions">
              <button className="primary-btn" type="submit">Apply</button>
              <a className="back-home" href="/">Return to Home</a>
            </div>
          </form>
        ) : (
          <div className="confirm-box">
            <div><strong>Application Submitted.</strong></div>
            <div>Reference ID: <strong>{refId}</strong></div>
            <a className="back-home" href="/">Return to Home</a>
          </div>
        )}
      </div>
    </div>
  );
}



