import {
  Avatar,
  Icon,
  ListNext as List,
  ListItemBase,
  ListItemBaseSection,
  PresenceType,
} from '@momentum-ui/react-collaboration';
import * as React from 'react';

export interface SomeWidgetProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export function SomeWidget({ children }: SomeWidgetProps) {
  return (
    <div>
      <List listSize={5}>
        <ListItemBase size={50} shape="isPilled">
          <ListItemBaseSection position="start">Icon</ListItemBaseSection>
          <ListItemBaseSection position="fill">
            Text goes here
          </ListItemBaseSection>
          <ListItemBaseSection position="end">End</ListItemBaseSection>
        </ListItemBase>
        <ListItemBase itemIndex={1}>Item 2</ListItemBase>
        <ListItemBase itemIndex={2}>Item 3</ListItemBase>
        <ListItemBase itemIndex={3}>Item 4</ListItemBase>
        <ListItemBase itemIndex={4}>Item 5</ListItemBase>
      </List>
    </div>
  );
}
