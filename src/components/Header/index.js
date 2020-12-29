import { Logo, LogoIcon, UploadIcon } from "@components/Icons";

import {
  Container,
  Content,
  LogoContainer,
  OptionsContainer,
  Avatar,
} from '@components/Header/styles';

export function Header() {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <LogoIcon />
          <Logo />
        </LogoContainer>
        <OptionsContainer>
          <a href="#" style={{ color: 'inherit' }}>
            <UploadIcon />
          </a>

          <Avatar>
            <img src='/images/avatar.png' />
          </Avatar>
        </OptionsContainer>
      </Content>
    </Container>

  );
}