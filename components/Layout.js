import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <main className="bg-home-bkg bg-cover">
    <Navbar />
    {children}
    <Footer />
  </main>
);

export default Layout;
