import React from 'react';

const EditableParagraph = ({ text, onTextChange }) => (
  <p
    contentEditable
    suppressContentEditableWarning={true}
    spellCheck={false}
    className="editable-paragraph-text"
    onBlur={(e) => onTextChange(e.target.innerText)}
  >
    {text}
  </p>
);

export default EditableParagraph;
