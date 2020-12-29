import { useState } from 'react';
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
  ActionsContainer,
  Actions,
  Action,
  ButtonContainer,
} from './styles';
import Button from '@components/Button';
import { ArrowIcon, BubbleIcon, HeartIcon, PauseIcon, PlayIcon, SongIcon } from '@components/Icons';

import ReactPlay from "react-player/lazy";

export function PostCard({ post }) {
  console.log()
  const [running, setRunning] = useState(false);

  const toggleAction = () => {
    setRunning(!running);
  };

  function IconPlayOrPause() {
    return (running) ? <PauseIcon /> : <PlayIcon />;
  }

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
                <Tag key={index}>#{tag}</Tag>
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
          <SongIcon />
          <a>{post?.songName}</a>
        </Song>
        <VideoContainer onClick={toggleAction}>
          <ReactPlay
            width='100%'
            height='100%'
            loop
            playsinline={true}
            playing={running}
            url={post?.videoUrl} />
          <ActionsContainer>
            <IconPlayOrPause />
          </ActionsContainer>
        </VideoContainer>
      </Content>
      <Actions>
        <Action>
          <HeartIcon />
          <a>{post?.likes}</a>
        </Action>
        <Action>
          <BubbleIcon />
          <a>{post?.comments}</a>
        </Action>
        <Action>
          <ArrowIcon />
          <a>{post?.replies}</a>
        </Action>
      </Actions>
    </Container>
  );
}