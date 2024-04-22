import logo from './logo.svg';
import './App.css';
import Counters from './components/pages/counter/Counters';
import UserForms from './components/pages/forms/UserForms';
import EditText from './components/pages/edit/EditText';
import SecondCounter from './components/pages/counter/SecondCounter';
import ThirdCounter from './components/pages/counter/ThirdCounter';
import { Box } from '@chakra-ui/react';
function App() {
  return (
    <div className="App">
              <Box borderWidth="3px" borderRadius="lg" p={4} mt={3} border='2px solid gray'  margin='10px' >
 <ThirdCounter/>
 <UserForms/>
 </Box>
    </div>
  );
}
export default App;
















// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch,Navigate,Routes } from 'react-router-dom';

// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';
// import SignIn from './SignIn';
// import SignUp from './SIgnUp';
// import Dashboard from './Dashboard';

// function App() {
//   return (

//     // <BrowserRouter>
//     // <Routes>
//     //   <Route      path='/signin' element={<SignIn/>}    />
//     //   <Route      path='/signup' element={<SignIn/>}    />
//     //   <Route      path='/dashboard' element={<Dashboard/>}    />

//     // </Routes>
    
//     // </BrowserRouter>
//  <Router>
//     <Routes>
//     <Route path="/signin" element={<SignIn />} />
//     <Route path="/signup" element={<SignUp />} />
//     <Route path="/dashboard" element={<PrivateRoute />}>
//       <Route index element={<Dashboard />} />

//       {/* Add other dashboard routes */}
//     </Route>
//     <Route path="*" element={<Navigate to="/signin" replace />} />
//   </Routes>
//   </Router>
//   );
// }

// export default App;
