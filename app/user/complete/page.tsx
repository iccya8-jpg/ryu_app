'use client';

import { useRouter } from 'next/navigation';

export default function CompletePage() {
  
  const router = useRouter();

  const handleSubmit = async () => {
    router.push('/user/input');
  }

  return (
    <div>
      <h2>完了画面</h2>

      <p>登録が完了しました</p>

      <button onClick={handleSubmit}>入力画面に戻る</button>
    </div>
  );
}