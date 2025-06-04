import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Booksmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  return (
    <>

    <Header></Header>
    <div className='md:flex'>
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>

    </div>
    </>
  )
}
 
export default App
