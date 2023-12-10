import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import { Dashboard } from './components/Dashboard';
import { Userlist } from './components/Userlist';
import { Userform } from './components/Userform';
import Footer from './components/Footer';
import { UserEditForm } from './components/UserEditForm';



function App() {
  return (
    <BrowserRouter>
      
      <NavigationBar></NavigationBar>
      
      <Routes>
        
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/userlist' element={<Userlist/>}></Route>
        <Route path='/register' element={<Userform/>}></Route>
        <Route path='/edit/:username' element={<UserEditForm/>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
