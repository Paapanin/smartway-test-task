import { GET_HEROS, PUT_HEROS } from "./constants";

const initialState = {
  loading: false,
  allHeros: [
    {
      name: "",
      eyeColour: "",
      gender: "",
      hairColour: "",
      house: "",
      image: "",
    },
  ],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HEROS:
      return {
        ...state,
        loading: true,
      };
    case PUT_HEROS:
      return {
        ...state,
        loading: false,
        allHeros: action.heros.data,
      };
    default:
      return state;
  }
};

export default Reducer;
