import React from 'react';
    import { 
      Box,
      Typography,
      Link,
      List,
      ListItem,
      ListItemText,
      Paper,
      Divider,
      styled,
      keyframes
    } from '@mui/material';
    
    const NewUi = () => {
      // Keyframes for animations
      const crtOutput = keyframes`
        0% { opacity: 0.9; }
        50% { opacity: 1; }
      `;
    
      const blink = keyframes`
        0% { opacity: 1; }
        50% { opacity: 0; }
      `;
    
      const checker = keyframes`
        0% { background-position: 0px 0px, 5px 5px; }
        100% { background-position: 5px 5px, 10px 10px; }
      `;
    
      // Styled components
      const GlobalStyles = styled('div')(({ theme }) => ({
        '& *': {
          boxSizing: 'border-box',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgb(120, 75, 20) #12100d',
          '&::-webkit-scrollbar': {
            width: '12px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#12100d',
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: 0,
            backgroundColor: 'rgb(120, 75, 20)',
            border: '2px solid transparent',
          },
        },
        '& ::selection': {
          backgroundColor: 'rgba(120, 75, 20, 0.7)',
          color: 'rgb(255, 170, 60)',
        },
      }));
    
      const Root = styled('div')(({ theme }) => ({
        background: 'black',
        color: 'rgb(255, 170, 60)',
        fontFamily: '"Roboto Mono", monospace',
        margin: 0,
        fontSize: '15px',
        width: '100%',
        lineHeight: '1.5em',
        position: 'relative',
        scrollBehavior: 'smooth',
        overflowX: 'hidden',
        '& h1, h2, h3, h4, h5, h6': {
          margin: 0,
        },
        '& *': {
          textShadow: '0rem 0.2rem 1rem currentColor',
        },
        '&::before, &::after': {
          content: '""',
          display: 'block',
          height: '100%',
          left: 0,
          top: 0,
          width: '100%',
          pointerEvents: 'none',
          position: 'absolute',
          zIndex: 1,
        },
        '&::before': {
          animation: `${crtOutput} 10ms infinite`,
          backgroundColor: '#12100d',
          position: 'fixed',
          padding: '30px',
          pointerEvents: 'auto',
          zIndex: -1,
        },
        '&::after': {
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.2) 70%, rgba(0, 0, 0, 0.6))',
          backgroundSize: '100% 0.5rem',
          position: 'fixed',
          zIndex: 0,
        },
        [theme.breakpoints.up('lg')]: {
          '&::after': {
            position: 'fixed',
            boxShadow: 'inset 0 0 24rem black, inset 0 0 5rem black, 0 0 16rem black',
            zIndex: 12,
            opacity: 0.7,
          },
        },
      }));
    
      const Header = styled(Paper)(({ theme }) => ({
        border: '1px solid rgb(255, 170, 60)',
        borderWidth: '1px 0',
        position: 'relative',
        padding: '20px',
        paddingBottom: '40px',
        marginTop: '20px',
        width: '94%',
        marginLeft: '3%',
        marginRight: '3%',
        borderBottom: 'none',
        backgroundColor: 'transparent',
        color: 'inherit',
        boxShadow: 'none',
        '&::before, &::after': {
          position: 'absolute',
          content: '""',
          width: '2px',
          height: '100%',
          background: 'linear-gradient(to bottom, rgb(255, 170, 60) 0%, rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, 0) 65%, rgb(255, 170, 60) 100%)',
          top: 0,
          left: 0,
        },
        '&::after': {
          left: 'unset',
          right: 0,
        },
        [theme.breakpoints.down('md')]: {
          paddingBottom: '120px',
          marginTop: '40px',
          width: '92%',
          marginLeft: '4%',
          marginRight: '4%',
        },
        [theme.breakpoints.down('sm')]: {
          paddingBottom: '150px',
        },
      }));
    
      const Nav = styled('nav')(({ theme }) => ({
        border: '1px solid rgb(255, 170, 60)',
        borderWidth: '1px 0',
        position: 'relative',
        padding: 0,
        marginTop: 0,
        marginBottom: '20px',
        width: '94%',
        marginLeft: '3%',
        marginRight: '3%',
        borderTop: 'none',
        '& ul': {
          padding: 0,
          margin: 0,
          display: 'flex',
          justifyContent: 'space-between',
          position: 'absolute',
          left: 0,
        //   padding: '0 30px',
          bottom: '-16px',
          width: '100%',
        },
        '& li': {
          display: 'contents',
        },
        '& a': {
          borderRadius: 0,
          display: 'block',
          width: '12%',
          height: '28px',
          textAlign: 'center',
          position: 'relative',
          lineHeight: '25px',
          border: '2px solid',
          color: 'inherit',
          textDecoration: 'none',
          '&::after': {
            content: '""',
            position: 'absolute',
            background: '#12100d',
            width: '100%',
            height: '2px',
            left: 0,
            bottom: '12px',
            zIndex: -1,
          },
        },
        [theme.breakpoints.down('md')]: {
          width: '92%',
          marginLeft: '4%',
          marginRight: '4%',
          '& ul': {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 33.33%)',
            bottom: '20px',
            margin: '0 -5px',
            width: 'calc(100% + 10px)',
          },
          '& a': {
            width: 'auto',
            margin: '5px',
          },
        },
        [theme.breakpoints.down('sm')]: {
          '& ul': {
            gridTemplateColumns: 'repeat(2, 50%)',
          },
        },
      }));
    
      const Main = styled('main')(({ theme }) => ({
        position: 'relative',
        margin: '40px 3% 0',
        width: '64%',
        float: 'left',
        [theme.breakpoints.down('md')]: {
          width: '92%',
          float: 'none',
          clear: 'both',
          margin: '50px 4% 0',
        },
      }));
    
      const Article = styled(Paper)(({ theme }) => ({
        border: '3px solid rgb(255, 170, 60)',
        borderWidth: '2px 0',
        position: 'relative',
        padding: '16px 24px',
        zIndex: 1,
        marginBottom: '40px',
        backgroundColor: 'transparent',
        color: 'inherit',
        boxShadow: 'none',
        '&::before, &::after': {
          position: 'absolute',
          content: '""',
          width: '2px',
          height: '100%',
          background: 'linear-gradient(to bottom, rgb(255, 170, 60) 0%, rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, 0) 65%, rgb(255, 170, 60) 100%)',
          top: 0,
          left: 0,
        },
        '&::after': {
          left: 'unset',
          right: 0,
        },
        '& section': {
          margin: '15px -15px',
          padding: '5px 15px 20px',
          marginBottom: '15px',
          position: 'relative',
        },
        '& h2': {
          fontSize: '22px',
          background: 'none',
          border: 'none',
          color: 'rgb(255, 170, 60)',
          position: 'absolute',
          padding: '0 7px',
          textTransform: 'uppercase',
          top: '-15px',
          left: '70px',
          zIndex: 2,
          letterSpacing: '0.1em',
          whiteSpace: 'nowrap',
          fontWeight: 'bold',
          '&::after': {
            background: '#12100d',
            content: '""',
            height: '3px',
            width: '100%',
            left: 0,
            top: '12px',
            position: 'absolute',
            zIndex: -1,
          },
        },
        '& section:first-of-type h2': {
          top: '-27px',
          '&::after': {
            top: '9px',
          },
        },
        '& section h3, & section:not(:first-of-type) h2': {
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          position: 'relative',
          marginBottom: '20px',
          fontSize: '16px',
          left: 0,
          '&::after': {
            content: '""',
            background: 'linear-gradient(to right, rgb(255, 170, 60) 0%, rgba(0, 0, 0, 0) 100%)',
            bottom: '-5px',
            height: '2px',
            position: 'absolute',
            left: 0,
            width: '100%',
          },
        },
        '& blockquote': {
          padding: '10px',
          border: '1px solid',
          background: 'rgba(255, 170, 60, 0.1)',
          boxShadow: '5px 5px 0 #12100d, 6px 6px 0 rgb(255, 170, 60), 0 0 10px inset rgb(120, 75, 20)',
          marginBottom: '10px',
          marginLeft: 0,
          marginRight: 0,
          marginTop: '10px',
          maxWidth: '100%',
          '& p': {
            margin: 0,
          },
        },
        '& footer': {
          margin: '5px -22px -20px -22px',
          padding: '20px 20px 30px',
          background: 'rgba(255, 170, 60, 0.15)',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '2px',
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(255, 170, 60) 35%, rgb(255, 170, 60) 65%, rgba(0, 0, 0, 0) 100%)',
          },
          '& h3': {
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          },
          '& a': {
            padding: '5px 30px 5px 5px',
            border: '2px solid',
            display: 'inline-block',
            position: 'relative',
            marginTop: '10px',
            color: 'inherit',
            textDecoration: 'none',
            '&::after': {
              borderLeft: '2px solid',
              position: 'absolute',
              width: '22px',
              height: '100%',
              lineHeight: '28px',
              top: 0,
              right: 0,
              textAlign: 'center',
              padding: 0,
              content: '"⇩"',
              fontSize: '1.25em',
              fontWeight: 'bold',
            },
          },
        },
        [theme.breakpoints.up('lg')]: {
          '&#guidelines, &#contribute': {
            width: '72%',
          },
          '&#contribute': {
            position: 'absolute',
            left: '75%',
            bottom: 0,
          },
        },
      }));
    
      const Aside = styled('aside')(({ theme }) => ({
        width: '27%',
        marginLeft: 0,
        float: 'left',
        '& .container': {
          border: '1px solid rgb(255, 170, 60)',
          borderWidth: '1px 0',
          position: 'relative',
          padding: '10px',
          zIndex: 1,
          margin: '10px 3% 0',
          '&::before, &::after': {
            position: 'absolute',
            content: '""',
            width: '2px',
            height: '100%',
            background: 'linear-gradient(to bottom, rgb(255, 170, 60) 0%, rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, 0) 65%, rgb(255, 170, 60) 100%)',
            top: 0,
            left: 0,
          },
          '&::after': {
            left: 'unset',
            right: 0,
          },
          '& h2, & h4': {
            fontSize: '16px',
            background: 'none',
            border: 'none',
            color: 'rgb(255, 170, 60)',
            position: 'absolute',
            padding: '0 5px',
            textTransform: 'uppercase',
            top: '-14px',
            left: '20px',
            zIndex: 2,
            letterSpacing: '0.1em',
            whiteSpace: 'nowrap',
            fontWeight: 'bold',
            '&::after': {
              background: '#12100d',
              content: '""',
              height: '3px',
              width: '100%',
              left: 0,
              top: '12px',
              position: 'absolute',
              zIndex: -1,
            },
          },
        },
        [theme.breakpoints.down('md')]: {
          width: '42%',
          margin: '20px 4%',
          '& h2, & h4': {
            fontSize: '18px',
            top: '-15px',
            left: '30px',
          },
        },
        [theme.breakpoints.down('sm')]: {
          width: '92%',
          float: 'none',
          marginTop: '40px',
        },
      }));
    
      const ProfileList = styled('ul')(({ theme }) => ({
        border: '1px solid rgb(120, 75, 20)',
        '& li': {
          borderBottom: '1px solid rgb(120, 75, 20)',
          padding: '4px',
          '&:first-of-type': {
            fontWeight: 800,
          },
          '& span': {
            padding: '4px',
            display: 'inline-block',
            '&:first-of-type': {
              width: '80px',
              borderRight: '1px solid rgb(120, 75, 20)',
              paddingBottom: '6px',
            },
          },
        },
      }));
    
      const FeaturesList = styled('ul')(({ theme }) => ({
        border: '1px solid rgb(120, 75, 20)',
        display: 'block',
        '& li': {
          borderBottom: '1px solid rgb(120, 75, 20)',
          padding: '10px',
          position: 'relative',
          transition: 'all 0.2s ease',
          '& a': {
            display: 'block',
            border: 'none',
            fontWeight: 'bold',
            outline: 'none',
            background: 'transparent',
            color: 'inherit',
            textDecoration: 'none',
          },
          '& span::before': {
            content: '"↳ "',
          },
          '& a::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          },
          '&:hover': {
            background: 'rgba(255, 170, 60, 0.2)',
            outline: '2px solid',
          },
        },
      }));
    
      const ViewMoreLink = styled(Link)(({ theme }) => ({
        display: 'block',
        textAlign: 'center',
        border: '1px solid',
        padding: '10px',
        background: 'rgba(255, 170, 60, 0.1)',
        zIndex: 2,
        position: 'relative',
        color: 'inherit',
        textDecoration: 'none',
        '&:hover': {
          background: 'rgba(255, 170, 60, 0.2)',
        },
        '&::before': {
          content: '"["',
          marginRight: '0.5em',
          transition: 'all 0.3s ease',
        },
        '&::after': {
          content: '"]"',
          marginLeft: '0.5em',
          transition: 'all 0.3s ease',
        },
        '&:hover::before': {
          marginRight: 0,
        },
        '&:hover::after': {
          marginLeft: 0,
        },
      }));
    
      const HeaderTitle = styled(Typography)(({ theme }) => ({
        position: 'relative',
        '&::before': {
          content: '"<---— Terminate Session —--->"',
          fontStyle: 'normal',
          textAlign: 'center',
          position: 'absolute',
          display: 'grid',
          alignContent: 'center',
          lineHeight: 1,
          right: '40px',
          top: '35px',
          height: 'calc(100% - 90px)',
          width: 'calc(100% - 600px)',
          border: '1px solid',
          whiteSpace: 'nowrap',
          background: 'linear-gradient(45deg, rgba(120, 75, 20, 0.5) 25%, transparent 25%, transparent 75%, rgba(120, 75, 20, 0.5) 75%, rgba(120, 75, 20, 0.5) 0), linear-gradient(45deg, rgba(120, 75, 20, 0.5) 25%, transparent 25%, transparent 75%, rgba(120, 75, 20, 0.5) 75%, rgba(120, 75, 20, 0.5) 0), rgba(0, 0, 0, 0)',
          backgroundSize: '10px 10px, 10px 10px',
          backgroundPosition: '0px 0, 5px 5px',
          boxShadow: '5px 5px 0 #12100d, 6px 6px 0 rgb(255, 170, 60), 0 0 40px inset rgba(0, 0, 0, 0.75), 0 0 10px inset',
          animation: `${checker} 0.75s steps(4) infinite`,
        },
        [theme.breakpoints.down('md')]: {
          maxWidth: 'unset',
          '&::before': {
            position: 'relative',
            width: '100%',
            top: 0,
            left: 0,
            marginBottom: '20px',
            height: '120px',
          },
        },
      }));
    
      return (
        <GlobalStyles>
          <Root>
            <Header>
              <Box className="container">
                <Typography variant="h1" component="h1">System Maintenance</Typography>
                <HeaderTitle variant="h2" component="h2">
                  !! This is strictly for sysAdmin !! Proceed with extereme caution . . .
                </HeaderTitle>
              </Box>
            </Header>
            
            <Nav>
              <List component="ul">
                <ListItem component="li">
                  <Link href="#query">Query Editor</Link>
                </ListItem>
                <ListItem component="li">
                  <Link href="#guidelines">Service Logs</Link>
                </ListItem>
                <ListItem component="li">
                  <Link href="#contribute">Custom Config</Link>
                </ListItem>
                <ListItem component="li">
                  <Link href="#files">Kill Kiosk</Link>
                </ListItem>
              </List>
            </Nav>
    
            <Main id="main" tabIndex="-1">
              <Box className="container">
                <Article id="query">
                  <Box component="section" className="container">
                    <Typography variant="h2" component="h2">Query Editor</Typography>
                    <Box component="blockquote">
                      <Typography component="p">
                        Select * from Abcd limit 100;
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box component="section" className="container">
                    <Typography variant="h2" component="h2">Results</Typography>
                    
                    <Box component="section" className="profile" aria-labelledby="profile-title">
                      <Box className="container">
                        <ProfileList>
                          <ListItem className="profile-title">
                            <Typography component="span">Id</Typography>
                            <Typography component="span">Name</Typography>
                            <Typography component="span">Date</Typography>
                          </ListItem>
                          <ListItem className="profile-title">
                            <Typography component="span">1</Typography>
                            <Typography component="span">Pipboy</Typography>
                            <Typography component="span">01-01-2025</Typography>
                          </ListItem>
                          <ListItem className="profile-title">
                            <Typography component="span">2</Typography>
                            <Typography component="span">P hasa test</Typography>
                            <Typography component="span">11-03-2025</Typography>
                          </ListItem>
                          <ListItem className="profile-title">
                            <Typography component="span">3</Typography>
                            <Typography component="span">Pip  boy</Typography>
                            <Typography component="span">31-12-2024</Typography>
                          </ListItem>
                        </ProfileList>
                        <ViewMoreLink>View More</ViewMoreLink>
                      </Box>
                    </Box>
                  </Box>
                </Article>
              </Box>
            </Main>
            
            <Aside id="styles">
              <Box className="container">
                <Typography variant="h2" component="h2">Tabels</Typography>
                <FeaturesList className="features">
                  <ListItem>
                    <Typography component="span">
                      <Link component="a">tb_device &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</Link>
                      <Typography component="span">id</Typography>
                      <br />
                      <Typography component="span">name</Typography>
                      <br />
                      <Typography component="span">createdDate</Typography>
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography component="span">
                      <Link component="a">tb_users &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</Link>
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography component="span">
                      <Link component="a">tb_details_pay &nbsp;&nbsp;&nbsp;+</Link>
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography component="span">
                      <Link component="a">tb_sys_main &nbsp;&nbsp;&nbsp;&nbsp;+</Link>
                    </Typography>
                  </ListItem>
                </FeaturesList>
              </Box>
            </Aside>
          </Root>
        </GlobalStyles>
      );
    };
    
    export default NewUi;

