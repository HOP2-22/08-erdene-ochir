import Header from "./components/AppBar";
import Main from "./components/Cards";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { HomePage } from "./Pages/Home";
import MultiActionAreaCard from "./components/Cards";
import { BlogPostSingle } from "./Pages/BlogPost";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<MultiActionAreaCard />} />
          <Route path="/blog/:id" element={<BlogPostSingle />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    // <div>
    //   <Header />
    //   <Main />
    //   <Footer />
    // </div>
  );
};

export default App;
