import { SetStateAction, useState } from 'react';
import { Box, IconButton, Menu, MenuItem, TextField } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

export default function FilterBar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <IconButton onClick={handleClick} sx={{ padding: 0, marginBottom: '10px', height: '20px', color: 'white' }}>
        <FilterAltIcon />
      </IconButton>
      <Menu
        id="filter-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <TextField label="Filter" fullWidth />
        </MenuItem>
      </Menu>
    </Box>
  );

}
