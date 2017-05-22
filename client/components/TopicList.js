import React from 'react';
import Topic from './Topic';

const TopicList = ({ topics, onTopicClick }) => {
  return (
    <div>
      <h1>Topic List</h1>
      <ul>
        {topics.map(topic =>
          <Topic
            key={topic.id}
            topic={topic}
            onClick={() => onTopicClick(topic.id)}
          />
        )}
      </ul>
    </div>
  )
};

export default TopicList;
