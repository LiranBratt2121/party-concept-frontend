import React from 'react';
import Header from "../components/layout/Header/Header"
import { Providers } from './providers';

import './globals.css';
import Footer from '@/components/layout/Footer/Footer';

export const metadata = {
  title: 'Party Concept',
  description: 'חנות למוצרי אירועים, מסיבות, ימי הולדת, מוצרי קיץ, מתנות ובלונים',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <Providers>
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
              {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}