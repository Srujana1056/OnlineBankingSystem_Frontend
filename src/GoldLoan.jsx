import React, { useState } from 'react';

export default function GoldLoan() {
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
    
    // Employment Information
    employmentType: '',
    companyName: '',
    designation: '',
    monthlyIncome: '',
    workExperience: '',
    
    // Gold Information
    goldWeight: '',
    goldPurity: '',
    goldType: '',
    estimatedValue: '',
    loanAmount: '',
    loanTenure: '',
    
    // Documents
    aadhaarCard: null,
    panCard: null,
    salarySlips: null,
    bankStatements: null,
    form16: null,
    goldDocuments: null,
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
    alert('Gold Loan application submitted successfully! We will contact you within 24 hours.');
    console.log('Gold Loan Application:', formData);
  };

  return (
    <div className="loan-application-page">
      <div className="loan-header">
        <h1>🥇 Gold Loan Application</h1>
        <p>Complete your gold loan application with all required documents</p>
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

        {/* Employment Information Section */}
        <div className="form-section">
          <h2>Employment Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label>Employment Type *</label>
              <select
                name="employmentType"
                value={formData.employmentType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Type</option>
                <option value="salaried">Salaried</option>
                <option value="self-employed">Self-Employed</option>
                <option value="business">Business Owner</option>
              </select>
            </div>
            <div className="form-group">
              <label>Company/Business Name *</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Designation *</label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Monthly Income (₹) *</label>
              <input
                type="number"
                name="monthlyIncome"
                value={formData.monthlyIncome}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Work Experience (Years) *</label>
              <input
                type="number"
                name="workExperience"
                value={formData.workExperience}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Gold Information Section */}
        <div className="form-section">
          <h2>Gold Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label>Gold Weight (grams) *</label>
              <input
                type="number"
                name="goldWeight"
                value={formData.goldWeight}
                onChange={handleInputChange}
                step="0.1"
                required
              />
            </div>
            <div className="form-group">
              <label>Gold Purity *</label>
              <select
                name="goldPurity"
                value={formData.goldPurity}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Purity</option>
                <option value="18k">18 Karat (75%)</option>
                <option value="22k">22 Karat (91.6%)</option>
                <option value="24k">24 Karat (99.9%)</option>
              </select>
            </div>
            <div className="form-group">
              <label>Gold Type *</label>
              <select
                name="goldType"
                value={formData.goldType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Type</option>
                <option value="jewelry">Jewelry</option>
                <option value="coins">Gold Coins</option>
                <option value="bars">Gold Bars</option>
                <option value="ornaments">Ornaments</option>
              </select>
            </div>
            <div className="form-group">
              <label>Estimated Value (₹) *</label>
              <input
                type="number"
                name="estimatedValue"
                value={formData.estimatedValue}
                onChange={handleInputChange}
                required
              />
            </div>
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
              <label>Loan Tenure (Months) *</label>
              <select
                name="loanTenure"
                value={formData.loanTenure}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Tenure</option>
                <option value="3">3 Months</option>
                <option value="6">6 Months</option>
                <option value="12">12 Months</option>
                <option value="18">18 Months</option>
                <option value="24">24 Months</option>
                <option value="36">36 Months</option>
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
              <label>PAN Card *</label>
              <input
                type="file"
                name="panCard"
                onChange={handleInputChange}
                accept=".pdf,.jpg,.jpeg,.png"
                required
              />
            </div>
            <div className="document-group">
              <label>Salary Slips (Last 3-6 months) *</label>
              <input
                type="file"
                name="salarySlips"
                onChange={handleInputChange}
                accept=".pdf,.jpg,.jpeg,.png"
                required
              />
            </div>
            <div className="document-group">
              <label>Bank Statements (Last 3-6 months) *</label>
              <input
                type="file"
                name="bankStatements"
                onChange={handleInputChange}
                accept=".pdf,.jpg,.jpeg,.png"
                required
              />
            </div>
            <div className="document-group">
              <label>Form 16 (Last 2 years) *</label>
              <input
                type="file"
                name="form16"
                onChange={handleInputChange}
                accept=".pdf,.jpg,.jpeg,.png"
                required
              />
            </div>
            <div className="document-group">
              <label>Gold Purchase Receipts/Invoices *</label>
              <input
                type="file"
                name="goldDocuments"
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
            Submit Gold Loan Application
          </button>
          <a className="back-home" href="/">Return to Home</a>
        </div>
      </form>
    </div>
  );
}
