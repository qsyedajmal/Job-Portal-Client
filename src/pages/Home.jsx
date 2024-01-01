import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Box, Grid, Paper } from '@mui/material'
import { Banner } from '../components/Banner'
import { Card } from '../components/Card'
import { Jobs } from './Jobs'

export const Home = () => {

  //! States
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [jobs, setJobs] = useState([])


  //! UseEffect

  useEffect(()=>{
     fetch('jobs.json').then((res)=>res.json()).then((data)=>setJobs(data))
  },[])

  //! Filter jobs by title

  const filteredItems = jobs.filter((job)=>job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1  )
  console.log(filteredItems)

  //! Function

  const filteredData = (jobs, selectedCategory, query) =>
  {
    let filteredJobs = jobs

    if(query)
    {
      filteredJobs = filteredItems
    }

    if(selectedCategory)
    {
      filteredJobs = filteredJobs.filter(({jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate})=>(
        jobLocation.toLowerCase()===selectedCategory.toLowerCase() ||
        parseInt(maxPrice)<=parseInt(selectedCategory) ||
        salaryType.toLowerCase()===selectedCategory.toLowerCase() ||
        employmentType.toLowerCase()===selectedCategory.toLowerCase() 
      ) )
    }

    return filteredJobs.map((data, index)=><Card key={index} data={data} />)
  }

  const result = filteredData(jobs, selectedCategory, query)

  //! event handlers

  const queryHandler = (event) => {
    setQuery(event.target.value);
  }

  const selectedCategoriesChangeHandler = (event) => {
    setSelectedCategory(event.target.value)
  }

  const selectedCategoriesClickHandler = (event) => {
    setSelectedCategory(event.target.value)
  }


  return (


    <div >

{  //? passing query state and queryHandler
}
      <Banner query={query} queryHandler={queryHandler} />

      <Grid container className='bg-[#FAFAFA]  xl:px-28 px-8 py-14  ' spacing={4}>

        <Grid item  md={3} sm={12}>
          <Paper className='h-full p-4'>
              left
          </Paper>
        </Grid>


{       //! Job Cards
}
        <Grid item  md={6} sm={12} className='w-full'>
          <Paper className='h-full p-4 '>
{            //? passing results as a prop
}
             <Jobs result={result}/>
          </Paper>
        </Grid>


        <Grid item  md={3} sm={12}>
          <Paper className='h-full p-4'>
             right
          </Paper>
        </Grid>



      </Grid>



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
