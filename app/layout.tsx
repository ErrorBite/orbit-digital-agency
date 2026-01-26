import "./globals.css";
import Navbar from "./components/Navbar";  // ✅ ADD THIS LINE

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased min-h-screen">
        <Navbar />          {/* ✅ ADD NAVBAR HERE */}
        <main>{children}</main>  {/* ✅ WRAP CONTENT IN <main> */}
      </body>
    </html>
  );
}
