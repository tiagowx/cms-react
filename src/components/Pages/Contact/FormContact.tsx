import theme from '@/assets/theme'
import { enTypeSubject, IContact } from '@/interfaces/models/IContact';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from '@mui/material'
//@houston
import useForm from '@eduzz/houston-forms/useForm'
import TextField from '@eduzz/houston-ui/Forms/Text';
import Form from '@eduzz/houston-ui/Forms/Form'

import { ChangeEvent, useState } from 'react'
import textCounter from '@/helpers/textCounter';

export const FormContact = () => {

  const form = useForm<IContact>({
    validationSchema: yup =>
      yup.object().shape({
        sender: yup.string().required().min(3).max(250),
        email: yup.string().required().email().max(250),
        typeSubject: yup.number().required(),
        subject: yup.string().required().min(3).max(250),
        content: yup.string().required().min(3).max(1000),
      }),
    async onSubmit(model): Promise<void> {
      await undefined;
    }
  })

  const handleContact = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(form.toString())

  }
  return (
    <Box
      component="form"
      sx={{
        backgroundColor: `${theme.palette.secondary.light}`,
        borderRadius: '16px',
        flex: 2,
        margin: '4px',
        padding: '16px',
        display: 'flex',
        height: '100%',
        minHeight: '50vh',
        flexDirection: 'column',
        [theme.breakpoints.up('sm')]: {

        },
      }}
    >
      <Typography
        variant="h5"
        component="h5"
        textAlign="center"
        fontWeight="bold"
        sx={{
          marginBottom: '8px'
        }}
      >
        Nos envie uma mensagem!
      </Typography>
      <Form context={form}  className={'className'}>
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
              flex: '1',
              flexDirection: 'row',
              justifyContent: 'space-around',
              [theme.breakpoints.down('sm')]: {
                flexDirection: 'column'
              }
            }}>
            <TextField
              label="Nome"
              name='sender'
              helperText={form.values.sender}
            />

            <TextField
              name='email'
              label='Email'
              type='email'
              helperText={form.values.email} />
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flex: '1',
              flexDirection: 'row',
              justifyContent: 'space-around',
              [theme.breakpoints.down('sm')]: {
                flexDirection: 'column'
              }
            }}
          >
            <TextField
              size="small"
              id="form-contact-name"
              label="Título"
            />
            <Box sx={{
              flex: 1,
              margin: 1
            }}>
              <FormControl fullWidth>
                <InputLabel sx={{ justifyContent: 'start' }} id="formContact-typeSubject-label" color="secondary">Tipo de Assunto</InputLabel>
                <Select
                  labelId="formContact-typeSubject-label"
                  size="small"
                  id="formContact-typeSubject"
                  color="secondary"
                  label="Tipo de Assunto"
                >
                  <MenuItem value={1}>Dúvidas</MenuItem>
                  <MenuItem value={2}>Feedback</MenuItem>
                  <MenuItem value={3}>Suporte</MenuItem>
                  <MenuItem value={4}>Outro</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
            }}
            >
            <TextField
              size="small"
              fullWidth
              multiline
              rows={4}
              id="form-contact-subject"
              label="Menssagem"
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
          onClick={() => handleContact}
          >
          Enviar Mensagem
        </Button>
          </Form>
    </Box>
  )
}
