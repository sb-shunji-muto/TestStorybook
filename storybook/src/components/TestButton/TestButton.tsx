import { Button } from '@mui/material';

interface ButtonProps {
  color: "primary" | "error";
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const TestButton = ({
  color,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  return (
    <>
      <Button 
        variant="contained" 
        color={color} 
        size={size} 
        onClick={props.onClick}
      >
        {label}
      </Button>
    </>
  )
};
