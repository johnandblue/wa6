export const addEvent = (event) => ({ type: 'ADD_EVENT', event});
export const addEvents = (events) => ({ type: 'ADD_EVENTS', events});


export const getEvents = () => ({
  type: 'API',
  url: '/events',
  config: {
    method: 'GET',
  },
  success: addEvents
});

export const postEvent = (data) => ({
  type: 'API',
  url: '/events',
  config: {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data),
  },
  success: addEvent(data)
});
