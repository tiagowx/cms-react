import React from 'react'
import { Box, Grid, Paper, Typography } from '@mui/material'
import { ISolutions } from '../../../interfaces/models/ISolutions'
import theme from '../../../assets/theme'

export const Solution: React.FC<ISolutions> = (item: ISolutions) => {
  function _alignText(id: number) {
    if (id % 2 === 0) {
      return 'right'
    } else return 'left'
  }
  function _alignSelf(id: number) {
    if (id % 2 === 0) {
      return 'end'
    } else return 'start'
  }

  return (
    <Grid item alignContent='end' textAlign={_alignText(item.id)}>
      <Paper
        sx={{
          bgcolor: theme.palette.success.light,
          color: theme.palette.success.contrastText,
          padding: '16px',
          marginTop: '8px',
          display: 'flex',
          borderRadius: '16px',
          flexDirection: 'column',
          [theme.breakpoints.up('sm')]: {
            
          },
        }}
      >
        <Typography variant="h3" component="h3">
          {item.title}
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          sx={{
            [theme.breakpoints.up('sm')]: {
              width: '60%',
            },
          }}
          alignSelf={_alignSelf(item.id)}
        >
          {item.description}
        </Typography>
      </Paper>
    </Grid>
  )
}
