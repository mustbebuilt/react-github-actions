import {useState} from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Welcome from './Components/Welcome'
import Staff from './Components/Staff'
import Students from './Components/Students'
import Footer from './Components/Footer'
import Courses from './Components/Courses'

const App = () => {

  const [activeComponent, setActiveComponent] = useState('welcome')

const renderComponent = () =>{
  switch(activeComponent){
    case 'Staff':
      return <Staff />;
    case 'Students':
      return <Students />;
    case 'Courses':
      return <Courses />;
    case 'Welcome':
      return <Welcome msg="Hello" />;
    default:
      return <Welcome msg="Welcome There" />;
  }
}

const handleNav = (ev, page) => {
  ev.preventDefault();
  console.log(`The ${page} link was clicked.`);
  setActiveComponent(page)
  // Additional logic here if needed
};


  return (
    <>
    <Navbar handleNav={handleNav} />
    <Banner/>
    <main>
    {renderComponent()}
    </main>
    <Footer />
    </>
  )
}

export default App