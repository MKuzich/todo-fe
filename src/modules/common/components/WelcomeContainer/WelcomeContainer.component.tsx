import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ROUTER_KEYS } from '../../consts/app-keys.const';

export const WelcomeContainer: React.FC = () => (
  <Stack direction="column" alignItems="center" pt={20}>
    <Typography variant="h3" component="h1" mb={6}>
      Todo List
    </Typography>
    <Stack spacing={2}>
      <Button variant="outlined" component={Link} to={ROUTER_KEYS.LOGIN}>
        Login
      </Button>
      <Button variant="outlined" component={Link} to={ROUTER_KEYS.REGISTER}>
        Register
      </Button>
      <Button color="secondary" component={Link} to={ROUTER_KEYS.CHANGE}>
        Forgot password?
      </Button>
    </Stack>
  </Stack>
);
