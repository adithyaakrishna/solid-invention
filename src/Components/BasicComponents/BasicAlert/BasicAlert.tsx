import { Alert, AlertColor } from '@mui/material'
import './BasicAlert.min.css';

interface AlertProps {
    iconVisible?: boolean;
    severity?: AlertColor;
    alertText?: string;
    variant?: 'filled' | 'outlined' | 'standard';
}

export const BasicAlert = (props: AlertProps) => {
  const { iconVisible, severity, alertText, variant} = props
  return (
    <Alert className='basic-alert' icon={iconVisible} severity={severity} variant={variant}>
        {alertText}
    </Alert>
  )
}