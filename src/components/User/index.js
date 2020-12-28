import {
  Container,
  Avatar,
  Info
} from '@components/User/styles'

export function User({ user }) {
  return (
    <Container>
      <Avatar src={user.avatar}></Avatar>
      <Info>
        <a>{user.name}</a>
        <span>{user.username}</span>
      </Info>
    </Container>
  );
}