import React from 'react';
import { Typography, Box, Divider } from '@mui/material';

const CommonUserIssuesPage = () => {
  return (
    <div 
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundImage: "url('/navy.gif')", // replace with your actual image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <Box
        p={4}
        sx={{
          width: "60%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          border: "1px solid gray",
          borderRadius: 3,
          color: "#fff",
        }}
      >
        <Typography variant="h4" gutterBottom fontWeight="bold" color="primary.contrastText">
          Common User Issues
        </Typography>
        <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.3)' }} />
        <Typography variant="body1">
          Here are some of the most common issues reported by users, along with solutions to fix them:
        </Typography>

        <Typography variant="h6" fontWeight="bold" mt={2}>Issue 1: Form Not Saving</Typography>
        <Typography variant="body2">
          If your form is not saving, ensure that you are connected to the system in Offline mode and that the form is complete before saving it as Draft or Saved.
        </Typography>

        <Typography variant="h6" fontWeight="bold" mt={2}>Issue 2: Unable to Upload Form</Typography>
        <Typography variant="body2">
          If you're unable to upload your form in Online mode, make sure you have logged into the correct account and that the form is in the "Completed" section in Offline mode.
        </Typography>

        <Typography variant="h6" fontWeight="bold" mt={2}>Issue 3: Missing Downloaded Files</Typography>
        <Typography variant="body2">
          If you cannot find the downloaded ECR files in Offline mode, verify that the file was properly saved on your device before switching to Offline mode.
        </Typography>

        <Typography variant="h6" fontWeight="bold" mt={2}>Issue 4: Data Loss After Mode Switch</Typography>
        <Typography variant="body2">
          If you face data loss after switching modes, ensure that all forms are either saved or submitted before switching between Online and Offline modes.
        </Typography>
      </Box>
    </div>
  );
};

export default CommonUserIssuesPage;
