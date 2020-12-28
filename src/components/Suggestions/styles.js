import styled from 'styled-components';

export const Container = styled.div`
  flex: 0 0 330px;
  width: 330px;
  margin-left: 24px;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const SocialContainer = styled.div`
  margin-bottom: 39px;
  text-align: left;
`;
export const SocialButton = styled.button`
  width: 31px;
  height: 31px;
  margin-right: 15px;
  background-color: transparent;
  border: 0;

`;
export const BoxContainer = styled.div`
  position: relative;
  border: 1px solid rgba(22, 24, 35, 0.12);
  border-radius: 8px;
  height: 380px;
  padding-right: 3px;
  display: flex;
  flex-direction: column;
  margin-bottom: 55px;
`;

export const BoxHeader = styled.h2`
  padding: 24px 16px;
  padding-right: 12px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex: 0 0 auto;
`;
export const BoxContent = styled.div`
  height: calc(100% - 72px);
  overflow: auto;
  cursor: pointer;
  padding-right: 10px;
`;

export const ListUser = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ListRecommendCard = ListUser;

export const ButtonContainer = styled.div`
  width: 95px;
  height: 28px;
  font-weight: 600;
  font-size: 16px;
  margin-left: auto
`;

export const DownloadImage = styled.img`
  width: 170px;
  height: 50px;
  border-radius: 5px;
  margin-bottom: 12px;
`;

// export const SocialContainer = styled.div``;
// export const SocialContainer = styled.div``;
// export const SocialContainer = styled.div``;
// export const SocialContainer = styled.div``;
/* export const ArrowIcon = styled(ArrowForwardIos)`
  margin-left: auto;
  height: 20px;
  width: 14px;
`;
 */
