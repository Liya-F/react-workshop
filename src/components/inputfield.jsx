import React from 'react';

function InputField(props) {
  const value = props.value;
  const onChange = props.onChange;
  const onAddNote = props.onAddNote

  //const { value, onChange, onAddNote } = props;   

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter a note"
        value={value}
        onChange={onChange}
      />
      <button onClick={onAddNote}>Add</button>
    </div>
  );
}

export default InputField;