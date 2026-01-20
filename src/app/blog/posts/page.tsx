import { connectToDB, getPosts } from '@/app/lib/data';
import { posts as _posts } from '@/app/lib/placeholder-data';
import Post from '@/app/ui/components/posts/Post';

const Page = async () => {
  const client = await connectToDB();
  const posts = await getPosts();
  return (
    <>
      {
      client ?
       <p className='text-green-500'>Connected to DB</p> :
       <p className='text-red-500'>Failed to Connect to DB</p>
      }
      <h1>Posts</h1>
      {/* {posts.map((post) => <Post key={post.id} {...post} />)} */}
      <hr />
      {_posts.map((post) => <Post key={post.id} {...post} />)}
    </>
  );
};

export default Page;
