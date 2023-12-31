
import React, { useState } from 'react'

import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Box, Drawer} from "@mui/material";
import HailIcon from '@mui/icons-material/Hail';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


export const Navbar = () => {

  //! States
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  //! Functions and handlers


  //! Data
  const navItems = [
    { path: "/", title:"Start a search" },
    { path: "/my-job", title:"My jobs" },
    { path: "/salary", title:"Salary Estimate" },
    { path: "/post-job", title:"Post a Job" },
  ]

  return (
    <div>
    <AppBar className='bg-white shadow-none text-primary xl:px-24 px-4 py-6 ' position='static' >

      <Toolbar>

        <IconButton size='large' edge='start' color='inherit' >
          <HailIcon/>
        </IconButton>
        <Typography variant='h6' component='div' sx={{flexGrow:1}}>
         JOB PORTAL
        </Typography>

         {/* //!nav items for large device  */}

         <Stack direction='row' spacing={5} className='hidden md:flex flex-grow'>
          {
          navItems.map((item) => (
             <Link key={item.path} to={item.path} >{item.title}</Link>
          ))}

         </Stack>

         {/* //!signup and login button */}

         <Box className='hidden lg:block'>

          <Button component={Link} to='/login'  variant='contained' className='mx-2'>Login</Button>
          <Button component={Link} to='/sign-up' variant='outlined'>Signup</Button>

         </Box>

         {/* //!mobile view */}

         <IconButton  className='text-primary md:hidden' onClick={()=>setIsMenuOpen(!isMenuOpen)}>
          {
            isMenuOpen ? <CloseIcon /> : <MenuIcon />
          }
         </IconButton>

         {/* //!nav items for mobile  */}

         {/* {
          isMenuOpen &&
           (


  
              

              <ul className='flex flex-col '>
                {
                  navItems.map((item) => (
                  <Link key={item.path} to={item.path} >{item.title}</Link>
                  ))
                    
                }
              </ul>


           )
         } */}

      </Toolbar>

    </AppBar>

           {/* //!nav items for mobile  */ }
           {
          isMenuOpen &&
           (

                //todo add top-24 if navbar position changed to fixed
                <div className=' w-[85%] min-h-36 mx-auto relative  p-3 bg-primary text-white '>




                <nav>
                  <ul >
                  {
                   navItems.map((item) => (
                    <li key={item.path} className='my-3'>
                    <Link  to={item.path} >{item.title}</Link>
                    </li>
                  
                   ))
                    
                 }
                  <li className='my-3 '><Link to='/login' >Login</Link></li>

                  </ul>
                </nav>

              </div> 

            


           )
         }

</div>
  )

  
}
