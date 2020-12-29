import {
  Container,
  Header,
  PersonContainer,
  Avatar,
  Info,
  Author,
  Description,
  Song,
  Tag,
  Content,
  VideoContainer,
  Actions,
  Action,
  ButtonContainer,
} from '@components/PostCard/styles';
import Button from '@components/Button';
import ReactPlayer from "react-player/lazy";

export function PostCard({ post }) {

  return (
    <Container>
      <Header>
        <PersonContainer>
          <Avatar src={post?.author?.avatar}></Avatar>
          <Info>
            <Author>
              {post?.author?.username}
              <span>{post?.author?.name}</span>
            </Author>
            <Description>
              <span>{post?.description}</span>
              {post?.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </Description>
          </Info>
        </PersonContainer>
        <ButtonContainer>
          <Button fontSize={14} outlined>
            Seguir
          </Button>
        </ButtonContainer>
      </Header>
      <Content>
        <Song>
          <img src='/images/songIcon.svg'></img>
          <a>{post?.songName}</a>
        </Song>
        <VideoContainer>
          <ReactPlayer
            controls
            loop
            url="https://v77.tiktokcdn.com/76ad556831d0c04bb88aff9620b7323c/5fea9f70/video/tos/useast2a/tos-useast2a-ve-0068c001/fda734a469cd44a2b6b161e33892690f/?a=1233&br=2484&bt=1242&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202012282115470101902182090420A20A&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M3V1NGg0NHBueTMzMzczM0ApOTY0PDlpaDs3Nzs2OmhpPGdeL3IyLS8wNjNfLS1jMTZzc2E2NS00YDMxYl5jNGExNF86Yw%3D%3D&vl=&vr="
            style={{
              maxWidth: '100%',
              borderRadius: '9px',
              background: '#000'
            }}
          />
        </VideoContainer>
      </Content>
      <Actions>
        <Action>
          <img src='/images/heartIcon.svg'></img>
          <a>{post?.likes}</a>
        </Action>
        <Action>
          <img src='/images/bubbleIcon.svg'></img>
          <a>{post?.comments}</a>
        </Action>
        <Action>
          <img src='/images/arrowIcon.svg'></img>
          <a>{post?.replies}</a>
        </Action>
      </Actions>
    </Container>
  );
}