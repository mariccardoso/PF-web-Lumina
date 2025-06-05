import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

// Middleware para proteger apenas a rota de criação de post
export function middleware(request) {
  // Só protege a rota de criação de post
  if (request.nextUrl.pathname === '/api/posts/create') {
    const token = request.cookies.get('token')?.value;
    if (!token) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
    }
    try {
      jwt.verify(token, process.env.JWT_SECRET);
      return NextResponse.next();
    } catch (e) {
      return NextResponse.json({ error: 'Token inválido' }, { status: 401 });
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/api/posts/create'],
};
