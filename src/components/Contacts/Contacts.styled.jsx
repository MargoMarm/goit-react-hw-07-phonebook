import styled from '@emotion/styled';

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 10px;
`;

export const ContactsList = styled.ul`
  list-style: none;
  min-width: 400px;
  margin: 0;
  margin-bottom: 35px;
  box-shadow: 1px 7px 14px 0px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  padding: 25px;
  background-color: white;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 5px groove #73dbeb;
  padding: 10px 0;

`;

export const DeleteBtn = styled.button`
  width: 32px;
  height: 32px;
  margin-left: 10px;
  color: rgb(255, 255, 255);
  border-radius: 5px;
  font-family: Lato, sans-serif;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  position: relative;
  background: #e55146;
  border: none;
  z-index: 1;
  box-shadow: rgba(255, 255, 255, 0.5) 2px 2px 2px 0px inset,
    rgba(0, 0, 0, 0.1) 7px 7px 20px 0px, rgba(0, 0, 0, 0.1) 4px 4px 5px 0px;

  &:after {
    position: absolute;
    content: '';
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background-color: #b33e35;
    border-radius: 5px;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
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
  justify-content: space-evenly;
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
  justify-content: space-evenly;
  margin-bottom: 12px;
`;
export const Message = styled.p`
  font-size: 30px;
  font-weight: 400;
`;
