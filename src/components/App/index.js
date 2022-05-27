import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import {HomePage} from '../../page/Home';
import {AboutPage} from '../../page/About';

// Components
import {Header} from '../Header';
import {Footer} from '../Footer';

function App(){
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}


export {App};