import ErrorIcon from '@mui/icons-material/Error';
import { Typography } from '@mui/joy';
function Error (props: any) {
  return (
    <div className="error">
      <ErrorIcon sx={{ fontSize: 75, color: '#d91e28' }} />
      <Typography>{props.description || 'Oops! Error!'}</Typography>
    </div>
  )
}

export default Error;