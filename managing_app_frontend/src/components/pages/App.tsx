
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container'
import ColorModeSelect from '../../utilities/theme/ColorModeSelect';
import { Link } from '@mui/material';
function App() {

  return (



    <Container maxWidth="xs">
      <CssBaseline />
      <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
      <Link href="/sign-in">Sign In</Link>
      {/* if sign in then show crud Dashboard */}
      <Link href="/crud/employees">Crud Dashboard</Link>
      <Link href="/sign-up">Sign Up</Link>





    </Container>


  )
}

export default App
