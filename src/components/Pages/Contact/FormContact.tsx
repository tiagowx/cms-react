import React from 'react'
import theme from '../../../assets/theme'
import {
  Box,
  Button,
  FormControl,
  FormGroup,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import { breakpoints } from '@mui/system'

export const FormContact = () => {
  return (
    <Box
      component="form"
      sx={{
        padding: '16px',
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}
    >
      <Typography
        variant="h5"
        component="h5"
        textAlign="center"
        fontWeight="bold"
      >
        Nos envie uma mensagem!
      </Typography>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '16px',
          borderRadius: '16px',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            [theme.breakpoints.down('sm')]:{
              flexDirection: 'column'
            }
          }}
        >
          <TextField
            size="small"
            sx={{
              flex: 1,
              marginX: 1
            }}
            id="form-contact-name"
            label="Nome"
            color="secondary"
          />

          <TextField
            size="small"
            sx={{
              flex: 1,
              marginX: 1
            }}
            id="form-contact-email"
            label="E-mail"
            color="secondary"
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            marginTop: '16px',
          }}
        >
          <TextField
            size="small"
            fullWidth
            sx={{
              marginX: 1
            }}
            id="form-contact-subject"
            label="Menssagem"
            color="secondary"
          />
        </Box>
      </Paper>
      <Button
        color="info"
        sx={{
          marginTop: '16px',
          borderRadius: '16px',
          fontWeight: 'bold',
        }}
        variant="contained"
      >
        Enviar Mensagem
      </Button>
    </Box>
  )
}
