import {Flex}  from '@momentum-ui/react-collaboration';
import * as React from 'react';

export interface SomeWidgetProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export function SomeWidget({ children }: SomeWidgetProps) {
  return (
    <div>
      <Flex
        alignContent="flex-start"
        alignItems="flex-start"
        direction="row"
        justifyContent="flex-start"
        style={{
          border: '1px solid red',
          height: '20rem',
          minWidth: '20rem',
        }}
        wrap="nowrap"
      >
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Flex>
    </div>
  );
}
