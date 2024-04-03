import FroalaEditorComponent from 'react-froala-wysiwyg';

import React from 'react';

const FroalaEditor = () => {
  const config = {
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: false,
  };
  return (
    <div style={{ padding: 10 }}>
      <h4>FroalaEditor sample</h4>
      <FroalaEditorComponent
        tag="textarea"
        model={{ src: '@assets/react.svg', width: '300px', alt: 'Old Clock' }}
        config={config}
      />
    </div>
  );
};

export default FroalaEditor;
