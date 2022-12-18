// import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Homepage from './components/pages/home';
import theme from './components/styles';
function App() {
  return (
    <ChakraProvider theme={theme}>
    <Homepage />
    </ChakraProvider>
  );
}

export default App;
