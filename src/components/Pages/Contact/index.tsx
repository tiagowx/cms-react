import React from 'react'
import { Container, Grid, Typography } from '@mui/material'
import Styles from './styles'
import { Box, breakpoints } from '@mui/system'
import { theme } from '../../../assets/theme'

export const Contact = () => {
  return (
    <Styles id="contacts">
      <Typography variant="h2" component="h2">
        &#10070; Contato
      </Typography>
      <Container
        sx={{
          display: 'flex',
          flex: 1,
          [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
          },
          paddingBottom: '32px',
        }}
      >
        <Box
          component="div"
          sx={{
            backgroundColor: `${theme.palette.secondary.light}`,
            minHeight: '40vh',
            borderRadius: '16px',
            margin: '4px',
            [theme.breakpoints.up('md')]: {
              width: '50%',
            },
          }}
        >
          //asdasdasd
        </Box>
        <Box
          component="div"
          sx={{
            backgroundColor: `${theme.palette.secondary.light}`,
            minHeight: '40vh',
            borderRadius: '16px',
            margin: '4px',
            [theme.breakpoints.up('md')]: {
              width: '50%',
            },
          }}
        >
          //asdasdasd
        </Box>
      </Container>
    </Styles>
  )
}
