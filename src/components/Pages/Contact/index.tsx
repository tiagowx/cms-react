import React from 'react'
import { Container, Typography } from '@mui/material'
import Styles from './styles'
import { Box } from '@mui/system'
import theme from '@/assets/theme'
import { Subscription } from './Subscription'
import { FormContact } from './FormContact'

export const Contact = () => {
  return (
    <Styles id="contacts">
      <Typography variant="h2" component="h2">
        &#10070; Contato
      </Typography>
      <Container
        sx={{
          display: 'flex',
          [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
          },
          paddingBottom: '32px',
        }}
      >

        <FormContact />

        <Subscription />
      </Container>
    </Styles>
  )
}
