import { notFound } from 'next/navigation';
// import { posts } from '@/app/lib/placeholder-data';
import { getPosts } from '@/app/lib/data';
import { iPost } from '@/app/lib/interfaces';
import Post from '@/app/ui/components/posts/Post';

export default async function Page({ params }: { params: { id: string } }) {
  const posts = await getPosts() as iPost[] | undefined;
  const { id } = await params;
  const post = posts?.find((post: iPost) => post.id === id);
  
  if (!post) {
    notFound();
  }
  return (
    <>
      <h1>Post</h1>
      {post && <Post {...post} />}
    </>
  );
}
