import { styled } from '@mui/material';
import { theme } from '../../../assets/theme';

export const Styles = styled('section')({
  width: '100%',
  height: '96vh',
  marginTop: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.success.contrastText,
  backgroundColor: theme.palette.success.light,
});

export default Styles