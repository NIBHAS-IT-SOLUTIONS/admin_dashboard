import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Comp/Dashboard/Dashboard';
import Enrolls from './Comp/Enrolls/Enrolls';
import Classes from './Comp/Classes/Classes';
import Subject from './Comp/Subject/Subject';
import Questions from './Comp/Questions/Normals/Questions';
import Patternquestions from './Comp/Questions/Patterns/Patternquestions';
import AdminLayout from './pages/Admin/AdminLayout';
import Patterns from './Comp/Questions/Patterns/Patterns';
import Viewquestions from './Comp/Questions/Normals/Viewquestions';


function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
      
    

      <Route path="/" element={<AdminLayout />}>
          <Route index element={<Dashboard />} /> 
          <Route path="/enrolls" element={<Enrolls/>} />
          <Route path='/classes' element={<Classes/>}/>
          <Route path='/subjects' element={  <Subject/>}/>
          <Route path='/questions' element={  <Questions/>}/>
          <Route path='/viewquestions' element={  <Viewquestions/>}/>
          <Route path='/patterns' element={  <Patterns/>}/> 
          <Route path='/viewpatterns' element={  <Patternquestions/>}/>
      </Route>
          
        </Routes>
        

      </BrowserRouter>
    </>
  );
}

export default App;
