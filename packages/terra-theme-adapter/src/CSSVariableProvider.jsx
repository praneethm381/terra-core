import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * Child content
   */
  children: PropTypes.node.isRequired,
  /**
   * Used to set net theme variables
   */
  variables: PropTypes.object,
};

const defaultProps = {
  variables: {},
};

class CSSVariableProvider extends React.Component {
  componentDidMount() {
    this.updateCSSVariables(this.props.variables);
  }

  componentDidUpdate() {
    this.updateCSSVariables(this.props.variables);
  }

  // eslint-disable-next-line class-methods-use-this
  updateCSSVariables(theme) {
    // Loops through theme object and writes values to style attribute on HTML element
    Object
      .entries(theme)
      .forEach(([key, value]) => document.documentElement.style.setProperty(key, value));
  }

  render() {
    const { children, variables, ...customProps } = this.props;

    return (
      <div {...customProps}>
        {children}
      </div>
    );
  }
}

CSSVariableProvider.propTypes = propTypes;
CSSVariableProvider.defaultProps = defaultProps;

export default CSSVariableProvider;
