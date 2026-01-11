'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import HeaderComponents from '@/components/HeaderComponents';
import FooterComponents from '@/components/FooterComponents';
import { useUserFormStore } from '@/stores/useUserFormStore';
import {
  Button,
  Stack,
} from '@mui/material';

export default function ConfirmPage() {
    
  const router = useRouter();
  const { form } = useUserFormStore();

  const handleSubmit = async () => {
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: form.name, email: form.email, phone: form.phone, age: form.age }),
    });

    if (res.ok) {
      router.push('/user/complete');
    } else {
      alert('登録に失敗しました');
    }
  };

  return (
    <div>
      <HeaderComponents 
        systemName="顧客管理システム"
        userName="山田 太郎"/>
      <h2>確認画面</h2>

      <div>下記の内容でよろしいですか？</div>

      <p>氏名：{form.name}</p>
      <p>メール：{form.email}</p>
      <p>電話番号：{form.phone}</p>
      <p>年齢：{form.age}</p>

      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={() => router.back()}>戻る</Button>
        <Button variant="contained" onClick={handleSubmit}>登録</Button>
      </Stack>
      <br/>
      <br/>
      <FooterComponents 
        systemName="kobayashi@gmail.co.jp"
      />
    </div>
  );
}