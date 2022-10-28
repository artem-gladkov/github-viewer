import { FC } from 'react'

import styles from './NotFound.module.scss'
import {Button} from "../../shared";
import {useRouteError} from "react-router-dom";
import {PATHS} from "../router/constants";

export const ErrorPage: FC = () => {
    const error = useRouteError()

    return (
        <div className={styles.notFound}>
          <h1>
            {(error as Error).message}
          </h1>

          <Button href={PATHS.MAIN}>
            На главную
          </Button>
        </div>
    )
}

