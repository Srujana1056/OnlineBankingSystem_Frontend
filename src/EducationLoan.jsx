import React, { useState } from 'react';

export default function EducationLoan() {
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
    
    // Student Information
    courseName: '',
    universityName: '',
    courseDuration: '',
    courseStartDate: '',
    courseEndDate: '',
    courseFees: '',
    
    // Parent/Guardian Information
    parentName: '',
    parentPhone: '',
    parentOccupation: '',
    parentMonthlyIncome: '',
    
    // Loan Information
    loanAmount: '',
    loanTenure: '',
    
    // Documents
    aadhaarCard: null,
    panCard: null,
    studentId: null,
    admissionLetter: null,
    courseFeeStructure: null,
    parentSalarySlips: null,
    parentBankStatements: null,
    parentForm16: null,
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
    alert('Education Loan application submitted successfully! We will contact you within 24 hours.');
    console.log('Education Loan Application:', formData);
  };

  return (
    <div className="loan-application-page">
      <div className="loan-header">
        <h1>🎓 Education Loan Application</h1>
        <p>Complete your education loan application with all required documents</p>
      </div>

      <form onSubmit={handleSubmit} className="loan-form">
        {/* Personal Information Section */}
        <div className="form-section">
          <h2>Student Information</h2>
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

        {/* Course Information Section */}
        <div className="form-section">
          <h2>Course Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label>Course Name *</label>
              <input
                type="text"
                name="courseName"
                value={formData.courseName}
                onChange={handleInputChange}
                placeholder="e.g., B.Tech Computer Science"
                required
              />
            </div>
            <div className="form-group">
              <label>University/College Name *</label>
              <input
                type="text"
                name="universityName"
                value={formData.universityName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Course Duration (Years) *</label>
              <input
                type="number"
                name="courseDuration"
                value={formData.courseDuration}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Course Start Date *</label>
              <input
                type="date"
                name="courseStartDate"
                value={formData.courseStartDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Course End Date *</label>
              <input
                type="date"
                name="courseEndDate"
                value={formData.courseEndDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Total Course Fees (₹) *</label>
              <input
                type="number"
                name="courseFees"
                value={formData.courseFees}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Parent/Guardian Information Section */}
        <div className="form-section">
          <h2>Parent/Guardian Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label>Parent/Guardian Name *</label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Parent/Guardian Phone *</label>
              <input
                type="tel"
                name="parentPhone"
                value={formData.parentPhone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Parent/Guardian Occupation *</label>
              <input
                type="text"
                name="parentOccupation"
                value={formData.parentOccupation}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Parent/Guardian Monthly Income (₹) *</label>
              <input
                type="number"
                name="parentMonthlyIncome"
                value={formData.parentMonthlyIncome}
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
              <label>Loan Tenure (Years) *</label>
              <select
                name="loanTenure"
                value={formData.loanTenure}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Tenure</option>
                <option value="5">5 Years</option>
                <option value="7">7 Years</option>
                <option value="10">10 Years</option>
                <option value="15">15 Years</option>
                <option value="20">20 Years</option>
              </select>
            </div>
          </div>
        </div>

        {/* Document Upload Section */}
        <div className="form-section">
          <h2>Required Documents</h2>
          <div className="document-grid">
            <div className="document-group">
              <label>Student Identity Proof (Aadhaar Card) *</label>
              <input
                type="file"
                name="aadhaarCard"
                onChange={handleInputChange}
                accept=".pdf,.jpg,.jpeg,.png"
                required
              />
            </div>
            <div className="document-group">
              <label>Student PAN Card *</label>
              <input
                type="file"
                name="panCard"
                onChange={handleInputChange}
                accept=".pdf,.jpg,.jpeg,.png"
                required
              />
            </div>
            <div className="document-group">
              <label>Student ID Card *</label>
              <input
                type="file"
                name="studentId"
                onChange={handleInputChange}
                accept=".pdf,.jpg,.jpeg,.png"
                required
              />
            </div>
            <div className="document-group">
              <label>Admission Letter *</label>
              <input
                type="file"
                name="admissionLetter"
                onChange={handleInputChange}
                accept=".pdf,.jpg,.jpeg,.png"
                required
              />
            </div>
            <div className="document-group">
              <label>Course Fee Structure *</label>
              <input
                type="file"
                name="courseFeeStructure"
                onChange={handleInputChange}
                accept=".pdf,.jpg,.jpeg,.png"
                required
              />
            </div>
            <div className="document-group">
              <label>Parent Salary Slips (Last 3-6 months) *</label>
              <input
                type="file"
                name="parentSalarySlips"
                onChange={handleInputChange}
                accept=".pdf,.jpg,.jpeg,.png"
                required
              />
            </div>
            <div className="document-group">
              <label>Parent Bank Statements (Last 3-6 months) *</label>
              <input
                type="file"
                name="parentBankStatements"
                onChange={handleInputChange}
                accept=".pdf,.jpg,.jpeg,.png"
                required
              />
            </div>
            <div className="document-group">
              <label>Parent Form 16 (Last 2 years) *</label>
              <input
                type="file"
                name="parentForm16"
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
              <label>Parent CIBIL Score *</label>
              <input
                type="number"
                name="cibilScore"
                value={formData.cibilScore}
                onChange={handleInputChange}
                placeholder="Enter parent's CIBIL score"
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
            Submit Education Loan Application
          </button>
          <a className="back-home" href="/">Return to Home</a>
        </div>
      </form>
    </div>
  );
}
