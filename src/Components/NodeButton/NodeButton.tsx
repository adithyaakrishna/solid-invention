import { BasicButton } from '../BasicComponents/Button/BasicButton';

import './NodeButton.min.css';

interface NodeButtonProps {
  variant?: "outlined" | "text" | "contained";
  startIcon?: React.ReactNode;
  buttonText: string;
}
export const NodeButton = (props: NodeButtonProps) => {
  return (
    <BasicButton className='node-button' variant={props.variant} startIcon={props.startIcon} buttonText={props.buttonText} />
  )
}

