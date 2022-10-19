import React from 'react';
export const themes = {
  dark: {
    backgroundColor: 'rgb(166, 160, 255)',
    color: 'white'
  },
  light: {
    backgroundColor: 'rgb(230, 192, 255)',
    color: 'black'
  }
}
export const MyContext = React.createContext(themes.light);