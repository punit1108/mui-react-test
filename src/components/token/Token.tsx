import Textarea from '@mui/joy/Textarea';
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './Token.css';
import { setToken } from './token.slice';

function Token() {
  const TokenState = useSelector((state: any) => state.token)
  const dispatch = useDispatch();
  const [state, setState] = React.useState({ isDrawerOpen: false, authToken: TokenState.token });

  const toggleDrawer =
    (open: boolean) =>
      setState({ ...state, isDrawerOpen: open });

  const setAuthToken = (event: ChangeEvent): void => {
    const { value } = event.target as HTMLInputElement
    setState({ ...state, authToken: value});
    dispatch(setToken({ token: value }));
  }

  return (
    <div>
      <div className="token-drawer">
        <div className="token-drawer-handle" onClick={() => toggleDrawer(!state.isDrawerOpen)}>
          <div className="horizontal-rule"></div>
          Authorization Token
        </div>
        {
          state.isDrawerOpen &&
          <div className="token-drawer-container">
            <Textarea size="sm" placeholder="Authorization Token..." defaultValue={TokenState.token} onChange={(change) => setAuthToken(change)}></Textarea>
          </div>
        }
      </div>

    </div>
  );
}

export default Token;