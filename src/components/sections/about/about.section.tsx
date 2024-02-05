import { Box, Typography } from "@mui/material"; 
import { InstagramEmbed } from 'react-social-media-embed'; 

export const AboutSection: React.FC = () => {
  return (
    <Box py={4}>
      <Typography variant="h2">About Section</Typography>
      <Typography variant="h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
      <div style={{ display: 'flex'}}>
        <InstagramEmbed 
          url='https://www.instagram.com/whoto.graphy/'
          width={500}
        />
      </div>
    </Box>
  ); 
}; 