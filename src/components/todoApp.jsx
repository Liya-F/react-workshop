import React, { useState } from 'react';
import Header from './header';
import InputField from './inputfield';
import NoteContainer from './container'
import './styles.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const handleAddNote = () => {
    if (inputValue.trim() !== '') {
      setNotes([...notes, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="app">
      <Header />
      <InputField
        value={inputValue}
        onChange={handleInputChange}
        onAddNote={handleAddNote}
      />
      <NoteContainer notes={notes} />
    </div>
  );
}

export default App;