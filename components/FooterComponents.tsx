'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

type HeaderProps = {
  systemName: string;
};
export default function Footer({ systemName }: HeaderProps) {

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {systemName}
        </Typography>

      </Toolbar>
    </AppBar>
  );
}
