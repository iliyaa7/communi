import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { rows, columns } from '../../utils/consts';
import { useParams } from 'react-router';


export default function BasicEditingGrid() {
  const { tableId } = useParams();
  const rowsToRender = rows[tableId];

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid
        rows={rowsToRender}
        columns={columns}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </div>
  );
}


