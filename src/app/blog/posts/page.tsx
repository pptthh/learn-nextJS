import { connectToDB } from '@/app/lib/data';
import { posts } from '@/app/lib/placeholder-data';
import Post from '@/app/ui/components/posts/Post';

export default function async Page() {
  const client = await connectToDB();
  return (
    <>
      <h1>Posts</h1>
      {posts.map((post) => <Post key={post.id} {...post} />)}
    </>)
}