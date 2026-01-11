import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { userId, password } = await req.json();

  if (userId !== 'admin' || password !== 'password') {
    return NextResponse.json(
      { message: 'Unauthorized' },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ result: 'ok' });

  response.cookies.set('session', 'login', {
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });

  return response;
}
