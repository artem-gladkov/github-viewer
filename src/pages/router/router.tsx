import {createBrowserRouter} from "react-router-dom";
import {SearchPage} from "../search-page";
import {PATHS} from "./constants";
import {UserPage} from "../user-page";
import {PageLayout} from "../../shared";
import {ErrorPage} from "../error-page";

export const appRouter = createBrowserRouter([{
  element: <PageLayout/>,
  children: [{
    path: PATHS.MAIN,
    element: <SearchPage/>
  }, {
    path: PATHS.USERS,
    element: <UserPage />,
  }],
  errorElement: <ErrorPage />
}])
