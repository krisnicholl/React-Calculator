import { ENDPOINTS, OPERATORS } from '../components/apiConstants';

export const getEndpoint = (operator) => {
  switch (operator) {
    case OPERATORS.ADD:
      return ENDPOINTS.ADD;
    case OPERATORS.SUBTRACT:
      return ENDPOINTS.SUBTRACT;
    case OPERATORS.MULTIPLY:
      return ENDPOINTS.MULTIPLY;
    case OPERATORS.DIVIDE:
      return ENDPOINTS.DIVIDE;
    default:
      return "";
  }
};

export const convertOperatorForAPI = (op) => {
  if (op === OPERATORS.MULTIPLY) {
    return "*";
  }
  return op;
};
