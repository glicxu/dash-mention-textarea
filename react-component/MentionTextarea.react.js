import React, { useState, useRef } from 'react';

const MentionTextarea = ({ id, value, mentions, setProps, placeholder, style }) => {
  const [suggestions, setSuggestions] = useState([]);
  const textareaRef = useRef(null);

  const handleInput = (e) => {
    const val = e.target.value;
    const cursorPos = e.target.selectionStart;
    const textBefore = val.slice(0, cursorPos);
    const match = textBefore.match(/@(\w*)$/);

    if (match) {
      const query = match[1].toLowerCase();
      const filtered = mentions.filter(u => u.slice(1).toLowerCase().startsWith(query));
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }

    if (setProps) {
      setProps({ value: val });
    }
  };

  const handleSelect = (mention) => {
    const textarea = textareaRef.current;
    const cursorPos = textarea.selectionStart;
    const textBefore = value.slice(0, cursorPos);
    const textAfter = value.slice(cursorPos);
    const newVal = textBefore.replace(/@\w*$/, mention) + textAfter;
    if (setProps) {
      setProps({ value: newVal });
    }
    setSuggestions([]);
    textarea.focus();
  };

  return (
    <div style={{ position: 'relative' }}>
      <textarea
        id={id}
        ref={textareaRef}
        value={value}
        placeholder={placeholder}
        onChange={handleInput}
        style={style}
      />
      {suggestions.length > 0 && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            border: '1px solid #ccc',
            background: 'white',
            zIndex: 1000
          }}
        >
          {suggestions.map((s, i) => (
            <div
              key={i}
              style={{ padding: '5px', cursor: 'pointer' }}
              onClick={() => handleSelect(s)}
              onMouseDown={e => e.preventDefault()} // prevent textarea blur
            >
              {s}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MentionTextarea;
