const initialState = {
  favourite: {
    content: [],
    id: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        favourite: {
          ...state.favourite,
          content: [...state.favourite.content, action.payload],
        },
      };
    case "ADD_ID":
      return {
        ...state,
        favourite: {
          ...state.favourite,
          id: [...state.favourite.id, action.payload],
        },
      };
    case "REMOVE":
      return {
        ...state,
        favourite: {
          ...state.favourite,
          content: state.favourite.content.filter(
            (el) => el !== action.payload
          ),
        },
      };
    case "REMOVE_ID":
      return {
        ...state,
        favourite: {
          ...state.favourite,
          id: state.favourite.id.filter((el) => el !== action.payload),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
