import React, { Component } from 'react';
import { connect } from 'react-redux';


export default ChildComponent => {
  class ComposedComponent extends Component {
    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }
    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }
    shouldNavigateAway() {

      console.log(this.props);
      if (!this.props.authenticated) {
        this.props.history.push('/');
      }
    }
    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps({ auth: { authenticated} }) {
    return { authenticated };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
