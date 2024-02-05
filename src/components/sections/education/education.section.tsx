import { Box, Typography } from "@mui/material"; 
import { SchoolContainer } from "./school_container/school_container.component";

export const EducationSection: React.FC = () => {
  return (
    <Box py={4}>
      <Typography variant="h1">Education Section</Typography>
      <SchoolContainer />
    </Box>
  ); 
}; 