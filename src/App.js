import React,{useState, useEffect} from 'react';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer"
import GlobalStyle from "./globalStyle";
import 'antd/dist/antd.css';
import "react-image-gallery/styles/css/image-gallery.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/AboutPage"
import Contact from "./Components/Contact/Contact";
import Blog from "./Components/Blog/Blog"
import ScrollToTop from './ScrollToTop'
import Submit from "./Components/Submit/Submit";
import WhatsApp from "./Components/Whatsapp/WhatsApp";
import BlogDetails from "./Components/BlogDetail/BlogDetails";
import Admin from "./Components/Admin/Admin";
import Loader from "./Components/Loader/Loader";
import Gallery from './Components/Gallery/Gallery';


function App() {
  const [done, setDone] = useState(undefined)

  useEffect(() => {
    setTimeout(() => {
      setDone(true)
    }, 2000);
  }, [])
  
  return (
    <>
      <Router>
        <ScrollToTop>
          <GlobalStyle />  
          {
            !done ?  <Loader /> :  
            <>               
            <Header/>  
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/blog' element={<Blog/>} />
              <Route path='/blogdetails/:id' element={<BlogDetails/>} />
              <Route path='/donate' element={<Submit/>} />
              <Route path='/gallery' element={<Gallery/>} />
              <Route path='/edhfadmin2022' element={<Admin/>} />
            </Routes>
            <Footer />
            <WhatsApp />
          </> 
          }
       
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
