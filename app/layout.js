import "./globals.css";

// import components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Context Provider
import SearchContextProvider from "@/context/searchContext";

export const metadata = {
  title: "News Application",
  description: "A full fledged news application for the avid news reader",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <SearchContextProvider>
          <Navbar />
          <main className="container mx-auto p-4">
            {children}
          </main>
          <Footer />
        </SearchContextProvider>
      </body>
    </html>
  );
}
