// app/layout.tsx
import React from 'react';
import Header from "../components/layout/Header/Header"
import { Providers } from './providers';

// You can use a utility or keep simple styles here
// For this migration, we'll keep the component structure simple.
// In a real app, you might use CSS modules or Tailwind for server components.
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
            <main style={{ flex: 1, paddingTop: '80px' }}>
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}