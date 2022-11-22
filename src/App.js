import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './index.css';
import Homepage from './pages/Homepage';
import {ContextProvider} from '../src/context/GlobalContext'


function App() {
  return (
    <>
    <ContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
        </Routes>
      </Router>
    </ContextProvider>
    </>
  );
}

export default App;
