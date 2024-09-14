import './App.css'
import { Routes , Route, BrowserRouter } from 'react-router-dom'
import Home from './assets/Pages/Home'
import { createContext, useEffect, useState } from 'react'
import NavBar from './assets/Components/NavBar/NavBar';
import BookDetails from './assets/Components/BookDetails/BookDetails';
import axios from 'axios';
import Footer from './assets/Components/Footer/Footer';


export  const ThemeContext= createContext(null);

function App() {
  const [DataBook, setDataBook] = useState([])
  useEffect( () => {
      axios.get('https://example-data.draftbit.com/books?_limit=8')
      .then(res => { console.log(res.data) 
      setDataBook(res.data)
          console.log(DataBook);
              console.log(res.data[0].id);
              console.log(DataBook.id)
      }) 
      } ,[])

const [Mode , setMode] = useState(localStorage.getItem("Mode") == 'dark' ? 'dark' : 'light')
const changeMode = () => {
  setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
}
useEffect(()=> {
  document.querySelector('body').classList.remove('dark' , 'light')
  document.querySelector('body').classList.add(Mode)
  localStorage.setItem('Mode', Mode)
  } , [Mode])


return (
<ThemeContext.Provider value={{Mode , changeMode , DataBook}}>
    <NavBar />
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/details/:id' element={<BookDetails />}></Route>
    </Routes>
    </BrowserRouter>
    <Footer />
</ThemeContext.Provider>
)
}

export default App
