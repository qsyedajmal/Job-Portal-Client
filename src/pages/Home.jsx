import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Box } from '@mui/material'
import { Banner } from '../components/Banner'

export const Home = () => {

  //! States
  const [query, setQuery] = useState('')

  //! Functions and event handlers

  const queryHandler = (event) => {
    setQuery(event.target.value);

  }
  console.log(query)

  return (


    <div className='flex flex-col px-8 md:px-4 pt-8'>

{  //* passing query state and queryHandler
}
   <Banner query={query} queryHandler={queryHandler} />


    </div>
    // <Box sx={{display:'flex', flexDirection:'column'}}>
    //     {/* <Navbar/> */}
    //    <Box sx={{pt:15, px:{
    //     xs:4,
    //     md:2
    //    }}}>
    //        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque delectus, aut quia corrupti aspernatur magnam voluptatem dicta quis eum amet voluptates adipisci voluptatum quae, natus autem dolor! Dignissimos, in ex?</div>
    //     </Box>
    // </Box>

    )
}
