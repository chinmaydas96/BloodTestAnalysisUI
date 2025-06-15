import React, { useState } from 'react';

function BloodTestAnalysis() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [requestInfo, setRequestInfo] = useState(null);
  const [error, setError] = useState(null);

  // Hardcoded API values
  const API_URL = "https://giqddf736l.execute-api.us-east-1.amazonaws.com/prod/process";
  const API_KEY = "OF8QMOa2kG86DY0jz69ot2OvXZYUbGIM6pphMKB1";

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      setResults(null);
      setRequestInfo(null);
      setError(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    setError(null);
    setResults(null);
    setRequestInfo(null);

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
      
      // Set request info
      setRequestInfo({
        requestId: data.request_id,
        fileType: data.file_type,
        storage: data.storage
      });
      
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
        <h2>Document Analyzer</h2>
        <p>Upload your blood test report for analysis</p>
        
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

        {requestInfo && (
          <div className="request-info">
            <h3>Request Information</h3>
            <p><strong>Request ID:</strong> {requestInfo.requestId}</p>
            <p><strong>File Type:</strong> {requestInfo.fileType}</p>
            {requestInfo.storage && (
              <p>
                <strong>S3 Path:</strong> <code>{requestInfo.storage.bucket}/{requestInfo.storage.key}</code>
              </p>
            )}
          </div>
        )}

        {error && (
          <div className="error-message">
            <h3>Error</h3>
            <p>{error}</p>
          </div>
        )}

        {results && (
          <div className="results-container">
            <h3 className="results-title">Analysis Results</h3>
            <pre className="results-content">{results}</pre>
          </div>
        )}
      </div>
    </section>
  );
}

export default BloodTestAnalysis; 