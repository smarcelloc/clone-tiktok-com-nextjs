import { Container, Avatar, Info } from './styles';

export function User({ user }) {
  return (
    <Container>
      <Avatar src={user.avatar}></Avatar>
      <Info>
        <a href="#" style={{ color: 'inherit' }}>{user.name}</a>
        <span>{user.username}</span>
      </Info>
    </Container>
  );
}