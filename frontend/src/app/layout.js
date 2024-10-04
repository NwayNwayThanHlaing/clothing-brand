import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav-bar";
import Footer from "./components/footer";
import { NavbarProvider } from "./context/nav-bar";
import FilterProvider from "./context/filter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ECHO",
  description: "Fashion for everyone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarProvider>
          <FilterProvider>
            <Navbar />

            <div className="pt-20">{children}</div>
            <Footer />
          </FilterProvider>
        </NavbarProvider>
      </body>
    </html>
  );
}
