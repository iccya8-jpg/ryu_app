'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import HeaderComponents from '@/components/HeaderComponents';
import FooterComponents from '@/components/FooterComponents';
import { validateUserForm } from '@/app/lib/Validation';
import type { ValidationErrors } from '@/app/lib/Validation';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
  TextField
} from '@mui/material';

export default function InputPage() {

  const router = useRouter();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');

  // エラー
  const [errors, setErrors] = useState<ValidationErrors>({});

  // 次へボタン押下
  const handleNext = () => {
    console.log('次へボタン押下');
    const newErrors = validateUserForm({
      name,
      email,
      phone,
      age,
    });
  
    setErrors(newErrors);

    if (Object.keys(newErrors).length !== 0) return;
      router.push(
        `/user/confirm?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&age=${encodeURIComponent(age)}`
    );
  };

  return (
    <div>
      <HeaderComponents 
        systemName="顧客管理システム"
        userName="山田 太郎"/>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        minHeight="100vh"
        sx={{ bgcolor: '#f5f5f5', pt: 4 }}
      >
        <Card sx={{ width: 420 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              ユーザー情報入力
            </Typography>

            <Stack spacing={2}>
            <br/>
            <div>氏名</div>
            <TextField
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
            <div>メールアドレス</div>
            <TextField
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
            <div>電話番号</div>
            <TextField
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
            <div>年齢</div>
            <TextField
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            {errors.age && <div style={{ color: 'red' }}>{errors.age}</div>}

            <div>{name}</div>
            <div>{email}</div>
            <div>{phone}</div>
            <div>{age}</div>

            <br/>
            <Button variant="contained" onClick={handleNext}>次へ</Button>
            <br/><br/>
            </Stack>
          </CardContent>
        </Card>
      </Box>
      <FooterComponents 
        systemName="kobayashi@gmail.co.jp"
      />
    </div>
  );
}
