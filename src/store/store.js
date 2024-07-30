import { legacy_createStore as createStore } from "redux";

import reducer from "./reducers/index.js"; // Import your root reducer

export const myStore = createStore(reducer);


