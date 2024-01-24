import React from 'react'
import { Stack,Box,Typography,
        TextField,Button} from '@mui/material' 
function SearchExercise() {
  return (
    <Stack  mt={37} alignItems='center' p='20px' justifyContent='center'>
      <Typography 
        sx={{
            fontSize:{lg:'44px',xs:'30px'},
            textAlign:'center',
            fontWeight:'700',
            mb:'50px'
          }}>
        Top Workouts you should Know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField
          onChange={(e)=>{}}
          value='' height='72px' placeholder='Search Exercies'
          type='text'
          sx={{
            input:{
              fontWeight:'700',
              border:'none',
              borderRadius:'4px'
            },
            width:{lg:'1000px',xs:'350px'},
            backgroundColor:'white' ,
            borderRadius:'40px'
          }}>
      </TextField>
      <Button className='search-btn'
        sx={{
          backgroundColor:'#ff2625',color:'white',
          height:'56px',postion:'absolute',right:'0',
          textTransform:'none',
          width:{lg:'175px',xs:'100px'} }}>Search</Button>
      </Box>
    </Stack>
  )
}

export default SearchExercise