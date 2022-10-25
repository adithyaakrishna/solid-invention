import React from 'react';
import Button from '@mui/material/Button';

interface ButtonProps {
    variant?: "outlined" | "text" | "contained"
    isDisabled?: boolean;
    buttonText: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined;
    startIcon: React.ReactNode;
    endIcon: React.ReactNode;
}

export const BasicButton = (props: ButtonProps) => {
  return (
    <Button variant={props.variant} startIcon={props.startIcon} endIcon={props.endIcon} color={props.color} onClick={props.onClick} disabled={props.isDisabled}>{props.buttonText}</Button>
  );
}
