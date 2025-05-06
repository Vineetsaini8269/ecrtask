import React from 'react'

const Demo = () => {
  return (
    <div>
      
    </div>
  )
}

export default Demo;



// import * as React from "react";
// import Button from "@mui/material/Button";
// import { styled } from "@mui/material/styles";
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";
// import DialogActions from "@mui/material/DialogActions";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
// import { Box, TextField, Typography,
//   Tooltip, 
//   Stack,
//   CircularProgress,
//   FormControl,
//   FormLabel,
//   RadioGroup,
//   FormControlLabel,
//   Radio} from "@mui/material";
// import { useForm } from "react-hook-form";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Switch from "@mui/material/Switch"

// import { API_URL } from "config"
// import { useEffect, useState } from "react"
// import {


//   ListItem,
//   Table,
//   TableBody,
//   TableContainer,
//   TableHead,
//   TableSortLabel,
// } from '@mui/material'
// import {
//   StyledTableCell,
//   StyledTableRow,
// } from 'components/common/StyledComponents'
// import { makeStyles } from '@mui/styles'
// import TextArea from "components/TextArea"

// import {
//   Add,
// } from '@mui/icons-material'
// import { PowerSettingsNew } from '@mui/icons-material'
// import { handleRestartJetty, handleRestartNodeServer } from '../../services/CmdServices'
// import { encrypt } from 'utils/basicEncryption'
// import JettyLogs from "components/logs/JettyLogs";
// import ElectronLogs from "components/logs/ElectronLogs";
// // const { ipcRenderer } = window.require('electron')


// let resquery='';

// const useStyles = makeStyles((theme) => ({
//   '@global': {
//     '.mui-table-container::-webkit-scrollbar': {
//       width: '7px',
//       height: '7px',
//     },
//     '.mui-table-container::-moz-scrollbar': {
//       width: '7px',
//       height: '7px',
//     },
//     '.mui-table-container::-ms-scrollbar': {
//       width: '7px',
//       height: '7px',
//     },
//     /* Additional styling for scrollbar track and thumb if needed */
//     '.mui-table-container::-webkit-scrollbar-track': {
//       background: 'transparent',
//     },
//     '.mui-table-container::-webkit-scrollbar-thumb': {
//       background: '#888',
//       borderRadius: '10px',
//     },
//     /* Firefox scrollbar styling */
//   },
// }))

// const StyledListitem = styled(ListItem)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: '#cae9ff',
//     borderLeft: '0.5px solid #000',
//   },
//   '&:nth-of-type(even)': {
//     backgroundColor: '#f8f9fa',
//     borderLeft: '0.5px solid #000',
//   },
//   '&:last-child td, &:last-child th': {
//     border: 0,
//     borderLeft: '0.5px solid #d3d3d3',
//   },
//   borderLeft: '0.5px solid #000',
//   borderBottom: "1px solid gray",
// }))


// const ToggleSwitch = (props) => {
//   const [checked, setChecked] = useState(false)
//   const handlechange = () => {
//     setChecked(!checked)
//     props.onChange(!checked)
//   }
//   return <Switch checked={checked} onChange={handlechange} />

// }


// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   "& .MuiDialogContent-root": {
//     padding: theme.spacing(2),
//   },
//   "& .MuiDialogActions-root": {
//     padding: theme.spacing(1),
//   },
//   // Adjust the size of the dialog
//   // width: "70%", // Adjust as needed
//   // maxWidth: "3000px", // Adjust as needed
// }));

// export default function SuperAdminDailog() {
//   const navigate = useNavigate()
//   const [utilityData, setUtilityData] = useState([]);
//   const [data, setData] = useState([])
//   const [value, setValue] = useState("")
//   const [colName, setColName] = useState([])
//   const [tableType, setTableType] = useState("table")
//   const [toggleVal, setToggleVal] = useState(1)
//   const [statictoggle,setStaticToggle]=useState(false)


//   const handlestatictoggle =() =>{
//     setStaticToggle(!statictoggle)
//   }


//   useEffect(() => {
//     const gettables = async () => {
//       const response = await axios.get(`
//             ${API_URL}/io/gettables`)
//       setUtilityData(response?.data?.data)
//     }

//     const staticvalue=async()=>{
//       const response=await axios.get(`${API_URL}/io/isstatic`)
//       if(response?.data?.status==0){
//           if(response?.data?.pkistatus==false){
//             setPkiStatus(false);
//           }
//           if(response?.data?.isonline==true){
//             setConnectivity(true);
//           }
//           else{
//             setConnectivity(false);
//           }
//       }
//     }
//     gettables()
//     staticvalue()
//   }, [])

//   useStyles()
//   const handlerunquery = async () => {
//     try{
//       const response = await axios.get(
//         `${API_URL}/io/returnQueryResults?query=${value}`,
//       )
//       if(response?.data?.type == 'error'){
//         setTableType('error')
//         resquery = response?.data?.data?.code + ".  Check Your SQL-Query";
//       }else if(response?.data?.type == 'readwrite'){
//         setTableType('readwrite')
//         resquery = response?.data?.msg+ "  Fetch Table data again";
//       }else{
//         setData(response?.data?.data);
//         setTableType('table')
//         resquery= response?.data?.data?.length!=0? "Query Run Successfully" : "Query Run Successfully. NO DATA, TABLE IS EMPTY" ;
//       }

//     }
//     catch(error){
//       setTableType('error')
//       resquery='';
//     }
//   }
//   // Function to delete all data
//   const deleteAllData = () => {
//     axios.post(`${process.env.REACT_APP_API_URL}/utility/deletedata`)
//       .then(() => {
//         toast.success('deleted Successfully')
//         // After successful deletion, fetch data again to update UI
//         // fetchData();
//       })
//       .catch((error) => console.error("Error deleting data:", error));

//   };

//   // Initial data fetch on component mount
//   React.useEffect(() => {
//     // fetchData();
//   }, []);
//   const handleclose = () => {
//     // ipcRenderer.send('close-app')
//   }


//   const [open, setOpen] = React.useState(false);
//   const [openThirdModal, setOpenThirdModal] = React.useState(false);
//   const [openClearDataModal, setOpenClearDataModal] = React.useState(false);
//   const [openCloseAppModal, setOpenCloseAppModal] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setOpenThirdModal(false);
//   };


//   const handleOpenThirdModal = () => {
//     setOpenThirdModal(true);
//   };


//   const handleCloseThirdModal = () => {
//     setOpenThirdModal(false);
//     setOpen(false);
//   };

//   const { register, handleSubmit } = useForm();
//   const {register:statusRegister, handleSubmit:statusHandleSubmit} = useForm();

//   const onSubmit =async (data) => {
//     const userdetils={
//       user:encrypt(data?.username),
//       password:encrypt(data?.password)
//     }
//     const response=await axios.post(`${API_URL}/io/utilLogin`,userdetils);
//     if(response?.data?.status==1){
//       toast.success("Maintenance User Login Successfully");
//       handleOpenThirdModal();
//     }
//     else {
//       toast.error("Not Authorized");
//     }
//   };

//   const handleCloseClearDataModal = ()=>{
//     setOpenClearDataModal(false);
//   }

//   const handleCloseCloseAppModal = ()=>{
//     setOpenCloseAppModal(false);
//   }

//   const [progress,setProgress] = useState(0);
//   const [showLoader, setShowLoader] = useState(false);

//   useEffect(()=>{
//     if(showLoader){
//       const timer = setInterval(()=>{
//         if(progress>=100){
//           setShowLoader(false);
//           setProgress(0);
//         }else{
//           setProgress((prevProgress)=> prevProgress+10);
//         }
//         setTimeout(()=>{
//           setShowLoader(false);
//         },8000);
//       },650);
  
//       return ()=>{
//         clearInterval(timer);
//       }
      
//     }
//   },[showLoader])

//   const handleShowLoader = () => {
//     setShowLoader(true);
//   }

//   const [pkiStatus, setPkiStatus] = useState(true);
//   const [connectivity, setConnectivity] = useState(true);
//   const [isDeviceChange,setIsDeviceChange] = useState(false);

//   const handlePkiStatus = (e) =>{
//     if(e.target.value==='true'){
//       setPkiStatus(true)
//     }else{
//       setPkiStatus(false)
//     }
    
//   }
//   const handleConnectivity = (e) =>{
//     if(e.target.value==='true'){
//       setConnectivity(true)
//     }else{
//       setConnectivity(false)
//     }
//   }
//   const handleIsDeviceToggle = () =>{
//     setIsDeviceChange(prev=> !prev);
//   }
//   const onSubmitStatus = (data)=>{

//     axios.post(`${process.env.REACT_APP_API_URL}/utility/updatedata`, { "pkiStatus": pkiStatus, "isOnline": connectivity, macip: { "mac": data?.mac, "ip": data?.ip } })
//       .then(() => {
//         toast.success('updated Successfully')

//       })
//       .catch((error) => console.error("Error deleting data:", error));
    
//     handlestatictoggle();
//   }

//   const [eSignerLogsModal,setESignerLogsModal] = useState(false);
//   const handleESignerLogsModal = (val) => {
//     setESignerLogsModal(val);
//   }

//   const [ecrLogsModal,setEcrLogsModal] = useState(false);
//   const handleEcrLogsModal = (val) => {
//     setEcrLogsModal(val);
//   }
//   return (
//     <React.Fragment>
//       <Box
//         sx={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           height: "50px",
//           width: "50px",

//           cursor: "pointer",
//         }}
//         onClick={handleClickOpen}
//       ></Box>

//       <BootstrapDialog
//         onClose={handleClose}
//         aria-labelledby="customized-dialog-title"
//         open={open}
//       >
//         <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
//       Maintenance
//         </DialogTitle>
//         <IconButton
//           aria-label="close"
//           onClick={handleClose}
//           sx={{
//             position: "absolute",
//             right: 8,
//             top: 8,
//             color: (theme) => theme.palette.grey[500],
//           }}
//         >
//           <CloseIcon />
//         </IconButton>
//         <DialogContent dividers>
//           <form onSubmit={handleSubmit(onSubmit)} id="login">
//             <TextField
//               id="username"
//               label="Username"
//               fullWidth
//               margin="normal"
//               {...register("username", { required: true })}
//             />
//             <TextField
//               id="password"
//               label="Password"
//               type="password"
//               fullWidth
//               margin="normal"
//               {...register("password", { required: true })}
//             />
//           </form>
//         </DialogContent>
//         <DialogActions sx={{
//           display:"flex",
//           justifyContent:'space-between'
//         }}>
//           <span style={{fontSize:"13px", color:"red"}}>This Login page is strictly for maintenance use</span>
//           <Button
//             type="submit"
//             variant="contained"
//             autoFocus
//             sx={{
//               padding: 1,
//               borderRadius: 2,
//               boxShadow: 0,
//               fontWeight: "bold",
//               color: "#e7e7ee",
//               backgroundColor: "#2a9d8f",
//             }}
//             form="login"
//           >
//             Login
//           </Button>
//         </DialogActions>
//       </BootstrapDialog>


      {/* Third Modal */}
      <BootstrapDialog
        maxWidth
        fullWidth
        onClose={handleCloseThirdModal}
        aria-labelledby="customized-dialog-title"
        open={openThirdModal}
      >

        <DialogTitle style={{border:"1px solid black",borderRadius:"5px",background:'linear-gradient(0deg, rgba(1,58,99,1) 0%, rgba(4,101,171,1) 61%, rgba(86,117,139,1) 100%)'}} sx={{ m: 0, p: 2 ,display:'flex',justifyContent:'space-between'}} id="customized-dialog-title">


          <div style={{ display: "flex", justifyContent:"flex-start", gap:10}}> 
          <Button onClick={()=>setOpenClearDataModal(true)} sx={{
            backgroundColor: "black", color: "white", fontWeight:'bold', borderRadius: "10px", ':hover': {
              color: "black",
              backgroundColor:"white"
            }
          }}>Clear All Data</Button>
          <Button sx={{backgroundColor:"grey",color:"white",borderRadius:"10px", fontWeight:'bold'}}><Switch checked={statictoggle} onChange={handlestatictoggle} /> Custom Config</Button>  

          <Button
            sx={{
              backgroundColor: "white", color: "black", borderRadius: "10px", ':hover': {
                color: "red",
                backgroundColor:"white"
              }
            }}
            variant="outlined"
            startIcon={<PowerSettingsNew />}
            color="error"
            onClick={()=>{
              handleRestartJetty(handleShowLoader)
            }}
            size="large"
          >
            <span style={{fontSize:"0.60rem", fontWeight:'bold'}}>Restart E-Signer</span>
          </Button>

          {/* <Button
            sx={{
              backgroundColor: "white", color: "black", borderRadius: "10px", ':hover': {
                color: "red",
                backgroundColor:"white"
              }
            }}
            variant="outlined"
            startIcon={<PowerSettingsNew />}
            color="error"
            onClick={handleRestartNodeServer}
            size="large"
          >
            <span style={{fontSize:"0.60rem", fontWeight:'bold'}}>Restart Node</span>
          </Button> */}
          <Button
            sx={{
              backgroundColor: "white", color: "black", borderRadius: "10px", ':hover': {
                color: "red",
                backgroundColor:"white"
              },
              fontSize:"0.60rem",
              fontWeight:'bold'
            }}
            variant="outlined"
            startIcon={<PowerSettingsNew />}
            color="error"
            onClick={()=>{
              handleESignerLogsModal(true);
            }}
            size="large"
          >
            <Box component="span">E-Signer Logs</Box>
          </Button>

          <Button
            sx={{
              backgroundColor: "white", color: "black", borderRadius: "10px", ':hover': {
                color: "red",
                backgroundColor:"white"
              },
              fontSize:"0.60rem",
              fontWeight:'bold'
            }}
            variant="outlined"
            startIcon={<PowerSettingsNew />}
            color="error"
            onClick={()=>{
              handleEcrLogsModal(true);
            }}
            size="large"
          >
            <Box component="span">ECR Logs</Box>
          </Button>
            </div>

          {/* <Button
            sx={{
              backgroundColor: "white", color: "black", borderRadius: "10px", ':hover': {
                color: "red",
                backgroundColor:"white"
              },
              fontSize:"0.65rem"
            }}
            variant="outlined"
            startIcon={<PowerSettingsNew />}
            color="error"
            onClick={()=>{
              handleESignerLogsModal(true);
            }}
            size="large"
          >
            <Box component="span">E-Signer Logs</Box>
          </Button>

          <Button
            sx={{
              backgroundColor: "white", color: "black", borderRadius: "10px", ':hover': {
                color: "red",
                backgroundColor:"white"
              },
              fontSize:"0.65rem"
            }}
            variant="outlined"
            startIcon={<PowerSettingsNew />}
            color="error"
            onClick={()=>{
              handleEcrLogsModal(true);
            }}
            size="large"
          >
            <Box component="span">ECR Logs</Box>
          </Button> */}

          <div style={{display:'flex', justifyContent:'space-between'}}>
            <Button sx={{  
                  marginLeft:"25px",
                  backgroundColor: "Red", 
                  color: "white", 
                  borderRadius: "10px",
                  fontWeight:'bold',
                  // position: "absolute",
                  // right: 105,
                  // top: 16,
                  ':hover': {
                  color: "red",
                  backgroundColor:"white",
                  }
                }} onClick={()=>setOpenCloseAppModal(true)} >close the app</Button>

            <IconButton
              aria-label="close"
              onClick={handleCloseThirdModal}
              sx={{
                // position: "absolute",
                // right: 8,
                // top: 8,
                color: "black",//(theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>

        {/* <Button sx={{  
              marginLeft:"25px",
              backgroundColor: "Red", 
              color: "white", 
              borderRadius: "10px",
              position: "absolute",
              right: 105,
              top: 16,
              ':hover': {
              color: "red",
              backgroundColor:"white",
              }
            }} onClick={()=>setOpenCloseAppModal(true)} size="large">close the app</Button>

        <IconButton
          aria-label="close"
          onClick={handleCloseThirdModal}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton> */}


        {/* <DialogContent dividers> */}


//           {/* Render the content for the third modal */}
//         <Box>
//           <Box style={{ display: "flex", flexDirection: "row", width: "100%", height: "85vh" }}>
//             <Box style={{ width: "20%", height: "90%"}}>
//               {utilityData?.map((item, index) =>
//                 <StyledListitem style={{ fontWeight: "bold", overflow: "hidden" ,padding:"5px 10px"}}>
//                   <div>
//                     <Button onClick={async () => {
//                       setValue(`select * from ${item} LIMIT 100`);
//                     }} >{item}</Button>
//                     <Button key={index} onClick={async () => {
//                       const response = await axios.get(`${API_URL}/io/returnqueryresults?query=select name from pragma_table_info('${item}')`)
//                       setColName(response?.data?.data);
//                       setToggleVal((preindex) => preindex == index ? null : index);
//                     }}><Add /> </Button>
//                     {toggleVal == index && colName.map((row, rowindex) => (
//                       Object.values(row).map((col, colindex) => (
//                         <li key={colindex}>{col}</li>
//                       ))
//                     ))}
//                   </div>
//                 </StyledListitem>)}


//             </Box>

//             <Box style={{ display: "flex", flexDirection: "column", width: "80%", height: "90%" }}>
//               <Box style={{ height: "25%",paddingTop:"10px" }}>
//                 <Typography sx={{  width: "99%", backgroundColor: "gray", borderRadius: "5px", height: "30px", fontWeight: "bold", paddingLeft: "15px", fontSize: "20px" }}><span>Write your query below </span></Typography>
//                 <form >
//                   <TextArea value={value} onChange={(e) => setValue(e.target.value)} style={{ minHeight: "130px", width: "100%"}}></TextArea>
//                 </form>

//               </Box>
//               <Box style={{ height: "10%",margin:"3% 0"}}>
//                 <Box style={{margin:"0"}} display="flex" flexDirection="row" justifyContent="space-between">
//                   <Button
//                     onClick={handlerunquery}
//                     sx={{
//                       backgroundColor: 'green',
//                       color: 'white',
//                       fontWeight: 'bold',
//                       margin: "0% 0% 2% 1%",
//                       '&:hover': {
//                         backgroundColor: '#ADD8E6',
//                         color: 'black',
//                       },
//                     }}
//                   >
//                     Run Query
//                   </Button>
//                 </Box>

//                 <Box >
//                   <Box style={{ paddingTop: "1%", border: "1px solid black" }}>
//                     <Typography sx={{ width: "99%", backgroundColor: "gray", borderRadius: "5px", height: "30px", fontWeight: "bold", paddingLeft: "15px", fontSize: "20px" }}><span>Result</span></Typography>
//                     <Box sx={{ paddingTop: "10px" }}>
//                       {/* {tableType == 'error' ? (
//                         <>
//                           <div>Error Executing Query</div>
//                           <div style={{ paddingTop: "20px" }}><span>Error: </span><span style={{ paddingLeft: "30px" }}>SequelizeDatabaseERROR</span></div>
//                         </>
//                       ) : (
//                         <></>
//                       )} */}
//                       {data.length != 0 && tableType == 'table' ? (
//                         <TableContainer
//                           sx={{
//                             maxHeight: '38vh',
//                             maxWidth: '96vw',
//                             boxShadow: 4,
//                             overflow: 'auto',
//                             borderBottomLeftRadius: 8,
//                             borderBottomRightRadius: 8,
//                           }}
//                           className="mui-table-container"
//                         >
//                           <Table stickyHeader aria-label="sticky table">
//                             <TableHead>
//                               <StyledTableRow>
//                                 {Object.keys(data[0]).map((item, index) => (
//                                   <StyledTableCell key={index}>
//                                     <TableSortLabel>{item}</TableSortLabel>
//                                   </StyledTableCell>
//                                 ))}
//                               </StyledTableRow>
//                             </TableHead>
//                             <TableBody>
//                               {data?.map((row, index) => (
//                                 <StyledTableRow key={index}>
//                                   {Object.values(row).map((col, colindex) => (
//                                     <StyledTableCell
//                                       key={colindex}
//                                       sx={{ backgroundColor: 'white' }}
//                                     >
//                                       {col}
//                                     </StyledTableCell>
//                                   ))}
//                                 </StyledTableRow>
//                               ))}
//                             </TableBody>
//                           </Table>
//                         </TableContainer>
//                       ) : (
//                         <><div>{resquery}</div></>
//                       )}
//                     </Box>
//                   </Box>
//                 </Box>

//               </Box>
              
//             </Box>

//           </Box>

//           <Dialog open={showLoader} >
//               <DialogContent>
//                 <Stack  direction='row' justifyContent={'center'}>
//                   <CircularProgress variant='determinate' value={progress}/>
//                 </Stack>
//               </DialogContent>
//               <DialogTitle>Please Wait...</DialogTitle>
//           </Dialog>
//         </Box>

//       </BootstrapDialog>

//       {/* Clear All Data Modal */}
//       <BootstrapDialog
//         onClose={handleCloseClearDataModal}
//         aria-labelledby="customized-dialog-title-clear-data"
//         open={openClearDataModal}
//       >
//         <DialogTitle sx={{ marginRight: 4, p: 2 }} id="customized-dialog-title-clear-data">
//       Are You Sure To Want To Clear All Data??
//         </DialogTitle>
//         <IconButton
//           aria-label="close"
//           onClick={handleCloseClearDataModal}
//           sx={{
//             position: "absolute",
//             right: 8,
//             top: 11,
//             color: (theme) => theme.palette.grey[500],
//           }}
//         >
//           <CloseIcon />
//         </IconButton>
//         <DialogActions>
//           <Button
//             type="submit"
//             variant="contained"
//             autoFocus
//             sx={{
//               padding: 1,
//               borderRadius: 2,
//               boxShadow: 0,
//               fontWeight: "bold",
//               color: "#e7e7ee",
//               backgroundColor: "red",
//             }}
//             onClick={()=>{
//               deleteAllData();
//               handleCloseClearDataModal();
//             }}
//           >
//             Yes
//           </Button>
//           <Button
//             type="submit"
//             variant="contained"
//             autoFocus
//             sx={{
//               padding: 1,
//               borderRadius: 2,
//               boxShadow: 0,
//               fontWeight: "bold",
//               color: "#e7e7ee",
//               backgroundColor: "green",
//             }}
//             onClick={handleCloseClearDataModal}
//           >
//             No
//           </Button>
//         </DialogActions>
//       </BootstrapDialog>


//       {/* Close The App Modal */}
//       <BootstrapDialog
//         onClose={handleCloseCloseAppModal}
//         aria-labelledby="customized-dialog-title-close-app"
//         open={openCloseAppModal}
//       >
//         <DialogTitle sx={{ marginRight: 4, p: 2 }} id="customized-dialog-title-close-app">
//         Terminate <br></br> ECR Application
//         </DialogTitle>
//         <IconButton
//           aria-label="close"
//           onClick={handleCloseCloseAppModal}
//           sx={{
//             position: "absolute",
//             right: 8,
//             top: 11,
//             color: (theme) => theme.palette.grey[500],
//           }}
//         >
//           <CloseIcon />
//         </IconButton>
//         <DialogActions>
//           <Button
//             type="submit"
//             variant="contained"
//             autoFocus
//             sx={{
//               padding: 1,
//               borderRadius: 2,
//               boxShadow: 0,
//               fontWeight: "bold",
//               color: "#e7e7ee",
//               backgroundColor: "red",
//             }}
//             onClick={()=>{
//               handleclose();
//               handleCloseCloseAppModal();
//             }}
//           >
//             Confirm
//           </Button>
//           <Button
//             type="submit"
//             variant="contained"
//             autoFocus
//             sx={{
//               padding: 1,
//               borderRadius: 2,
//               boxShadow: 0,
//               fontWeight: "bold",
//               color: "#e7e7ee",
//               backgroundColor: "green",
//             }}
//             onClick={handleCloseCloseAppModal}
//           >
//             Deny
//           </Button>
//         </DialogActions>
//       </BootstrapDialog>

//       {/* pki status and online offline mode changing modal */}
//       <BootstrapDialog
//         onClose={handlestatictoggle}
//         aria-labelledby="customized-dialog-title-status"
//         open={statictoggle}
//       >
//         {/* <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
//       Utility Sign-in
//         </DialogTitle> */}
//         <IconButton
//           aria-label="close"
//           onClick={handlestatictoggle}
//           sx={{
//             position: "absolute",
//             right: 4,
//             top: 2,
//             color: (theme) => theme.palette.grey[500],
//           }}
//         >
//           <CloseIcon />
//         </IconButton>
//         <DialogContent dividers>
//           <form onSubmit={statusHandleSubmit(onSubmitStatus)} id="statusform">
//             <div>
//               <FormControl>
//                 <FormLabel>PKI Status</FormLabel>
//                 <RadioGroup
//                 id="pkiStatus"
//                 name="pkiStatus"
//                 value={pkiStatus}
//                 onChange={handlePkiStatus}
//                 // {...statusRegister("pkiStatus")}
//                 row
//                 >
//                   <FormControlLabel value={true} control={<Radio/>} label='Normal'/>
//                   <FormControlLabel value={false} control={<Radio/>} label='ByPass'/>
//                 </RadioGroup>
//               </FormControl>
//             </div>
//             <div>
//               <FormControl>
//                 <FormLabel>Connectivity</FormLabel>
//                 <RadioGroup
//                 id="connectivity"
//                 name="connectivity"
//                 value={connectivity}
//                 onChange={handleConnectivity}
//                 // {...statusRegister("connectivity")}
//                 row
//                 >
//                   <FormControlLabel value={true} control={<Radio/>} label='Online'/>
//                   <FormControlLabel value={false} control={<Radio/>} label='Offline'/>
//                 </RadioGroup>
//               </FormControl>
//             </div>
//             <span><Switch checked={isDeviceChange} onChange={handleIsDeviceToggle} /> Device</span>
//             {isDeviceChange &&
//             <> 
//               <TextField
//                 id="ip"
//                 label="IP"
//                 fullWidth
//                 margin="normal"
//                 {...statusRegister("ip", { required: true })}
//               />
//               <TextField
//                 id="mac"
//                 label="MAC"
//                 fullWidth
//                 margin="normal"
//                 {...statusRegister("mac", { required: true })}
//               /> 
//             </>}
//           </form>
//         </DialogContent>
//         <DialogActions>
//           <Button
//             type="submit"
//             variant="contained"
//             autoFocus
//             sx={{
//               padding: 1,
//               borderRadius: 2,
//               boxShadow: 0,
//               fontWeight: "bold",
//               color: "#e7e7ee",
//               backgroundColor: "#2a9d8f",
//             }}
//             form="statusform"
//           >
//             save
//           </Button>
//         </DialogActions>
//       </BootstrapDialog>

//       {/* E-Signer Logs Modal */}
//       <BootstrapDialog
//         maxWidth
//         fullWidth
//         onClose={()=>handleESignerLogsModal(false)}
//         aria-labelledby="customized-dialog-title"
//         open={eSignerLogsModal}
//       >
//         <DialogTitle style={{border:"1px solid black",borderRadius:"5px",background:'linear-gradient(0deg, rgba(1,58,99,1) 0%, rgba(4,101,171,1) 61%, rgba(86,117,139,1) 100%)'}} sx={{ m: 0, p: 2 }} id="customized-dialog-title-ESgigner">
//             <Box 
//               sx={{
//                 display:'flex',
//                 flexDirection:'row',
//                 justifyContent:'space-between'
//               }}
//             >
//               <Typography sx={{color:'white'}}>E-Signer Logs</Typography>
//               <IconButton
//                 aria-label="close"
//                 onClick={()=>handleESignerLogsModal(false)}
//                 sx={{
//                   position: "absolute",
//                   right: 8,
//                   top: 8,
//                   color: (theme) => theme.palette.grey[500],
//                 }}
//               >
//                 <CloseIcon />
//               </IconButton>
//             </Box>
//         </DialogTitle>
//         <Box
//           sx={{
//             marginTop:1,
//           }}
//         >
//           <JettyLogs/>
//         </Box>
//       </BootstrapDialog>

//       {/* ECR Logs Modal */}
//       <BootstrapDialog
//         maxWidth
//         fullWidth
//         onClose={()=>handleEcrLogsModal(false)}
//         aria-labelledby="customized-dialog-title"
//         open={ecrLogsModal}
//       >
//         <DialogTitle style={{border:"1px solid black",borderRadius:"5px",background:'linear-gradient(0deg, rgba(1,58,99,1) 0%, rgba(4,101,171,1) 61%, rgba(86,117,139,1) 100%)'}} sx={{ m: 0, p: 2 }} id="customized-dialog-title-ESgigner">
//             <Box 
//               sx={{
//                 display:'flex',
//                 flexDirection:'row',
//                 justifyContent:'space-between'
//               }}
//             >
//               <Typography sx={{color:'white'}}>ECR Logs</Typography>
//               <IconButton
//                 aria-label="close"
//                 onClick={()=>handleEcrLogsModal(false)}
//                 sx={{
//                   position: "absolute",
//                   right: 8,
//                   top: 8,
//                   color: (theme) => theme.palette.grey[500],
//                 }}
//               >
//                 <CloseIcon />
//               </IconButton>
//             </Box>
//         </DialogTitle>
//         <Box
//           sx={{
//             marginTop:1,
//           }}
//         >
//           <ElectronLogs/>
//         </Box>
//       </BootstrapDialog>
//     </React.Fragment>
//   );
// }




