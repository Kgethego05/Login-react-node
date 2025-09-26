import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Homelayout from './Layout/Homelayout';
import Home from './Pages/Home';
import About from './Pages/About';
import Loginform from './Pages/Loginform';
import Registerform from './Pages/Registerform';
import Userlayout from './Layout/Userlayout';
import Userhome from './Pages/Userhome';
import Viewprofile from './Pages/Viewprofile';
import Updateprofile from './Pages/Updateprofile';
import DeleteAccount from './Pages/DeleteAccount';
import Logout from './Pages/Logout';
import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from './AuthoContext';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Homelayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Loginform />} />
          <Route path="register" element={<Registerform />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/Users" element={<Userlayout/>}>
            <Route index element={<Userhome />} />
            <Route path="viewprofile" element={<Viewprofile />} />
            <Route path="updateprofile" element={<Updateprofile />} />
            <Route path="deleteaccount" element={<DeleteAccount />} />
            <Route path="logout" element={<Logout />} />
          </Route>
        </Route>
      </>
    )
  );

  return (
    <AuthProvider> 
      <RouterProvider router={router} /> 
    </AuthProvider>
  );
};

export default App;
