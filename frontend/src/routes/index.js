import React, { Fragment } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Reports from '../pages/Reports';
import useAuth from '../hooks/useAuth';
import SignUp from '../pages/Signup';
import SignIn from '../pages/Signin';

const Private = ({ Item }) => {
  const { signed } = useAuth();
  
  return signed > 0 ? <Item /> : <SignIn />;
};

const RoutesApp = () => {
  return(
    
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home}/>} />
          <Route path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="*" element={<SignIn/>} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  )
};

export default RoutesApp;