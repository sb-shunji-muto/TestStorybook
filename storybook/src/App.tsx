import { Container, TextField } from '@mui/material'
import { TestButton } from './components/Button/TestButton';

function App() {
  return(
    <>
      <Container maxWidth="md" style={{ display: "flex", padding:50, flexDirection:"column", gap:50, background:"#F5F5F5", height:"100vh"}}>

        <TextField id="standard-basic" label="Standard" variant="standard" />

        <TextField id="standard-basic" label="Standard" variant="standard" color="error"/>

        <div style={{display:"flex", justifyContent:"right", gap:20}}>
          <TestButton color="error" label="erroe" />
          <TestButton color="primary" label="Succes"/>
        </div>
      </Container>
    </>
  )
}

export default App;
