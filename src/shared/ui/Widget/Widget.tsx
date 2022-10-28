import {FC, HTMLProps} from 'react'
import classNames from 'classnames'

import styles from './Widget.module.scss'

export interface WidgetProps extends HTMLProps<HTMLDivElement> {
}

export const Widget: FC<WidgetProps> = ({className, children, ...otherProps}) => {
  return (
    <div className={classNames(styles.widget, className)} {...otherProps}>
      {children}
    </div>
  )
}

