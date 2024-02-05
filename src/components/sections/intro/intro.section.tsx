import { Box, Typography } from "@mui/material"; 

export const IntroSection: React.FC = () => {
  return (
    <Box py={4}>
      <Typography variant="h5">Hello, my name is</Typography>
      <Typography variant="h2" mb={1} fontWeight={500}>Warren</Typography>
      <Typography variant="h4">Welcome to my website!</Typography>
      <Typography maxWidth={500}>Scroll for more</Typography>
    </Box>
  ); 
}; 