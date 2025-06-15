import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

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

  return (
    <section className="blood-test-section" id="analysis">
      <div className="blood-test-container">        
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
              <div className="formatted-results markdown-body">
                <ReactMarkdown>{results}</ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default BloodTestAnalysis; 