import { TextField } from '@mui/material';

interface Props {
    color: "primary" | "error";
    size?: 'small' | 'medium';
    label: string;
}

export const TestTextField = ({
    color,
    size = 'medium',
    label,
    ...props
}: Props) => {
    return (
        <>
            <TextField color={color} label={label} size={size} variant="standard" />
        </>
    )
};