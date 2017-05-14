import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import ArticleList from './ArticleList';
import TopicList from './TopicList';
import {getAllData} from '../redux/reducer'

const Routes = ({getAllData}) => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={ArticleList} />
        <Route path="/topics" component={TopicList} />
      </div>
    </Router>
  )
};

// TODO: revisit
const mapState = ({data}) => ({data});
const mapDispatch = {getAllData};

export default connect(mapState, mapDispatch)(Routes);
