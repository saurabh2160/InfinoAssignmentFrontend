import './App.css';
import InputForm from './components/inputForm';
import Navbar from './components/navbar';
import OutputTable from './components/outputTable';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import BackendState from './stateApi/backendcall';
function App() {
  return (
    <>
      <Router>
        <BackendState>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<InputForm />}></Route>
            <Route exact path="/updatedvalues/:id" element={<OutputTable />}></Route>
          </Routes>
        </BackendState>
      </Router>
    </>
  )
}

export default App;
