import React, {useState} from 'react'
import {Box, Typography, Paper, Button, Container, Stack, TextField, createTheme, ThemeProvider} from '@mui/material'
import { motion } from 'framer-motion'


function IntroCard() {

 

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [emailText, setEmailText] = useState('')
  const [emailError, setEmailError] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [errorColor, setErrorColor] = useState(false)



  const theme = createTheme({
    palette:{
      primary:{
            main:'hsl(159, 100%, 41%)',
            contrastText:'white'
        }
    },

   
})



const btnHandler = () =>{
  if (firstName === ''|| lastName === '' || !emailText.includes('@')  ){
    setErrorMessage('Must be more than 4 characters')
    setEmailError('Enter a valid email')
    setErrorColor(true)
    } 
    else{
      setErrorColor(false)
    }
}


 


  return (
    <>
      
      <Container id='container'>
      
      <Box component={motion.div} initial={{opacity:0}} animate={{opacity:1}}  transition={{delay:.1}} id='words' >
      <Typography variant='h4' fontWeight='700' gutterBottom>Learn to code by watching others</Typography>

<Typography fontWeight='400' >See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</Typography>
      </Box>

      <Box>
     
     

     <Box  p={3} sx={{bgcolor: 'hsl(249, 30%, 47%)', marginTop: 3, marginBottom:3, borderRadius:2}}  variant='div' > <span style={{fontWeight: 700}}>Try it free 7 days</span>  then $20/mo, thereafter </Box>

    

<Paper id='input-fields'  sx={{borderRadius:2}} elevation={6}>

<Stack direction='column'  spacing={3}   >

<TextField label='First Name'  error={firstName === '' ? errorColor : false}  helperText={firstName === '' ? errorMessage : ''} onChange={(e)=> setFirstName(e.target.value)} value={firstName}  variant='outlined'  />

<TextField label='Last Name'  variant='outlined' error={lastName === '' ? errorColor : false}  helperText={lastName === ''  ? errorMessage : ''} onChange={(e)=> setLastName(e.target.value)} value={lastName}    />

<TextField label='Email Address' variant='outlined' error={ emailText.includes('@') ? false : errorColor}  helperText={emailText.includes('@') ? '' : emailError} onChange={(e) => setEmailText(e.target.value)} value={emailText}   />

<TextField label='Password' error={password === '' ? errorColor : false}  helperText={password === ''  ? errorMessage : ''} onChange={(e)=> setPassword(e.target.value)}  value={password}  type='password' variant='outlined' />

<ThemeProvider theme={theme}>
<Button color='primary' variant='contained' size='large' onClick={btnHandler} >CLAIM YOUR FREE TRIAL</Button>
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
