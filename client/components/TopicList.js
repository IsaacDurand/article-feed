import React, {Component} from 'react';
import {connect} from 'react-redux';

class TopicList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>Topic List</h1>
    )
  }
}

// TODO: revisit this function
const mapState = ({data}) => ({data});
export default connect(mapState)(TopicList);
