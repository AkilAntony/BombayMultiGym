import React from 'react'
import {Box,Button,
        Stack, Typography} from '@mui/material'
import BannerImage from '../assets/images/banner.png'

function Banner() {
  return (
    <Box sx={{
            mt:{lg:'211px',sm:'70px'},ml:{sm:'20px'}
            }}  
        position='relative' p='20px'>
        <Typography color='#FF2625' fontSize={26}
                    fontWeight={600}>
            Fitness Club
        </Typography>
 
        <Typography fontSize={40}
                    fontWeight={600} mb={3} mt={4}>
            Sweat,Smile <br/> and Repeat
        </Typography>
        <Typography fontSize={22} mb={4} lineHeight='35px'>
            Check out the most effective exercises
        </Typography>
        <Button href='exercise' variant='contained' 
                 sx={{backgroundColor:'#FF2625',
                 padding:'10px'}}>
            Explore Exercises
        </Button>
        <img src={BannerImage} className='hero-banner-img'/>
    </Box>
  )
}

export default Banner