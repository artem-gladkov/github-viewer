import { FC } from 'react'
import classNames from 'classnames'

import styles from './ButtonBack.module.scss'
import {useNavigate} from "react-router-dom";
import { Button } from '..';

export interface ButtonBackProps {
  className?: string
  text?: string
}

export const ButtonBack: FC<ButtonBackProps> = ({className, text, ...otherProps}) => {
    const navigate = useNavigate()

    const onClick = () => {
      navigate(-1)
    }

    return (
        <Button className={classNames(styles.buttonBack, className)} onClick={onClick}>
            Назад
        </Button>
    )
}

