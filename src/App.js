import Signup from "./Signup";
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Login from "./Login";
import Dashboard from "./Dashboard";
import Card from "./Card";
import MailSent from "./MailSent";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/mail" element={<Dashboard/>}/>
          <Route path="/card" element={<Card/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
