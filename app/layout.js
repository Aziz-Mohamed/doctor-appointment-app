import "@/app/globals.css";
import localFont from "next/font/local";
import { Toaster } from "sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "MedClinic | Healthcare",
  description: "MedClinic is a healthcare service that allows you to find a doctor and book an appointment.",
};

export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <main>{children}</main>
        <Toaster/>
      </body>
    </html>
  );
}
