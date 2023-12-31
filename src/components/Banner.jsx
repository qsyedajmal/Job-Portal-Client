import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export const Banner = ({query, queryHandler}) => {
  return (
    <Box className='xl:px-24 px-4 py-14'>

        <Typography variant='h4' className='font-bold mb-4'>Find your <Typography component='span' variant='h4' className='text-primary font-bold'>new job</Typography>  today</Typography>
        <Typography variant="p" className='text-black/70  '>Thousands of jobs in thecomputer, engineering and technology sectors are waiting for you .</Typography>
        
        <form action="" className='mt-8'>
            <div className='flex flex-col md:flex-row gap-5'>
                <div className='w-full md:w-1/2'>
                    <TextField 
                    label='What position are you looking for?' 
                    size='medium'
                    className='w-full '
                    InputProps={{
                      startAdornment:<InputAdornment><SearchOutlinedIcon className='mr-3'/></InputAdornment>
                    }}
                    value={query}
                    onChange={queryHandler}/>
                </div>
                <div className='w-full md:w-1/3 '>
                    <TextField 
                    label='Location' 
                    size='medium'
                    className='w-full '
                    InputProps={{
                      startAdornment:<InputAdornment><LocationOnOutlinedIcon className='mr-3'/></InputAdornment>
                    }}
                    value={query}
                    onChange={queryHandler}/>
                </div>
                <Button type='submit' variant='contained' className='bg-primary flex-grow'>Search</Button>
            </div>
        </form>
    </Box>
  )
}
