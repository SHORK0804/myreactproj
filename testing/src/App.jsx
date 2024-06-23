import { Routes, Route } from 'react-router-dom';



import Home from './components/pages/Home';
import Login from './components/pages/LogIn';
import Contact from './components/pages/Contact';
import { Navbar } from './components/Navbar/Navbar';
import GoTop from './components/GoTop/GoTop';


function App() {

  
  return (
    <>
      <Navbar />
      <GoTop />

      <Routes>
        <Route index element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </>
  );
}

export default App
