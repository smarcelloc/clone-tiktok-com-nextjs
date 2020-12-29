// require('dotenv').config({
//   path: '.env.local'
// });

import { Feed } from '@components/Feed';
import Layout from '@components/Layout';
import { Suggestions } from '@components/Suggestions';


export default function Index({ posts = [] }) {
  return (
    <Layout>
      <Feed posts={posts}></Feed>
      <Suggestions></Suggestions>
    </Layout>
  );
}

export async function getStaticProps(context) {
  // buscar os dados no mongoDB
  const data = [
    {
      id: 1,
      author: {
        id: 1,
        name: 'Will Smith',
        username: 'willsmith',
        avatar: '/images/profile.png'
      },
      description: 'k2',
      tags: ['youtube', 'clone'],
      songName: 'music',
      likes: 1,
      commnets: 10,
      replies: 1
    },
    {
      id: 2,
      author: {
        id: 1,
        name: 'Will Smith',
        username: 'willsmith',
        avatar: '/images/profile.png'
      },
      description: 'k1',
      tags: ['youtube1', 'clone1'],
      songName: 'music1',
      likes: 1,
      commnets: 10,
      replies: 1
    }
  ];


  return {
    props: {
      posts: data,
    }, // will be passed to the page component as props
  }
}