'use client';

import { useRouter } from 'next/navigation';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Button, Typography } from '@mui/material';

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  age: number;
  created_at: string;
  updated_at: string;
};

export default function UserListClient({ users }: { users: User[] }) {
  const router = useRouter();

  // DataGrid のカラム定義
  const columns: GridColDef<User>[] = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'name', headerName: '氏名', width: 150 },
    { field: 'email', headerName: 'メール', width: 220 },
    { field: 'phone', headerName: '電話番号', width: 150 },
    { field: 'age', headerName: '年齢', width: 80 },
    {
      field: 'created_at',
      headerName: '作成日時',
      width: 180,
      valueFormatter: (value) =>
        new Date(value as string).toLocaleString(),
    },
    {
      field: 'updated_at',
      headerName: '更新日時',
      width: 180,
      valueFormatter: (value) =>
        new Date(value as string).toLocaleString(),
    },
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        顧客一覧
      </Typography>

      <Box sx={{ height: 500 }}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSizeOptions={[5, 10, 20]}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10, page: 0 },
            },
          }}
          onRowClick={(params) =>
            router.push(`/user/${params.id}`)
          }
        />
      </Box>

      <Box sx={{ mt: 2 }}>
        <Button
          variant="contained"
          onClick={() => router.push('/user/input')}
        >
          新規登録
        </Button>
      </Box>
    </Box>
  );
}
