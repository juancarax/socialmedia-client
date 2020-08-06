import React, { useContext, useEffect } from "react";
import {
  HeaderContainer,
  LogoContainer,
  LogoSVG,
  ButtonsContainer,
  UserName,
  LoggedIn,
} from "./header.styles";
import CustomButton from "../custom-button/custom-button.component";
import { Link, useHistory } from "react-router-dom";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import Loading from "../loading/loading.component";
import { GET_USER_QUERY } from "../../gql/querys";
import { Image } from "cloudinary-react";
import { AuthContext } from "../../context/auth";

const Header = () => {
  const history = useHistory();
  const { user, logout } = useContext(AuthContext);
  const [getUserInfo, { data, loading, error }] = useLazyQuery(GET_USER_QUERY);
  useEffect(() => {
    if (user) {
      getUserInfo({ variables: { username: user.username } });
    }
  }, [user]);

  const goToUser = () => {
    history.push(`/users/${user.username}`);
  };
  if (loading)
    return (
      <HeaderContainer>
        <Loading small="true" />
      </HeaderContainer>
    );

  return user && data ? (
    <HeaderContainer>
      <LogoContainer to="/">
        <LogoSVG />
      </LogoContainer>
      <LoggedIn>
        <Image
          cloudName="dop6uan6j"
          publicId={
            data.getUser.imageId ? data.getUser.imageId : "frijydof6cc7a25z9m0e"
          }
          width="40"
          height="40"
          responsive
          responsiveUseBreakpoints="true"
          radius="40"
          style={{ margin: "25px 1px", cursor: "pointer" }}
          crop="scale"
          onClick={goToUser}
        />
        <UserName onClick={goToUser}>{user.username}</UserName>
        <UserName
          as="div"
          onClick={() => {
            logout();
            history.push("/");
          }}
        >
          Log out
        </UserName>
      </LoggedIn>
    </HeaderContainer>
  ) : (
    <HeaderContainer>
      <LogoContainer to="/">
        <LogoSVG />
      </LogoContainer>
      <ButtonsContainer>
        <Link to="/register">
          <CustomButton NormalButton={true} to="/register">
            {" "}
            SIGN UP{" "}
          </CustomButton>
        </Link>
        <Link to="/login">
          <CustomButton inverted> SIGN IN </CustomButton>
        </Link>
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;
