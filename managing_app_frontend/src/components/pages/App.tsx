import React from 'react';
import { CssBaseline, Container, Link as MuiLink } from '@mui/material';
import ColorModeSelect from '../../utilities/theme/ColorModeSelect';
import styled from 'styled-components';

const PageWrapper = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 1.2rem;
  text-align: center;
`;

const FixedThemeToggle = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
`;

const NavLink = styled(MuiLink)`
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: none;
 
  transition: color 0.2s ease, transform 0.2s ease;

  &:hover {
  
    transform: translateY(-1px);
  }
`;

function App() {
  return (
    <PageWrapper maxWidth="xs">
      <CssBaseline />
      <FixedThemeToggle>
        <ColorModeSelect />
      </FixedThemeToggle>

      <NavLink href="/sign-in">Sign In</NavLink>
      {/* Conditional rendering if signed in */}
      <NavLink href="/crud/employees">Crud Dashboard</NavLink>
      <NavLink href="/sign-up">Sign Up</NavLink>
    </PageWrapper>
  );
}

export default App;
