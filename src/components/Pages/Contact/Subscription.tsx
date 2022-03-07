import React from 'react'
import {
  Box,
  Button,
  FormGroup,
  FormLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import { styled } from '@mui/system'


export const Subscription = () => {
  return (
    <Box
      component="form"
      sx={{
        padding: '16px',
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-around'
      }}
    >
      <Typography
        fontWeight="bold"
        component="h5"
        variant="h5"
        textAlign="center"
        paddingBottom="8px"
      >
        Inscreva-se e receba novidades!
      </Typography>
      <Paper
        sx={{
          padding: '16px',
          borderRadius: '16px',
        }}
      >
        <Box paddingBottom="8px">
          <TextField
            required
            fullWidth
            color="secondary"
            id="sub-name"
            label="Nome"
          />
        </Box>
        <Box paddingBottom="8px">
          <TextField
            required
            fullWidth
            color="secondary"
            id="sub-email"
            label="Email"
          />
        </Box>
      </Paper>
      <Button color='info' variant='contained' sx={{
        marginTop: '16px',
        borderRadius: '16px',
        fontWeight: 'bold'
      }}>Inscrever</Button>
    </Box>
  )
}
