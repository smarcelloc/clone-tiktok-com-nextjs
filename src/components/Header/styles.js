import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  background: #fff;
  border-bottom: 1px solid rgba(34, 90, 89, 0.2);
  z-index: 1000;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const LogoContainer = styled.div`
  display: block;
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  flex: 0 0 40px;
  margin-left: 30px;
  position: relative;
  cursor: pointer;
  > img {
    width: 40px;
    height: 40px;
    display: inline-block;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-feature-settings: 'tnum';
    position: relative;
    overflow: hidden;
    color: #fff;
    white-space: nowrap;
    text-align: center;
    vertical-align: middle;
    line-height: 32px;
    border-radius: 50%;
  }
`;