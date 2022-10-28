import {createBrowserRouter} from "react-router-dom";
import {SearchPage} from "../search-page";
import {PATHS} from "./constants";
import {UserPage} from "../user-page";
import {PageLayout} from "../../shared";
import {ErrorPage} from "../error-page";
import {UserRepositoryCommitsPage} from "../user-repository-commits-page";
import {UserRepositoriesPage} from "../user-repositories-page";

export const appRouter = createBrowserRouter([{
  element: <PageLayout/>,
  children: [{
    path: PATHS.MAIN,
    element: <SearchPage/>
  }, {
    path: PATHS.USERS,
    element: <UserPage />,
    children: [{
      path: PATHS.USER_REPOSITORIES,
      element: <UserRepositoriesPage />,
    }, {
      path: PATHS.USER_REPOSITORY_COMMITS,
      element: <UserRepositoryCommitsPage />,
    }]
  }],
  errorElement: <ErrorPage />
}])
