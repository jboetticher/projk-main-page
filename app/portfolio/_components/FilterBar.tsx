import { SetStateAction, useState } from 'react';
import { Box, IconButton, List, ListItemButton, ListItemText, Menu } from '@mui/material';
import { Tag } from './Tag';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

type FilterBarProps = { availableTags: string[], currentTags: string[], setCurrentTags: (tags: string[]) => void };

export default function FilterBar({ availableTags, currentTags, setCurrentTags }: FilterBarProps) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (tag: string) => {
    if (!currentTags.includes(tag)) setCurrentTags([...currentTags, tag]);
    console.log('Setting current tags:', currentTags)
  }

  const handleTagClick = (tag: string) => {
    console.log('Trynna remove', tag, 'from', currentTags)
    if (currentTags.includes(tag)) {
      setCurrentTags(currentTags.filter(t => t != tag));
    }
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      {currentTags.map(x =>
        <div style={{ maxHeight: '24px' }}>
          <Tag tag={x} key={x} onClick={() => handleTagClick(x)} sx={{ marginTop: 0, marginBottom: 0 }} />
        </div>
      )}
      <IconButton onClick={handleClick} sx={{ padding: 0, marginBottom: '10px', height: '20px', color: 'white' }}>
        <FilterAltIcon />
      </IconButton>
      <Menu
        id="filter-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            marginTop: '1rem',
            maxHeight: '200px', // Adjust the height as needed
            width: '20ch',
            overflow: 'auto'
          }
        }}
      >
        <List>
          {availableTags.map((tag, index) => (
            <ListItemButton key={index} onClick={() => handleMenuClick(tag)}>
              <ListItemText primary={tag} />
            </ListItemButton>
          ))}
        </List>
      </Menu>
    </Box>
  );

}
