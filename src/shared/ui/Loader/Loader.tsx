import { FC, HTMLProps} from 'react'
import classNames from 'classnames'

import styles from './Loader.module.scss'

export interface LoaderProps extends HTMLProps<any>{}

export const Loader: FC<LoaderProps> = ({className, children, ...otherProps}) => {
    return (
        <div className={classNames(styles.loader, className)} {...otherProps}>
            Загрузка ...
        </div>
    )
}

