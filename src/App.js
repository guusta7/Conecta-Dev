import React from 'react';
import {  ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/';
import Home from './pages/Home/';
import SignIn from './pages/SignIn'
import GuestRoute from './routes/GuestRoute'
import { BrowserRouter, Route, Routes  } from 'react-router-dom';

import {Provider} from 'react-redux'
import store from './store'
import Auth from '../src/components/Auth'

import './mock'


function App() {



  return (
    <Provider  store={store}>
      <ThemeProvider theme={theme}>  
        <BrowserRouter>
        <Auth>
        <Routes>
            <Route path="/" element={<Home />}/>
              <GuestRoute path="/sign-in" element={<SignIn />}/>
               <Route path="*" element={<h1> Not found 404!</h1>} />
                </Routes>



        </Auth>
          
    </BrowserRouter>

    </ThemeProvider>



      </Provider>
   
   
   
    
    
      
     

   
 
 
   
  );
}

export default App;
