import React from 'react';

function NoteContainer(props) {
    const notes = props.notes;
    //const { notes } = props;

  return (
    <div className="notes-container">
      {notes.map((note, index) => (
        <div key={index} className="note">
          {note}
        </div>
      ))}
    </div>
  );
}

export default NoteContainer;