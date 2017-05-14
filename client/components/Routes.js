import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import ArticleList from './ArticleList';
import TopicList from './TopicList';
import {getAllData} from '../redux/reducer'

const Routes = ({getAllData}) => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
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
