import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './Context'
import Error from './Error'
import Home from './Home'
import SingleMovies from './SingleMovies'
function App() {
  return (
    <div className='App'>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='movie/:id' element={<SingleMovies />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  )
}

export default App
