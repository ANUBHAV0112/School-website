import React from 'react';
import "./Document.css";

function Document() {
  return (
    <>
    <div className='a1'></div>
    <div className="document-container">
      <div className="document-content">
        <h1 className="document-heading"><b>Checklist Document’s</b></h1>
        <ul className="document-list">
          <li className="document-item">Information record form</li>
          <li className="document-item">Two joint photograph of parents (passport size)</li>
          <li className="document-item">Two joint photograph of student (passport size)</li>
          <li className="document-item">Agreement by parent to be submitted duly notarized.</li>
          <li className="document-item">Anti Ragging undertaking by Student</li>
          <li className="document-item">Medical Proforma</li>
          <li className="document-item">Birth Certificate</li>
          <li className="document-item">Pan card and Aadhaar card copy (mother and father)</li>
          <li className="document-item">Aadhar card copy of child</li>
          <li className="document-item">Case Certificate, if not in General Category, issued by competent authority of the area</li>
          <li className="document-item">Defence Serving Certificate, in case of Defense Personnel</li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default Document;
