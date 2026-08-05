import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/axiosInstance';

export default function JobSheetDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem('adminAuth')) {
      navigate('/admin/login');
      return;
    }

    api.get(`/jobs/${id}`)
      .then(res => {
        setJob(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id, navigate]);

  if (loading) return <div style={{ padding: '50px', textAlign: 'center' }}>Loading...</div>;
  if (!job) return <div style={{ padding: '50px', textAlign: 'center' }}>Job Sheet not found</div>;

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa', padding: '40px 20px', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <button 
          onClick={() => navigate('/admin/dashboard')}
          style={{ marginBottom: '20px', padding: '8px 16px', border: '1px solid #ccc', borderRadius: '4px', background: 'white', cursor: 'pointer' }}
        >
          &larr; Back to Dashboard
        </button>

        <div style={{ background: 'white', borderRadius: '12px', padding: '40px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
          <div style={{ borderBottom: '2px solid #eee', paddingBottom: '20px', marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h1 style={{ margin: '0 0 10px 0', color: '#333' }}>Service Job Sheet</h1>
              <div style={{ fontSize: '14px', color: '#666' }}>Reg No: <strong style={{ color: '#000' }}>{job.registrationNumber}</strong></div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ marginBottom: '5px' }}>Date: {job.date}</div>
              <span style={{
                padding: '4px 10px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '600',
                background: job.callStatus === 'In Warranty' ? '#d4edda' : '#f8d7da',
                color: job.callStatus === 'In Warranty' ? '#155724' : '#721c24'
              }}>
                {job.callStatus}
              </span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
            <DetailRow label="Call No" value={job.callNo} />
            <DetailRow label="Customer Name" value={job.customerName} />
            <DetailRow label="Customer Mobile" value={job.customerMobile} />
            <DetailRow label="Customer Address" value={job.customerAddress} />
            <DetailRow label="In Time" value={job.inTime} />
            <DetailRow label="Out Time" value={job.outTime} />
            <DetailRow label="Product" value={job.product} />
            <DetailRow label="Brand" value={job.brand} />
            <DetailRow label="Serial No" value={job.serialNo} />
            <DetailRow label="Work Details" value={job.workDetails} />
            <DetailRow label="Problem Reported" value={job.problemReported} />
            <DetailRow label="Detected by Engineer" value={job.detectedByEngineer} />
            <DetailRow label="Repair by Engineer" value={job.repairByEngineer} />
            <DetailRow label="Service Amount" value={job.serviceAmount} />
            <DetailRow label="Part Amount" value={job.partAmount} />
            <DetailRow label="Total Amount" value={job.totalAmount} />
            <DetailRow label="Mode of Payment" value={job.modeOfPayment} />
            <DetailRow label="Customer Suggestions" value={job.customerSuggestions} />
            <DetailRow label="Customer Rating" value={job.customerRating ? `${job.customerRating} / 5` : ''} />
            <DetailRow label="Recommend Service" value={job.recommendService} />
          </div>

          {job.receiptUrl && (
            <div style={{ marginTop: '40px', borderTop: '2px solid #eee', paddingTop: '30px' }}>
              <h3 style={{ marginBottom: '20px', color: '#333' }}>Payment Receipt ({job.modeOfPayment})</h3>
              <img 
                src={job.receiptUrl} 
                alt="Payment Receipt" 
                style={{ maxWidth: '100%', maxHeight: '500px', borderRadius: '8px', border: '1px solid #ddd' }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, value }) {
  if (!value) return null;
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{label}</span>
      <span style={{ fontSize: '15px', color: '#222', fontWeight: '500', marginTop: '4px' }}>{value}</span>
    </div>
  );
}
