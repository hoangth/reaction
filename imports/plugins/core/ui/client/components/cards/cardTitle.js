import React, { Component, PropTypes } from "react";
import { Translation } from "../translation";

class CardHeader extends Component {

  render() {
    const { element, ...props } = this.props;

    if (element) {
      return React.cloneElement(element, props);
    }

    return (
      <h3 className="panel-title">
        <Translation defaultValue={this.props.title} i18nKey={this.props.i18nKey} />
        {this.props.children}
      </h3>
    );
  }
}

CardHeader.propTypes = {
  children: PropTypes.node,
  element: PropTypes.node,
  i18nKey: PropTypes.string,
  title: PropTypes.string
};

export default CardHeader;
