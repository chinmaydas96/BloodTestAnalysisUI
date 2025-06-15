import React, { useState } from 'react';

function BloodTestAnalysis() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setResults({
        hemoglobin: {
          value: 14.2,
          status: 'normal',
          reference: '13.5-17.5 g/dL',
          description: 'Hemoglobin is within normal range, indicating good oxygen-carrying capacity.'
        },
        whiteCellCount: {
          value: 7.5,
          status: 'normal',
          reference: '4.5-11.0 10^3/μL',
          description: 'White blood cell count is normal, suggesting a healthy immune system.'
        },
        platelets: {
          value: 250,
          status: 'normal',
          reference: '150-450 10^3/μL',
          description: 'Platelet count is normal, indicating proper blood clotting function.'
        },
        glucose: {
          value: 105,
          status: 'borderline',
          reference: '70-99 mg/dL',
          description: 'Glucose is slightly elevated. Consider following up with your healthcare provider.'
        }
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <section className="blood-test-section" id="analysis">
      <div className="blood-test-container">
        <h2 className="section-title">Blood Test Analysis</h2>
        <p className="section-subtitle">
          Upload your blood test results and our AI will analyze them for you.
        </p>
        
        <form onSubmit={handleSubmit} className="upload-form">
          <div className="file-upload">
            <label htmlFor="blood-test-file" className="file-label">
              {file ? file.name : 'Choose a file'}
              <input 
                type="file" 
                id="blood-test-file" 
                accept=".pdf,.jpg,.jpeg,.png" 
                onChange={handleFileChange}
                className="file-input" 
              />
            </label>
          </div>
          <button 
            type="submit" 
            className="cta-button" 
            disabled={!file || loading}
          >
            {loading ? 'Analyzing...' : 'Analyze Results'}
          </button>
        </form>

        {results && (
          <div className="results-container">
            <h3 className="results-title">Analysis Results</h3>
            <div className="results-grid">
              {Object.entries(results).map(([key, data]) => (
                <div key={key} className={`result-card ${data.status}`}>
                  <h4 className="result-name">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h4>
                  <div className="result-value">{data.value} <span className="result-unit">{data.reference.split(' ').pop()}</span></div>
                  <div className="result-reference">Reference: {data.reference}</div>
                  <div className="result-status">{data.status.toUpperCase()}</div>
                  <p className="result-description">{data.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default BloodTestAnalysis; 