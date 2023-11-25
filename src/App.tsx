import Fortunepage from "./pages/Fortunepage";
import Home from "./pages/Home";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider>
 <Home/>
    </ChakraProvider>
   
  );
}

export default App;
