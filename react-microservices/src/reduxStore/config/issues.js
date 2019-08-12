const ISSUE_ADD = 'ISSUE_ADD';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ISSUE_ADD: {
      return [...state, action.data];
    }
    default:
      return state;
  }
};

const internalAddIssue = (content, state, userId) => ({
  type: ISSUE_ADD,
  data: {
    content,
    state,
    userId,
  },
});

const addIssue = (content, state, userId) => (dispatch) => {
  dispatch(internalAddIssue(content, state, userId));
};

export { addIssue };
export default reducer;