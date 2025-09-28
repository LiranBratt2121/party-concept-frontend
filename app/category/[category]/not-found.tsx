"use client";

import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '50px', 
      direction: 'rtl',
      fontFamily: 'Arial, sans-serif',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h2 style={{ fontSize: '48px', marginBottom: '20px' }}>📂</h2>
      <h1 style={{ fontSize: '32px', marginBottom: '16px', color: '#333' }}>
        הקטגוריה לא נמצאה
      </h1>
      <p style={{ fontSize: '18px', color: '#666', marginBottom: '32px' }}>
        הקטגוריה שחיפשת לא קיימת או שהוסרה מהמערכת.
      </p>
      <Link 
        href="/" 
        style={{
          display: 'inline-block',
          padding: '12px 24px',
          backgroundColor: '#e91e63',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease'
        }}
        onMouseOver={(e) => (e.target as HTMLLinkElement).style.backgroundColor = '#c2185b'}
        onMouseOut={(e) => (e.target as HTMLLinkElement).style.backgroundColor = '#e91e63'}
      >
        חזור לעמוד הבית
      </Link>
    </div>
  );
}