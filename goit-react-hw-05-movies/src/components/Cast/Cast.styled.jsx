import styled from '@emotion/styled';

export const CastBox = styled.div`
  margin-bottom: 35px;
`;
export const CastList = styled.ul`
  display: flex;
  margin-left: -10px;
  margin-right: -10px;
  flex-wrap: wrap;
`;
export const CastItem = styled.li`
  width: calc((100% - 5 * 20px) / 5);
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
`;
export const CastImg = styled.img`
  min-height: 360px;
  margin-bottom: 10px;
`;
export const CastName = styled.h3`
  margin-bottom: 10px;
`;
export const CastText = styled.p`
  font-size: 16px;
`;
export const CastEmpty = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 50px;
`;
