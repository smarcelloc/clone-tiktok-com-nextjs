import { Container } from './styles';
import { PostCard } from '@components/PostCard';

export function Feed({ posts }) {
  return (
    <Container>
      {posts.map((post, index) => (
        <PostCard key={index} post={post}></PostCard>
      ))}
    </Container>
  );
}