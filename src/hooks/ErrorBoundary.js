import { Component } from 'react';

class ErrorBoundery extends Component {
   state = {
      hasError: false
   };

   static getDerivedStateFromError(error) {
      return { hasError: true, error };
   }

   componentDidCatch(error, errorInfo) {
      // i can save error log here  
   }

   render() {
      if (this.state.hasError) return <h1>Wystąpił jakiś problem. {this.state.error.message}</h1>
      else return this.props.children;
   }
}

export default ErrorBoundery;