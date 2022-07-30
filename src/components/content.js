import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ContentCard from './contentCard'
import Cart from './cart';


export default function Content() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>

        <Grid item xs={9}>
          <ContentCard />
        </Grid>
        <Grid item xs={3}>
          <Cart />
        </Grid>
      </Grid>
    </Box>
  );
}