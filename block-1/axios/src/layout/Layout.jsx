import DrawerAppBar from "../components/AppBar";
import Footer from "../components/Footer";

export const Layout = ({ children }) => {
  return (
    <div>
      <DrawerAppBar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};
