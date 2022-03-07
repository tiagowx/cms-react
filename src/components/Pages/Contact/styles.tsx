import { styled } from '@mui/material'
import theme from '../../../assets/theme'

export const Styles = styled('section')({
  width: '100%',
  height: 'auto',
  minHeight: '80vh',
  marginTop: 4,
  h2: {
    paddingTop: '16px',
    paddingLeft: '32px',
  },
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'start',
  color: theme.palette.secondary.contrastText,
  backgroundColor: theme.palette.secondary.main,
})

export default Styles
