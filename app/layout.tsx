// app/layout.tsx
import {Providers} from "./providers";
import type { Viewport } from 'next';


export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    minimumScale: 1,
    userScalable: false,
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <body>
      <Providers >
        {children}
      </Providers>
      </body>
      </html>
  );
}