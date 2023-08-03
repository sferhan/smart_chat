import logo from './logo.svg';
import './App.css';
import Chatbox from './chatbox';
import Mainpage from './Main';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Link to="/"/>
      <Routes>
        <Route path="/" element={<Mainpage/>}>
          <Route path="chatbox" element={<Chatbox/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
