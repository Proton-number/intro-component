import React from 'react'
import {Box, Typography, Paper, Button, Container, Stack, TextField, createTheme, ThemeProvider} from '@mui/material'
import { motion } from 'framer-motion'


function IntroCard() {

  const theme = createTheme({
    palette:{
      primary:{
            main:'hsl(159, 100%, 41%)',
            contrastText:'white'
        }
    }
})



  return (
    <>
      
      <Container id='container'>
      
      <Box component={motion.div} initial={{opacity:0}} animate={{opacity:1}}  transition={{delay:.1}} id='words' >
      <Typography variant='h4' fontWeight='700' gutterBottom>Learn to code by watching others</Typography>

<Typography fontWeight='400' >See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</Typography>
      </Box>

      <Box>
     
     

     <Box  p={3} sx={{bgcolor: 'hsl(249, 30%, 47%)', marginTop: 3, marginBottom:3, borderRadius:2}}  variant='div' gutterBottom> <span style={{fontWeight: 700}}>Try it free 7 days</span>  then $20/mo, thereafter </Box>

    

<Paper id='input-fields'  sx={{borderRadius:2}} elevation={6}>

<Stack direction='column'  spacing={3}   >

<TextField label='First Name'   variant='outlined' />

<TextField label='Last Name'  variant='outlined' />

<TextField label='Email Address' variant='outlined' />

<TextField label='Password'  type='password' variant='outlined' />

<ThemeProvider theme={theme}>
<Button color='primary' variant='contained' size='large' >CLAIM YOUR FREE TRIAL</Button>
</ThemeProvider>

</Stack>



<Typography marginTop='20px'>By clicking the button, you are agreeing to our <span style={{color:'hsl(12, 89%, 69%)'}}>Terms and Services</span></Typography>

</Paper>
      </Box>

      </Container>



    </>
  )
}

export default IntroCard
