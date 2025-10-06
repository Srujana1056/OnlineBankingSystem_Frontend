import React, { useState } from 'react';

export default function SalaryAccount() {
  const [done, setDone] = useState(false);
  const [refId, setRefId] = useState('');
  const [form, setForm] = useState({
    employer: '', employerCode: '', empProof: null, pan: '', aadhaar: '',
    name: '', dob: '', address: '', phone: '', email: ''
  });

  const onChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'file' ? files[0] : value }));
  };

  const submit = (e) => {
    e.preventDefault();
    setRefId('SAL' + Math.floor(100000 + Math.random() * 900000));
    setDone(true);
  };

  return (
    <div className="banking-page">
      <div className="banking-card">
        <h1 className="banking-title">Salary Account</h1>
        <div className="banking-subtitle">Zero balance, seamless salary credits with corporate tie-ups</div>

        {!done ? (
          <form className="banking-form" onSubmit={submit}>
            <div className="form-row"><label>Employer Name</label><input name="employer" value={form.employer} onChange={onChange} required /></div>
            <div className="form-row"><label>Employer Code</label><input name="employerCode" value={form.employerCode} onChange={onChange} required /></div>
            <div className="form-row"><label>Employment Proof (ID/Salary Slip)</label><input type="file" name="empProof" onChange={onChange} accept=".pdf,.jpg,.jpeg,.png" required /></div>
            <div className="form-row"><label>PAN</label><input name="pan" value={form.pan} onChange={onChange} required /></div>
            <div className="form-row"><label>Aadhaar</label><input name="aadhaar" value={form.aadhaar} onChange={onChange} required /></div>
            <div className="form-row"><label>Full Name</label><input name="name" value={form.name} onChange={onChange} required /></div>
            <div className="form-row"><label>Date of Birth</label><input type="date" name="dob" value={form.dob} onChange={onChange} required /></div>
            <div className="form-row"><label>Address</label><textarea name="address" value={form.address} onChange={onChange} rows="3" required /></div>
            <div className="form-row"><label>Phone</label><input name="phone" value={form.phone} onChange={onChange} required /></div>
            <div className="form-row"><label>Email</label><input type="email" name="email" value={form.email} onChange={onChange} required /></div>
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



