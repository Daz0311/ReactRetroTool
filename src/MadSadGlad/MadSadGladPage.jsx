import React, { useState } from 'react';
import './MadSadGladPage.css';
import { Button, IconButton, Tooltip } from '@mui/material';
import CardSection from './CardSection';
import { Check as CheckIcon, Close as CloseIcon, Edit as EditIcon, Save as SaveIcon } from '@mui/icons-material';

function FirstPage() {
  const [madCards, setMadCards] = useState([]);
  const [sadCards, setSadCards] = useState([]);
  const [gladCards, setGladCards] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handlePublish = (cards, column) => {
    switch (column) {
      case 'mad':
        setMadCards((prevCards) => [...prevCards, ...cards]);
        break;
      case 'sad':
        setSadCards((prevCards) => [...prevCards, ...cards]);
        break;
      case 'glad':
        setGladCards((prevCards) => [...prevCards, ...cards]);
        break;
      default:
        break;
    }
  };

  const handleEdit = (index, column) => {
    setEditIndex({ index, column });
  };

  const handleSaveEdit = () => {
    setEditIndex(null);
  };

  const handleDelete = (index, column) => {
    switch (column) {
      case 'mad':
        setMadCards((prevCards) => prevCards.filter((_, i) => i !== index));
        break;
      case 'sad':
        setSadCards((prevCards) => prevCards.filter((_, i) => i !== index));
        break;
      case 'glad':
        setGladCards((prevCards) => prevCards.filter((_, i) => i !== index));
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
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
      <div className="content">
        <div className="column mad">
          <h2>Mad</h2>
          <div className="editable-paragraph-container">
            <div className="editable-paragraph">
              {madCards.length === 0 ? (
                <p
                  contentEditable
                  suppressContentEditableWarning={true}
                  spellCheck={false}
                  className="editable-paragraph-text"
                >
                  What has driven you mad? You might focus on issues, time wasters, unpleasant surprises, etc.
                </p>
              ) : (
                madCards.map((card, index) => (
                  <div key={index} className="editable-card">
                    {card}
                    <div className="card-buttons">
                      <Tooltip title="Edit">
                        <IconButton color="default" onClick={() => handleEdit(index, 'mad')}>
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton color="error" onClick={() => handleDelete(index, 'mad')}>
                          <CloseIcon />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="post-it-container">
            <CardSection onPublish={(cards) => handlePublish(cards, 'mad')} />
          </div>
        </div>
        
        {/* Repeat similar blocks for 'Sad' and 'Glad' columns */}
        
        <div className="column sad">
          <h2>Sad</h2>
          <div className="editable-paragraph-container">
            <div className="editable-paragraph">
              {sadCards.length === 0 ? (
                <p
                  contentEditable
                  suppressContentEditableWarning={true}
                  spellCheck={false}
                  className="editable-paragraph-text"
                >
                  What has driven you sad? You might focus on disappointments, challenges, etc.
                </p>
              ) : (
                sadCards.map((card, index) => (
                  <div key={index} className="editable-card">
                    {card}
                    <div className="card-buttons">
                      <Tooltip title="Edit">
                        <IconButton color="default" onClick={() => handleEdit(index, 'sad')}>
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton color="error" onClick={() => handleDelete(index, 'sad')}>
                          <CloseIcon />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="post-it-container">
            <CardSection onPublish={(cards) => handlePublish(cards, 'sad')} />
          </div>
        </div>

        <div className="column glad">
          <h2>Glad</h2>
          <div className="editable-paragraph-container">
            <div className="editable-paragraph">
              {gladCards.length === 0 ? (
                <p
                  contentEditable
                  suppressContentEditableWarning={true}
                  spellCheck={false}
                  className="editable-paragraph-text"
                >
                  What has made you glad? You might focus on successes, positive experiences, etc.
                </p>
              ) : (
                gladCards.map((card, index) => (
                  <div key={index} className="editable-card">
                    {card}
                    <div className="card-buttons">
                      <Tooltip title="Edit">
                        <IconButton color="default" onClick={() => handleEdit(index, 'glad')}>
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton color="error" onClick={() => handleDelete(index, 'glad')}>
                          <CloseIcon />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="post-it-container">
            <CardSection onPublish={(cards) => handlePublish(cards, 'glad')} />
          </div>
        </div>
      </div>
      <footer>
        <p>© 2024 Your Company. All rights reserved. Privacy Policy | Terms of Use | Contact Us</p>
      </footer>
    </div>
  );
}

export default FirstPage;

//inserire le funzionalità pulsanti
// l'ok se all'intenro è scirtto qualcosa, mi crea un altro post it all'interno del div e ne volgio massimo 2 per irga e poi dopo scrolla sotto con la barra scorrimento , 
//la x deve cancellare il coneuto all'interno del post it
//il pulsate emoji mi deve fare scegliere delle emoji da inserire,
