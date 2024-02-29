import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Compouent/Main/Main';
import Home from './Compouent/Home/Home';
import Contact from './Compouent/Contact/Contact';
import About from './Compouent/About/About/About';
import News from './Compouent/News/News';
import Download from './Compouent/Download/Download';
import Gallery from './Compouent/Gallery/Gallery';
import ContactForm from './Compouent/Contact/ContactForm';
import Motto from './Compouent/Motto/Motto';
import Facilities from './Compouent/Facilities/Facilities';
import Management from './Compouent/Management/Management';
import Mandatary from './Compouent/Mandatary/Mandatary';
import Event from './Compouent/Events/Event';
import Announcement from './Compouent/Announcement/Announcement';
import TransferForm from './Compouent/Transfer Form/TransferForm';
import Document from './Compouent/Document/Document';
import Fees from './Compouent/Fees/Fees';



export default class App extends Component {
  
  render() {
    return (
      <div>
      <Suspense fallback={"loading......"}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='' element={<Main/>}/>
            <Route path="/Home" element={<Home />} />
            <Route path='/News' element={<News/>}/>
            <Route path='/Download' element={<Download/>}/>
            <Route path="/Contact" element={<Contact />} />
            <Route path='/Gallery' element={<Gallery/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/form' element={<ContactForm/>}/>
            <Route path='/motto' element={<Motto/>}/>
            <Route path='/Facilities' element={<Facilities/>}/>
            <Route path='/Management' element={<Management/>}/>
            <Route path='/Mpd' element={<Mandatary/>}/>
            <Route path='/event' element={<Event/>}/>
            <Route path='/announcement' element={<Announcement/>}/>
            <Route path='/Tform' element={<TransferForm/>}/>
            <Route path='/Document' element={<Document/>}/>
            <Route path='/Fees' element={<Fees/>}/>
            


          </Routes>
          <Footer />
        </BrowserRouter>
      </Suspense>
      </div>
    )
  }
}
