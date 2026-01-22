import { getPosts } from '@/app/lib/data';
import { iPost } from '@/app/lib/interfaces';
import Post from '@/app/ui/components/posts/Post';
import NotFound from './not-found';

export default async function Page({ params }: { params: { id: string } }) {
  const posts = await getPosts();
  const post = posts?.find((post) => post.id === params.id) as iPost | undefined;
  return (
    !post ? <NotFound href='/blog/posts' /> :
    <>
      <h1>Post</h1>
      {post && <Post {...post} />}
    </>
  );
}