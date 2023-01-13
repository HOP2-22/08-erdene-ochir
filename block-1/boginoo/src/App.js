import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Boginoo } from "./components/Header";
import { Shortened } from "./components/footer";
import { Login } from "./components/login";
import { SignIn } from "./components/signIn";
import { Box } from "@mui/system";
import Header from "./layout/HHeader";
import Footer from "./layout/FFooter";

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Header />
        <Routes>
          <Route path="/" element={<Boginoo />} />
          <Route path="/shortened" element={<Shortened />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
