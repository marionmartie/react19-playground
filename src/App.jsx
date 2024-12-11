import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Homepage from './pages/Homepage'
import Jokes from './pages/Jokes'

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={ <MainLayout />}> 
      <Route index element={<Homepage />} /> 
      <Route path='/use-example-1' element={<Jokes />} /> 
    </Route>)
  )
  
  return <RouterProvider router={router} />
}

export default App
