import { Routes,Route } from 'react-router-dom' 
import Navbar from './Component/Navbar'  
import Home from './Component/Home'  
import About from './Component/About'  
import Contact from './Component/Contact' 
import { Form } from 'react-router-dom'
function App() {  
 return (  
 <>  
 <Navbar />  
 <Routes>  
 <Route path="/" element={<Home />} />  
 <Route path="/about" element={<About />} />  
 <Route path="/contact" element={<Contact />} />  
 </Routes>  
 </>  
 )  
}  
export default App; 