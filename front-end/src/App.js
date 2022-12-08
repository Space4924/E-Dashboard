// import logo from './logo.svg';
import './App.css';
import Navigator from './Nav';
import Form from './Form'
import Login from './Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateComponent from './PrivateComponent';
import Feature from './Feature';
import Productlist from './Productlist';
import Home from './Home';
import Update from './Update';

function App() {
  // const auth = localStorage.getItem('user');

  return (
    <Router>
      <div className="App">
        <Navigator />
        <Routes>
          <Route element={<PrivateComponent />}>
          <Route exact path='/' element={<Home/>}/>
            <Route exact path='/product' element={<Productlist/>}></Route>
            <Route exact path='/feature' element={<Feature />}></Route>
            <Route exact path='/Update/:id' element={<Update/>}/>
            <Route exact path='/logout' element={<h1>LogOut</h1>}></Route>
          </Route>
          <Route exact path='/signin' element={<Form />}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
