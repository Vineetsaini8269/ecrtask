import React from 'react';
import { Typography, Box, Divider } from '@mui/material';

const FileUploadGuidePage = () => {
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
          width: '60%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          border: '1px solid gray',
          borderRadius: 3,
          color: '#fff',
        }}
      >
        <Typography variant="h4" gutterBottom fontWeight="bold" color="primary.contrastText">
          File Upload Guide
        </Typography>
        <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.3)' }} />
        <Typography variant="body1">
          Here are the steps to upload your completed ECR forms from Offline mode to Online mode:
        </Typography>

        <Typography variant="h6" fontWeight="bold" mt={2}>Step 1: Log into Online Mode</Typography>
        <Typography variant="body2">
          Once you're ready to upload the completed form, log into the system in Online mode.
        </Typography>

        <Typography variant="h6" fontWeight="bold" mt={2}>Step 2: Access the Completed Section</Typography>
        <Typography variant="body2">
          Go to the "Completed" section, where you’ll find all your finalized forms that are ready for upload.
        </Typography>

        <Typography variant="h6" fontWeight="bold" mt={2}>Step 3: Upload the Form</Typography>
        <Typography variant="body2">
          Select the form and click the "Upload" button to submit it. Once uploaded, the form will be fully submitted and saved in the system.
        </Typography>

        <Typography variant="h6" fontWeight="bold" mt={2}>Important Tip</Typography>
        <Typography variant="body2">
          Ensure that your form is completely filled and submitted in Offline mode before uploading to avoid errors.
        </Typography>
      </Box>
    </div>
  );
};

export default FileUploadGuidePage;
