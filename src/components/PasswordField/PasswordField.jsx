import { Button, TextField, Typography, Box } from '@mui/material';
import { PasswordStrengthMeter } from 'components/PasswordStrengthMeter/PasswordStrengthMeter';
import { useState } from 'react';

export const PasswordField = () => {
  const [password, setPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.password;
    console.log('password: ', value);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Typography variant="h3">Password Strength Meter</Typography>
        <form onSubmit={onSubmit} style={{ width: '400px' }}>
          <TextField
            required
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
            error={!!password && password.length < 8}
            sx={{
              width: '100%',
              mb: 2,
            }}
            placeholder="Enter password"
          />
          <PasswordStrengthMeter
            password={password}
            style={{ marginBottom: 16 }}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={password.length < 8}
            sx={{
              display: 'block',
              m: '0 auto',
            }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
};
