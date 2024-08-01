import { FilterValuesType } from "../App";

export const filtrReducer = (
  state: FilterValuesType,
  action: FilterReducerType,
): FilterValuesType => {
  switch (action.type) {
    case "CHANGE-FILTER":
      return action.payload.filter;
    default:
      return state;
  }
};

type FilterReducerType = SetFilterActionType;

type SetFilterActionType = {
  type: "CHANGE-FILTER";
  payload: {
    filter: FilterValuesType;
  };
};

export const changeFilterAC = (
  filter: FilterValuesType,
): SetFilterActionType => {
  return { type: "CHANGE-FILTER", payload: { filter } } as const;
};
