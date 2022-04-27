// consts for mock data

const users = [
  {
    name: 'iliya',
    phone: '0547626322'
  },
  {
    name: 'ran',
    phone: '0547626324'
  },
  {
    name: 'almog',
    phone: '0547626323'
  },
  {
    name: 'dima',
    phone: '0547626321'
  },
  {
    name: 'yaron',
    phone: '0547626320'
  }
]


// function for react-table data
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

//react-tabel data
const rowsInfo = [
  [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ],
  
  [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ],

 [
    createData('iliya', 159, 6.0, 24, 4.0),
    createData('aviv', 237, 9.0, 37, 4.3),
    createData('moshe', 262, 16.0, 24, 6.0),
    createData('anton', 305, 3.7, 67, 4.3),
    createData('ran', 262, 16.0, 24, 6.0),
  ],

  [
    createData('aaaaa', 159, 6.0, 24, 4.0),
    createData('bbbb', 237, 9.0, 37, 4.3),
    createData('cccc', 262, 16.0, 24, 6.0),
    createData('dddd', 305, 3.7, 67, 4.3),
    createData('ggggg', 356, 16.0, 49, 3.9),
  ]
]

export { users, rowsInfo }