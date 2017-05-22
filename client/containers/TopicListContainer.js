import {connect} from 'react-redux';
import {toggleTopic} from '../actions'
import TopicList from '../components/TopicList';

const mapStateToProps = (state) => {
  return {
    topics: state.topics
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTopicClick: (id) => {
      dispatch(toggleTopic(id));
    }
  }
}

const TopicListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicList);

export default TopicListContainer;
