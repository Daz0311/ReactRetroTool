import React, { useState } from 'react';
import CardSection from './CardSection';
import Card from './Card';
import EditableCard from './EditableCard';
import EditableParagraph from './EditableParagraph';

const Column = ({ title, cards, editIndex, editingText, onPublish, onEdit, onDelete, onTextChange, onSaveEdit, onCancelEdit, columnName, }) => {
  const [isPublished, setIsPublished] = useState(false);

  const handlePublish = (newCards) => {
    onPublish(newCards, columnName);
    setIsPublished(true); // Nasconde l'EditableParagraph e mostra la sezione delle card pubblicate
  };

  return (
    <div className={`column ${columnName}`}>
      <h2>{title}</h2>
      <div className="editable-paragraph-container">
        {!isPublished ? (
          <div className="editable-paragraph">
            <EditableParagraph
              text={`What has driven you ${title.toLowerCase()}? You might focus on issues, time wasters, unpleasant surprises, etc.`}
              onTextChange={onTextChange}
            />
          </div>
        ) : (
          <div className="published-cards-section">
            {cards.map((card, index) =>
              editIndex?.index === index && editIndex?.column === columnName ? (
                <EditableCard
                  key={index}
                  text={editingText}
                  onChange={(e) => onTextChange(e.target.value)}
                  onSave={onSaveEdit}
                  onCancel={onCancelEdit}
                />
              ) : (
                <Card
                  key={index}
                  card={card}
                  index={index}
                  onEdit={() => onEdit(index, columnName)}
                  onDelete={() => onDelete(index, columnName)}
                />
              )
            )}
          </div>
        )}   
      </div>
      <CardSection onPublish={handlePublish} column={columnName} />
    </div>
  );
};

export default Column;
