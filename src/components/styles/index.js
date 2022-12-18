import { extendTheme } from '@chakra-ui/react'
import { linkstyles as Link } from './components/Linkstyles'
import {textstyles as Text} from './components/Textstyles'
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const colors = {
    brand: {
      900: '#ff00ff',
      800: '#7700b3',
      700: '#eabfff',
      600:'#d580ff',
      500:'#ffffff'
    },
  }
  const components = {
    Link,Text
  }
  const theme = extendTheme({config, colors,components })
  export default theme