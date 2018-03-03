import React from 'react';
import propTypes from 'prop-types';
import {Message} from 'semantic-ui-react';

class MessageBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { visible: true }
    }

    handleDismiss = () => {
        this.setState({ visible: false })
    }

  render() {
    if (this.state.visible) {
      return (
          <Message {...this.props}
              onDismiss={this.handleDismiss}
              header={this.props.title}
              content={this.props.message}
              >
          </Message>
      )
    }
    return ('')
  }
};

MessageBar.propTypes = {
    message: propTypes.string
};

export default MessageBar;
