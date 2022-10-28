import {TableColumn} from "../../../shared/ui/Table/TableHeader";

export const REPOSITORIES_LIST_COLUMNS: TableColumn[] = [
  {accessor: 'title', title: 'Название'},
  {accessor: 'languages', title: 'Язык програмирования'},
  {accessor: 'description', title: 'Описание'},
  {accessor: 'starsCount', title: 'Количество звезд'},
]
