import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Expertise and Experience:',
    description: 'Our founder and CEO, Angela, brings over 22 years of experience in the beauty industry and a passion for etiquette education. Her vast knowledge and dedication to empowering individuals shine through in our workshops. You can trust that you are learning from a true expert.',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Holistic Approach',
    description: 'We do not just teach etiquette; we foster character building, confidence, and respect. Our holistic approach ensures that you not only learn how to behave with grace but also how to navigate life challenges with poise and self-assuredness.',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Customized Workshops',
    description: 'Whether you are looking for private, one-on-one sessions or prefer group workshops, we offer flexibility to cater to your needs. Our tailored approach ensures that you get the most out of your etiquette education.',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Tangible Results',
    description: 'Our course completion acknowledgment and gift bag are symbols of your progress and achievement. We are committed to providing you with tangible evidence of your growth in etiquette and personal development.',
    icon: <ContactSupportIcon />,
  },
]
