import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    
    // Here you would typically send an email using your preferred service
    // For example, using SendGrid or Nodemailer
    
    // For now, we'll just log the data
    console.log('Form submission:', body);

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
} 