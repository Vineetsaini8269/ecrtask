import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Paper,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Campaign,
  Chat,
  Settings,
  Tune,
  Storefront,
  Favorite,
  Receipt,
  Shield,
  Search,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is the difference between Online and Offline mode?",
    answer:
      "In Online mode, you can download ECR files but cannot fill or submit them. In Offline mode, you can open the downloaded ECR files, fill them, and save them as Draft, Saved, or Submit them for final processing.",
  },
  {
    question: "Why can't I fill the ECR form in Online mode?",
    answer:
      "Form filling is only enabled in Offline mode for security and usability reasons. Please switch to Offline mode to fill and save the ECR.",
  },
  {
    question: "I downloaded the ECR in Online mode, but can't find it in Offline mode.",
    answer:
      "Make sure you downloaded the ECR before logging out from Online mode. Then switch to Offline mode and log in with the same credentials to view the downloaded file in the Offline section.",
  },
  {
    question: "What are the rules while filling the ECR form?",
    answer:
      "Each ECR form has specific validation rules like mandatory fields, correct formats, and logical input values. Please ensure all required data is filled properly before submitting.",
  },
  {
    question: "What is the difference between Draft, Saved, and Submitted status?",
    answer:
      "Draft means partially filled and can be edited later. Saved means the form is filled and ready but not yet finalized. Submitted means the form is complete and ready to be uploaded in Online mode.",
  },
  {
    question: "I filled and submitted a form in Offline mode, but it's not showing in Online mode.",
    answer:
      "Make sure the form was successfully marked as 'Submitted' in Offline mode. Then log in to Online mode and check the 'Completed' section to upload the file.",
  },
  {
    question: "How do I upload a completed ECR file in Online mode?",
    answer:
      "After logging into Online mode, go to the 'Completed' section, select the submitted ECR form, and click 'Upload'. Once uploaded successfully, it will be marked as submitted to the system.",
  },
  {
    question: "I can't upload the file in Online mode. What should I do?",
    answer:
      "Check your internet connection and ensure the file was marked as 'Submitted' in Offline mode. If the issue persists, try re-logging or contacting support.",
  },
  {
    question: "Can I re-edit a submitted ECR file?",
    answer:
      "No, once a file is marked as 'Submitted' and uploaded in Online mode, it cannot be edited. You may need to request admin support for any changes.",
  },
  {
    question: "What should I do if I lose access to my submitted ECR files?",
    answer:
      "Submitted files are stored on the server after upload. Please check your Completed section in Online mode. If still missing, contact technical support with your user ID.",
  },
];

const cardStyle = {
  width: "300px",
  margin: "16px",
  borderRadius: "16px",
  boxShadow: 3,
  flexShrink: 0,
  background: "linear-gradient(145deg, #decf2f, #f3f4f6)",
  transition: "transform 0.3s, box-shadow 0.3s, background 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
    background: "linear-gradient(145deg, #e0f7fa, #ffffff)",
  },
};

const iconBox = {
  mb: 2,
};

const Help = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const faqRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (openIndex !== null && faqRefs.current[openIndex]) {
      faqRefs.current[openIndex].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [openIndex]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm) ||
      faq.answer.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="relative" >
      {/* Banner */}
      <div className="relative h-[300px] text-white py-30 px-20 flex justify-start items-center" style={{ background: "linear-gradient(90deg, #1e3a8a, #3b82f6)" }}>
        <h1 className="text-5xl text-white font-bold z-10">Help</h1>
        <div
          className="absolute inset-0 bg-cover h-[300px] bg-center opacity-20"
          style={{ backgroundImage: "url('/helpping.avif')" }}
        ></div>
      </div>

      {/* Help Section */}
      <Container sx={{ py: 4 }}>
        <div className="flex gap-10 justify-baseline my-10">
          <Typography variant="h5" fontWeight="bold" sx={{ color: "#1e40af" }}>
            Any Queries
          </Typography>
          <TextField
            placeholder="Search..."
            className="w-5/12 rounded-2xl"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{
              backgroundColor: "#f0f9ff",
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
                backgroundColor: "#ffffff",
              },
            }}
          />
        </div>

        <Typography variant="h5" fontWeight="bold" sx={{ my: 3, color: "#3b82f6" }}>
          Help Sites
        </Typography>
        <Typography variant="body1" fontWeight="bold">
          Viewing Information in Various File Formats
        </Typography>
        <Typography variant="body1" sx={{ color: "#374151" }}>
          The information provided by this portal is available in various file formats, such as PDF, Word, Excel, and PowerPoint.
        </Typography>
        <Typography variant="body1" sx={{ color: "#374151" }}>
          Ensure your system has the required software like Adobe Flash or Microsoft Office Compatibility Pack.
        </Typography>
      </Container>

      {/* Highlight */}
      <Box sx={{
        my: 4,
        py: 4,
        px: 2,
        mx: 2,
        borderRadius: 4,
        background: "#CAE9FF",
        boxShadow: 2,
        textAlign: "center"
      }}>
        <Typography variant="h4" fontWeight="bold" sx={{ color: "#1e3a8a" }}>
          Need help? We've got your back.
        </Typography>
        <Typography variant="h6" sx={{ color: "#1e40af" }}>
          From account settings to permissions, find help for everything
        </Typography>
        <Typography variant="h6" sx={{ mt: 1 }}>
          If you're new to This Site, check out our{" "}
          <span className="text-blue-500 font-semibold">Beginner's Guide</span>
        </Typography>
      </Box>

      {/* Cards */}
      <Box 
  sx={{
    backgroundColor: "rgba(0, 0, 0, 0.8)", // light black/gray tint
    py: 4,
    borderRadius: 4,
    mx: "auto", // centers horizontally
    boxShadow: 1,
    maxWidth: "1200px" // optional: restrict width for better layout
  }}
>
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    {[{
      path: "/announcements", icon: <Campaign />, title: "Announcements", desc: "Updates on new features, maintenance schedules, and system alerts."
    }, {
      path: "/switchingmodepage", icon: <Settings />, title: "Switching Modes", desc: "How to switch between Online and Offline mode safely."
    }, {
      path: "/formsubmissionhelp", icon: <Receipt />, title: "Form Submission Help", desc: "Drafts, Saved, and Submitted – how to manage them."
    }, {
      path: "/fileuploadguide", icon: <Shield />, title: "File Upload Guide", desc: "Steps to upload submitted ECRs from Offline to Online."
    }, {
      path: "/commonUserissues", icon: <Favorite />, title: "Common User Issues", desc: "Fix the most reported problems from users."
    }].map(({ path, icon, title, desc }) => (
      <Link to={path} style={{ textDecoration: 'none' }} key={title}>
        <Card sx={cardStyle}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Box sx={iconBox}>
              {React.cloneElement(icon, { fontSize: "large", color: "primary" })}
            </Box>
            <Typography variant="h6" fontWeight="bold" color="primary">{title}</Typography>
            <Typography variant="body2" color="text.secondary">{desc}</Typography>
          </CardContent>
        </Card>
      </Link>
    ))}
  </div>
      </Box>


      {/* FAQ Section */}
      <Container
        sx={{ py: 4, backgroundColor: "#3498db", borderRadius: 4, boxShadow: 2 }}
        className="my-8"
      >
        <Typography variant="h5" fontWeight="bold" textAlign="center" sx={{ color: "#fff" }}>
          Frequently Asked Questions
        </Typography>
        <Typography variant="h6" textAlign="center" sx={{ mb: 3, color: "#000" }}>
          Find all the answers related to your usage of our services.
        </Typography>

        {filteredFAQs.length === 0 && (
          <Typography variant="body1" textAlign="center" sx={{ mt: 2 }}>
            No matching questions found.
          </Typography>
        )}

        {filteredFAQs.map((faq, i) => {
          const actualIndex = faqs.findIndex((f) => f.question === faq.question);
          return (
            <Accordion
              key={actualIndex}
              expanded={openIndex === actualIndex}
              onChange={() => toggleFAQ(actualIndex)}
              ref={(el) => (faqRefs.current[actualIndex] = el)}
              sx={{
                transition: "all 0.3s ease-in-out",
                mb: 1,
                backgroundColor: "#CAE9FF",
                borderRadius: 2,
                boxShadow: 1,
                "&:hover": {
                  boxShadow: "0 4px 20px rgba(59,130,246,0.2)",
                  backgroundColor: "#f0f9ff",
                },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Container>
    </div>
  );
};

export default Help;
