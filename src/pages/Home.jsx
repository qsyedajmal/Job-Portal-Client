import React from 'react'
import { Navbar } from '../components/Navbar'
import { Box } from '@mui/material'

export const Home = () => {
  return (
    // <div className='flex flex-col'>
    //  <Navbar/>
    //  <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque delectus, aut quia corrupti aspernatur magnam voluptatem dicta quis eum amet voluptates adipisci voluptatum quae, natus autem dolor! Dignissimos, in ex?</div>


    // </div>
    <Box sx={{display:'flex', flexDirection:'column'}}>
        <Navbar/>
       <Box sx={{pt:15, px:{
        xs:4,
        md:2
       }}}>
           <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque delectus, aut quia corrupti aspernatur magnam voluptatem dicta quis eum amet voluptates adipisci voluptatum quae, natus autem dolor! Dignissimos, in ex?</div>
        </Box>
    </Box>

    )
}
