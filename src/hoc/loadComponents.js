import React, { Component } from 'react';

export default function loadComponents(importComponent) {
  class loadComponents extends Component {
    constructor(props) {
      super(props)
      this.state = {
        component: null
      }
    }

    render() {
      const C = this.state.component
      return C ? <C {...this.props} /> : null
    }

    componentDidMount() {
      importComponent().then((mod) => {
        this.setState({
          component: mod.default
        })
      })
    }
  }
  return loadComponents
}
