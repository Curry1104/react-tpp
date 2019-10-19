import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './CollapsibleText.scss';

class CollapsibleText extends Component {
  state = {
    isCollapse: false,
    isNeedCollapse: false
  }

  static propTypes = {
    children: PropTypes.any,
    height: PropTypes.number
  }

  componentDidMount () {
    const dom = ReactDOM.findDOMNode(this);
    const height = this.props.height || 84;
    if(dom.clientHeight > height) {
      this.setState({
        isCollapse: true,
        isNeedCollapse: true
      });
    }
  }

  toggleStatus = () => {
    if (this.state.isNeedCollapse) {
      this.setState((prevState) => ({
        isCollapse: !prevState.isCollapse
      }));
    }
  }
  render () {
    const { isCollapse } = this.state;
    const height = this.props.height || 84;
    const maxHeight = isCollapse ? height : 'none';
    const cls = isCollapse ? 'collapsibleText--collapse' : '';

    return (
      <div className={`collapsibleText ${cls}`} style={{maxHeight}} onClick={this.toggleStatus}>
        {this.props.children}
        {isCollapse && <div className="collapsibleText__label">展开</div> }
      </div>
    );
  }

}

export default CollapsibleText;