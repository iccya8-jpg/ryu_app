// src/app/lib/Validation.ts

// エラー型
export type ValidationErrors = {
  name?: string;
  email?: string;
  phone?: string;
  age?: string;
};

// 入力値型
type UserForm = {
  name: string;
  email: string;
  phone: string;
  age: string;
};

// バリデーション関数
export const validateUserForm = (form: UserForm): ValidationErrors => {
  const errors: ValidationErrors = {};

  // 氏名
  if (!form.name.trim()) {
    errors.name = '氏名は必須です';
  } else if (form.name.length > 50) {
    errors.name = '氏名は50文字以内で入力してください';
  }

  // メール
  if (!form.email.trim()) {
    errors.email = 'メールアドレスは必須です';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'メールアドレスの形式が正しくありません';
  }

  // 電話番号
  if (!form.phone.trim()) {
    errors.phone = '電話番号は必須です';
  } else if (!/^\d{10,11}$/.test(form.phone)) {
    errors.phone = '電話番号は10〜11桁の数字で入力してください';
  }

  // 年齢
  if (!form.age.trim()) {
    errors.age = '年齢は必須です';
  } else {
    const ageNum = Number(form.age);
    if (Number.isNaN(ageNum)) {
      errors.age = '年齢は数字で入力してください';
    } else if (ageNum < 0 || ageNum > 120) {
      errors.age = '年齢は0〜120の範囲で入力してください';
    }
  }

  return errors;
};
