import React, { useState } from 'react';
import Header from './Header';
import Column from './Column';
import './MadSadGladPage.css';
import Footer from './Footer';
import { Box } from '@mui/material';

const FirstPage = () => {
  const [cards, setCards] = useState({ mad: [], sad: [], glad: [] });
  const [editIndex, setEditIndex] = useState(null);
  const [editingText, setEditingText] = useState('');

  const handlePublish = (newCards, column) => {
    // Aggiungi le nuove card pubblicate alla colonna specificata
    setCards((prevCards) => ({
      ...prevCards,
      [column]: [...prevCards[column], ...newCards],
    }));
  };
  

  const handleSaveNewCard = (column, newCardText, cardStyle) => {
    if (newCardText.trim()) {
      const newCard = { text: newCardText, style: cardStyle, isEditing: false };
      setCards((prevCards) => ({
        ...prevCards,
        [column]: [...prevCards[column], newCard],
      }));
    }
  };

  const handleEdit = (index, column) => {
    setEditIndex({ index, column });
    setEditingText(cards[column][index].text);
  };

  const handleDelete = (index, column) => {
    setCards({
      ...cards,
      [column]: cards[column].filter((_, i) => i !== index),
    });
    if (editIndex?.index === index && editIndex?.column === column) {
      setEditIndex(null);
    }
  };

  const handleTextChange = (text) => {
    setEditingText(text);
  };

  const handleSaveEdit = () => {
    if (editIndex) {
      const { index, column } = editIndex;
      const updatedCards = cards[column].map((card, i) =>
        i === index ? { ...card, text: editingText } : card
      );
      setCards({ ...cards, [column]: updatedCards });
      setEditIndex(null);
      setEditingText('');
    }
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    setEditingText('');
  };

  return (
    <div className="App">
      
      <Header />
      
      <Box sx={{
        display:"flex",
        flexDirection: {xs: 'column', md :"row" },// ridimensionamento
        justifyContent:"space-between",
        gap:10,
        verticalAlign: "center",
        paddingTop: 15,
        paddingBottom:15

       }}>
        <Column
          title="Mad"
          cards={cards.mad}
          editIndex={editIndex}
          editingText={editingText}
          onPublish={handlePublish}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onTextChange={handleTextChange}
          onSaveEdit={handleSaveEdit}
          onCancelEdit={handleCancelEdit}
          columnName="mad"
        />
        <Column
          title="Sad"
          cards={cards.sad}
          editIndex={editIndex}
          editingText={editingText}
          onPublish={handlePublish}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onTextChange={handleTextChange}
          onSaveEdit={handleSaveEdit}
          onCancelEdit={handleCancelEdit}
          columnName="sad"
        />
        <Column
          title="Glad"
          cards={cards.glad}
          editIndex={editIndex}
          editingText={editingText}
          onPublish={handlePublish}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onTextChange={handleTextChange}
          onSaveEdit={handleSaveEdit}
          onCancelEdit={handleCancelEdit}
          columnName="glad"
        />
      </Box>
      <Footer/>
      
    </div>
  );
};

export default FirstPage;

//prendere lo stesso index quando modifico e poi salvarlo come nuovo
//scompatare e portare dentro card section la parte che riguarda 
//content class
