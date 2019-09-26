export default function appReducer(state = { padded: true }, action) {
  switch (action.type) {
    case "SET_PADDED":
      return { ...state, padded: action.padded };
    default:
      return state;
  }
}
