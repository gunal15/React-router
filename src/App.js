import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Users from './Users';
import Createuser from './Createuser';
import Edituser from './Edituser';

function App() {
  return (
    <Router>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar></Topbar>
            <div class="container-fluid">
              <Routes>
                <Route path='/' element={<Dashboard />}  exact={true}></Route>
                <Route path='/users' element={<Users></Users>} exact={true}></Route>
                <Route path='/users-create' element={<Createuser></Createuser>} exact={true}></Route>
                <Route path='/users-edit/:id' element={<Edituser />} />
                  </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

