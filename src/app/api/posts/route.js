import { NextResponse } from 'next/server';

import Post from '@/models/Post';
import { connectToDB } from '@/utils/db';

export const GET = async (request) => {
  const url = new URL(request.url);

  const username = url.searchParams.get('username');

  try {
    await connectToDB();

    const posts = await Post.find(username && { username });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    console.log(err.message);
    return new NextResponse('Database Error', { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newPost = new Post(body);

  try {
    await connectToDB();

    await newPost.save();

    return new NextResponse('Post has been created', { status: 201 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};