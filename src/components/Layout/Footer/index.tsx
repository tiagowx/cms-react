import { Grid, Typography } from '@mui/material'
import { Box, styled } from '@mui/system'
import React from 'react'
import { theme } from '../../../assets/theme'

const Footer = () => {
  return (
    <Styles>
      <Box justifyContent="center">
        <span>&copy 2022</span>
      </Box>
    </Styles>
  )
}

const Styles = styled('footer')({
  width: '100%',
  height: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  bottom: 0,
  borderTop: `4px solid ${theme.palette.primary.contrastText}`,
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
});

export default Footer
