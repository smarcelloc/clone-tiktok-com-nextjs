import { Header } from "@components/Header";
import { Sidebar } from "@components/Sidebar";

import {
  Container,
  ContentContainer,
  SidebarContainer
} from "@components/Layout/styles";

export function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <Container>
        <SidebarContainer>
          <Sidebar></Sidebar>
        </SidebarContainer>
        <ContentContainer>{children}</ContentContainer>
      </Container>
    </>
  );
}