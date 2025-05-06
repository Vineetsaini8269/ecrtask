import React from 'react';
import { Typography, Box, Divider } from '@mui/material';

const FormSubmissionHelpPage = () => {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundImage: "url('/navy.gif')", // update with actual path if needed
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
          Form Submission Help
        </Typography>
        <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.3)' }} />
        <Typography variant="body1">
          In this section, we explain how the different statuses of your ECR forms work:
        </Typography>

        <Typography variant="h6" fontWeight="bold" mt={2}>Drafts</Typography>
        <Typography variant="body2">
          A form in the Draft status has been partially filled but is not ready for final submission. You can continue filling the form later.
        </Typography>

        <Typography variant="h6" fontWeight="bold" mt={2}>Saved</Typography>
        <Typography variant="body2">
          A Saved form is one that is completed, but not yet submitted. You can review and make changes before finalizing your submission.
        </Typography>

        <Typography variant="h6" fontWeight="bold" mt={2}>Submitted</Typography>
        <Typography variant="body2">
          A Submitted form is a form that is finalized and ready for upload in Online mode. It will be listed in the "Completed" section in Online mode.
        </Typography>
      </Box>
    </div>
  );
};

export default FormSubmissionHelpPage;
