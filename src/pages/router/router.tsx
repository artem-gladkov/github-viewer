import {createBrowserRouter,} from "react-router-dom";
import {Main} from "../main";
import {PATHS} from "./constants";

export const appRouter = createBrowserRouter([{
  path: PATHS.MAIN,
  element: <Main/>,
}])
