import { useState } from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Box,
  Divider
} from "@mui/material";
import { ChevronDown, ChevronUp } from "lucide-react";

const latestAnnouncements = [
  {
    title: "New: Log Details in Offline Mode",
    content:
      "We've added a new feature in Offline Mode that tracks your file activity including when you open, save, submit, draft, or cancel a form. All these actions are now logged with timestamps for better tracking and transparency."
  },
  {
    title: "Improved ECR File Upload Feedback",
    content:
      "Users will now see a progress indicator and confirmation message after uploading ECR files in Online mode."
  }
];

const previousAnnouncements = [
  {
    title: "Winter Ringtone and Sounds 2024 FAQ",
    content: "Get cozy with our winter-themed sound packs. Now available in your audio settings."
  },
  {
    title: "Back-to-School Pack Giveaway - August 2024",
    content: "Thank you for participating! Winners have been notified via email."
  },
  {
    title: "[Notice] Emails from Discord",
    content: "Be aware of potential scam emails pretending to be from Discord. Always verify the sender."
  }
];

const Announcement = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (

    <div>
    <Container  
  disableGutters
  maxWidth={false}
  sx={{
    minHeight: "100vh",
    width: "100%",
    backgroundImage: "url('navy.gif')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    p: 4,
  }}
>
  {/* Centered Content Box */}
  <Box sx={{ width: "60%", mx: "auto" }}>
    <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
      Announcements
    </Typography>

    <Paper
      elevation={3}
      sx={{
        p: 3,
        mb: 4,
        backgroundColor: "#3498db", 
        color: "#fff",
        borderRadius: 2,
        boxShadow: 5,
      }}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Latest Announcements
      </Typography>
      {latestAnnouncements.map((item, index) => (
        <Accordion
          key={index}
          expanded={expandedIndex === index}
          onChange={() => handleToggle(index)}
          sx={{
            backgroundColor: "#0b8d96", 
            color: "#fff",
            mt: 1,
            borderRadius: 1,
          }}
        >
          <AccordionSummary expandIcon={expandedIndex === index ? <ChevronUp color="#fff" /> : <ChevronDown color="#fff" />}>
            <Typography fontWeight="bold">{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">{item.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Paper>

    <Paper
      elevation={1}
      sx={{
        p: 3,
        backgroundColor:"#3498db",
        color: "#fff",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Previous Announcements
      </Typography>
      <Divider sx={{ mb: 2, borderColor: "rgba(255,255,255,0.3)" }} />
      {previousAnnouncements.map((item, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Typography variant="subtitle1" fontWeight="medium">
            • {item.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)" }}>
            {item.content}
          </Typography>
        </Box>
      ))}
    </Paper>
  </Box>
</Container>

<Box sx={{ p: 2 }}>
      {/* Scrollable Box */}
      <Box
        sx={{
          width: 400,
          height: 300,
          overflow: 'auto',
          border: '1px solid #ccc',
          p: 2,
          mb: 4, // 👈 margin-bottom to separate it from content below
        }}
      >
        <Box
          sx={{
            width: 800,
            height: 600,
            backgroundColor: '#f0f0f0',
          }}
        >
          Scroll me!
        </Box>
      </Box>

      {/* Content After Scrollable Box */}
      <Typography variant="body1">
        This content comes after the scrollable area and won’t overlap.
      </Typography>
    </Box>

</div>



  );
};

export default Announcement;
