import React from 'react';
import { Button } from '@mui/material';
import './MadSadGladPage.css';

const Header = () => (
  <header className="headerMadSadGlad">
    <nav className="navbar">
      <div className="nav-left">
        <span className="Retrospective">Untitled retrospective</span>
      </div>
      <div className="nav-center">
        <Button variant="contained">Print</Button>
        <Button variant="contained">Settings</Button>
        <Button variant="contained">Actions</Button>
      </div>
      <div className="nav-right">
        <span className="Remira-script">RetroRemira</span>
      </div>
    </nav>
  </header>
);

export default Header;
