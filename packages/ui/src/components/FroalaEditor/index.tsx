import React from 'react';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

export const FroalaEditor = () => {
  const config = {
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: false,
  };
  return (
    <div style={{ padding: 10 }}>
      <h4>FroalaEditor sample</h4>
      <FroalaEditorComponent tag="textarea" config={config} />
    </div>
  );
};
