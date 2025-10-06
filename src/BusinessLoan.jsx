import React, { useState } from 'react';

export default function BusinessLoan() {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    maritalStatus: '',
    
    // Address Information
    currentAddress: '',
    city: '',
    state: '',
    pincode: '',
    
    // Business Information
    businessName: '',
    businessType: '',
    businessAddress: '',
    businessRegistration: '',
    businessStartDate: '',
    annualTurnover: '',
    monthlyRevenue: '',
    
    // Loan Information
    loanAmount: '',
    loanPurpose: '',
    loanTenure: '',
    
    // Documents
    aadhaarCard: null,
    panCard: null,
    businessPan: null,
    gstCertificate: null,
    businessRegistration: null,
    bankStatements: null,
    profitLossStatement: null,
    balanceSheet: null,
    itr: null,
    photographs: null,
    cibilScore: '',
    
    // Additional Information
    existingLoans: '',
    guarantorName: '',
    guarantorPhone: '',
    guarantorAddress: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Business Loan application submitted successfully! We will contact you within 24 hours.');
    console.log('Business Loan Application:', formData);
  };

  return (
    <div className="loan-application-page">
      <div className="loan-header">
        <h1>🏢 Business Loan Application</h1>
        <p>Complete your business loan application with all required documents</p>
      </div>

      <form onSubmit={handleSubmit} className="loan-form">
        {/* Personal Information Section */}
        <div className="form-section">
          <h2>Personal Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Date of Birth *</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Gender *</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Marital Status *</label>
              <select
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Address Information Section */}
        <div className="form-section">
          <h2>Address Information</h2>
          <div className="form-grid">
            <div className="form-group full-width">
              <label>Current Address *</label>
              <textarea
                name="currentAddress"
                value={formData.currentAddress}
                onChange={handleInputChange}
                required
                rows="3"
              />
            </div>
            <div className="form-group">
              <label>City *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>State *</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Pincode *</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Business Information Section */}
        <div className="form-section">
          <h2>Business Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label>Business Name *</label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Business Type *</label>
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Business Type</option>
                <option value="proprietorship">Proprietorship</option>
                <option value="partnership">Partnership</option>
                <option value="llp">Limited Liability Partnership</option>
                <option value="private-limited">Private Limited</option>
                <option value="public-limited">Public Limited</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group full-width">
              <label>Business Address *</label>
              <textarea
                name="businessAddress"
                value={formData.businessAddress}
                onChange={handleInputChange}
                required
                rows="3"
              />
            </div>
            <div className="form-group">
              <label>Business Registration Number *</label>
              <input
                type="text"
                name="businessRegistration"
                value={formData.businessRegistration}
                onChange={handleInputChange}
                placeholder="GST/Udyam/Registration Number"
                required
              />
            </div>
            <div className="form-group">
              <label>Business Start Date *</label>
              <input
                type="date"
                name="businessStartDate"
                value={formData.businessStartDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Annual Turnover (₹) *</label>
              <input
                type="number"
                name="annualTurnover"
                value={formData.annualTurnover}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Monthly Revenue (₹) *</label>
              <input
                type="number"
                name="monthlyRevenue"
                value={formData.monthlyRevenue}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Loan Information Section */}
        <div className="form-section">
          <h2>Loan Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label>Loan Amount Required (₹) *</label>
              <input
                type="number"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Loan Purpose *</label>
              <select
                name="loanPurpose"
                value={formData.loanPurpose}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Purpose</option>
                <option value="working-capital">Working Capital</option>
                <option value="expansion">Business Expansion</option>
                <option value="equipment">Equipment Purchase</option>
                <option value="inventory">Inventory Purchase</option>
                <option value="renovation">Business Renovation</option>
                <option value="debt-consolidation">Debt Consolidation</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Loan Tenure (Months) *</label>
              <select
                name="loanTenure"
                value={formData.loanTenure}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Tenure</option>
                <option value="12">12 Months</option>
                <option value="24">24 Months</option>
                <option value="36">36 Months</option>
                <option value="48">48 Months</option>
                <option value="60">60 Months</option>
                <option value="84">84 Months</option>
                <option value="120">120 Months</option>
              </select>
            </div>
          </div>
        </div>

        {/* Document Upload Section */}
        <div className="form-section">
          <h2>Required Documents</h2>
          <div className="document-grid">
            <div className="document-group">
              <label>Identity Proof (Aadhaar Card) *</label>
              <input
                type="file"
                name="aadhaarCard"
                onChange={handleInputChange}
                accept=".pdf,.jpg,.jpeg,.png"
                required
              />
            </div>
            <div className="document-group">
              <label>Personal PAN Card *</label>
              <input
                type="file"
                name="panCard"
                onChange={handleInputChange}
                accept=".pdf,.jpg,.jpeg,.png"
                required
              />
            </div>
            <div className="document-group">
              <label>Business PAN Card *</label>
              <input
                type="file"
                name="businessPan"
                onChange={handleInputChange}
                accept=".pdf,.jpg,.jpeg,.png"
                required
              />
            </div>
            <div className="document-group">
              <label>GST Certificate *</label>
              <input
                type="file"
                name="gstCertificate"
                onChange={handleInputChange}
                accept=".pdf,.jpg,.jpeg,.png"
                required
              />
            </div>
            <div className="document-group">
              <label>Business Registration Certificate *</label>
              <input
                type="file"
                name="businessRegistration"
                onChange={handleInputChange}
                accept=".pdf,.jpg,.jpeg,.png"
                required
              />
            </div>
            <div className="document-group">
              <label>Business Bank Statements (Last 6 months) *</label>
              <input
                type="file"
                name="bankStatements"
                onChange={handleInputChange}
                accept=".pdf,.jpg,.jpeg,.png"
                required
              />
            </div>
            <div className="document-group">
              <label>Profit & Loss Statement (Last 2 years) *</label>
              <input
                type="file"
                name="profitLossStatement"
                onChange={handleInputChange}
                accept=".pdf,.jpg,.jpeg,.png"
                required
              />
            </div>
            <div className="document-group">
              <label>Balance Sheet (Last 2 years) *</label>
              <input
                type="file"
                name="balanceSheet"
                onChange={handleInputChange}
                accept=".pdf,.jpg,.jpeg,.png"
                required
              />
            </div>
            <div className="document-group">
              <label>Income Tax Returns (Last 2 years) *</label>
              <input
                type="file"
                name="itr"
                onChange={handleInputChange}
                accept=".pdf,.jpg,.jpeg,.png"
                required
              />
            </div>
            <div className="document-group">
              <label>Passport Size Photographs *</label>
              <input
                type="file"
                name="photographs"
                onChange={handleInputChange}
                accept=".jpg,.jpeg,.png"
                required
              />
            </div>
            <div className="document-group">
              <label>CIBIL Score *</label>
              <input
                type="number"
                name="cibilScore"
                value={formData.cibilScore}
                onChange={handleInputChange}
                placeholder="Enter your CIBIL score"
                required
              />
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="form-section">
          <h2>Additional Information</h2>
          <div className="form-grid">
            <div className="form-group full-width">
              <label>Existing Loans (if any)</label>
              <textarea
                name="existingLoans"
                value={formData.existingLoans}
                onChange={handleInputChange}
                rows="3"
                placeholder="Please mention any existing loans, EMI amounts, and outstanding amounts"
              />
            </div>
            <div className="form-group">
              <label>Guarantor Name</label>
              <input
                type="text"
                name="guarantorName"
                value={formData.guarantorName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Guarantor Phone</label>
              <input
                type="tel"
                name="guarantorPhone"
                value={formData.guarantorPhone}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group full-width">
              <label>Guarantor Address</label>
              <textarea
                name="guarantorAddress"
                value={formData.guarantorAddress}
                onChange={handleInputChange}
                rows="2"
              />
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-button">
            Submit Business Loan Application
          </button>
          <a className="back-home" href="/">Return to Home</a>
        </div>
      </form>
    </div>
  );
}
