import React, { useState } from 'react';
import { Box, Typography, Button, TextareaAutosize, Table, TableBody, TableCell, TableHead, TableRow, Drawer, Accordion, AccordionSummary, AccordionDetails, Checkbox, FormControlLabel, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const navData = [
  {
    label: 'SQLITE_SEQUENCE',
    items: []
  },
  {
    label: 'ONLINETASK',
    items: []
  },
  {
    label: 'TASK',
    items: ['id', 'ecrid', 'downloadedData', 'draftData', 'finalData', 'createdAt', 'updatedAt']
  },
  {
    label: 'CONFIGS', items: []
  },
  { label: 'TASKTRACKER', items: [] },
  { label: 'PDF', items: [] },
  { label: 'MASTERATTRIBUTES', items: [] },
  { label: 'MASTERATTRIBUTEMAPPING', items: [] },
  { label: 'MASTERSUBATTRIBUTES', items: [] },
  { label: 'EVENTLOG', items: [] },
  { label: 'MASTERCOURSES', items: [] },
  { label: 'MASTERRECOMMENDATION', items: [] },
  { label: 'MASTERFORMTYPE', items: [] }
];

const mockData = [
  { ID: 1, CODE: 'LEDE-C', ATTRIBUTE: 'LEADERSHIP', TYPE: 'Core', REMARKS: null, ACTIVE: 1, MODIFY: '2024-05-01' },
  { ID: 2, CODE: 'PRSM-C', ATTRIBUTE: 'PROFESSIONALISM', TYPE: 'Core', REMARKS: null, ACTIVE: 1, MODIFY: '2024-05-01' },
  { ID: 3, CODE: 'KNGE-C', ATTRIBUTE: 'KNOWLEDGE', TYPE: 'Core', REMARKS: null, ACTIVE: 1, MODIFY: '2024-05-01' },
  { ID: 4, CODE: 'COTY-C', ATTRIBUTE: 'COMMAND AND DECISION MAKING ABILITY', TYPE: 'Core', REMARKS: null, ACTIVE: 1, MODIFY: '2024-05-01' },
  { ID: 5, CODE: 'ADTY-C', ATTRIBUTE: 'ADMINISTRATIVE ABILITY', TYPE: 'Core', REMARKS: null, ACTIVE: 1, MODIFY: '2024-05-01' },
  { ID: 6, CODE: 'MANT-O', ATTRIBUTE: 'MAN-MANAGEMENT', TYPE: 'Other', REMARKS: null, ACTIVE: 1, MODIFY: '2024-05-01' },
];

export default function Queries() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);
  const [selectedFields, setSelectedFields] = useState([]);
  const [selectedTable, setSelectedTable] = useState('masterattributes');

  const handleCheckboxChange = (field) => {
    const updated = selectedFields.includes(field)
      ? selectedFields.filter(f => f !== field)
      : [...selectedFields, field];

    setSelectedFields(updated);
    const fieldsText = updated.length ? updated.join(', ') : '*';
    setQuery(`select ${fieldsText} from ${selectedTable} LIMIT 100`);
  };

  const runQuery = () => {
    if (query.includes('*')) {
      setResult(mockData);
    } else {
      const fields = query.split('select')[1].split('from')[0].split(',').map(f => f.trim().toUpperCase());
      const filtered = mockData.map(row => {
        const newRow = {};
        fields.forEach(field => newRow[field] = row[field]);
        return newRow;
      });
      setResult(filtered);
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#0f111a', color: '#fff', fontFamily: 'monospace' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 280,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 280,
            boxSizing: 'border-box',
            backgroundColor: '#111827',
            color: '#fff',
            paddingTop: 2,
          },
        }}
      > 
        <Typography variant="h6" sx={{ pl: 2, pb: 1, border: '1px solid #374151',margin:'4px', padding:'5px', display:'flex' , justifyContent:"center" , alignItems:'center' }}>Query Tables</Typography>
        {navData.map((section, idx) => (
          <Accordion key={idx} sx={{ bgcolor: '#1f2937', color: '#fff', margin:'4px 2px' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' , margin:'10px 2px' }} />}>
              <Typography>{section.label}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {section.items.map(item => (
                <FormControlLabel
                  key={item}
                  control={<Checkbox sx={{ color: '#fff' }} onChange={() => handleCheckboxChange(item)} />}
                  label={item}
                />
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Drawer>

      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{boxShadow:10, display:'flex' , justifyContent:"space-between" , margin:'20px 1px' , padding:'15px' , border: '1px solid #374151', borderRadius:'5px'}}>
        <Typography variant="h6" sx={{}}>Queries</Typography>
        <Button variant="contained" startIcon={<PlayArrowIcon />} onClick={runQuery} sx={{ bgcolor: '#10b981', ':hover': { bgcolor: '#059669' } }}>
          Run Query
        </Button>
        </Box>


        <TextareaAutosize
          minRows={6}
          value={query}
          style={{ width: '100%', backgroundColor: '#1f2937', color: 'orange', border: '1px solid #374151', borderRadius: 4, padding: 10, fontFamily: 'monospace', marginBottom: 12 , fontSize:'20px' }}
          onChange={(e) => setQuery(e.target.value)}
        />
        

        <Paper sx={{ bgcolor: '#111827', color: '#fff', mt: 3, p: 2 , border: '1px solid #374151' }}>
          <Typography variant="h6" sx={{ mb: 1 }}>Result</Typography>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                {result.length > 0 && Object.keys(result[0]).map((key, i) => (
                  <TableCell key={i} sx={{ color: '#fff', borderBottom: '1px solid #374151' }}>{key}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {result.map((row, i) => (
                <TableRow key={i}>
                  {Object.values(row).map((val, j) => (
                    <TableCell key={j} sx={{ color: '#fff', borderBottom: '1px solid #374151' }}>{val ?? 'NULL'}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Box>
    </Box>
  );
}


