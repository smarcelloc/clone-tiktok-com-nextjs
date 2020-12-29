import { FacebookIcon, PinterestIcon, TwitterIcon, ArrowIcon } from "@components/Icons";
import {
  Container,
  IconsContainer,
  BoxContainer,
  BoxHeader,
  ButtonContainer,
  Item,
  ItemContainer,
  DownloadImage,
} from './styles';

import { User } from '@components/User';
import Button from '@components/Button';
import { RecommendCard } from '@components/RecommendCard';


import { people } from "./people";
import { items } from "./items";

export function Suggestions() {
  return (
    <Container>
      <IconsContainer >
        <a href="#">
          <FacebookIcon />
        </a>
        <a href="#">
          <PinterestIcon />
        </a>
        <a href="#">
          <TwitterIcon />
        </a>
      </IconsContainer>
      <BoxContainer>
        <BoxHeader>
          <span>Contas sugeridas</span>
        </BoxHeader>
        <ItemContainer>
          {people.map((person, index) => (
            <Item>
              <User key={index} user={person}></User>
              <ButtonContainer>
                <Button fontSize={14} outlined>
                  Seguir
                </Button>
              </ButtonContainer>
            </Item>
          ))}
        </ItemContainer>
      </BoxContainer>
      <BoxContainer>
        <BoxHeader>
          <span>Descobrir</span>
        </BoxHeader>
        <ItemContainer>
          {items.map((item, index) => (
            <Item>
              <RecommendCard key={index} recommend={item}></RecommendCard>
              <ArrowIcon />
            </Item>
          ))}
        </ItemContainer>
      </BoxContainer>
      <DownloadImage src='/images/appstore.png'></DownloadImage>
      <DownloadImage src='/images/playstore.png'></DownloadImage>
      <DownloadImage src='/images/amazon.png'></DownloadImage>
    </Container>
  );
}