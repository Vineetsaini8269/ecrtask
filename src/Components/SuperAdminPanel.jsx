import React from "react";
import {
  DialogTitle,
  Box,
  Typography,
  Button,
  IconButton,
  Switch
} from "@mui/material";
import PowerSettingsNew from "@mui/icons-material/PowerSettingsNew";
import CloseIcon from "@mui/icons-material/Close";

const SuperAdminPanel = () => {
  return (
    <div>

        {/* admin page  */}

 < DialogTitle
  id="customized-dialog-title"
  sx={{
    m: 'auto',
    p: '10px',
    borderRadius: "5px",
    overflow: "hidden",
    width:"80%",
    height:"100vh",

  }}
>
  {/* Header Bar */}
  <Box
    sx={{
      background: 'linear-gradient(0deg, rgba(1,58,99,1) 0%, rgba(4,101,171,1) 61%, rgba(86,117,139,1) 100%)',
      p: 3,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <Typography sx={{ fontWeight: 'bold', color: 'white' }}>
      E-Signer Admin Dashboard
    </Typography>
    <IconButton
    //   onClick={handleCloseThirdModal}
      sx={{ color: 'white' }}
      aria-label="close"
    >
      <CloseIcon />
    </IconButton>
  </Box>

  {/* Content Area */}
  <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 3 }}>
    {/* Data Management */}
    <Box>
      <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 'bold' }}>
        DATA MANAGEMENT
      </Typography>
      <Button
        // onClick={() => setOpenClearDataModal(true)}
        fullWidth
        sx={{
          backgroundColor: "black",
          color: "white",
          fontWeight: "bold",
          borderRadius: "10px",
          mb: 1,
          ':hover': {
            color: "black",
            backgroundColor: "white",
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <span role="img" aria-label="trash">🗑️</span> Clear All Data
        </Box>
      </Button>

      <Box
        sx={{
          backgroundColor: "#444",
          color: "white",
          px: 2,
          py: 1,
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography fontWeight="bold">Custom Config</Typography>
        {/* <Switch checked={statictoggle} onChange={handlestatictoggle} /> */}
      </Box>
    </Box>

    {/* System Controls */}
    <Box>
      <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 'bold' }}>
        SYSTEM CONTROLS
      </Typography>
      <Button
        fullWidth
        sx={{
          backgroundColor: "white",
          color: "black",
          borderRadius: "10px",
          fontWeight: "bold",
          ':hover': {
            color: "red",
            backgroundColor: "white",
          },
        }}
        variant="outlined"
        startIcon={<PowerSettingsNew />}
        color="error"
        // onClick={() => {
        //   handleRestartJetty(handleShowLoader);
        // }}
      >
        Restart E-Signer
      </Button>
    </Box>

    {/* System Logs */}
    <Box>
      <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 'bold' }}>
        SYSTEM LOGS
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Button
          fullWidth
          sx={{
            backgroundColor: "white",
            color: "black",
            borderRadius: "10px",
            fontWeight: "bold",
            fontSize: "0.75rem",
            ':hover': {
              color: "red",
              backgroundColor: "white",
            },
          }}
          variant="outlined"
          startIcon={<PowerSettingsNew />}
          color="error"
        //   onClick={() => {
        //     handleESignerLogsModal(true);
        //   }}
        >
          E-Signer Logs
        </Button>
        <Button
          fullWidth
          sx={{
            backgroundColor: "white",
            color: "black",
            borderRadius: "10px",
            fontWeight: "bold",
            fontSize: "0.75rem",
            ':hover': {
              color: "red",
              backgroundColor: "white",
            },
          }}
          variant="outlined"
          startIcon={<PowerSettingsNew />}
          color="error"
        //   onClick={() => {
        //     handleEcrLogsModal(true);
        //   }}
        >
          ECR Logs
        </Button>
      </Box>
    </Box>

    {/* Application Control */}
    <Box>
      <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 'bold' }}>
        APPLICATION CONTROL
      </Typography>
      <Button
        fullWidth
        sx={{
          backgroundColor: "red",
          color: "white",
          borderRadius: "10px",
          fontWeight: "bold",
          ':hover': {
            color: "red",
            backgroundColor: "white",
          },
        }}
        // onClick={() => setOpenCloseAppModal(true)}
      >
        Close The App
      </Button>
    </Box>
  </Box>
</DialogTitle>





    </div>
  )
}

export default SuperAdminPanel;
