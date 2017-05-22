// TODO: remove after adding HTTP requests
let initial = {
  "data": [
    {
      "id": 5,
      "name": "Attention Deficit Hyperactive Disorder (ADHD)",
      "description": null
    },
    {
      "id": 113,
      "name": "Lung Cancer",
      "description": null
    },
    {
      "id": 1,
      "name": "Anxiety Disorder",
      "description": null
    },
    {
      "id": 15,
      "name": "Depression",
      "description": null
    },
    {
      "id": 32,
      "name": "Post Traumatic Stress Disorder (PTSD)",
      "description": null
    },
    {
      "id": 35,
      "name": "Dementia",
      "description": null
    },
    {
      "id": 11,
      "name": "Type 2 Diabetes",
      "description": null
    },
    {
      "id": 59,
      "name": "Autism",
      "description": null
    }
  ]
}

const topic = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_TOPIC':
      if (state.id === action.topicId) {
        return Object.assign({}, state, {
          isSelected: !state.isSelected
        });
      } else {
        return state;
      }
    default:
      return state;
  }
}

const topics = (state = initial.data, action) => {
  switch (action.type) {
    case 'TOGGLE_TOPIC':
      return state.map(t => {
        return topic(t, action);
      });
      return newState;
    default:
      return state;
  }
}

export default topics;
