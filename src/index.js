import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FundraisercontextProvider from './Context/Fundraisercontext';
import PatientcontextProvider from './Context/Patientcontext';
import MonthlycontextProvider from './Context/Monthlycontext';
import BankcontextProvider from './Context/Bankcontext';
import PatientphotocontextProvider from './Context/Patientphotocontext';
import PhotocontextProvider from './Context/Patientphotocontext';
import Create_patientProvider from './Context/Create_patientcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FundraisercontextProvider>
      <PatientcontextProvider>
        <MonthlycontextProvider>
          <BankcontextProvider>
            <PhotocontextProvider>
              <Create_patientProvider>
              <App />
              </Create_patientProvider>
              </PhotocontextProvider> 
        </BankcontextProvider>
        </MonthlycontextProvider>
    </PatientcontextProvider>
    </FundraisercontextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
