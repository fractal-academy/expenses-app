import React from 'react'
import {ThemeProvider} from '@qonsoll/react-design'
import Theme from 'app/config/QonsollTheme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport:{
    defaultViewport: "mobile2"
  },
  controls: { expanded: true }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={Theme}>
      <Story />
    </ThemeProvider>
  ),
];
