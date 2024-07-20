import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <IconButton color="inherit" onClick={toggleTheme}>
            {theme === 'light' ? <Brightness4 /> : <Brightness7 />}
        </IconButton>
    );
};
