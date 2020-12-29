import { Layout } from '@components/Layout';
import { Feed } from '@components/Feed';
import { Suggestions } from '@components/Suggestions';

export default function Index({ posts }) {
  return (
    <Layout>
      <Feed posts={posts}></Feed>
      <Suggestions></Suggestions>
    </Layout>
  );
}