'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export default function ConfirmPage() {
    
  const router = useRouter();
  const params = useSearchParams();

  const name = params.get('name');
  const email = params.get('email');
  const phone = params.get('phone');
  const age = params.get('age');

  const handleSubmit = async () => {
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, age }),
    });

    if (res.ok) {
      router.push('/user/complete');
    } else {
      alert('登録に失敗しました');
    }
  };

  return (
    <div>
      <h2>確認画面</h2>

      <p>氏名：{name}</p>
      <p>メール：{email}</p>
      <p>電話番号：{phone}</p>
      <p>年齢：{age}</p>

      <button onClick={() => router.back()}>戻る</button>
      <button onClick={handleSubmit}>登録</button>
    </div>
  );
}