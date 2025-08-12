import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container'
import ColorModeSelect from '../../theme/ColorModeSelect';
import { Link } from '@mui/material';
function App() {
  const [count, setCount] = useState(0);

  return (



    <Container maxWidth="xs">
      <CssBaseline />
      <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
      <Link href="/sign-in">Sign In</Link>

      <Link href="/sign-up">Sign Up</Link>





    </Container>


  )
}

export default App
