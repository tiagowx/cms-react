import React from 'react'
import { Box, styled } from '@mui/system'
import { theme } from '../../../assets/theme'
import { Styles } from './Styles'
import { Typography } from '@mui/material'

export const Tread = () => {
  return (
    <Styles>
      <Box component="div">
        <Typography variant="h2" gutterBottom component="h2">
          &#9728; Tread
          <Typography variant="subtitle1" gutterBottom component="span">
            <p> &#9732; Demonstre o valor principal de sua página aqui...</p>
          </Typography>
        </Typography>
      </Box>
    </Styles>
  )
}
