import React, { useState } from 'react';

export default function PositivePay() {
  const [done, setDone] = useState(false);
  const [refId, setRefId] = useState('');
  const [form, setForm] = useState({
    chequeNumber: '', chequeDate: '', amount: '', beneficiary: '', chequeImage: null
  });

  const onChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'file' ? files[0] : value }));
  };

  const submit = (e) => {
    e.preventDefault();
    setRefId('PPS' + Math.floor(100000 + Math.random() * 900000));
    setDone(true);
  };

  return (
    <div className="banking-page">
      <div className="banking-card">
        <h1 className="banking-title">Positive Pay System</h1>
        <div className="banking-subtitle">Prevent cheque fraud by pre-validating cheque details</div>

        {!done ? (
          <form className="banking-form" onSubmit={submit}>
            <div className="form-row"><label>Cheque Number</label><input name="chequeNumber" value={form.chequeNumber} onChange={onChange} required /></div>
            <div className="form-row"><label>Cheque Date</label><input type="date" name="chequeDate" value={form.chequeDate} onChange={onChange} required /></div>
            <div className="form-row"><label>Amount (₹)</label><input type="number" name="amount" value={form.amount} onChange={onChange} required /></div>
            <div className="form-row"><label>Beneficiary Name</label><input name="beneficiary" value={form.beneficiary} onChange={onChange} required /></div>
            <div className="form-row"><label>Upload Cheque (optional)</label><input type="file" name="chequeImage" onChange={onChange} accept=".pdf,.jpg,.jpeg,.png" /></div>
            <div className="banking-actions">
              <button className="primary-btn" type="submit">Submit</button>
              <a className="back-home" href="/">Return to Home</a>
            </div>
          </form>
        ) : (
          <div className="confirm-box">
            <div><strong>Submitted.</strong> Reference: <strong>{refId}</strong></div>
            <a className="back-home" href="/">Return to Home</a>
          </div>
        )}
      </div>
    </div>
  );
}



