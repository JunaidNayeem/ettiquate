import React, { FC } from 'react'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import Image from 'next/image'
import SelectInput from '@mui/material/Select/SelectInput'
import { Label } from '@mui/icons-material'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'

const HomeNewsLetter: FC = () => {
  return (
    <Box sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}>
      
      <Container>
        <Box
          sx={{
            backgroundColor: 'primary.main',
            borderRadius: 10,
            py: { xs: 4, md: 10 },
            px: { xs: 4, md: 8 },
            textAlign: 'center',
           
          }}
        >
          {/* <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
            Subscribe to Our News Letter
          </Typography>
          <Typography sx={{ mb: 6 }}>Subscribe to our newsletter to get information about our courses.</Typography> */}
            <Image src="/images/download.webp" width="1000px" height={150} alt="Hero img" style={{marginRight:'70px'}}  />
         <Box sx={{ width: { xs: '100%', md: '100%'}, textAlign: "left"} }>
            <Typography sx={{ mb: 1, fontSize: { xs: 32, md: 40 },color: 'text.secondary', marginLeft:'10px'}}>
            STUDENT INFORMATION
            </Typography>
            <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-around',
              width: { xs: '100%', md: "80%" },
              mx: 'auto',
              padding:"20px"
            }}
          >
            <label htmlFor="firstName">First Name:  </label>
            <InputBase name='firstName'
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 3,
                width: '80%',
                height: 48,
                px: 2,
                mr: { xs: 0, md: 3 },
                mb: { xs: 2, md: 0 },
                marginLeft:"20px"
              }}
              placeholder="Enter your first name"
              
            />
            
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-around',
              width: { xs: '100%', md: "80%" },
              mx: 'auto',
              padding:"20px"
            }}
          >
            
            <label htmlFor="lastName" >Last Name:  </label>
            <InputBase name='lastName'
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 3,
                width: '80%',
                height: 48,
                px: 2,
                mr: { xs: 0, md: 3 },
                mb: { xs: 2, md: 0 },
                marginLeft:"20px"
              }}
              placeholder="Enter your last name"
              
            />
            
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-around',
              width: { xs: '100%', md: "80%" },
              mx: 'auto',
              padding:"20px"
            }}
          >
            
            <label htmlFor="dob" >Date of Birth:  </label>
            <InputBase name='dob'
            type='date'
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 3,
                width: { xs: '80%', md: "30%" },
                height: 48,
                px: 2,
                mr: { xs: 0, md: 3 },
                mb: { xs: 2, md: 0 },
                marginLeft:"20px"
              }}
             
              
            />
            <label htmlFor="grade" >Grade Level:  </label>
            <InputBase name='grade'
            type='number'
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 3,
                width: { xs: '80%', md: "30%" },
                height: 48,
                px: 2,
                mr: { xs: 0, md: 3 },
                mb: { xs: 2, md: 0 },
                marginLeft:"20px"
              }}
              placeholder="Enter your grade"
              
            />
            
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-around',
              width: { xs: '100%', md: "80%" },
              mx: 'auto',
              padding:"20px"
            }}
          >
            
            <label htmlFor="allergy" >Allergies:  </label>
            <InputBase name='allergy'
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 3,
                width: '80%',
                height: 48,
                px: 2,
                mr: { xs: 0, md: 3 },
                mb: { xs: 2, md: 0 },
                marginLeft:"20px"
              }}
              placeholder="Enter your allergy in details"
              
            />
            
          </Box>
         </Box>
          <Box sx={{ width: { xs: '100%', md: '100%'}, textAlign: "left"} }>
            <Typography sx={{ mb: 1, fontSize: { xs: 32, md: 40 },color: 'text.secondary', marginLeft:'10px'}}>
              
                DROPOFF / PICK UP PARENT INFORMATION
            </Typography>
            <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-around',
              width: { xs: '100%', md: "80%" },
              mx: 'auto',
              padding:"20px"
            }}
          >
            <label htmlFor="firstName1">First Name:  </label>
            <InputBase name='firstName1'
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 3,
                width: '80%',
                height: 48,
                px: 2,
                mr: { xs: 0, md: 3 },
                mb: { xs: 2, md: 0 },
                marginLeft:"20px"
              }}
              placeholder="Enter your first name"
              
            />
            
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-around',
              width: { xs: '100%', md: "80%" },
              mx: 'auto',
              padding:"20px"
            }}
          >
            
            <label htmlFor="lastName1" >Last Name:  </label>
            <InputBase name='lastName1'
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 3,
                width: '80%',
                height: 48,
                px: 2,
                mr: { xs: 0, md: 3 },
                mb: { xs: 2, md: 0 },
                marginLeft:"20px"
              }}
              placeholder="Enter your last name"
              
            />
            
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-around',
              width: { xs: '100%', md: "80%" },
              mx: 'auto',
              padding:"20px"
            }}
          >
            
            <label htmlFor="cellPhone" >Cell Phone:  </label>
            <InputBase name='cellphone'
            type='number'
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 3,
                width: { xs: '80%', md: "30%" },
                height: 48,
                px: 2,
                mr: { xs: 0, md: 3 },
                mb: { xs: 2, md: 0 },
                marginLeft:"20px"
              }}
             placeholder="Enter cellphone number"
              
            />
            <label htmlFor="workPhone" >Work Phone:  </label>
            <InputBase name='workPhone'
            type='number'
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 3,
                width: { xs: '80%', md: "30%" },
                height: 48,
                px: 2,
                mr: { xs: 0, md: 3 },
                mb: { xs: 2, md: 0 },
                marginLeft:"20px"
              }}
              placeholder="Enter workphone number"
              
            />
            
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-around',
              width: { xs: '100%', md: "80%" },
              mx: 'auto',
              padding:"20px"
            }}
          >
            
            <label htmlFor="email" >Email:  </label>
            <InputBase name='email'
            type='email'
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 3,
                width: '80%',
                height: 48,
                px: 2,
                mr: { xs: 0, md: 3 },
                mb: { xs: 2, md: 0 },
                marginLeft:"20px"
              }}
              placeholder="Enter your email"
              
            />
            
          </Box>
          {/* <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-around',
              width: { xs: '100%', md: "80%" },
              mx: 'auto',
              padding:"20px"
            }}
          >
            
            <label htmlFor="fee" >Workshop Fee:  </label>
            
            <InputBase name='fee'
            type='text'
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 3,
                width: '80%',
                height: 48,
                px: 2,
                mr: { xs: 0, md: 3 },
                mb: { xs: 2, md: 0 },
                marginLeft:"20px"
              }}
              // placeholder="Enter your email"
              readOnly
              value='$75'
            />
            
          </Box> */}
          {/* <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-around',
              width: { xs: '100%', md: "80%" },
              mx: 'auto',
              padding:"20px"
            }}
          >
            
            <label htmlFor="mode" >Payment Mode:  </label>
            <select name="mode" id="mode" style={{ display: 'flex', alignItems: 'center',
            flexDirection:'row',
              justifyContent: 'space-around',
              paddingLeft:"30px",
              padding:"16px", width:"80%",borderRadius:'15px',border:'white'}}>
              <option value="ZELLE: embellisherpinq@gmail.com">ZELLE: embellisherpinq@gmail.com</option>
              <option value="CASH APP: $Angelayb">CASH APP: $Angelayb</option>
              <option value="APPLE PAY: 678-575-1651">APPLE PAY: 678-575-1651</option>
            </select>
            {/* <InputBase name='mode'
            type='select'
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 3,
                width: '80%',
                height: 48,
                px: 2,
                mr: { xs: 0, md: 3 },
                mb: { xs: 2, md: 0 },
                marginLeft:"20px"
              }}
              // placeholder="Enter your email"
             
            /> */}
            
          {/* </Box> */} 
         </Box>
          <Box>
              <StyledButton size="large">
                Register
              </StyledButton>
            </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeNewsLetter
