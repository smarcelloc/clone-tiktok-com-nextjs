import { User } from "@components/User";
import { people } from '@components/Suggestions/people';
import { itens } from '@components/Suggestions/itens';

import {
  BoxContainer,
  BoxContent,
  BoxHeader,
  Container,
  ListUser,
  SocialButton,
  SocialContainer,
  ButtonContainer,
  ListRecommendCard,
  DownloadImage
} from "@components/Suggestions/styles";

import {
  FacebookIcon,
  PinterestIcon,
  TwitterIcon
} from '@components/Icons'
import Button from "@components/Button";
import RecommendCard from "@components/RecommendCard";

export function Suggestions() {

  return (
    <Container>
      <SocialContainer>
        <SocialButton>
          <FacebookIcon />
        </SocialButton>
        <SocialButton>
          <PinterestIcon />
        </SocialButton>
        <SocialButton>
          <TwitterIcon />
        </SocialButton>
      </SocialContainer>

      <BoxContainer>
        <BoxHeader>Contas Sugeridos</BoxHeader>
        <BoxContent>
          {people.map((person, index) => (
            <ListUser key={index}>
              <User user={person} />
              <ButtonContainer>
                <Button fontSize={14} outlined>
                  Seguir
                  </Button>
              </ButtonContainer>
            </ListUser>
          ))}
        </BoxContent>
      </BoxContainer>


      <BoxContainer>
        <BoxHeader>Descobrir</BoxHeader>
        <BoxContent>
          {itens.map((item, index) => (
            <ListRecommendCard key={index}>
              <RecommendCard recommend={item} />
              <ButtonContainer>
                <Button fontSize={14} outlined>
                  Seguir
                  </Button>
              </ButtonContainer>
            </ListRecommendCard>
          ))}
        </BoxContent>
      </BoxContainer>


      <DownloadImage src='/images/appstore.png'></DownloadImage>
      <DownloadImage src='/images/playstore.png'></DownloadImage>
      <DownloadImage src='/images/amazon.png'></DownloadImage>

    </Container>
  );
}