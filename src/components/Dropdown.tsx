import React, { useState } from 'react';
import { Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface DropdownProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`themed-dropdown${isOpen ? ' open' : ''}`}>
      <div className="themed-dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        <span className="themed-dropdown-title">{title}</span>
        <div className="themed-dropdown-icon">
          <ExpandMoreIcon fontSize="small" />
        </div>
      </div>
      <Collapse in={isOpen}>
        <div className="themed-dropdown-body">
          {children}
        </div>
      </Collapse>
    </div>
  );
};

export default Dropdown;
