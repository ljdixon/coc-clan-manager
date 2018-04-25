import React, { Component } from 'react';
import MemberSelect from "../components/MemberSelect";

class MemberSelectContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MemberSelect size={this.props.size} members={this.props.members} onChange={this.props.onChange} />
      </div>
    );
  }
}

export default MemberSelectContainer;