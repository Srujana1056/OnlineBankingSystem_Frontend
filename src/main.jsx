import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

// Lazy load all pages for better performance
const Login = lazy(() => import('./Login.jsx'));
const Signup = lazy(() => import('./Signup.jsx'));
const CardApplication = lazy(() => import('./CardApplication.jsx'));
const HomeLoan = lazy(() => import('./HomeLoan.jsx'));
const VehicleLoan = lazy(() => import('./VehicleLoan.jsx'));
const PersonalLoan = lazy(() => import('./PersonalLoan.jsx'));
const EducationLoan = lazy(() => import('./EducationLoan.jsx'));
const GoldLoan = lazy(() => import('./GoldLoan.jsx'));
const BusinessLoan = lazy(() => import('./BusinessLoan.jsx'));
const Deposits = lazy(() => import('./Deposits.jsx'));
const Credit = lazy(() => import('./Credit.jsx'));
const Balance = lazy(() => import('./Balance.jsx'));
const Transfer = lazy(() => import('./Transfer.jsx'));
const Returns = lazy(() => import('./Returns.jsx'));
const SavingAccount = lazy(() => import('./SavingAccount.jsx'));
const CurrentAccount = lazy(() => import('./CurrentAccount.jsx'));
const TermDeposit = lazy(() => import('./TermDeposit.jsx'));
const SalaryAccount = lazy(() => import('./SalaryAccount.jsx'));
const LockerService = lazy(() => import('./LockerService.jsx'));
const PositivePay = lazy(() => import('./PositivePay.jsx'));
const ApplyAccount = lazy(() => import('./ApplyAccount.jsx'));

// Loading component
const LoadingSpinner = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh',
    background: '#f5f6fa'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '4px solid #e3e3e3',
      borderTop: '4px solid #d32f2f',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }}></div>
  </div>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/OnlineBanking_Frontend">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/apply/card/:slug" element={<CardApplication />} />
          <Route path="/home-loan" element={<HomeLoan />} />
          <Route path="/vehicle-loan" element={<VehicleLoan />} />
          <Route path="/personal-loan" element={<PersonalLoan />} />
          <Route path="/education-loan" element={<EducationLoan />} />
          <Route path="/gold-loan" element={<GoldLoan />} />
          <Route path="/business-loan" element={<BusinessLoan />} />
          <Route path="/digital/deposits" element={<Deposits />} />
          <Route path="/digital/credit" element={<Credit />} />
          <Route path="/digital/balance" element={<Balance />} />
          <Route path="/digital/transfer" element={<Transfer />} />
          <Route path="/digital/returns" element={<Returns />} />
          <Route path="/accounts/savings" element={<SavingAccount />} />
          <Route path="/accounts/current" element={<CurrentAccount />} />
          <Route path="/accounts/term-deposit" element={<TermDeposit />} />
          <Route path="/accounts/salary" element={<SalaryAccount />} />
          <Route path="/accounts/locker" element={<LockerService />} />
          <Route path="/accounts/positive-pay" element={<PositivePay />} />
          <Route path="/accounts/apply" element={<ApplyAccount />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
