import { Container } from '@mui/material'
import { TestButton } from './components/TestButton/TestButton';
import { TestTextField } from './components/TestTextField/TestTextField';

function App() {
  return(
    <>
      <Container maxWidth="md" style={{ display: "flex", padding:50, flexDirection:"column", gap:50, background:"#F5F5F5", height:"100vh"}}>

      <TestTextField  label="Standard-primary" color="primary"/>

      <TestTextField  label="Standard-error" color="error"/>

        <div style={{display:"flex", justifyContent:"right", gap:20}}>
          <TestButton color="error" label="error" />
          <TestButton color="primary" label="Primary"/>
        </div>
      </Container>
    </>
  )
}

export default App;
