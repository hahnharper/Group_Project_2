'use strict';

import React, { PureComponent } from 'react';
import Styled from "./styled";

class TestR extends PureComponent { 
  state = {
    hasError: false,
  }

  componentDidMount = () => {
    console.log('TestR mounted');
  }

  static getDerivedStateFromError(error) {
    // getDerivedStateFromError -> Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
  }

  getDerivedStateFromProps = (nextProps, prevState) => {
    console.log('TestR getDerivedStateFromProps', nextProps, prevState);
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('TestR getSnapshotBeforeUpdate', prevProps, prevState);
  }

  componentDidUpdate = () => {
    console.log('TestR did update');
  }

  componentWillUnmount = () => {
    console.log('TestR will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <React.Fragment>
        Test content
      </React.Fragment>
    );
  }
}

export default TestR;