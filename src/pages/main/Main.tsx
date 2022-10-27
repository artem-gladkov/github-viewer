import { FC } from 'react'

export interface MainProps {
}

export const Main: FC<MainProps> = ({
  ...otherProps
}) => {
  return (
    <div {...otherProps}>
        <h1 className='flex'>Поиск</h1>
    </div>
  )
}

