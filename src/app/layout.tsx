import React from "react";
import { Footer } from "@/components/layout/footer";
import type { Metadata } from "next";
// import { Inter } from 'next/font/google';

import "@/assets/fonts/tabler-icons.min.css";
import "@/assets/fonts/feather.css";
import "@/assets/fonts/fontawesome.css";
import "@/assets/fonts/material.css";
import "@/assets/css/style.css";
// import '@/assets/css/style-preset.css'

// import '@/assets/css/globals.css'
import "@/assets/js/plugins/simplebar.min.js";
import "@/assets/js/plugins/feather.min.js";

// import 'bootstrap/dist/css/bootstrap.min.css'

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Freengo - Deplacez vous aisément",
  description: "Une application de transport",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      {/* <CssBaseline/> */}
      <head>
        <title>
          <>{metadata.title || "Freengo"}</>
        </title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/7.3.2/mdb.min.css"
          rel="stylesheet"
        />
        <link rel="icon" href="assets/images/favicon.svg" type="image/x-icon" />
      </head>
      <body>
        {children}

        {/* <Footer /> */}
      </body>
    </html>
  );
}
