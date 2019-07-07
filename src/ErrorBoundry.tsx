import * as React from 'react';

interface IState {
  hasError: boolean
}

// see: https://reactjs.org/docs/error-boundaries.html
// see: https://codepen.io/gaearon/pen/wqvxGa?editors=0010
export class ErrorBoundary extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  
 
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    
    return this.props.children;
  }
}