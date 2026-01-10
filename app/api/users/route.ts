import { db } from '@/lib/db';

export async function GET() {
  console.log("テーブル情報を取得します");
  const [rows] = await db.query(
    'SELECT id, name, email, phone, age, created_at, updated_at FROM customers'
  );

  return Response.json(rows);
}

export async function POST(req: Request) {
  console.log("テーブル情報を更新します");
  try {
    const body = await req.json();
    const { name, email, phone, age } = body;

    if (!name || !email || !phone || !age) {
      return new Response(
        JSON.stringify({ message: 'invalid parameter' }),
        { status: 400 }
      );
    }

    await db.query(
      'INSERT INTO customers (name, email, phone, age, updated_at, created_at) VALUES (?, ?, ?, ?, ?, ?)',
      [name, email, phone, age, '2026-01-01','2026-01-01']
    );

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ message: 'server error' }),
      { status: 500 }
    );
  }
}
