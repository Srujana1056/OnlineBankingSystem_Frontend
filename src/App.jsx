import { useState, useEffect, useRef, memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import EMICalc from './EMICalc.jsx';
import AdCarousel from './AdCarousel.jsx';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [showAccountsMenu, setShowAccountsMenu] = useState(false);
  const [showLoanMenu, setShowLoanMenu] = useState(false);
  const [showCardsMenu, setShowCardsMenu] = useState(false);
  const [showDigitalMenu, setShowDigitalMenu] = useState(false);

  const [user, setUser] = useState(null); // Added: store logged-in user

  const accountsRef = useRef(null);
  const loanRef = useRef(null);
  const cardsRef = useRef(null);
  const digitalRef = useRef(null);

  // Optimized outside click handler
  const handleOutsideClick = useCallback((event, ref, setter) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setter(false);
    }
  }, []);

  // Accounts menu close
  useEffect(() => {
    if (!showAccountsMenu) return;
    const handler = (event) => handleOutsideClick(event, accountsRef, setShowAccountsMenu);
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [showAccountsMenu, handleOutsideClick]);

  // Loan menu close
  useEffect(() => {
    if (!showLoanMenu) return;
    const handler = (event) => handleOutsideClick(event, loanRef, setShowLoanMenu);
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [showLoanMenu, handleOutsideClick]);

  // Cards menu close
  useEffect(() => {
    if (!showCardsMenu) return;
    const handler = (event) => handleOutsideClick(event, cardsRef, setShowCardsMenu);
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [showCardsMenu, handleOutsideClick]);

  // Digital menu close
  useEffect(() => {
    if (!showDigitalMenu) return;
    const handler = (event) => handleOutsideClick(event, digitalRef, setShowDigitalMenu);
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [showDigitalMenu, handleOutsideClick]);

  // Added: check localStorage for logged-in user
  useEffect(() => {
    const storedUser = localStorage.getItem('ysk_bank_user');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  // Added: logout function
  const handleLogout = () => {
    localStorage.removeItem('ysk_bank_user');
    setUser(null);
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="logo-container">
          <span className="logo-text">YSK BANK</span>
        </div>

        <nav className="main-nav">
          <ul className="nav-list">
            {/* Accounts */}
            <li className="nav-item" ref={accountsRef}>
              <button
                className="nav-button"
                onClick={() => setShowAccountsMenu(prev => !prev)}
              >
                Accounts & Deposit
              </button>
              {showAccountsMenu && (
                <div className="dropdown-menu accounts-menu">
                  <div className="dropdown-column">
                    <Link to="/accounts/savings" className="dropdown-button">Saving Account</Link>
                    <Link to="/accounts/current" className="dropdown-button">Current Account</Link>
                    <Link to="/accounts/term-deposit" className="dropdown-button">Term Deposit (FD/RD)</Link>
                    <Link to="/accounts/salary" className="dropdown-button">Salary Account</Link>
                    <Link to="/accounts/locker" className="dropdown-button">Locker Service</Link>
                    <Link to="/accounts/positive-pay" className="dropdown-button">Positive Pay System</Link>
                    <Link to="/accounts/apply" className="apply-now-button">Apply Now</Link>
                  </div>
                </div>
              )}
            </li>

            {/* Loans */}
            <li className="nav-item" ref={loanRef}>
              <button
                className="nav-button"
                onClick={() => setShowLoanMenu(prev => !prev)}
              >
                Loan
              </button>
              {showLoanMenu && (
                <div className="dropdown-menu accounts-menu">
                  <div className="dropdown-column">
                    <Link to="/home-loan" className="dropdown-button">Home Loan</Link>
                    <Link to="/vehicle-loan" className="dropdown-button">Vehicle Loan</Link>
                    <Link to="/personal-loan" className="dropdown-button">Personal Loan</Link>
                    <Link to="/education-loan" className="dropdown-button">Education Loan</Link>
                    <Link to="/gold-loan" className="dropdown-button">Gold Loan</Link>
                    <Link to="/business-loan" className="dropdown-button">Business Loan</Link>
                    <button className="apply-now-button" onClick={() => alert('Apply Now')}>Apply Now</button>
                  </div>
                </div>
              )}
            </li>

            {/* Cards */}
            <li className="nav-item" ref={cardsRef}>
              <button
                className="nav-button"
                onClick={() => setShowCardsMenu(prev => !prev)}
              >
                Cards
              </button>
              {showCardsMenu && (
                <div className="dropdown-menu cards-menu">
                  <div className="dropdown-column cards-column">
                    <Link to="/apply/card/hni" className="dropdown-button">HNI Emperio Metal Debit Card</Link>
                    <Link to="/apply/card/business" className="dropdown-button">Business Debit Card (Platinum)</Link>
                    <Link to="/apply/card/empower" className="dropdown-button">RuPay Empower Her Debit Card</Link>
                    <Link to="/apply/card/classic" className="dropdown-button">Classic Debit Card (Rupay / Visa)</Link>
                    <Link to="/apply/card/qsparc" className="dropdown-button">Qsparc Debit Card (Rupay)</Link>
                    <Link to="/apply/card/platinum" className="dropdown-button">Platinum Debit Card (Rupay / Visa/Master)</Link>
                  </div>
                </div>
              )}
            </li>

            {/* Digital Banking */}
            <li className="nav-item" ref={digitalRef}>
              <button
                className="nav-button digital-banking-button"
                onClick={() => setShowDigitalMenu(prev => !prev)}
              >
                Digital Banking
              </button>
              {showDigitalMenu && (
                <div className="dropdown-menu digital-menu">
                  <div className="dropdown-column">
                    <Link to="/digital/deposits" className="dropdown-button">Deposits</Link>
                    <Link to="/digital/credit" className="dropdown-button">Credit</Link>
                    <Link to="/digital/balance" className="dropdown-button">Check Bank Balance</Link>
                    <Link to="/digital/transfer" className="dropdown-button">Bank To Bank Transfer</Link>
                    <Link to="/digital/returns" className="dropdown-button">Returns</Link>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </nav>

        {/* Auth buttons / logged-in info */}
        <div className="auth-buttons">
          {user ? (
            <div>
              Hello, {user.username}!{' '}
              <button onClick={handleLogout} className="logout-button">Logout</button>
            </div>
          ) : (
            <>
              <Link to="/login" className="login-button">Login</Link>
              <Link to="/signup" className="signup-button">Sign Up</Link>
            </>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Banner */}
        <section className="main-banner">
          <AdCarousel />
        </section>

        {/* Service Cards */}
        <section className="service-cards-section">
          <div className="service-card">
            <span className="card-icon">🏦</span>
            <h3>Accounts & Deposit</h3>
            <p>Savings, Current, FD, Salary Accounts</p>
            <Link to="/accounts/savings"><button className="card-button">Open Account</button></Link>
          </div>

          <div className="service-card">
            <span className="card-icon">🏠</span>
            <h3>Loans</h3>
            <p>Home, Vehicle, Personal, Education</p>
            <Link to="/home-loan"><button className="card-button">Apply Now</button></Link>
          </div>

          <div className="service-card">
            <span className="card-icon">💳</span>
            <h3>Cards</h3>
            <p>Debit, Credit, Business Cards</p>
            <Link to="/apply/card/classic"><button className="card-button">Get Card</button></Link>
          </div>

          <div className="service-card">
            <span className="card-icon">📱</span>
            <h3>Digital Banking</h3>
            <p>Transfer, Balance, Deposits</p>
            <Link to="/digital/balance"><button className="card-button">Access Now</button></Link>
          </div>

          <div className="service-card">
            <span className="card-icon">📈</span>
            <h3>Investment</h3>
            <p>Fixed Deposits, Mutual Funds</p>
            <Link to="/accounts/term-deposit"><button className="card-button">Invest</button></Link>
          </div>

          <div className="service-card">
            <span className="card-icon">🛡️</span>
            <h3>Insurance</h3>
            <p>Life, Health, Vehicle Insurance</p>
            <Link to="/insurance"><button className="card-button">Protect</button></Link>
          </div>
        </section>

        {/* EMI Calculator */}
        <section className="emi-section">
          <div className="emi-container">
            <div className="emi-left">
              <h3>EMI Calculator</h3>
              <EMICalc />
            </div>
            <div className="emi-right">
              <h3>Interest Rates (Indicative)</h3>
              <div className="rate-list">
                <Link to="/home-loan" className="rate-item"><strong>Home Loan:</strong> 8.25% - 9.75% p.a.</Link>
                <Link to="/vehicle-loan" className="rate-item"><strong>Vehicle Loan:</strong> 9.50% - 11.25% p.a.</Link>
                <Link to="/personal-loan" className="rate-item"><strong>Personal Loan:</strong> 12.99% - 16.99% p.a.</Link>
                <Link to="/education-loan" className="rate-item"><strong>Education Loan:</strong> 9.00% - 12.50% p.a.</Link>
                <Link to="/gold-loan" className="rate-item"><strong>Gold Loan:</strong> 10.50% - 12.50% p.a.</Link>
                <Link to="/accounts/term-deposit" className="rate-item"><strong>Term Deposit:</strong> 6.50% - 7.20% p.a.</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default memo(App);
