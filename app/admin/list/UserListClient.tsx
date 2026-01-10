'use client';

import { useRouter } from 'next/navigation';

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

  return (
    <div>
      <h2>顧客一覧</h2>

      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th>
            <th>氏名</th>
            <th>メール</th>
            <th>電話番号</th>
            <th>年齢</th>
            <th>作成日時</th>
            <th>更新日時</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
              <td>{u.age}</td>
              <td>{u.created_at}</td>
              <td>{u.updated_at}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => router.push('/user/input')}>
        新規登録
      </button>
    </div>
  );
}