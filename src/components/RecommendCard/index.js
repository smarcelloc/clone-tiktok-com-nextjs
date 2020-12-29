import { Container, Avatar, Info } from './styles';

export function RecommendCard({ recommend }) {
  return (
    <Container>
      <Avatar src={recommend.avatar}></Avatar>
      <Info>
        <a>{recommend.title}</a>
        <span>{recommend.views}</span>
      </Info>
    </Container>
  );
}