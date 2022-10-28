import {FC} from 'react'
import {RepositoriesList} from "../../features/show-repositories";
import {useParams} from "react-router-dom";
import {observer} from 'mobx-react-lite';

export const UserRepositoriesPage: FC = observer(() => {
  const {username = ''} = useParams<{ username: string }>()

  return (
    <RepositoriesList username={username}/>
  )
})
