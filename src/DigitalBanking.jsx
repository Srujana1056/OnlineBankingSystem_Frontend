import React from 'react';
export default function DigitalBanking() {
  return (
    <div style={{ padding: 32 }}>
      <h2 style={{ color: '#005ca9', fontWeight: 700 }}>Digital Banking</h2>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: 24 }}>
        <li style={{ marginBottom: 18 }}>
          <strong>Deposit:</strong> Instantly deposit funds into your account using our secure online platform.
        </li>
        <li style={{ marginBottom: 18 }}>
          <strong>Credit:</strong> Access credit facilities and manage repayments digitally.
        </li>
        <li style={{ marginBottom: 18 }}>
          <strong>BANK Balance:</strong> Check your real-time account balance anytime, anywhere.
        </li>
        <li style={{ marginBottom: 18 }}>
          <strong>BANK TO BANK TRANSFER:</strong> Transfer money between banks quickly and securely.
        </li>
      </ul>
      <p style={{ marginTop: 32, fontSize: 16 }}>Experience the future of banking with YSK BANK’s digital services. Manage your accounts, make payments, and access banking anytime, anywhere.</p>
    </div>
  );
}