export const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          client: action.client,
          project: action.project,
          startDate: action.startDate,
          dueDate: action.dueDate,
        },
      ];
    case 'delete':
      return state.filter((_, index) => index !== action.index);
    default:
      return state;
  }
};
