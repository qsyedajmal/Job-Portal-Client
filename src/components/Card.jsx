import React from 'react'
import { Card as CardMaterialUI, CardContent,CardMedia, Box, Typography,Grid } from "@mui/material";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';


export const Card = ({data}) => {
  
  //! Destructuring data
  const {companyName, jobTitle, companyLogo, minPrice, maxPrice, salaryType, jobLocation, postingDate, experienceLevel, employmentType, description} = data
  return (
    <div>
       <CardMaterialUI className='mb-3'>
        <CardContent className='flex flex-row gap-4'>
            
            <CardMedia
            component='img'
            image={companyLogo}
            alt='unsplash image'
            className='w-12 h-12'/>

            <Box>
                <Typography className='font-semibold' >{companyName}</Typography>
                <Typography variant='overline' >{jobTitle}</Typography>

                <Box  className='grid grid-cols-2 md:flex flex-row justify-between' >
                    <Typography component='span' className='flex items-center md:text-xs text-sm   ' ><LocationOnOutlinedIcon className='h-4 '/> {jobLocation} </Typography>
                    <Typography component='span' className='flex items-center md:text-xs text-sm  ' ><AccessTimeIcon className='h-4 '/> {employmentType} </Typography>
                    <Typography component='span' className='flex items-center md:text-xs text-sm ' ><CurrencyRupeeIcon className='h-4 '/> {`${minPrice}-${maxPrice}k`} </Typography>
                    <Typography component='span' className='flex items-center md:text-xs text-sm  ' ><CalendarMonthOutlinedIcon className='h-4 '/> {postingDate} </Typography>
            
                </Box>

                <Typography className='hidden md:block text-sm mt-3 text-black/70'>{description}</Typography>

            </Box>

        </CardContent>
       </CardMaterialUI>
    </div>
  )
}
