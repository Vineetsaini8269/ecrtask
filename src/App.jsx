import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './Components/Home';
import Help from './Components/Help';
import Navbar from './Components/Navbar';
import Helpp from './Components/Helpp';
import Announcement from './Components/Announcement';
import SwitchingModePage from './Components/SwitchingModePage';
import FormSubmissionHelpPage from './Components/FormSubmissionHelpPage';
import FileUploadGuidePage from './Components/FileUploadGuidePage';
import CommonUserIssuesPage from './Components/CommonUserIssuesPage';
import SuperAdminPanel from './Components/SuperAdminPanel';
import Queries from './Components/Queries';
import NewUi from './Components/NewUi';
import DuperDashboard from './Components/DuperDashboard';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <Navbar/>
          <Home />
          </>
      } />
        <Route path="/help" element={
          <>
          <Navbar/>
          <Help/>
          </>
          } />
      <Route path="/announcements" element={
          <>
          <Navbar/>
          <Announcement/>
          </>
          } />

          <Route path="/switchingmodepage" element={
          <>
          <Navbar/>
          <SwitchingModePage/>
          </>
          } />

          <Route path="/formsubmissionhelp" element={
          <>
          <Navbar/>
          <FormSubmissionHelpPage/>
          </>
          } />

          <Route path="/fileuploadguide" element={
          <>
          <Navbar/>
          <FileUploadGuidePage/>
          </>
          } />

          <Route path="/commonUserissues" element={
          <>
          <Navbar/>
          <CommonUserIssuesPage/>
          </>
          } />

        <Route path="/admin" element={
          <>
          <SuperAdminPanel/>
          </>
          } />
          <Route path="/quieries" element={
          <>
          <Queries/>
          </>
          } />
          <Route path="/newpage" element={
          <>
          <NewUi/>
          </>
          } />
          <Route path="/superdashboard" element={
          <>
          <DuperDashboard/>
          </>
          } />
      </Routes>

    </Router>
  );
}

export default App;
