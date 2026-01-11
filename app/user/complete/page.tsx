'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import HeaderComponents from '@/components/HeaderComponents';
import FooterComponents from '@/components/FooterComponents';
import { useUserFormStore } from '@/stores/useUserFormStore';
import {
  Button,
} from '@mui/material';

export default function CompletePage() {
  
  const router = useRouter();
  const reset = useUserFormStore((s) => s.reset);

  useEffect(() => {
    reset();
  }, [reset]);
  
  return (
    <div>
      <HeaderComponents 
        systemName="顧客管理システム"
        userName="山田 太郎"/>

      <h2>完了画面</h2>

      <p>登録が完了しました</p>

      <Button variant="contained" onClick={() => router.push('/user/input')}>入力画面に戻る</Button>
      <br/>
      <br/>

      <FooterComponents 
        systemName="kobayashi@gmail.co.jp"
      />
    </div>
  );
}