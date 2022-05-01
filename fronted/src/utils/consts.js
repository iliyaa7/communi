// consts for mock data
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';

const users = [
  {
    name: "iliya",
    phone: "0547626322",
    token: 'a'
  },
  {
    name: "ran",
    phone: "0547626324",
    token: 'b'
  },
  {
    name: "almog",
    phone: "0547626323",
    token: 'c'
  },
  {
    name: "dima",
    phone: "0547626321",
    token: 'd'
  },
  {
    name: "yaron",
    phone: "0547626320",
    token: 'e'
  },
];


const columns = [
  { field: 'name', headerName: 'Name', width: 180, editable: true },
  { field: 'age', headerName: 'Age', type: 'number', editable: true },
  {
    field: 'dateCreated',
    headerName: 'Date Created',
    type: 'date',
    width: 180,
    editable: true,
  },
  {
    field: 'lastLogin',
    headerName: 'Last Login',
    type: 'dateTime',
    width: 220,
    editable: true,
  },
];

const rows = [
  [
    {
      id: 1,
      name: randomTraderName(),
      age: 25,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 2,
      name: randomTraderName(),
      age: 36,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 3,
      name: randomTraderName(),
      age: 19,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 4,
      name: randomTraderName(),
      age: 28,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 5,
      name: randomTraderName(),
      age: 23,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
  ],
  [
    {
      id: 1,
      name: randomTraderName(),
      age: 25,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 2,
      name: randomTraderName(),
      age: 36,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 3,
      name: randomTraderName(),
      age: 19,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 4,
      name: randomTraderName(),
      age: 28,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 5,
      name: randomTraderName(),
      age: 23,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
  ],
  [
    {
      id: 1,
      name: randomTraderName(),
      age: 25,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 2,
      name: randomTraderName(),
      age: 36,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 3,
      name: randomTraderName(),
      age: 19,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 4,
      name: randomTraderName(),
      age: 28,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 5,
      name: randomTraderName(),
      age: 23,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
  ],
  [
    {
      id: 1,
      name: randomTraderName(),
      age: 25,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 2,
      name: randomTraderName(),
      age: 36,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 3,
      name: randomTraderName(),
      age: 19,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 4,
      name: randomTraderName(),
      age: 28,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 5,
      name: randomTraderName(),
      age: 23,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
  ],
];


// // function for react-table data
// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// //react-tabel data
// const rowsInfo = [
//   [
//     createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//     createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//     createData("Eclair", 262, 16.0, 24, 6.0),
//     createData("Cupcake", 305, 3.7, 67, 4.3),
//     createData("Gingerbread", 356, 16.0, 49, 3.9),
//   ],

//   [
//     createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//     createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//     createData("Eclair", 262, 16.0, 24, 6.0),
//     createData("Cupcake", 305, 3.7, 67, 4.3),
//     createData("Gingerbread", 356, 16.0, 49, 3.9),
//   ],

//   [
//     createData("iliya", 159, 6.0, 24, 4.0),
//     createData("aviv", 237, 9.0, 37, 4.3),
//     createData("moshe", 262, 16.0, 24, 6.0),
//     createData("anton", 305, 3.7, 67, 4.3),
//     createData("ran", 262, 16.0, 24, 6.0),
//   ],

//   [
//     createData("aaaaa", 159, 6.0, 24, 4.0),
//     createData("bbbb", 237, 9.0, 37, 4.3),
//     createData("cccc", 262, 16.0, 24, 6.0),
//     createData("dddd", 305, 3.7, 67, 4.3),
//     createData("ggggg", 356, 16.0, 49, 3.9),
//   ],
// ];

export { columns, rows, users };
