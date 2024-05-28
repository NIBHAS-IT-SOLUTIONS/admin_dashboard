import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Comp/Dashboard/Dashboard';
import Enrolls from './Comp/Enrolls/Enrolls';
import Classes from './Comp/Classes/Classes';
import Subject from './Comp/Subject/Subject';
import Questions from './Comp/Questions/Questions';
import Patternquestions from './Comp/Questions/Patternquestions';
import AdminLayout from './pages/Admin/AdminLayout';
import AdminDashboard from './Comp/AdminDashboard/AdminDashboard';

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
      
          <Route path="/admin" element={<AdminDashboard/>} />

      <Route path="/" element={<AdminLayout />}>
          <Route index element={<Dashboard />} /> 
          <Route path="/enrolls" element={<Enrolls/>} />
          <Route path='/classes' element={<Classes/>}/>
          <Route path='/subjects' element={  <Subject/>}/>
          <Route path='/questions' element={  <Questions/>}/>
          <Route path='/patterns' element={  <Patternquestions/>}/> 
      </Route>
          
        </Routes>
        

      </BrowserRouter>
    </>
  );
}

export default App;
