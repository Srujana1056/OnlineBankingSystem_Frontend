import React from 'react';
export default function AccountsDeposit() {
  return (
    <div style={{ padding: '40px' }}>
      <h1 style={{ color: '#1976d2', fontSize: 32 }}>Accounts & Deposit</h1>
      <ul style={{ fontSize: 18, marginTop: 24 }}>
        <li>Saving Account</li>
        <li>Current Account
          <ul style={{ fontSize: 16, marginLeft: 20 }}>
            <li>Union Micro Digital Current Account (UMDCA)</li>
            <li>Current Account (CDGEN)</li>
            <li>Current Flexi Deposit Scheme (CDFFD)</li>
            <li>Current Flexi Deposit Scheme (CDFFP)</li>
            <li>Union Classic Current Account</li>
          </ul>
        </li>
        <li>Term Deposit</li>
        <li>Salary Account</li>
      </ul>
      <p style={{ marginTop: 32, fontSize: 16 }}>YSK BANK offers a wide range of deposit and account options to suit every customer’s needs. Explore our products for secure and flexible banking.</p>
    </div>
  );
}