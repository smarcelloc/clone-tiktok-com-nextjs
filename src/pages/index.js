import { Feed } from '@components/Feed';
import Layout from '@components/Layout';
import { Suggestions } from '@components/Suggestions';

function Index({ posts = [] }) {
  return (
    <Layout>
      <Feed posts={posts}></Feed>
      <Suggestions></Suggestions>
    </Layout>
  );
}

export default Index;