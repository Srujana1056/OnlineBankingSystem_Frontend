import React, { useState } from 'react';

export default function ApplyAccount() {
  const [done, setDone] = useState(false);
  const [refId, setRefId] = useState('');
  const [form, setForm] = useState({
    service: 'savings', name: '', dob: '', address: '', phone: '', email: '', idDoc: null, initialDeposit: ''
  });

  const onChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'file' ? files[0] : value }));
  };

  const submit = (e) => {
    e.preventDefault();
    setRefId('ACC' + Math.floor(100000 + Math.random() * 900000));
    setDone(true);
  };

  return (
    <div className="banking-page">
      <div className="banking-card">
        <h1 className="banking-title">Apply for Account/Service</h1>
        <div className="banking-subtitle">The form adapts to your selected service</div>

        {!done ? (
          <form className="banking-form" onSubmit={submit}>
            <div className="form-row"><label>Service</label>
              <select name="service" value={form.service} onChange={onChange}>
                <option value="savings">Savings Account</option>
                <option value="current">Current Account</option>
                <option value="term">Term Deposit (FD/RD)</option>
                <option value="salary">Salary Account</option>
                <option value="locker">Locker Service</option>
                <option value="pps">Positive Pay System</option>
              </select>
            </div>
            <div className="form-row"><label>Full Name</label><input name="name" value={form.name} onChange={onChange} required /></div>
            <div className="form-row"><label>Date of Birth</label><input type="date" name="dob" value={form.dob} onChange={onChange} required /></div>
            <div className="form-row"><label>Address</label><textarea name="address" value={form.address} onChange={onChange} rows="3" required /></div>
            <div className="form-row"><label>Phone</label><input name="phone" value={form.phone} onChange={onChange} required /></div>
            <div className="form-row"><label>Email</label><input type="email" name="email" value={form.email} onChange={onChange} required /></div>
            <div className="form-row"><label>Identity Document</label><input type="file" name="idDoc" onChange={onChange} accept=".pdf,.jpg,.jpeg,.png" required /></div>
            <div className="form-row"><label>Initial Deposit (if applicable)</label><input type="number" name="initialDeposit" value={form.initialDeposit} onChange={onChange} /></div>
            <div className="banking-actions">
              <button className="primary-btn" type="submit">Submit</button>
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



