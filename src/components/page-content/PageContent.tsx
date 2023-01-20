import { Container, Grid } from "@mui/material";
import SystemInfo from "../system-info/SystemInfo";
import UserInfo from "../user-info/UserInfo";
import './PageContent.css';

function PageContent() {
  return (
    <div className="page-content">
      <Container maxWidth='lg'>
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <UserInfo />
            </Grid>
            <Grid item xs={12} md={8}>
              <SystemInfo />
            </Grid>
            
          </Grid>
      </Container>
    </div>
    )
}

export default PageContent;