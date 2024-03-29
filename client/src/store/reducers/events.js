export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_EVENTS':
      return action.events;
      
    case 'ADD_EVENT':
      return [...state, action.event]

    default:
      return state
  }
}
