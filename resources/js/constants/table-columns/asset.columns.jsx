export const assetListColumns = [
  {
    title: 'Asset code',
    dataIndex: 'asset_code',
    sorter: {},
    defaultSortOrder: 'descend',
    isSearchField: true,
    isDate: false,
  },
  {
    title: 'Asset name',
    dataIndex: 'asset_name',
    sorter: {},
    isSearchField: true,
    isDate: false,
  },
  {
    title: 'Category',
    dataIndex: 'category_name',
    sorter: {},
    isSearchField: false,
    isDate: false,
  },
  {
    title: 'State',
    dataIndex: 'state_name',
    sorter: {},
    isSearchField: false,
    isDate: false,
  },
]

export const assetHistoryColumns = [
  {
    title: 'Date',
    dataIndex: 'assigned_date',
  },
  {
    title: 'Assigned to',
    dataIndex: 'assigned_to',
  },
  {
    title: 'Assigned by',
    dataIndex: 'assigned_by',
  },
  {
    title: 'Returned Date',
    dataIndex: 'returned_date',
  },
]
