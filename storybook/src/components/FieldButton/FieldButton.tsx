import { Button, TextField } from '@mui/material'
import { FC } from 'react'

export const FieldButton:FC = () => {
    return (
        <div style={{display:"flex", alignItems:"center", gap:10}}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small"/>
            <Button variant="contained">Contained</Button>
        </div>    
    )
}