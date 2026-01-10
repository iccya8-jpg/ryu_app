'use client';

import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import HeaderComponents from '@/components/HeaderComponents';
import FooterComponents from '@/components/FooterComponents';
import { validateUserForm } from '@/app/lib/Validation';
import type { ValidationErrors } from '@/app/lib/Validation';

export default function InputPage() {

  const router = useRouter();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [result, setResult] = useState('');

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

  useEffect(() => {
    console.log('初期表示');
    setResult("000");
  }, []);

  useEffect(() => {
    console.log('氏名編集');
    setResult("111");
  }, [name]);

  useEffect(() => {
    console.log('メール編集');
    setResult("222");
  }, [email]);

  return (
    <div>
      <HeaderComponents />
      <br/>
      <div>氏名</div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
      <div>メールアドレス</div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      <div>電話番号</div>
      <input
        type="number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
      <div>年齢</div>
      <input
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
      <div>直前の編集</div>
      <div>{result}</div>
      <br/>
      <button onClick={handleNext}>次へ</button>

      <br/><br/>
      <FooterComponents />
    </div>
  );
}
