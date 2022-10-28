import {TableColumn} from "../../../shared/ui/Table/TableHeader";

export const COMMITS_LIST_COLUMNS: TableColumn[] = [
  {accessor: 'author', title: 'Автор'},
  {accessor: 'hash', title: 'Хэш'},
  {accessor: 'date', title: 'Дата'},
]
