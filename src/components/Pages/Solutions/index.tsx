import React, { useState } from 'react'
import { ISolutions } from '@/interfaces/models/solutions'
import { Box, Grid, Typography } from '@mui/material'
import { Solution } from './Solution'
import { Main, } from './styles'

import itemsSolutions from '../../../interfaces/mocks/_mocks'
import { theme } from '../../../assets/theme'

export const Solutions: React.FC = (item) => {
  return (
    <Main id="solutions">
      <Typography variant="h2" component="h2">
        &#10070; Soluções
      </Typography>
      <Grid
        container
        sx={{
          display: 'grid',
          [theme.breakpoints.up('md')]: {
            justifyContent: 'center',
          },
          [theme.breakpoints.down('md')]: {
            justifyContent: 'center',
            px: '16px'
          },
        }}
      >
        {itemsSolutions.map((item) => (
          <Solution
            id={item.id}
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </Grid>
    </Main>
  )
}
