import { Button, Input, Option, Select } from '@mui/joy';
import Card from '@mui/joy/Card';
import axios, { HttpStatusCode } from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import { GENERIC_CARD, STATUS } from '../../utility/constants';
import NoData from '../no-data/NoData';
import Progress from '../progress/Progress';
import Error from '../error/Error';
import SystemDataViewer from '../system-data-viewer/SystemDataViewer';
import './SystemInfo.css';

function SystemInfo() {
  const DefaultValue = 'customer_id'

  const { token } = useSelector((state: any) => state.token)
  
  const [levelName, setLevelName] = React.useState<string | null>(DefaultValue)
  const [level, setLevel] = React.useState<string | null>(null)
  const [status, setStatus] = React.useState<STATUS>(STATUS.NODATA);
  const [error, setError] = React.useState<string>('');
  const [systems, setSystems] = React.useState<any | null>(null);

  const searchSystems = async () => {
    if (levelName !== 'customer_id' && levelName !== 'sys_serial_no') {
      setStatus(STATUS.ERROR)
      setError('Invalid search level!')
    }
    setStatus(STATUS.LOADING)
    let response: any = null
    try {
      response = await axios.get(`http://localhost:8080/systems/${levelName}/${level}`, {
        headers: {
          authorizationToken: token
        }
      })
    } catch (error: any) {
      response = error.response
      setStatus(STATUS.ERROR)
    }

    if (response?.status === HttpStatusCode.Ok) {
      setStatus(STATUS.LOADED)
      setSystems(response.data)
    } else if (response?.status === HttpStatusCode.Unauthorized) {
      setStatus(STATUS.ERROR)
      setError('Unauthorized! Check Authorization Token.')
    } else if (response?.status === HttpStatusCode.NotFound) {
      setStatus(STATUS.ERROR)
      setError(response.data.message)
    } else {
      setStatus(STATUS.ERROR)
      setError('Oops! Something went wrong!')
    }
  }

  return (
    <div className="system-info">
      <Card variant="outlined" sx={GENERIC_CARD}>
        <div className='search-box'>
          <Input className='system-search-input'
            onChange={(event) => setLevel(event.target.value)}
            onKeyDown={(event) => event.key === 'Enter' ? searchSystems() : null}
            placeholder='Comma-separated serial numbers or customer IDs'
            startDecorator={
              <Select placeholder="Select Level" size='sm' variant='solid' defaultValue={DefaultValue} color='primary' onChange={(event, value) => setLevelName(value)} sx={{'width': "150px"}}>
                <Option value="customer_id">Customer</Option>
                <Option value="sys_serial_no">Serial Number</Option>
                <Option value="watchlist" disabled>Watchlist</Option>
              </Select>
            }
            endDecorator={<Button onClick={searchSystems} variant='solid'>Search</Button>}
            size='md'
          ></Input>

        </div>
        <div className='system-data-container'>
          { status !== STATUS.LOADED &&
            <div style={{marginTop: '100px'}}>
              {
                status === STATUS.ERROR &&
                <Error description={error} />
              }
              { 
                status === STATUS.NODATA && 
                <NoData />
              }
              {
                status === STATUS.LOADING &&
                  <Progress />
              }
            </div>
          }
          { status === STATUS.LOADED &&
            <div className='system-info-table'>
              <SystemDataViewer data={systems} />
            </div>
          }
          <SystemDataViewer data={systems} />
        </div>
      </Card>
    </div>
  )
}

export default SystemInfo;