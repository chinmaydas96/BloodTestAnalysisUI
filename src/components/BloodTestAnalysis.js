import React, { useState, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';

function BloodTestAnalysis({ isArabic }) {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const t = (en, ar) => isArabic ? ar : en;

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

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      const fileType = droppedFile.type;
      const acceptedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
      
      if (acceptedTypes.includes(fileType)) {
        setFile(droppedFile);
        setResults(null);
        setError(null);
      } else {
        setError(t('Please upload a valid file type (PDF, JPG, JPEG, or PNG)', 'يرجى تحميل نوع ملف صالح (PDF أو JPG أو JPEG أو PNG)'));
      }
    }
  }, [t]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    setError(null);
    setResults(null);

    try {
      const buf = await file.arrayBuffer();
      const language = isArabic ? "arabic" : "english";
      const endpoint = `${API_URL}?analyze=true&language=${language}`;
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': file.type,
          'x-api-key': API_KEY,
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
          <h3 className="analyzer-title">{t('Document Analyzer','محلل المستندات')}</h3>
          <p className="analyzer-subtitle">{t('Upload your blood test report for analysis','قم بتحميل تقرير فحص الدم للتحليل')}</p>
          
          <form onSubmit={handleSubmit} className="upload-form">
            <div 
              className={`file-upload ${isDragging ? 'dragging' : ''}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <label htmlFor="blood-test-file" className="file-label">
                {file ? file.name : t('Drag & drop or click to choose a file','اسحب وأفلت أو انقر لاختيار ملف')}
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
              {loading ? t('Processing...','جارٍ المعالجة...') : t('Process Document','معالجة المستند')}
            </button>
          </form>

          {loading && <div className="loading-indicator">{t('Processing...','جارٍ المعالجة...')}</div>}

          {error && (
            <div className="error-message">
              <h3>{t('Error','خطأ')}</h3>
              <p>{error}</p>
            </div>
          )}

          {results && (
            <div className="results-container">
              <h3 className="results-title">{t('Analysis Results','نتائج التحليل')}</h3>
              <div 
                className={`formatted-results markdown-body ${isArabic ? 'arabic-content' : ''}`}
                dir={isArabic ? 'rtl' : 'ltr'}
              >
                <ReactMarkdown
                  components={{
                    img: () => null,
                    image: () => null
                  }}
                >
                  {results}
                </ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default BloodTestAnalysis; 