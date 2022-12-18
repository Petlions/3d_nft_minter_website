import { defineStyle, defineStyleConfig } from '@chakra-ui/react'
 const logoText = defineStyle({
    fontFamily:'robotofont',
    fontWeight:'700',
    fontSize:['0.8rem','1rem','1.2rem','1.5rem','1.8rem'],
    color:'brand.500', 
})

export const textstyles = defineStyleConfig({
    variants: { logoText },
  })
