import React from 'react';
import './globals.css';

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang='pl'>
      <head>
        <title>Mateusz Mańczak - Strony internetowe i aplikacje webowe</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
