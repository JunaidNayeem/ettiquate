import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { Grid } from '@mui/material'
import Image from 'next/image'
import Slider, { Settings } from 'react-slick'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme, styled } from '@mui/material/styles'
import IconArrowBack from '@mui/icons-material/ArrowBack'
import IconArrowForward from '@mui/icons-material/ArrowForward'
import { MentorCardItem } from '@/components/mentor'
import { data } from './mentors.data'

interface SliderArrowArrow {
  onClick?: () => void
  type: 'next' | 'prev'
  className?: 'string'
}

const SliderArrow: FC<SliderArrowArrow> = (props) => {
  const { onClick, type, className } = props
  return (
    <IconButton
      sx={{
        backgroundColor: 'background.paper',
        color: 'primary.main',
        '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
        bottom: '-28px !important',
        left: 'unset !important',
        right: type === 'prev' ? '60px !important' : '0 !important',
        zIndex: 10,
        boxShadow: 1,
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
      className={className}
    >
      {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
    </IconButton>
  )
}

const StyledDots = styled('ul')(({ theme }) => ({
  '&.slick-dots': {
    position: 'absolute',
    left: 0,
    bottom: -20,
    paddingLeft: theme.spacing(1),
    textAlign: 'left',
    '& li': {
      marginRight: theme.spacing(2),
      '&.slick-active>div': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}))

const HomeOurMentors: FC = () => {
  const { breakpoints } = useTheme()
  const matchMobileView = useMediaQuery(breakpoints.down('md'))

  const sliderConfig: Settings = {
    infinite: true,
    // autoplay: true,
    speed: 300,
    slidesToShow: matchMobileView ? 1 : 3,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    dots: true,
    appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
    customPaging: () => (
      <Box sx={{ height: 8, width: 30, backgroundColor: 'divider', display: 'inline-block', borderRadius: 4 }} />
    ),
  }

  return (
    <Box
      id="mentors"
      sx={{
        pt: {
          xs: 6,
          md: 8,
        },
        pb: {
          xs: 8,
          md: 12,
        },
        backgroundColor: '#ecf3f3',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={1}>
        <Typography variant="h1" sx={{ fontSize: 40, md:"20px", pd:"20px", pt:"20px" }}>
        Meet Our Founder and CEO - Angela

        </Typography>

        {/* <Slider {...sliderConfig}>
          {data.map((item) => (
            <MentorCardItem key={String(item.id)} item={item} />
          ))}
        </Slider> */}

          <Box  sx={{ width: { xs: '100%', md: '60%' , mt:"20%", pt:"20px"} }}>
                <Typography sx={{ color: 'text.secondary', lineHeight: 2, pt:"30px"}}>
                  {
                    "Angela, the visionary behind EmbellisHer PinQ LLC, brings a wealth of experience and passion to the world of etiquette education. With over 15 years in the beauty industry and a Master Cosmetology License spanning 22 years, Angela has not only made her clients more beautiful but has also contributed her talents to celebrity fashion shows, music videos, magazine photo shoots, and stage plays."
                  }
                </Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 2, pt:"30px"}}>
                  {
                    "Beyond her professional accomplishments, Angela's commitment to positively impacting others shines through in her dedication to etiquette education. When she's not working, Angela enjoys networking, traveling, and spending cherished moments with her family and friends"
                  }
                </Typography>
              </Box>
              {/* <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}> */}
            <Box  sx={{ width: { xs: '100%', md: '40%' , pb:"80px"} }} >
              <Image src="/images/IMG_5022.jpg" width={520} height={540} quality={97} alt="Founder img" />
            </Box>
          {/* </Grid> */}
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeOurMentors
