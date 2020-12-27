import { Container, ContentContainer, SidebarContainer } from '@components/Layout/styles';

import Header from '@components/Header';
import Sidebar from '@components/Sidebar';

function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <Container>
        <SidebarContainer>
          <Sidebar></Sidebar>
        </SidebarContainer>
        <ContentContainer>
          {children}
        </ContentContainer>
      </Container>
    </>
  )
}

export default Layout;