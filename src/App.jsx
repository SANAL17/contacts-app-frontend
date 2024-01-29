
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Addnew from './Components/Addnew';
import Edit from './Components/Edit';
import View from './Components/View';
import PageNotFound from './Components/PageNotFound';
import Delete from './Components/Delete';
import ViewAllContacts from './Components/ViewAllContacts';

function App() {
  return (
    <div className="App">
    <Header/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<Addnew/>}/>
      <Route path='/contacts' element={<ViewAllContacts/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
      <Route path='/view/:id' element={<View/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path='/delete' element={<Delete/>}/>
      
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
