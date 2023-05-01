import styled from '@emotion/styled';

interface BgContainerProps {
  bgUrl: string;
}

export const BgContainer = styled.div<BgContainerProps>`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.bgUrl}) no-repeat center center fixed;
  background-size: cover;
`;
