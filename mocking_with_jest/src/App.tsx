import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MyComponent } from './components/MyComponent';

export default class App extends React.PureComponent<{},{}> {
  public render(): JSX.Element {
    return <MyComponent text={"Here is some text"}></MyComponent>
  }
}