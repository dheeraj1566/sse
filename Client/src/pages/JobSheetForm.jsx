import React, { useState } from 'react';
import api from '../api/axiosInstance';

export default function JobSheetForm() {
  const [formData, setFormData] = useState({
    callStatus: 'In Warranty',
    callNo: '',
    date: '',
    inTime: '',
    outTime: '',
    customerName: '',
    customerAddress: '',
    customerMobile: '',
    product: 'Chimney',
    workDetails: 'Installation',
    brand: '',
    serialNo: '',
    problemReported: '',
    detectedByEngineer: '',
    repairByEngineer: '',
    serviceAmount: '',
    partAmount: '',
    totalAmount: '',
    modeOfPayment: 'Cash',
    customerSuggestions: '',
    customerRating: 5,
    recommendService: 'Yes'
  });
  
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const data = new FormData();
      Object.keys(formData).forEach(key => {
        data.append(key, formData[key]);
      });
      
      if (file) {
        data.append('receiptImage', file);
      }

      await api.post('/jobs', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      
      setSuccess(true);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error(error);
      alert('Error submitting form');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FDF6EE', fontFamily: "'Inter', sans-serif" }}>
        <div style={{ background: 'white', padding: '50px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 10px 30px rgba(224, 123, 42, 0.1)' }}>
          <div style={{ width: '80px', height: '80px', background: '#d4edda', color: '#155724', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '40px' }}>✓</div>
          <h2 style={{ color: '#2C1A08', marginBottom: '10px' }}>Job Sheet Submitted Successfully!</h2>
          <p style={{ color: '#666', marginBottom: '30px' }}>Thank you for filling out the service details.</p>
          <button onClick={() => window.location.reload()} style={{ padding: '12px 24px', background: 'linear-gradient(90deg, #E07B2A, #f5a623)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>Submit Another</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#FDF6EE', padding: '40px 20px', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
        <div style={{ background: 'linear-gradient(135deg, #1e1008 0%, #3a2213 100%)', padding: '40px 30px', color: 'white', textAlign: 'center' }}>
          <h1 style={{ margin: '0', fontSize: '28px', fontWeight: '300', letterSpacing: '1px' }}>Shree Shyam Enterprises</h1>
          <p style={{ margin: '10px 0 0 0', color: '#E07B2A', fontWeight: '500' }}>Service Job Sheet</p>
        </div>

        <form onSubmit={handleSubmit} style={{ padding: '40px 30px' }}>
          
          <SectionTitle>General Information</SectionTitle>
          <div style={gridStyle}>
            <FormGroup label="Call Status">
              <Select name="callStatus" value={formData.callStatus} onChange={handleChange}>
                <option value="In Warranty">In Warranty</option>
                <option value="Out Warranty">Out Warranty</option>
              </Select>
            </FormGroup>
            <FormGroup label="Call No">
              <Input name="callNo" value={formData.callNo} onChange={handleChange} placeholder="e.g. 102938" />
            </FormGroup>
            <FormGroup label="Date">
              <Input type="date" name="date" value={formData.date} onChange={handleChange} />
            </FormGroup>
            <FormGroup label="In Time">
              <Input type="time" name="inTime" value={formData.inTime} onChange={handleChange} />
            </FormGroup>
            <FormGroup label="Out Time">
              <Input type="time" name="outTime" value={formData.outTime} onChange={handleChange} />
            </FormGroup>
          </div>

          <SectionTitle>Customer Details</SectionTitle>
          <div style={gridStyle}>
            <FormGroup label="Customer Name">
              <Input name="customerName" value={formData.customerName} onChange={handleChange} required />
            </FormGroup>
            <FormGroup label="Customer Mobile No">
              <Input name="customerMobile" value={formData.customerMobile} onChange={handleChange} required />
            </FormGroup>
            <FormGroup label="Customer Address" style={{ gridColumn: '1 / -1' }}>
              <Input name="customerAddress" value={formData.customerAddress} onChange={handleChange} />
            </FormGroup>
          </div>

          <SectionTitle>Product Information</SectionTitle>
          <div style={gridStyle}>
            <FormGroup label="Product">
              <Select name="product" value={formData.product} onChange={handleChange}>
                <option value="Chimney">Chimney</option>
                <option value="Hob">Hob</option>
                <option value="Microwave Oven">Microwave Oven</option>
                <option value="Dishwasher">Dishwasher</option>
              </Select>
            </FormGroup>
            <FormGroup label="Work Details">
              <Select name="workDetails" value={formData.workDetails} onChange={handleChange}>
                <option value="Installation">Installation</option>
                <option value="Uninstallation">Uninstallation</option>
                <option value="Cleaning Service">Cleaning Service</option>
                <option value="Complaint">Complaint</option>
              </Select>
            </FormGroup>
            <FormGroup label="Brand">
              <Input name="brand" value={formData.brand} onChange={handleChange} />
            </FormGroup>
            <FormGroup label="Serial No">
              <Input name="serialNo" value={formData.serialNo} onChange={handleChange} />
            </FormGroup>
          </div>

          <SectionTitle>Service Details</SectionTitle>
          <FormGroup label="Problem Reported by Customer">
            <Textarea name="problemReported" value={formData.problemReported} onChange={handleChange} />
          </FormGroup>
          <FormGroup label="Detected by Engineer">
            <Textarea name="detectedByEngineer" value={formData.detectedByEngineer} onChange={handleChange} />
          </FormGroup>
          <FormGroup label="Repair by Engineer">
            <Textarea name="repairByEngineer" value={formData.repairByEngineer} onChange={handleChange} />
          </FormGroup>

          <div style={gridStyle}>
            <FormGroup label="Service Amount">
              <Input type="number" name="serviceAmount" value={formData.serviceAmount} onChange={handleChange} />
            </FormGroup>
            <FormGroup label="Part Amount">
              <Input type="number" name="partAmount" value={formData.partAmount} onChange={handleChange} />
            </FormGroup>
            <FormGroup label="Total Amount">
              <Input type="number" name="totalAmount" value={formData.totalAmount} onChange={handleChange} />
            </FormGroup>
          </div>

          <SectionTitle>Payment & Feedback</SectionTitle>
          <div style={gridStyle}>
            <FormGroup label="Mode of Payment">
              <Select name="modeOfPayment" value={formData.modeOfPayment} onChange={handleChange}>
                <option value="Cash">Cash</option>
                <option value="UPI">UPI</option>
                <option value="Cheque">Cheque</option>
              </Select>
            </FormGroup>
            <FormGroup label={`Upload ${formData.modeOfPayment === 'Cash' ? 'Receipt Photo' : formData.modeOfPayment === 'UPI' ? 'UPI Snapshot' : 'Cheque Photo'}`}>
              <Input type="file" accept="image/*" onChange={handleFileChange} />
            </FormGroup>
          </div>

          <FormGroup label="Customer Suggestions / Feedback">
            <Textarea name="customerSuggestions" value={formData.customerSuggestions} onChange={handleChange} />
          </FormGroup>

          <div style={gridStyle}>
            <FormGroup label="Customer Rating (1-5)">
              <Select name="customerRating" value={formData.customerRating} onChange={handleChange}>
                <option value="1">1 - Very Poor</option>
                <option value="2">2 - Poor</option>
                <option value="3">3 - Average</option>
                <option value="4">4 - Good</option>
                <option value="5">5 - Excellent</option>
              </Select>
            </FormGroup>
            <FormGroup label="Would you recommend our service?">
              <Select name="recommendService" value={formData.recommendService} onChange={handleChange}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Select>
            </FormGroup>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            style={{
              width: '100%',
              marginTop: '30px',
              padding: '16px',
              background: isSubmitting ? '#ccc' : 'linear-gradient(90deg, #E07B2A, #f5a623)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              transition: 'transform 0.2s',
            }}
            onMouseOver={(e) => !isSubmitting && (e.target.style.transform = 'scale(1.01)')}
            onMouseOut={(e) => !isSubmitting && (e.target.style.transform = 'scale(1)')}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Job Sheet'}
          </button>
        </form>
      </div>
    </div>
  );
}

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '20px',
  marginBottom: '15px'
};

function SectionTitle({ children }) {
  return (
    <h3 style={{ 
      borderBottom: '2px solid #FDF6EE', 
      paddingBottom: '10px', 
      marginBottom: '20px', 
      marginTop: '30px',
      color: '#3a2213',
      fontSize: '20px'
    }}>
      {children}
    </h3>
  );
}

function FormGroup({ label, children, style = {} }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', ...style }}>
      <label style={{ marginBottom: '8px', fontSize: '14px', color: '#555', fontWeight: '500' }}>{label}</label>
      {children}
    </div>
  );
}

function Input(props) {
  return (
    <input 
      {...props} 
      style={{
        padding: '12px',
        border: '1px solid #ddd',
        borderRadius: '6px',
        fontSize: '15px',
        color: '#333',
        backgroundColor: 'white',
        outline: 'none',
        transition: 'border-color 0.2s',
      }}
      onFocus={(e) => e.target.style.borderColor = '#E07B2A'}
      onBlur={(e) => e.target.style.borderColor = '#ddd'}
    />
  );
}

function Select(props) {
  return (
    <select 
      {...props} 
      style={{
        padding: '12px',
        border: '1px solid #ddd',
        borderRadius: '6px',
        fontSize: '15px',
        color: '#333',
        outline: 'none',
        backgroundColor: 'white',
        cursor: 'pointer'
      }}
    >
      {props.children}
    </select>
  );
}

function Textarea(props) {
  return (
    <textarea 
      {...props} 
      rows="3"
      style={{
        padding: '12px',
        border: '1px solid #ddd',
        borderRadius: '6px',
        fontSize: '15px',
        color: '#333',
        backgroundColor: 'white',
        outline: 'none',
        resize: 'vertical',
      }}
      onFocus={(e) => e.target.style.borderColor = '#E07B2A'}
      onBlur={(e) => e.target.style.borderColor = '#ddd'}
    />
  );
}
