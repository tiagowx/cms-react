import { styled } from "@mui/material";
import theme from '../../../assets/theme'

export const Styles = styled('section')({
  width: '100%',
  height: '80vh',
  h2: {
    paddingTop: 16,
    paddingLeft: 32,
  },
  paddingBottom: 32,
  marginTop: 4,
  display: 'flex',
  alignItems: 'Start',
  justifyContent: 'start',
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.light,
});
