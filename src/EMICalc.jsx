import React, { useMemo, useState, memo } from 'react';

const EMICalc = memo(function EMICalc() {
  const [input, setInput] = useState({ amount: '', rate: '', tenureYears: '' });
  const emi = useMemo(() => {
    const p = parseFloat(input.amount);
    const r = parseFloat(input.rate) / 1200;
    const n = parseInt(input.tenureYears || '0', 10) * 12;
    if (!p || !r || !n) return 0;
    return Math.round((p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
  }, [input]);

  return (
    <div className="emi-widget">
      <div className="banking-form">
        <div className="form-row"><label>Loan Amount (₹)</label><input type="number" value={input.amount} onChange={e=>setInput({...input, amount: e.target.value})} placeholder="Enter loan amount" /></div>
        <div className="form-row"><label>Rate (% p.a.)</label><input type="number" step="0.01" value={input.rate} onChange={e=>setInput({...input, rate: e.target.value})} placeholder="Enter interest rate" /></div>
        <div className="form-row"><label>Tenure (Years)</label><input type="number" value={input.tenureYears} onChange={e=>setInput({...input, tenureYears: e.target.value})} placeholder="Enter tenure" /></div>
      </div>
      <div className="emi-result">
        <div className="emi-amount">₹{emi.toLocaleString()}</div>
        <div className="emi-label">per month</div>
      </div>
    </div>
  );
});

export default EMICalc;


