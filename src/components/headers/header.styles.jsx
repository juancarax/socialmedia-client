import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../people-circle.svg";
import { ReactComponent as SearchIconLogo } from "../../search.svg";

export const HeaderContainer = styled.div`
  height: 7rem;
  font-size: 1.7rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 600px) {
    height: 6rem;
    padding: 1rem;
    margin-bottom: 3rem;
  }
`;

export const LogoSVG = styled(Logo)`
  height: 5rem;
  width: 5rem;
  fill: #79e5f1;
  margin-left: 2rem;
  @media screen and (max-width: 600px) {
    margin-left: 0.7rem;
  }
`;

export const LogoContainer = styled(Link)`
  height: 6rem;
  width: 7rem;
  padding: 0.25rem;
  @media screen and (max-width: 600px) {
    width: 5rem;
    padding: 0;
  }
`;

export const SearchBar = styled.input`
  font-family: inherit;
  font-size: 1.5rem;
  color: #707070;
  background-color: #eeeeee;
  border: none;
  padding: 1rem 2rem;
  border-radius: 100px;
  width: 90%;
  transition: all 0.2s;
  margin-right: -3.25rem;

  &:focus {
    outline: none;
    width: 100;
  }
  &::-webkit-input-placeholder {
    font-weight: 100;
    color: #707070;
  }
`;

export const SearchForm = styled.form`
  flex: 0 0 40%;

  display: flex;
  align-items: center
  justify-content: center
`;

export const SearchButton = styled.button`
  border: none;
  background-color: #eeeeee;

  &:focus {
    outline: none;
  }

  &:active {
    transform: translateY(2px);
  }
`;

export const SearchIcon = styled(SearchIconLogo)`
  height: 2rem;
  width: 2rem;
  fill: #707070;
`;

export const ButtonsContainer = styled.div``;

export const LoggedIn = styled.div`
  display: flex;
`;

export const UserName = styled.div`
  font-family: inherit;
  margin-right: 20px;
  outline: none;
  font-size: 1.7rem;
  padding: 30px 5px;
  color: grey;
  cursor: pointer;
  font-weight: 400;
  @media screen and (max-width: 600px) {
    margin-right: 0.3rem;
    font-size: 1.5rem;
    padding: 35px 5px;
  }
`;
