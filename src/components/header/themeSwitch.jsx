import React from 'react';
import './styles/DarkMode.css';
import { DarkMode } from './DarkMode';

export const ThemeSwitch = () => {
  return (
    <div className="toggle-theme-wrapper">
      <DarkMode />
    </div>
  )
}
