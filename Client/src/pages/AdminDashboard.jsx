import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axiosInstance';

export default function AdminDashboard() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check auth
    if (!localStorage.getItem('adminAuth')) {
      navigate('/admin/login');
      return;
    }

    // Fetch jobs
    api.get('/jobs')
      .then(res => {
        setJobs(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [navigate]);

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f8f9fa',
      fontFamily: "'Inter', sans-serif",
      padding: '40px 20px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h1 style={{ color: '#333', fontSize: '28px', fontWeight: '600' }}>Admin Dashboard</h1>
          <div style={{ display: 'flex', gap: '15px' }}>
            <button 
              onClick={() => navigate('/job-sheet')}
              style={{
                padding: '10px 20px',
                border: 'none',
                borderRadius: '6px',
                background: '#198754',
                color: 'white',
                cursor: 'pointer',
                fontWeight: '500'
              }}
            >
              + Add New Job
            </button>
            <button 
              onClick={() => {
                localStorage.removeItem('adminAuth');
                navigate('/admin/login');
              }}
              style={{
                padding: '10px 20px',
                border: 'none',
                borderRadius: '6px',
                background: '#dc3545',
                color: 'white',
                cursor: 'pointer',
                fontWeight: '500'
              }}
            >
              Logout
            </button>
          </div>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
          overflow: 'hidden'
        }}>
          {loading ? (
            <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>Loading...</div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ background: '#f1f3f5', borderBottom: '2px solid #e9ecef' }}>
                <tr>
                  <th style={thStyle}>Reg. No</th>
                  <th style={thStyle}>Date</th>
                  <th style={thStyle}>Customer Name</th>
                  <th style={thStyle}>Product</th>
                  <th style={thStyle}>Status</th>
                  <th style={thStyle}>Action</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job) => (
                  <tr key={job._id} style={{ borderBottom: '1px solid #e9ecef', transition: 'background 0.2s' }} onMouseOver={(e) => e.currentTarget.style.background = '#f8f9fa'} onMouseOut={(e) => e.currentTarget.style.background = 'white'}>
                    <td style={tdStyle}>{job.registrationNumber}</td>
                    <td style={tdStyle}>{job.date || new Date(job.createdAt).toLocaleDateString()}</td>
                    <td style={tdStyle}>{job.customerName}</td>
                    <td style={tdStyle}>{job.product}</td>
                    <td style={tdStyle}>
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
                    </td>
                    <td style={tdStyle}>
                      <button 
                        onClick={() => navigate(`/admin/job/${job._id}`)}
                        style={{
                          padding: '6px 12px',
                          border: 'none',
                          borderRadius: '4px',
                          background: '#0d6efd',
                          color: 'white',
                          cursor: 'pointer',
                          fontSize: '13px'
                        }}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
                {jobs.length === 0 && (
                  <tr>
                    <td colSpan="6" style={{ padding: '30px', textAlign: 'center', color: '#666' }}>No job sheets found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

const thStyle = {
  padding: '16px',
  textAlign: 'left',
  fontWeight: '600',
  color: '#495057',
  fontSize: '14px'
};

const tdStyle = {
  padding: '16px',
  color: '#212529',
  fontSize: '14px'
};
