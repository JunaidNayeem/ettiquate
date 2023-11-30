import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import Image from 'next/image'
import SelectInput from '@mui/material/Select/SelectInput'
import { CenterFocusStrong, GradingTwoTone, Label } from '@mui/icons-material'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import { useForm } from 'react-hook-form'
import { Form } from 'react-hook-form'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormProps {
  onSubmit: (data: FormData) => void
}

interface FormData {
  firstName: string;
  lastName: string;
  dob: string;
  grade: string;
  allergy: string;
  firstName1: string;
  lastName1: string;
  cellPhone: string;
  workPhone: string;
  email: string;
}

// function HomeNewsLetter({ onSubmit }: FormProps) {
const HomeNewsLetter: FC = () => {
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    dob: '',
    grade: '',
    allergy: '',
    firstName1: '',
    lastName1: '',
    cellPhone: '',
    workPhone: '',
    email: '',
  });

  const readValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    try {
      await axios.post(`https://ettiquiate-be-new.onrender.com/send-email`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      toast.success('Details sent successfully!');
    } catch (error) {
      console.error('Error creating form:', error);
      toast.error('Error sending form data');
    }
  };

  return (
    <Box sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 }, width: { md: '100%', xs: '100%' } }}>
      <form onSubmit={handleSubmit}>
        <Container>
          <Box
            sx={{
              // background:"url('/images/bg1.jpg')" ,
              backgroundColor: 'primary.main',
              borderRadius: 10,
              width: { xs: '90%', md: '100%' },
              py: { xs: 4, md: 10 },
              px: { xs: 4, md: 8 },
              textAlign: 'center',
            }}
          >
            {/* <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 }, fontStyle: 'italic', color:'secondary.dark' }} >
              EmbellisHer PinQ LLC
            </Typography> */}
            <Typography
              component="h2"
              sx={{
                position: 'relative',
                fontSize: { xs: 36, md: 46 },
                mt: { xs: 0, md: 0 },
                mb: 3,
                width: '100%',
                lineHeight: 1,
                fontWeight: 'bold',
              }}
            >
              EmbellisHer{' '}
              <Typography
                component="mark"
                sx={{
                  position: 'relative',
                  color: 'white',
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  backgroundColor: 'unset',
                }}
              >
                PinQ{' '}
                <Box
                  sx={{
                    position: 'absolute',
                    top: { xs: 20, md: 28 },
                    left: 2,
                    '& img': { width: { xs: 130, md: 175 }, height: 'auto' },
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/headline-curve.svg" alt="Headline curve" />
                </Box>
              </Typography>
              LLC
            </Typography>

            <Typography sx={{ mb: 6, color: 'gray' }}>Southern Charm School</Typography>
            {/* <Image src="/images/download.webp" width="1000px" height={150} alt="Hero img" style={{marginRight:'70px'}}  /> */}
            <Box sx={{ width: { xs: '100%', md: '100%' }, textAlign: 'left' }}>
              <Typography
                variant="h1"
                component="h2"
                sx={{ mb: 1, fontSize: { xs: 32, md: 40 }, color: 'white', marginLeft: '10px' }}
              >
                STUDENT INFORMATION
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: { xs: 'column', md: 'row' },
                  justifyContent: 'space-around',
                  width: { xs: '100%', md: '80%' },
                  mx: 'auto',
                  padding: '20px',
                }}
              >
                <label htmlFor="firstName">First Name: </label>
                <InputBase
                  name="firstName"
                  sx={{
                    backgroundColor: 'background.paper',
                    borderRadius: 3,
                    width: { md: '80%', xs: '90%' },
                    height: 48,
                    px: 2,
                    mr: { xs: 0, md: 3 },
                    mb: { xs: 2, md: 0 },
                    marginLeft: '20px',
                  }}
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={readValue}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: { xs: 'column', md: 'row' },
                  justifyContent: 'space-around',
                  width: { xs: '100%', md: '80%' },
                  mx: 'auto',
                  padding: '20px',
                }}
              >
                <label htmlFor="lastName">Last Name: </label>
                <InputBase
                  name="lastName"
                  sx={{
                    backgroundColor: 'background.paper',
                    borderRadius: 3,
                    width: { md: '80%', xs: '90%' },
                    height: 48,
                    px: 2,
                    mr: { xs: 0, md: 3 },
                    mb: { xs: 2, md: 0 },
                    marginLeft: '20px',
                  }}
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={readValue}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: { xs: 'column', md: 'row' },
                  justifyContent: 'space-around',
                  width: { xs: '100%', md: '80%' },
                  mx: 'auto',
                  padding: '20px',
                }}
              >
                <label htmlFor="dob">Date of Birth: </label>
                <InputBase
                  name="dob"
                  type="date"
                  sx={{
                    backgroundColor: 'background.paper',
                    borderRadius: 3,
                    width: { xs: '90%', md: '30%' },
                    height: 48,
                    px: 2,
                    mr: { xs: 0, md: 3 },
                    mb: { xs: 2, md: 0 },
                    marginLeft: '20px',
                  }}
                  value={formData.dob}
                  onChange={readValue}
                />
                <label htmlFor="grade">Grade Level: </label>
                <InputBase
                  name="grade"
                  type="number"
                  sx={{
                    backgroundColor: 'background.paper',
                    borderRadius: 3,
                    width: { xs: '90%', md: '30%' },
                    height: 48,
                    px: 2,
                    mr: { xs: 0, md: 3 },
                    mb: { xs: 2, md: 0 },
                    marginLeft: '20px',
                  }}
                  placeholder="Enter your grade"
                  onChange={readValue}
                  value={formData.grade}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: { xs: 'column', md: 'row' },
                  justifyContent: 'space-around',
                  width: { xs: '100%', md: '80%' },
                  mx: 'auto',
                  padding: '20px',
                }}
              >
                <label htmlFor="allergy">Allergies: </label>
                <InputBase
                  name="allergy"
                  sx={{
                    backgroundColor: 'background.paper',
                    borderRadius: 3,
                    width: { md: '80%', xs: '90%' },
                    height: 48,
                    px: 2,
                    mr: { xs: 0, md: 3 },
                    mb: { xs: 2, md: 0 },
                    marginLeft: '20px',
                  }}
                  placeholder="Enter your allergy in details"
                  onChange={readValue}
                  value={formData.allergy}
                />
              </Box>
            </Box>
            <Box sx={{ width: { xs: '100%', md: '100%' }, textAlign: 'left' }}>
              <Typography
                variant="h1"
                component="h2"
                sx={{ mb: 1, fontSize: { xs: 32, md: 40 }, color: 'white', marginLeft: '10px' }}
              >
                DROPOFF / PICK UP PARENT INFORMATION
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: { xs: 'column', md: 'row' },
                  justifyContent: 'space-around',
                  width: { xs: '100%', md: '80%' },
                  mx: 'auto',
                  padding: '20px',
                }}
              >
                <label htmlFor="firstName1">First Name: </label>
                <InputBase
                  name="firstName1"
                  sx={{
                    backgroundColor: 'background.paper',
                    borderRadius: 3,
                    width: { md: '80%', xs: '90%' },
                    height: 48,
                    px: 2,
                    mr: { xs: 0, md: 3 },
                    mb: { xs: 2, md: 0 },
                    marginLeft: '20px',
                  }}
                  placeholder="Enter your first name"
                  onChange={readValue}
                  value={formData.firstName1}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: { xs: 'column', md: 'row' },
                  justifyContent: 'space-around',
                  width: { xs: '100%', md: '80%' },
                  mx: 'auto',
                  padding: '20px',
                }}
              >
                <label htmlFor="lastName1">Last Name: </label>
                <InputBase
                  name="lastName1"
                  sx={{
                    backgroundColor: 'background.paper',
                    borderRadius: 3,
                    width: { md: '80%', xs: '90%' },
                    height: 48,
                    px: 2,
                    mr: { xs: 0, md: 3 },
                    mb: { xs: 2, md: 0 },
                    marginLeft: '20px',
                  }}
                  placeholder="Enter your last name"
                  onChange={readValue}
                  value={formData.lastName1}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: { xs: 'column', md: 'row' },
                  justifyContent: 'space-around',
                  width: { xs: '100%', md: '80%' },
                  mx: 'auto',
                  padding: '20px',
                }}
              >
                <label htmlFor="cellPhone">Cell Phone: </label>
                <InputBase
                  name="cellPhone"
                  type="number"
                  sx={{
                    backgroundColor: 'background.paper',
                    borderRadius: 3,
                    width: { xs: '90%', md: '30%' },
                    height: 48,
                    px: 2,
                    mr: { xs: 0, md: 3 },
                    mb: { xs: 2, md: 0 },
                    marginLeft: '20px',
                  }}
                  placeholder="Enter cellphone number"
                  onChange={readValue}
                  value={formData.cellPhone}
                />
                <label htmlFor="workPhone">Work Phone: </label>
                <InputBase
                  name="workPhone"
                  type="number"
                  sx={{
                    backgroundColor: 'background.paper',
                    borderRadius: 3,
                    width: { xs: '90%', md: '30%' },
                    height: 48,
                    px: 2,
                    mr: { xs: 0, md: 3 },
                    mb: { xs: 2, md: 0 },
                    marginLeft: '20px',
                  }}
                  placeholder="Enter workphone number"
                  onChange={readValue}
                  value={formData.workPhone}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: { xs: 'column', md: 'row' },
                  justifyContent: 'space-around',
                  width: { xs: '100%', md: '80%' },
                  mx: 'auto',
                  padding: '20px',
                }}
              >
                <label htmlFor="email">Email: </label>
                <InputBase
                  name="email"
                  type="email"
                  sx={{
                    backgroundColor: 'background.paper',
                    borderRadius: 3,
                    width: { md: '80%', xs: '90%' },
                    height: 48,
                    px: 2,
                    mr: { xs: 0, md: 3 },
                    mb: { xs: 2, md: 0 },
                    marginLeft: '20px',
                  }}
                  placeholder="Enter your email"
                  onChange={readValue}
                  value={formData.email}
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
            <Box
              sx={{
                // display: 'flex',
                alignItems: 'center',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-around',
                width: { xs: '100%', md: '80%' },
                mx: 'auto',
                padding: '20px',
              }}
            >
              
             <ToastContainer autoClose={3000} position={'top-right'} theme={'light'} />
            </Box>
            
            <Box>
              <StyledButton type="submit" size="large">
                Register
              </StyledButton>
            </Box>
          </Box>
        </Container>
      </form>
    </Box>
  )
}

export default HomeNewsLetter
