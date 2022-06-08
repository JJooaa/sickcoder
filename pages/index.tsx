import type { GetStaticProps, NextPage } from "next";
import prisma from "../lib/prisma";

export const getStaticProps: GetStaticProps = async () => {
  const posts = await prisma.post.findMany();

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
};

interface Post {
  content: string;
  title: string;
  id: number;
  createdAt: string;
}

interface Props {
  posts: Post[];
}

const Home: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col items-center gap-6 justify-center h-screen">
      {props.posts.map((post: Post) => (
        <div key={post.id} className="bg-blue-400 rounded-md text-black p-4">
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <span>{post.createdAt}</span>
        </div>
      ))}
    </div>
  );
};

export default Home;
