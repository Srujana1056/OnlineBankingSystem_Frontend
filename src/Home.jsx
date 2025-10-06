import React from 'react';
export default function Home() {
  return (
    <div style={{ padding: '40px' }}>
      <h1 style={{ color: '#d32f2f', fontSize: 36 }}>Welcome to YSK BANK</h1>
      <p style={{ fontSize: 20, marginTop: 16 }}>Your trusted partner for secure, modern online banking. Explore our services and experience seamless digital banking.</p>
      <section style={{ marginTop: 40 }}>
        <h2 style={{ color: '#1976d2', fontSize: 28 }}>Pradhan Mantri Jan-Dhan Yojana</h2>
        <p style={{ fontSize: 18 }}>₹26,00,00,00,000 deposited into Jan-Dhan accounts of the poor</p>
        <p style={{ fontSize: 16 }}>56+ crore accounts opened | 56% in the name of women | 2 out of every 3 accounts in rural/semi-urban areas</p>
      </section>
    </div>
  );
}