import React, { useState } from 'react';

function BloodTestAnalysis() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  // Hardcoded API values
  const API_URL = "https://giqddf736l.execute-api.us-east-1.amazonaws.com/prod/process";
  const API_KEY = "OF8QMOa2kG86DY0jz69ot2OvXZYUbGIM6pphMKB1";

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      setResults(null);
      setError(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    setError(null);
    setResults(null);

    try {
      const buf = await file.arrayBuffer();
      const endpoint = `${API_URL}?analyze=true`;
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': file.type,
          'x-api-key': API_KEY
        },
        body: buf
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      
      // Set analysis results if available
      if (data.analysis) {
        setResults(data.analysis);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to format analysis results for better display
  const formatAnalysisResults = (text) => {
    if (!text) return null;
    
    // Split the text into sections based on empty lines
    const sections = text.split(/\n\n+/).filter(section => section.trim());
    
    return sections.map((section, index) => {
      // Check if this is a section header
      const lines = section.split('\n');
      const isHeader = lines[0].endsWith(':');
      
      return (
        <div key={index} className={`analysis-section ${isHeader ? 'section-header' : ''}`}>
          {lines.map((line, lineIndex) => {
            // Check if line is a bullet point
            const isBullet = line.trim().startsWith('–') || line.trim().startsWith('-');
            
            return (
              <div 
                key={lineIndex} 
                className={`analysis-line ${isBullet ? 'bullet-point' : ''} ${lineIndex === 0 && isHeader ? 'header-line' : ''}`}
              >
                {line}
              </div>
            );
          })}
        </div>
      );
    });
  };

  return (
    <section className="blood-test-section" id="analysis">
      <div className="blood-test-container">
        <div className="analysis-intro">
          <h2>Upload your blood test results and get instant, accurate analysis powered by our advanced AI technology. Understand your health metrics with personalized insights and recommendations.</h2>
          {!file && !results && (
            <button className="try-now-button" onClick={() => document.getElementById('blood-test-file').click()}>
              Try it Now
            </button>
          )}
        </div>
        
        <div className="document-analyzer-container">
          <h3 className="analyzer-title">Document Analyzer</h3>
          <p className="analyzer-subtitle">Upload your blood test report for analysis</p>
          
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
              className="analysis-button" 
              disabled={!file || loading}
            >
              {loading ? 'Processing...' : 'Process Document'}
            </button>
          </form>

          {loading && <div className="loading-indicator">⏳ Processing...</div>}

          {error && (
            <div className="error-message">
              <h3>Error</h3>
              <p>{error}</p>
            </div>
          )}

          {results && (
            <div className="results-container">
              <h3 className="results-title">Analysis Results</h3>
              <div className="formatted-results">
                {formatAnalysisResults(results)}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default BloodTestAnalysis; 