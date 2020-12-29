import {
  Container,
  MenuItem,
  Following,
  FollowingHeader,
  InfoContainer,
  Links,
} from './styles';

import { HomeIcon, PeopleIcon } from "@components/Icons";
import { User } from '@components/User';

export function Sidebar() {
  return (
    <Container>
      <MenuItem active>
        <HomeIcon />
        <span>Para você</span>
      </MenuItem>
      <MenuItem>
        <PeopleIcon />
        <span>Seguindo</span>
      </MenuItem>
      <Following>
        <FollowingHeader>Suas pricipais contas</FollowingHeader>
        <User
          user={{
            name: 'Will Smith',
            username: 'willsmith',
            avatar: '/images/avatar.png',
          }}
        ></User>
      </Following>
      <InfoContainer>
        <Links margin>
          <a>Início</a>
          <a>Sobre</a>
          <a>Sala de imprensa</a>
          <a>Carreira</a>
          <a>ByteDance</a>
        </Links>
        <Links>
          <a>Ajuda</a>
          <a>Segurança</a>
        </Links>
        <Links>
          <a>Diretrizes da comunidade</a>
          <a>Termos</a>
        </Links>
        <Links margin>
          <a>Privacidade</a>
        </Links>
        <Links margin>
          <a>© 2020 TikTok</a>
        </Links>
      </InfoContainer>
    </Container>
  );
}