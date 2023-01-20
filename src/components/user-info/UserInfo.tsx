import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Input } from '@mui/joy';
import Card from '@mui/joy/Card';
import { Typography } from '@mui/material';
import axios, { HttpStatusCode } from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import { GENERIC_CARD, STATUS } from '../../utility/constants';
import Error from '../error/Error';
import NoData from '../no-data/NoData';
import Progress from '../progress/Progress';
import './UserInfo.css';

function UserInfo() {
  const [searchText, setSearchText] = React.useState<string>('');
  const [user, setUser] = React.useState<User | null>(null);
  const [status, setStatus] = React.useState<STATUS>(STATUS.NODATA);
  const [error, setError] = React.useState<string>('');

  const { token } = useSelector((state: any) => state.token)

  const searchUser = async () => {
    setStatus(STATUS.LOADING)
    let response: any = null
    try {
      response = await axios.get(`http://localhost:8080/user/${searchText}`, {
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
      setUser(response.data)
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
    <div className="user-info">
      <Card variant="outlined" sx={GENERIC_CARD}>
      <div className='search-box'>
          <Input
            onChange={(event) => setSearchText(event.target.value)}
            onKeyDown={(event) => event.key === 'Enter' ? searchUser() : null}
            placeholder='Search User'
            startDecorator={<SearchIcon color='primary'/>}
            endDecorator={<Button onClick={searchUser} variant='solid'>Search</Button>}
            size='md'
          ></Input>
        </div>
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
        {
          status === STATUS.LOADED &&
          <div className='info-container'>
            <div className='avatar'>
              <AccountCircleIcon sx={{ fontSize: 100, color: '#6FB6FF' }} />
            </div>
            <Typography>{user?.firstName + ' ' + user?.lastName}</Typography>
            <div className='user-data-section'>
              <div className='user-info-data'>
                <div className='field'>Email</div>
                <div className='value'>{user?.mail}</div>
              </div>
              <div className='user-info-data'>
                <div className='field'>SSO</div>
                <div className='value'>{user?.uid}</div>
              </div>
              <div className='user-info-data'>
                <div className='field'>Internal</div>
                <div className='value'>{user?.isInternalFlag.toString()}</div>
              </div>
              <div className='user-info-data'>
                <div className='field'>USPS Flag</div>
                <div className='value'>{user?.USPSFlag.toString()}</div>
              </div>
              <div className='user-info-data'>
                <div className='field'>SESG Flag</div>
                <div className='value'>{user?.SESGFlag.toString()}</div>
              </div>
              <div className='user-info-data'>
                <div className='field'>Customer Type</div>
                <div className='value'>{user?.customerType || 'NA'}</div>
              </div>
              <div className='user-info-data'>
                <div className='field'>Company Name</div>
                <div className='value'>{user?.companyName}</div>
              </div>
              <div className='user-info-data'>
                <div className='field'>Company ID</div>
                <div className='value'>{user?.companyId}</div>
              </div>
              <div className='user-info-data'>
                <div className='field'>Roles</div>
                <div className='value'>
                  {
                    user?.roles?.map((role: string) => {
                      return <div key={role} className='list-value'>{role}</div>
                    }) || <div className='list-value'>NA</div>
                  }
                </div>
              </div>
              <div className='user-info-data'>
                <div className='field'>Privileges</div>
                <div className='value'>
                  {
                    user?.privileges?.map((privilege: string) => {
                      return <div key={privilege} className='list-value'>{privilege}</div>
                    }) || <div className='list-value'>NA</div>
                  }
                </div>
              </div>
              <div className='user-info-data'>
                <div className='field'>Customer List</div>
                <div className='value'>
                  {
                    user?.custlist?.map((cust: string) => {
                      return <div key={cust} className='list-value'>{cust}</div>
                    }) || <div className='list-value'>NA</div>
                  }
                </div>
              </div>
              <div className='user-info-data'>
                <div className='field'>Sales Multi-area</div>
                <div className='value'>
                  {
                    user?.salesMultiAreaList?.map((area: string) => {
                      return <div key={area} className='list-value'>{area}</div>
                    }) || <div className='list-value'>NA</div>
                  }
                </div>
              </div>
            </div>
          </div>
        }

      </Card>
    </div>
  )
}

export default UserInfo;