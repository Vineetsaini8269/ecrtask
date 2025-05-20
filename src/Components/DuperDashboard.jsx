// import React, { useState } from 'react';
// import {
//   Box,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Typography,
//   Button,
// } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// // Import your components
// const CustomConfig = () => <div><h2>Custom Config Section</h2><p>This is the Custom Config panel.</p></div>;
// const Queries = () => <div><h2>Queries Section</h2><p>This is the Queries panel.</p></div>;
// const PM2Logs = () => <div><h2>PM2 Logs Section</h2><p>This is the PM2 Logs panel.</p></div>;
// const RestartLog = () => <div><h2>Restart Log Section</h2><p>This is the Restart Log panel.</p></div>;
// const ECRLogs = () => <div><h2>ECR Logs Section</h2><p>This is the ECR Logs panel.</p></div>;
// const CloseApp = () => <div><h2>Close App Section</h2><p>This is the Close App panel.</p></div>;


// const DuperDashboard = () => {
//   const [selectedContent, setSelectedContent] = useState(null);

//   const renderContent = () => {
//     switch (selectedContent) {
//       case 'customConfig':
//         return <CustomConfig />;
//       case 'queries':
//         return <Queries />;
//       case 'pm2Logs':
//         return <PM2Logs />;
//       case 'restartLog':
//         return <RestartLog />;
//       case 'ecrLogs':
//         return <ECRLogs />;
//       case 'closeApp':
//         return <CloseApp />;
//       default:
//         return <Typography>Select an option from the left panel.</Typography>;
//     }
//   };

//   return (
//     <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#0f111a', color: '#fff' }}>
//       {/* Left Panel */}
//       <Box sx={{ width: '20%', backgroundColor: '#111827', p: 2 }}>
//         <Accordion sx={{ backgroundColor: '#1f2937', color: '#fff' }}>
//           <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
//             <Typography>Data Management</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Button
//               fullWidth
//               sx={{ mb: 1 }}
//               variant="contained"
//               onClick={() => setSelectedContent('customConfig')}
//             >
//               Custom Config
//             </Button>
//           </AccordionDetails>
//         </Accordion>

//         <Accordion sx={{ backgroundColor: '#1f2937', color: '#fff' }}>
//           <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
//             <Typography>Query Management</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Button
//               fullWidth
//               sx={{ mb: 1 }}
//               variant="contained"
//               onClick={() => setSelectedContent('queries')}
//             >
//               Run Query
//             </Button>
//           </AccordionDetails>
//         </Accordion>

//         <Accordion sx={{ backgroundColor: '#1f2937', color: '#fff' }}>
//           <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
//             <Typography>System Logs</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Button
//               fullWidth
//               sx={{ mb: 1 }}
//               variant="contained"
//               onClick={() => setSelectedContent('pm2Logs')}
//             >
//               PM2 Logs
//             </Button>
//             <Button
//               fullWidth
//               sx={{ mb: 1 }}
//               variant="contained"
//               onClick={() => setSelectedContent('restartLog')}
//             >
//               Restart Log
//             </Button>
//             <Button
//               fullWidth
//               sx={{ mb: 1 }}
//               variant="contained"
//               onClick={() => setSelectedContent('ecrLogs')}
//             >
//               ECR Logs
//             </Button>
//           </AccordionDetails>
//         </Accordion>

//         <Accordion sx={{ backgroundColor: '#1f2937', color: '#fff' }}>
//           <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
//             <Typography>Application Control</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Button
//               fullWidth
//               sx={{ mb: 1 }}
//               variant="contained"
//               color="error"
//               onClick={() => setSelectedContent('closeApp')}
//             >
//               Close The App
//             </Button>
//           </AccordionDetails>
//         </Accordion>
//       </Box>

//       {/* Right Panel */}
//       <Box sx={{ width: '80%', p: 3, backgroundColor: '#1f2937' }}>
//         {renderContent()}
//       </Box>
//     </Box>
//   );
// };

// export default DuperDashboard;













// import React, { useState } from 'react';
// import { Box, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import Queries from './Queries'; // Assume Queries component is defined elsewhere






// export default function SuperDashboard() {
//   // State to track which section is active
//   const [activeSection, setActiveSection] = useState('');

//   // Create a dark theme for MUI
//   const darkTheme = createTheme({
//     palette: {
//       mode: 'dark'
//     }
//   });

//   // Render right-hand content based on activeSection
//   const renderContent = () => {
//     switch (activeSection) {
//       case 'customConfig':
//         return (
//           <Box sx={{ p: 2 }}>
//             <Typography variant="h4">This is Custom Config Page</Typography>
//           </Box>
//         );
//       case 'runQuery':
//         return (
//           <Box sx={{ p: 2 }}>
//             <Queries />
//           </Box>
//         );
//       case 'pm2Logs':
//         return (
//           <Box sx={{ p: 2 }}>
//             <Typography variant="h4">PM2 Logs</Typography>
//           </Box>
//         );
//       case 'restartLog':
//         return (
//           <Box sx={{ p: 2 }}>
//             <Typography variant="h4">Restart Log</Typography>
//           </Box>
//         );
//       case 'ecrLogs':
//         return (
//           <Box sx={{ p: 2 }}>
//             <Typography variant="h4">ECR Logs</Typography>
//           </Box>
//         );
//       case 'closeApp':
//         return (
//           <Box sx={{ p: 2 }}>
//             <Typography variant="h4">This will close the app</Typography>
//           </Box>
//         );
//       default:
//         return (
//           <Box sx={{ p: 2 }}>
//             <Typography variant="h6">Please select an option from the left.</Typography>
//           </Box>
//         );
//     }
//   };

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <CssBaseline />
//       {/* Main container: flex 20% sidebar, 80% content */}
//       <Box sx={{ display: 'flex', height: '100vh', backgroundColor: 'background.default', color: 'text.primary' }}>
//         {/* Left Sidebar (20% width) */}
//         <Box sx={{ width: '20%', bgcolor: '#121212', color: '#fff' }}>
//           {/* DATA MANAGEMENT section */}
//           <Accordion sx={{ bgcolor: '#000', color: '#fff' }}>
//             <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
//               <Typography>DATA MANAGEMENT</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography 
//                 onClick={() => setActiveSection('customConfig')} 
//                 sx={{ cursor: 'pointer', p: 1 }}
//               >
//                 Custom Config
//               </Typography>
//             </AccordionDetails>
//           </Accordion>

//           {/* QUERY MANAGEMENT section */}
//           <Accordion sx={{ bgcolor: '#000', color: '#fff' }}>
//             <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
//               <Typography>QUERY MANAGEMENT</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography 
//                 onClick={() => setActiveSection('runQuery')} 
//                 sx={{ cursor: 'pointer', p: 1 }}
//               >
//                 Run Query
//               </Typography>
//             </AccordionDetails>
//           </Accordion>

//           {/* SYSTEM LOGS section */}
//           <Accordion sx={{ bgcolor: '#000', color: '#fff' }}>
//             <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
//               <Typography>SYSTEM LOGS</Typography>
//             </AccordionSummary>
//             <AccordionDetails sx={{ display: 'flex', flexDirection: 'column' }}>
//               <Typography 
//                 onClick={() => setActiveSection('pm2Logs')} 
//                 sx={{ cursor: 'pointer', p: 1 }}
//               >
//                 PM2 Logs
//               </Typography>
//               <Typography 
//                 onClick={() => setActiveSection('restartLog')} 
//                 sx={{ cursor: 'pointer', p: 1 }}
//               >
//                 Restart Log
//               </Typography>
//               <Typography 
//                 onClick={() => setActiveSection('ecrLogs')} 
//                 sx={{ cursor: 'pointer', p: 1 }}
//               >
//                 ECR Logs
//               </Typography>
//             </AccordionDetails>
//           </Accordion>

//           {/* APPLICATION CONTROL section */}
//           <Accordion sx={{ bgcolor: '#000', color: '#fff' }}>
//             <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
//               <Typography>APPLICATION CONTROL</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography 
//                 onClick={() => setActiveSection('closeApp')} 
//                 sx={{ cursor: 'pointer', p: 1 }}
//               >
//                 Close The App
//               </Typography>
//             </AccordionDetails>
//           </Accordion>
//         </Box>

//         {/* Right Content Area (80% width) */}
//         <Box sx={{ flexGrow: 1, bgcolor: '#181818', color: '#fff' }}>
//           {renderContent()}
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// } 




// import React, { useState } from 'react';
// import {
//   Box,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Typography,
//   Button,
//   IconButton,
// } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MenuIcon from '@mui/icons-material/Menu';

// // आपके कस्टम कंपोनेंट्स
// const CustomConfig = () => <div><h2>Custom Config Section</h2><p>This is the Custom Config panel.</p></div>;
// // const Queries = () => <div><h2>Queries Section</h2><p>This is the Queries panel.</p></div>;
// const PM2Logs = () => <div><h2>PM2 Logs Section</h2><p>This is the PM2 Logs panel.</p></div>;
// const RestartLog = () => <div><h2>Restart Log Section</h2><p>This is the Restart Log panel.</p></div>;
// const ECRLogs = () => <div><h2>ECR Logs Section</h2><p>This is the ECR Logs panel.</p></div>;
// const CloseApp = () => <div><h2>Close App Section</h2><p>This is the Close App panel.</p></div>;

// const DuperDashboard = () => {
//   const [selectedContent, setSelectedContent] = useState(null);
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   const renderContent = () => {
//     switch (selectedContent) {
//       case 'customConfig':
//         return <CustomConfig />;
//       case 'queries':
//         return <Queries />;
//       case 'pm2Logs':
//         return <PM2Logs />;
//       case 'restartLog':
//         return <RestartLog />;
//       case 'ecrLogs':
//         return <ECRLogs />;
//       case 'closeApp':
//         return <CloseApp />;
//       default:
//         return <Typography>Select an option from the left panel.</Typography>;
//     }
//   };

//   return (
//     <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#0f111a', color: '#fff' }}>
//       {/* साइडबार */}
//       {sidebarOpen && (
//         <Box sx={{ width: '20%', backgroundColor: '#111827', p: 2, position: 'relative' }}>
//           {/* टॉगल बटन */}
//           <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
//             <IconButton
//               onClick={() => setSidebarOpen(!sidebarOpen)}
//               sx={{ color: '#fff' }}
//             >
//               <MenuIcon />
//             </IconButton>
//           </Box>

//           <Accordion sx={{ backgroundColor: '#1f2937', color: '#fff', mt: 6 }}>
//             <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
//               <Typography>Data Management</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Button
//                 fullWidth
//                 sx={{ mb: 1 }}
//                 variant="contained"
//                 onClick={() => setSelectedContent('customConfig')}
//               >
//                 Custom Config
//               </Button>
//             </AccordionDetails>
//           </Accordion>

//           <Accordion sx={{ backgroundColor: '#1f2937', color: '#fff' }}>
//             <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
//               <Typography>Query Management</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Button
//                 fullWidth
//                 sx={{ mb: 1 }}
//                 variant="contained"
//                 onClick={() => setSelectedContent('queries')}
//               >
//                 Run Query
//               </Button>
//             </AccordionDetails>
//           </Accordion>

//           <Accordion sx={{ backgroundColor: '#1f2937', color: '#fff' }}>
//             <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
//               <Typography>System Logs</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Button
//                 fullWidth
//                 sx={{ mb: 1 }}
//                 variant="contained"
//                 onClick={() => setSelectedContent('pm2Logs')}
//               >
//                 PM2 Logs
//               </Button>
//               <Button
//                 fullWidth
//                 sx={{ mb: 1 }}
//                 variant="contained"
//                 onClick={() => setSelectedContent('restartLog')}
//               >
//                 Restart Log
//               </Button>
//               <Button
//                 fullWidth
//                 sx={{ mb: 1 }}
//                 variant="contained"
//                 onClick={() => setSelectedContent('ecrLogs')}
//               >
//                 ECR Logs
//               </Button>
//             </AccordionDetails>
//           </Accordion>

//           <Accordion sx={{ backgroundColor: '#1f2937', color: '#fff' }}>
//             <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
//               <Typography>Application Control</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Button
//                 fullWidth
//                 sx={{ mb: 1 }}
//                 variant="contained"
//                 color="error"
//                 onClick={() => setSelectedContent('closeApp')}
//               >
//                 Close The App
//               </Button>
//             </AccordionDetails>
//           </Accordion>
//         </Box>
//       )}

//       {/* मुख्य कंटेंट एरिया */}
//       <Box sx={{ flexGrow: 1, p: 3, backgroundColor: '#1f2937', display: 'flex', flexDirection: 'column' }}>
//         {/* जब साइडबार बंद हो, तो टॉगल बटन दिखाएं */}
//         {!sidebarOpen && (
//           <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
//             <IconButton
//               onClick={() => setSidebarOpen(!sidebarOpen)}
//               sx={{ color: '#fff' }}
//             >
//               <MenuIcon />
//             </IconButton>
//           </Box>
//         )}

//         {/* कंटेंट */}
//         <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//           {renderContent()}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default DuperDashboard;





// import React, { useState } from 'react';
// import {
//   Box,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Typography,
//   Button,
//   IconButton,
// } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MenuIcon from '@mui/icons-material/Menu';

// // आपके कस्टम कंपोनेंट्स
// const CustomConfig = () => <div><h2>Custom Config Section</h2><p>This is the Custom Config panel.</p></div>;
// // const Queries = () => <div><h2>Queries Section</h2><p>This is the Queries panel.</p></div>;
// const PM2Logs = () => <div><h2>PM2 Logs Section</h2><p>This is the PM2 Logs panel.</p></div>;
// const RestartLog = () => <div><h2>Restart Log Section</h2><p>This is the Restart Log panel.</p></div>;
// const ECRLogs = () => <div><h2>ECR Logs Section</h2><p>This is the ECR Logs panel.</p></div>;
// const CloseApp = () => <div><h2>Close App Section</h2><p>This is the Close App panel.</p></div>;

// const DuperDashboard = () => {
//   const [selectedContent, setSelectedContent] = useState(null);
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [expandedAccordion, setExpandedAccordion] = useState(false); // holds currently open accordion

//   const handleAccordionChange = (panel) => (event, isExpanded) => {
//     setExpandedAccordion(isExpanded ? panel : false);
//   };

//   const renderContent = () => {
//     switch (selectedContent) {
//       case 'customConfig':
//         return <CustomConfig />;
//       case 'queries':
//         return <Queries />;
//       case 'pm2Logs':
//         return <PM2Logs />;
//       case 'restartLog':
//         return <RestartLog />;
//       case 'ecrLogs':
//         return <ECRLogs />;
//       case 'closeApp':
//         return <CloseApp />;
//       default:
//         return <Typography>Select an option from the left panel.</Typography>;
//     }
//   };

//   return (
//     <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#0f111a', color: '#fff' }}>
//       {sidebarOpen && (
//         <Box sx={{ width: '20%', backgroundColor: '#111827', p: 2, position: 'relative' }}>
//           <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
//             <IconButton onClick={() => setSidebarOpen(!sidebarOpen)} sx={{ color: '#fff' }}>
//               <MenuIcon />
//             </IconButton>
//           </Box>

//           <Accordion
//             expanded={expandedAccordion === 'data'}
//             onChange={handleAccordionChange('data')}
//             sx={{ backgroundColor: '#1f2937', color: '#fff', mt: 6 }}
//           >
//             <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
//               <Typography>Data Management</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Button fullWidth sx={{ mb: 1 }} variant="contained" onClick={() => setSelectedContent('customConfig')}>
//                 Custom Config
//               </Button>
//             </AccordionDetails>
//           </Accordion>

//           <Accordion
//             expanded={expandedAccordion === 'query'}
//             onChange={handleAccordionChange('query')}
//             sx={{ backgroundColor: '#1f2937', color: '#fff' }}
//           >
//             <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
//               <Typography>Query Management</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Button fullWidth sx={{ mb: 1 }} variant="contained" onClick={() => setSelectedContent('queries')}>
//                 Run Query
//               </Button>
//             </AccordionDetails>
//           </Accordion>

//           <Accordion
//             expanded={expandedAccordion === 'logs'}
//             onChange={handleAccordionChange('logs')}
//             sx={{ backgroundColor: '#1f2937', color: '#fff' }}
//           >
//             <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
//               <Typography>System Logs</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Button fullWidth sx={{ mb: 1 }} variant="contained" onClick={() => setSelectedContent('pm2Logs')}>
//                 PM2 Logs
//               </Button>
//               <Button fullWidth sx={{ mb: 1 }} variant="contained" onClick={() => setSelectedContent('restartLog')}>
//                 Restart Log
//               </Button>
//               <Button fullWidth sx={{ mb: 1 }} variant="contained" onClick={() => setSelectedContent('ecrLogs')}>
//                 ECR Logs
//               </Button>
//             </AccordionDetails>
//           </Accordion>

//           <Accordion
//             expanded={expandedAccordion === 'app'}
//             onChange={handleAccordionChange('app')}
//             sx={{ backgroundColor: '#1f2937', color: '#fff' }}
//           >
//             <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
//               <Typography>Application Control</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Button
//                 fullWidth
//                 sx={{ mb: 1 }}
//                 variant="contained"
//                 color="error"
//                 onClick={() => setSelectedContent('closeApp')}
//               >
//                 Close The App
//               </Button>
//             </AccordionDetails>
//           </Accordion>
//         </Box>
//       )}

//       <Box sx={{ flexGrow: 1, p: 3, backgroundColor: '#1f2937', display: 'flex', flexDirection: 'column' }}>
//         {!sidebarOpen && (
//           <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
//             <IconButton onClick={() => setSidebarOpen(!sidebarOpen)} sx={{ color: '#fff' }}>
//               <MenuIcon />
//             </IconButton>
//           </Box>
//         )}
//         <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//           {renderContent()}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default DuperDashboard;


// ------------------------------------------------------------------------- navbar with icons bar  ----------------------------------------------



// import React, { useState } from 'react';
// import {
//   Box,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Typography,
//   Button,
//   IconButton,
// } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { FaHome, FaBroadcastTower, FaUsers, FaPodcast, FaFire, FaCog, FaPlus } from 'react-icons/fa';
// import MenuIcon from '@mui/icons-material/Menu';

// // Dummy components
// const CustomConfig = () => <div><h2>Custom Config Section</h2><p>This is the Custom Config panel.</p></div>;
// const QueriesPanel = () => <div><h2>Queries Section</h2><p>This is the Queries panel.</p></div>;
// const PM2Logs = () => <div><h2>PM2 Logs Section</h2><p>This is the PM2 Logs panel.</p></div>;
// const RestartLog = () => <div><h2>Restart Log Section</h2><p>This is the Restart Log panel.</p></div>;
// const ECRLogs = () => <div><h2>ECR Logs Section</h2><p>This is the ECR Logs panel.</p></div>;
// const CloseApp = () => <div><h2>Close App Section</h2><p>This is the Close App panel.</p></div>;

// const navItems = [
//   { label: 'Home', icon: <FaHome />, key: 'home' },
//   { label: 'Radio', icon: <FaBroadcastTower />, key: 'radio' },
//   { label: 'Artists', icon: <FaUsers />, key: 'artists' },
//   { label: 'Podcast', icon: <FaPodcast />, key: 'podcast' },
//   { label: 'Trending', icon: <FaFire />, key: 'trending' },
//   { label: 'Setting', icon: <FaCog />, key: 'setting' },
// ];

// const DuperDashboard = () => {
//   const [selectedContent, setSelectedContent] = useState(null);
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [expandedAccordion, setExpandedAccordion] = useState(false);

//   const handleAccordionChange = (panel) => (event, isExpanded) => {
//     setExpandedAccordion(isExpanded ? panel : false);
//   };

//   const renderContent = () => {
//   switch (selectedContent) {
//     case 'customConfig': return <CustomConfig />;
//     case 'queries': return <QueriesPanel />;
//     case 'pm2Logs': return <PM2Logs />;
//     case 'restartLog': return <RestartLog />;
//     case 'ecrLogs': return <ECRLogs />;
//     case 'closeApp': return <CloseApp />;
//     default: return <Typography>Select an option from the left panel.</Typography>;
//   }
// };

//   const handleNavClick = (key) => {
//     setSidebarOpen(true);
//     setSelectedContent(key);
//   };

//   return (
//     <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#0f111a', color: '#fff' }}>
//       <Box sx={{ width: sidebarOpen ? '200px' : '80px', backgroundColor: '#111827', p: 2, position: 'relative', transition: 'width 0.3s' }}>
//         <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
//           <IconButton onClick={() => setSidebarOpen(!sidebarOpen)} sx={{ color: '#fff' }}>
//             <MenuIcon />
//           </IconButton>
//         </Box>

//         <Box sx={{ mt: 8 }}>
//           {navItems.map((item) => (
//             <Button
//               key={item.key}
//               startIcon={item.icon}
//               fullWidth
//               sx={{ justifyContent: sidebarOpen ? 'flex-start' : 'center', color: '#fff', mb: 1 }}
//               onClick={() => handleNavClick(item.key)}
//             >
//               {sidebarOpen && item.label}
//             </Button>
//           ))}
//         </Box>

//         <Box sx={{ position: 'absolute', bottom: 16, width: '100%' }}>
//           <Button
//             fullWidth
//             startIcon={<FaPlus />}
//             sx={{ justifyContent: sidebarOpen ? 'flex-start' : 'center', color: '#fff' }}
//           >
//             {sidebarOpen && 'Create Playlist'}
//           </Button>
//         </Box>
//       </Box>

//       <Box sx={{ flexGrow: 1, p: 3, backgroundColor: '#1f2937', display: 'flex', flexDirection: 'column' }}>
//         <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//           {renderContent()}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default DuperDashboard;




import React, { useState } from 'react';
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import {
  FaTools,
  FaDatabase,
  FaBug,
  FaPowerOff,
  FaCogs,
  FaFileAlt,
} from 'react-icons/fa';

// Dummy Components
const CustomConfig = () => <div><h2>Custom Config Section</h2><p>This is the Custom Config panel.</p></div>;
const Queries = () => <div><h2>Queries Section</h2><p>This is the Queries panel.</p></div>;
const PM2Logs = () => <div><h2>PM2 Logs Section</h2><p>This is the PM2 Logs panel.</p></div>;
const RestartLog = () => <div><h2>Restart Log Section</h2><p>This is the Restart Log panel.</p></div>;
const ECRLogs = () => <div><h2>ECR Logs Section</h2><p>This is the ECR Logs panel.</p></div>;
const CloseApp = () => <div><h2>Close App Section</h2><p>This is the Close App panel.</p></div>;

const DuperDashboard = () => {
  const [selectedContent, setSelectedContent] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
const [expandedAccordion, setExpandedAccordion] = useState(false);
  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : false);
  };

  const handleSidebarToggle = () => {
    setSidebarOpen((prev) => !prev);
  };

  const handleNavClick = (key) => {
    setSidebarOpen(true); // reopen full nav on any icon click
    setSelectedContent(key);
  };

  const renderContent = () => {
    switch (selectedContent) {
      case 'customConfig':
        return <CustomConfig />;
      case 'queries':
        return <Queries />;
      case 'pm2Logs':
        return <PM2Logs />;
      case 'restartLog':
        return <RestartLog />;
      case 'ecrLogs':
        return <ECRLogs />;
      case 'closeApp':
        return <CloseApp />;
      default:
        return <Typography>Select an option from the left panel.</Typography>;
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#0f111a', color: '#fff' }}>
      <Box
        sx={{
          width: sidebarOpen ? '250px' : '80px',
          backgroundColor: '#111827',
          transition: 'width 0.3s',
          overflowX: 'hidden',
          p: 1,
          position: 'relative',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: sidebarOpen ? 'flex-end' : 'center', mb: 4 }}>
          <IconButton onClick={handleSidebarToggle} sx={{ color: '#fff' }}>
            <MenuIcon />
          </IconButton>
        </Box>


        

        
        {/* Data Management */}
        <Accordion
          expanded={sidebarOpen && expandedAccordion === 'data'}
          onChange={handleAccordionChange('data')}
          sx={{ backgroundColor: '#1f2937', color: '#fff', margin:'15px 0px' ,padding:'10px 0px',  }}
        >
          <AccordionSummary
          expandIcon={sidebarOpen ? <ExpandMoreIcon sx={{ color: '#fff' }} /> : null}
          onClick={() => {
          if (!sidebarOpen) setSidebarOpen(true);
          }}
          >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <FaDatabase />
        {sidebarOpen && <Typography sx={{ ml: 1 ,  }}>Data Management</Typography>}
        </Box>
        </AccordionSummary>
          {sidebarOpen && (
            <AccordionDetails>
              <Button fullWidth sx={{ mb: 1, margin:'10px 0px' ,padding:'15px 0px', fontWeight:'600' }} variant="contained" onClick={() => handleNavClick('customConfig')}>
                Custom Config
              </Button>
            </AccordionDetails>
          )}
        </Accordion>

        {/* Query Management */}
        <Accordion
  expanded={sidebarOpen && expandedAccordion === 'query'}
  onChange={handleAccordionChange('query')}
  sx={{ backgroundColor: '#1f2937', color: '#fff' , margin:'15px 0px' ,padding:'10px 0px',}}
>
  <AccordionSummary
    expandIcon={sidebarOpen ? <ExpandMoreIcon sx={{ color: '#fff' }} /> : null}
    onClick={() => {
      if (!sidebarOpen) setSidebarOpen(true);
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <FaCogs />
      {sidebarOpen && <Typography sx={{ ml: 1 }}>Query Management</Typography>}
    </Box>
  </AccordionSummary>
  {sidebarOpen && (
    <AccordionDetails>
      <Button fullWidth sx={{ mb: 1 , margin:'10px 0px' ,padding:'15px 0px', fontWeight:'600'}} variant="contained" onClick={() => handleNavClick('queries')}>
        Run Query
      </Button>
    </AccordionDetails>
  )}
        </Accordion>


        {/* Logs */}
        <Accordion
  expanded={sidebarOpen && expandedAccordion === 'logs'}
  onChange={handleAccordionChange('logs')}
  sx={{ backgroundColor: '#1f2937', color: '#fff', margin:'15px 0px' ,padding:'10px 0px', }}
>
  <AccordionSummary
    expandIcon={sidebarOpen ? <ExpandMoreIcon sx={{ color: '#fff' }} /> : null}
    onClick={() => {
      if (!sidebarOpen) setSidebarOpen(true);
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <FaFileAlt />
      {sidebarOpen && <Typography sx={{ ml: 1 }}>System Logs</Typography>}
    </Box>
  </AccordionSummary>
  {sidebarOpen && (
    <AccordionDetails>
      <Button fullWidth sx={{ mb: 1 , margin:'5px 0px' ,padding:'15px 0px', fontWeight:'600'}} variant="contained" onClick={() => handleNavClick('pm2Logs')}>
        PM2 Logs
      </Button>
      <Button fullWidth sx={{ mb: 1 , margin:'5px 0px' ,padding:'15px 0px', fontWeight:'600'}} variant="contained" onClick={() => handleNavClick('restartLog')}>
        Restart Log
      </Button>
      <Button fullWidth sx={{ mb: 1 , margin:'5px 0px' ,padding:'15px 0px', fontWeight:'600'}} variant="contained" onClick={() => handleNavClick('ecrLogs')}>
        ECR Logs
      </Button>
    </AccordionDetails>
  )}
        </Accordion>


        {/* App Control */}
        <Accordion
  expanded={sidebarOpen && expandedAccordion === 'app'}
  onChange={handleAccordionChange('app')}
  sx={{ backgroundColor: '#1f2937', color: '#fff' , margin:'15px 0px' ,padding:'10px 0px', }}
>
  <AccordionSummary
    expandIcon={sidebarOpen ? <ExpandMoreIcon sx={{ color: '#fff' }} /> : null}
    onClick={() => {
      if (!sidebarOpen) setSidebarOpen(true);
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <FaPowerOff />
      {sidebarOpen && <Typography sx={{ ml: 1 }}>App Control</Typography>}
    </Box>
  </AccordionSummary>
  {sidebarOpen && (
    <AccordionDetails>
      <Button
        fullWidth
        sx={{ mb: 1 , margin:'10px 0px' ,padding:'15px 0px', fontWeight:'600'}}
        variant="contained"
        color="error"
        onClick={() => handleNavClick('closeApp')}
      >
        Close The App
      </Button>
    </AccordionDetails>
  )}
        </Accordion>


      

      </Box>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3, backgroundColor: '#1f2937', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {renderContent()}
        </Box>
      </Box>
    </Box>
  );
};

export default DuperDashboard;
