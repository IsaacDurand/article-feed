import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import ArticleList from './ArticleList';
import TopicListContainer from '../containers/TopicListContainer';

const Routes = () => {
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
        <Route path="/topics" component={TopicListContainer} />
      </div>
    </Router>
  )
};

export default Routes;
