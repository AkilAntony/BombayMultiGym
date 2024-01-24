import React from 'react'
import { Box } from '@mui/material';
import Banner from './Banner';
import SearchExercise from './SearchExercise';
import Exercise from './Exercise';

function Home() {
  return (
    <Box>
      <Banner/>
      <SearchExercise />
      {/* <Exercise />   */}
    </Box>
  )
}

export default Home