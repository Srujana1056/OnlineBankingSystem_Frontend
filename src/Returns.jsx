import React, { useState } from 'react';

export default function Returns() {
  const [result, setResult] = useState(null);
  const [form, setForm] = useState({ txnId: '', date: '', reason: '' });

  const submit = (e) => {
    e.preventDefault();
    setResult({ status: 'Processing', eta: '1-3 business days', refundTo: 'Source account' });
  };

  return (
    <div className="banking-page">
      <div className="banking-card">
        <h1 className="banking-title">Returns / Refund Tracker</h1>
        <div className="banking-subtitle">Track failed or returned transactions</div>

        <form className="banking-form" onSubmit={submit}>
          <div className="form-row">
            <label>Transaction ID</label>
            <input value={form.txnId} onChange={(e)=>setForm({...form, txnId: e.target.value})} required />
          </div>
          <div className="form-row">
            <label>Date of Transaction</label>
            <input type="date" value={form.date} onChange={(e)=>setForm({...form, date: e.target.value})} required />
          </div>
          <div className="form-row">
            <label>Reason (optional)</label>
            <input value={form.reason} onChange={(e)=>setForm({...form, reason: e.target.value})} placeholder="e.g., failed UPI" />
          </div>
          <div className="banking-actions">
            <button className="primary-btn" type="submit">Track Refund</button>
            <a className="back-home" href="/">Return to Home</a>
          </div>
        </form>

        {result && (
          <div className="confirm-box">
            <div><strong>Status:</strong> {result.status}</div>
            <div><strong>Estimated Completion:</strong> {result.eta}</div>
            <div><strong>Refund To:</strong> {result.refundTo}</div>
            <a className="back-home" href="/">Return to Home</a>
          </div>
        )}
      </div>
    </div>
  );
}



