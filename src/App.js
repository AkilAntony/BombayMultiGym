import logo from './logo.svg';
import './App.css';
import Box from '@mui/system/Box';
import Navbar from './Components/Navbar'
import ExerciseDetail from './Components/ExerciseDetail';
import Home from './Components/Home'
import Footer from './Components/Footer';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <Box width ='400' sx = {{width:{xl:'1488px'}}} m='auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/exercise/:id' element={<ExerciseDetail/>} />
      </Routes>

    </Box>
  );
}

export default App;
