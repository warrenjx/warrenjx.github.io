import { Box, Typography } from "@mui/material"; 

export const IntroSection: React.FC = () => {
  return (
    <Box py={4}>
      <Typography variant="h1">Intro Section</Typography>
      <Typography variant="h6">prelude text</Typography>
      <Typography variant="h2" mb={1} fontWeight={500}>bold text</Typography>
      <Typography variant="h5">smaller text</Typography>
      <Typography maxWidth={500}>body text</Typography>
    </Box>
  ); 
}; 