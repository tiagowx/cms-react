import { styled } from '@mui/system'
import theme from '@/assets/theme'

export const Main = styled('section')({
  width: '100%',
  height: 'auto',
  marginTop: 4,
  paddingBottom: 32,
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'start',
  color: theme.palette.success.contrastText,
  backgroundColor: theme.palette.success.main,
  h2: {
    paddingTop: 16,
    paddingLeft: 32,
  },
})
