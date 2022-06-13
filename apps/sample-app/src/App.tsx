import * as React from 'react';
import { SomeWidget } from '@jsapps/core';

export default function App() {
  return (
    <div className="App">
      <h1>SampleApp</h1>
      <p>The following is a sample widget that is defined in mono-repo.</p>
      <SomeWidget
        onClick={() => {
          console.log('click');
        }}
      >
        This is test
      </SomeWidget>
    </div>
  );
}
