import React, { useMemo, useState } from 'react';

export default function TermDeposit() {
  const [done, setDone] = useState(false);
  const [refId, setRefId] = useState('');
  const [form, setForm] = useState({
    amount: '', tenure: '12', payout: 'maturity', nominee: '',
    name: '', email: '', phone: ''
  });

  const rateMap = { '12': 6.5, '24': 6.8, '36': 7.0, '60': 7.2 };
  const interest = useMemo(() => {
    const p = parseFloat(form.amount || '0');
    const r = rateMap[form.tenure] / 100;
    const n = parseInt(form.tenure, 10) / 12; // years
    if (!p || !r || !n) return 0;
    // simple compounding annually for quick estimate
    return Math.round(p * Math.pow(1 + r, n) - p);
  }, [form.amount, form.tenure]);

  const onChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setRefId('FD' + Math.floor(100000 + Math.random() * 900000));
    setDone(true);
  };

  return (
    <div className="banking-page">
      <div className="banking-card">
        <h1 className="banking-title">Term Deposit (FD/RD)</h1>
        <div className="banking-subtitle">Attractive interest rates and flexible tenure options</div>

        {!done ? (
          <form className="banking-form" onSubmit={submit}>
            <div className="form-row"><label>Deposit Amount (₹)</label><input type="number" name="amount" value={form.amount} onChange={onChange} required /></div>
            <div className="form-row"><label>Tenure</label>
              <select name="tenure" value={form.tenure} onChange={onChange}>
                <option value="12">1 Year</option>
                <option value="24">2 Years</option>
                <option value="36">3 Years</option>
                <option value="60">5 Years</option>
              </select>
            </div>
            <div className="form-row"><label>Payout Option</label>
              <select name="payout" value={form.payout} onChange={onChange}>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="maturity">At Maturity</option>
              </select>
            </div>
            <div className="form-row"><label>Nominee</label><input name="nominee" value={form.nominee} onChange={onChange} /></div>
            <div className="form-row"><label>Your Name</label><input name="name" value={form.name} onChange={onChange} required /></div>
            <div className="form-row"><label>Email</label><input type="email" name="email" value={form.email} onChange={onChange} required /></div>
            <div className="form-row"><label>Phone</label><input name="phone" value={form.phone} onChange={onChange} required /></div>
            <div className="confirm-box">Estimated Interest: <strong>₹{interest.toLocaleString()}</strong> at rate <strong>{rateMap[form.tenure]}% p.a.</strong></div>
            <div className="banking-actions">
              <button className="primary-btn" type="submit">Open Deposit</button>
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



