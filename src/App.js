// import logo from './logo.svg';
import './App.css';

import {Home} from './Home';
import {Policia} from './Policia';
import {Leja} from './Leja';
import {Vaksina} from './Vaksina';
import {Leternjoftimi} from './Leternjoftimi';
import {Pasaporta} from './Pasaporta';
import {Artikujt} from './Artikujt';
import {CertifikataLindjes} from './CertifikataLindjes';
import {Pensionet} from './Pensionet';
import {PunetoretSP} from './PunetoretSP';
import {Studenti} from './Studenti';
import {SubvencioneteBizneseve} from './SubvencioneteBizneseve';
import {SigurimiAutomjetit} from './SigurimiAutomjetit';

import {Navigation} from './Navigation';

import {NavigationUser} from './NavigationUser';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="container">
     <h3 className="m-3 d-flex justify-content-center">
     Main Page
     </h3>


     <Navigation/>

     <Routes>
       <Route path='/' element={<Home/>} exact/>
       <Route path='/Policia' element={<Policia/>}/>
       <Route path='/Leja' element={<Leja/>}/>
       <Route path='/Vaksina' element={<Vaksina/>}/>
       <Route path='/Leternjoftimi' element={<Leternjoftimi/>}/>
       <Route path='/Pasaporta' element={<Pasaporta/>}></Route>
       <Route path='/Artikujt' element={<Artikujt/>}></Route>
       <Route path='/Pensionet' element={<Pensionet/>}></Route>
       <Route path='/CertifikataLindjes' element={<CertifikataLindjes/>}></Route>
       <Route path='/PunetoretSP' element={<PunetoretSP/>}></Route>
       <Route path='/Studenti' element={<Studenti/>}></Route>
       <Route path='/SubvencioneteBizneseve' element={<SubvencioneteBizneseve/>}></Route>
       
       <Route path='/SigurimiAutomjetit' element={<SigurimiAutomjetit/>}></Route>



T USERIT
       <Route path='/NavigationUser' element={<NavigationUser/>}/>
       </Routes>
    
    </div>
    </BrowserRouter>
  );
}
export default App;
