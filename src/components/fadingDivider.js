import React from 'react';
import { styled } from '@mui/system';

const FadingDivider = styled('hr')({
  border: 0,
  height: '1px',
  backgroundImage: 'linear-gradient(to right, transparent, grey, transparent)',
  margin: '16px 0', // adjust as needed
});

export default FadingDivider;