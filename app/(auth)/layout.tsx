import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wellegance - Store Auth",
  description: "Next.js 14 Wellegance Ecommerce Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div>
            <SignedOut>
            </SignedOut>
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}