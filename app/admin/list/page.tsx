import UserListClient from './UserListClient';

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  age: number;
  created_at: string;
  updated_at: string;
};

export default async function UserListPage() {
  const res = await fetch('http://localhost:3000/api/users', {
    cache: 'no-store',
  });

  const users: User[] = await res.json();

  return <UserListClient users={users} />;
}