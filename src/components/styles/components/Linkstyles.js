import { defineStyle, defineStyleConfig } from '@chakra-ui/react'
 const headerLink = defineStyle({
    fontFamily:'robotofont',
    fontWeight:'700',
    fontSize:['0.5rem','0.6rem','0.8rem','0.9rem','1rem'],
    color:'brand.500',
    textDecor:'none',
    _hover:{borderBottom:'5px solid',borderBottomColor:'brand.700',textDecor:'none',},
    _selected:{color:'brand.900'},
    _active:{color:'brand.900'},
})

export const linkstyles = defineStyleConfig({
    variants: { headerLink },
  })



