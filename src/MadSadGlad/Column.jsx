import React from 'react';
import CardSection from './CardSection';
import Card from './Card';
import EditableCard from './EditableCard';
import EditableParagraph from './EditableParagraph';

const Column = ({ title, cards, editIndex, editingText, onPublish, onEdit, onDelete, onTextChange, onSaveEdit, onCancelEdit, columnName }) => (
  <div className={`column ${columnName}`}>
    <h2>{title}</h2>
    <div className="editable-paragraph-container">
      <div className="editable-paragraph">
        {cards.length === 0 ? (
          <EditableParagraph text={`What has driven you ${title.toLowerCase()}? You might focus on issues, time wasters, unpleasant surprises, etc.`} onTextChange={onTextChange} />
        ) : (
          cards.map((card, index) =>
            editIndex?.index === index && editIndex?.column === columnName ? (
              <EditableCard
                key={index}
                text={editingText}
                onChange={(e) => onTextChange(e.target.value)}
                onSave={onSaveEdit}
                onCancel={onCancelEdit}
              />
            ) : (
              <Card key={index} card={card} index={index} onEdit={() => onEdit(index, columnName)} onDelete={() => onDelete(index, columnName)} />
            )
          )
        )}
      </div>
      <CardSection onPublish={onPublish} column={columnName} />
    </div>
  </div>
);

export default Column;
