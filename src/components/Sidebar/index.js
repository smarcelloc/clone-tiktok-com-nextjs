import {
  Menu,
  MenuItem,
  MenuIcon,
  MenuText,
  FollowingMenu,
  FollowingHeader,
  InfoContainer,
  Links
} from '@components/Sidebar/styles';

import {
  HomeIcon, PeopleIcon
} from '@components/Icons';

function Sidebar() {
  return (
    <Menu>
      <MenuItem active>
        <HomeIcon />
        <MenuText>Para Você</MenuText>
      </MenuItem>
      <MenuItem>
        <PeopleIcon />
        <MenuText>Seguindo</MenuText>
      </MenuItem>
      <FollowingMenu>
        <FollowingHeader>Suas principais contas</FollowingHeader>
        {/* <User user={{
          name: 'Will Smith',
          username: 'willsmith',
          avatar: '/images/profile.png'
        }}></User> */}
      </FollowingMenu>
      <InfoContainer>
        <Links>
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
        <Links>
          <a>Privacidade</a>
        </Links>
        <Links margin>
          <a>&copy; 2020 TikTok</a>
        </Links>
      </InfoContainer>
    </Menu>
  )
}
export default Sidebar;