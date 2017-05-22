import React from 'react';

const Topic = ({ topic, onClick }) => {
  return (
    <li>
      {topic.name}:
      <a href="#"
         onClick={e => {
           e.preventDefault();
           onClick();
         }}>
         { topic.isSelected ? 'Following' : 'Click to follow' }
      </a>
    </li>
  )
};

export default Topic;
