import React from 'react';
import { Typography, Card, CardContent, Box, Divider } from '@mui/material';
import { Cloud, CloudOff, SwapHoriz, WarningAmber } from '@mui/icons-material';

const sectionStyle = {
  mb: 4,
  
};

const iconBox = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  mb: 1,
};

const SwitchingModePage = () => {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundImage: "url('/navy.gif')", // replace with your actual image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
      }}
    >
      <Box
  sx={{
    width: '80%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // light black background
    borderRadius: 3,
    p: 4,
    overflowY: 'auto',
    color: 'white', // optional: ensures text is readable on dark bg
  }}
>

        <Typography variant="h4" gutterBottom fontWeight="bold" color="#faffff">
          Switching Between Online and Offline Mode
        </Typography>

        <Divider sx={{ my: 2 }} />

        {/* ONLINE MODE */}
        <Box >
  <Card elevation={3} sx={{ ...sectionStyle, backgroundColor: '#1673de', borderRadius: 1, p: 2 }}>
    <CardContent>
      <Box sx={iconBox}>
        <Cloud fontSize="large"   />
      </Box>
      <Typography variant="h5" fontWeight="bold" color="white">Online Mode</Typography>
      <Typography variant="body1" mt={1} color="white">
        Online mode is the default mode where users can log in and view the available ECR (Electronic Case Record) forms.
        These forms can only be <strong>downloaded</strong> in this mode — they cannot be edited or submitted.
      </Typography>
      <Typography variant="body2" color="white" mt={2}>
        ✅ Use this mode to download forms <br />
        🚫 Cannot fill or submit forms here <br />
        🔄 Switch to Offline mode after downloading
      </Typography>
    </CardContent>
  </Card>
</Box>


        {/* OFFLINE MODE */}
        <Box sx={sectionStyle}>
          <Card elevation={3} sx={{ ...sectionStyle, backgroundColor: '#4ccf4f', borderRadius: 1, p: 2 }}>
            <CardContent>
              <Box sx={iconBox}>
                <CloudOff fontSize="large" color="secondary" />
              </Box>
              <Typography variant="h5" fontWeight="bold">Offline Mode</Typography>
              <Typography variant="body1" mt={1}>
                In Offline mode, users can access the previously downloaded ECR forms. These forms can now be <strong>opened, filled, validated</strong>, and marked as <strong>Draft, Saved, or Submitted</strong>.
              </Typography>
              <Typography variant="body2" color="text.secondary" mt={2}>
                ✅ Fill and save forms offline <br />
                💾 Draft: partially filled <br />
                🟢 Submitted: ready for upload in Online mode
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* HOW TO SWITCH */}
        <Box sx={sectionStyle}>
          <Card elevation={3} sx={{ ...sectionStyle, backgroundColor: '#fc9f26', borderRadius: 1, p: 2 }}>
            <CardContent>
              <Box sx={iconBox}>
                <SwapHoriz fontSize="large" color="info" />
              </Box>
              <Typography variant="h5" fontWeight="bold">How to Switch Modes</Typography>
              <Typography variant="body1" mt={1}>
                After downloading ECRs in Online mode:
                <ul>
                  <li>Logout from the application</li>
                  <li>Change the app setting to <strong>Offline Mode</strong></li>
                  <li>Login again — you will now be in Offline mode</li>
                </ul>
                Similarly, switch back to Online mode to upload your submitted forms.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* WARNING SECTION  */}
        <Box sx={sectionStyle}>
          <Card elevation={2} sx={{ ...sectionStyle, backgroundColor: '#d42815', borderRadius: 1, p: 2 }}>
            <CardContent>
              <Box sx={iconBox}>
                <WarningAmber fontSize="large" color="warning" />
              </Box>
              <Typography variant="h6" fontWeight="bold" color="#fffafa">
                Important Tips While Switching
              </Typography>
              <Typography variant="body1" mt={1} color="text.primary">
                🔒 Always ensure your downloaded files are saved before switching modes<br />
                🧾 Don't edit forms in Online mode — they will not save<br />
                ☁️ Submit your filled forms in Offline mode and upload in Online mode only<br />
                📌 Use the same user credentials in both modes to maintain data consistency
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </div>
  );
};

export default SwitchingModePage;
