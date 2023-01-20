import { Typography } from "@mui/joy";
import InboxIcon from '@mui/icons-material/Inbox';

function NoData() {
  return (
    <div className="no-data">
      <div className='no-data'>
        <InboxIcon sx={{ fontSize: 100, color: '#0a6bde' }} />
        <Typography>{'No Data'}</Typography>
      </div>
    </div>
  )
}

export default NoData;