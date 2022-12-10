import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Button } from '@mui/material';
import { ROUTER_KEYS } from '../../consts/app-keys.const';

export const MobileHeader = () => (
  <Stack direction="row" justifyContent="flex-end" mb={5}>
    <Button component={Link} variant="outlined" to={ROUTER_KEYS.CHANGE}>
      My Profile
    </Button>
  </Stack>
);
