import React from "react"
import { Box, Typography } from "@mui/material"; 

import school_logo from "../../../../assets/purdue_logo.png"; 

export const SchoolContainer: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: '#f0f0f0', 
        borderRadius: '16px', 
        p: 2
      }}
    >
      <div className="container">
        <div>
          <img src={school_logo} alt="Purdue Logo" className="school_logo" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 550 }}>
            School: Purdue University <br />
            Degree: Bachelors of Science <br />
            Focus Area: Computer Engineering <br />
            GPA: 3.7/4.0
          </Typography>
        </div>
      </div>
      <Typography variant="h3">Relevant Coursework: </Typography>
      <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
    </Box>
  )
}