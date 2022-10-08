import React from 'react'
import {Box, Typography, Paper, Button, Container, Stack, TextField} from '@mui/material'

function IntroCard() {
  return (
    <Box>
      
      <Container>
       <Typography variant='h5' gutterBottom>Learn to code by watching others</Typography>

       <Typography>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</Typography>

       <Box variant='div' gutterBottom> Try it free 7 days then $20/mo, thereafter </Box>

       <Paper id='input-fields'>

       <Stack direction='column' spacing={2}  >
     <TextField label='First Name' variant='outlined' />
     <TextField label='Last Name' variant='outlined' />
     <TextField label='Email Address' variant='outlined' />
     <TextField label='Password' variant='outlined' />
     <Button  variant='contained' size='medium'>CLAIM YOUR FREE TRIAL</Button>
     </Stack>

     
      
      <Typography marginTop='40px'>By clicking the button, you are agreeing to our <span>Terms and Services</span></Typography>

       </Paper>

      </Container>



    </Box>
  )
}

export default IntroCard
