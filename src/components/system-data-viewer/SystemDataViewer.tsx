import { ThemeProvider } from '@mui/material';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import './SystemDataViewer.css'
import type {} from '@mui/x-data-grid/themeAugmentation';

function SystemDataViewer(props: any) {
  console.log(props)
  // const { data: { response: { docs, numFound } } } = props

  const columns: GridColDef[] = [
    { field: 'sys_serial_no', headerName: 'Serial', width: 70 },
    { field: 'hostname', headerName: 'Hostname', width: 70 },
    { field: 'platform_type', headerName: 'Platform', width: 70 },
  ]

  const docs: GridRowsProp = [
    { id: 1, sys_serial_no: '123', hostname: 'test', platform_type: 'test' },
  ]

  return (
    <div className="system-data-viewer" style={{ height: 400, width: '100%' }}>
      
        <DataGrid columns={columns} rows={docs} sx={{borderRadius: '5px'}}/>
    </div>
  )
}

export default SystemDataViewer;