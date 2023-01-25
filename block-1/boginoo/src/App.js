import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Boginoo } from "./components/Header";
import { Shortened } from "./components/Shortened";
import { Login } from "./components/login";
import { Create } from "./components/create";
import { Box } from "@mui/system";
import Header from "./layout/HHeader";
import Footer from "./layout/FFooter";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import History from "./components/history"
function App() {
  const [user, setUser] = useState(null);

  axios.interceptors.request.use((config) => {
    const token = Cookies.get('token');
    config.headers.token = token;
    return config;
}, (error) => {
    return Promise.reject(error);
});

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('http://localhost:8000/');
      console.log(res);
      setUser(res.data.user);
    };
    getData();
  }, []);
  return (
    <BrowserRouter>
      <Box>
        <Header user={user}/>
        <Routes>
          <Route path="/" element={<Boginoo user={user} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<Create />} />
          <Route path="/:id" element={<Shortened />} />
          <Route path="/history/:email" element={<History />} />
          {/* <Route path="/shortened" element={<Shortened />} /> */}
          {/* <Route path="/signIn" element={<SignIn />} /> */}
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
