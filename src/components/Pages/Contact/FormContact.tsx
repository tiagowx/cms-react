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
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material'
import { ChangeEvent, useState } from 'react'

export const FormContact = () => {
  const [contact, setContact] = useState<IContact | undefined>(undefined);

  const [sender, setSender] = useState('')
  const [email, setEmail] = useState('')
  const [content, setContent] = useState('')
  const [subject, setSubject] = useState('')
  const [typeSubject, setTypeSubject] = useState('1')

  const handleContact = (event: ChangeEvent<HTMLInputElement>) => {
    setContact({
      sender,
      email,
      content,
      subject,
      typeSubject: 1
    })
  }

  const handleChangeTypeSubject = (event: SelectChangeEvent) => {
    setTypeSubject(event.target.value);
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
            size="small"
            sx={{
              flex: 1,
              margin: 1
            }}
            id="form-contact-name"
            label="Nome"
            color="secondary"
            value={sender}
          />
          <TextField
            size="small"
            sx={{
              flex: 1,
              margin: 1
            }}
            id="form-contact-email"
            label="E-mail"
            color="secondary"
            value={email}
          />
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flex: '2',
            flexDirection: 'row',
            justifyContent: 'space-around',
            [theme.breakpoints.down('sm')]: {
              flexDirection: 'column'
            }
          }}
        >
          <TextField
            size="small"
            sx={{
              flex: 1,
              margin: 1
            }}
            id="form-contact-name"
            label="Título"
            color="secondary"
            value={subject}
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
                value={typeSubject}
                label="Tipo de Assunto"
                onChange={handleChangeTypeSubject}
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
            maxRows={4}
            rows={4}
            sx={{
              margin: 1
            }}
            id="form-contact-subject"
            label="Menssagem"
            color="secondary"
            value={content}
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
