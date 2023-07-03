import styled from '@emotion/styled';

export const SortBtn = styled.button`
  min-width: 180px;
  height: 30px;
  margin: ;
  color: rgb(255, 255, 255);
  border-radius: 5px;
  font-family: Lato, sans-serif;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  position: relative;
  background: #0fc1dd;
  border: none;
  z-index: 1;
  box-shadow: rgba(255, 255, 255, 0.5) 2px 2px 2px 0px inset,
    rgba(0, 0, 0, 0.1) 3px 4px 20px 0px, rgba(0, 0, 0, 0.1) 1px 5px 4px 0px;

  &:after {
    position: absolute;
    content: '';
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background-color: #2ba2cd;
    border-radius: 5px;
    box-shadow: rgba(255, 255, 255, 0.5) 2px 2px 2px 0px inset,
      rgba(0, 0, 0, 0.1) 3px 4px 20px 0px, rgba(0, 0, 0, 0.1) 1px 5px 4px 0px;
    transition: all 0.3s ease;
  }
  &:hover {
    color: #fff;
  }

  &:hover:after {
    left: 0;
    width: 100%;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 10px;
`;
