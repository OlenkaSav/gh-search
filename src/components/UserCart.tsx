import styled from 'styled-components';

interface User {
    name: string;
    avatar_url: string;
    bio: string;
    html_url: string;
  }
  

export function UserCart({ user }: { user: User }) {
  return (
    <StyledCart  >
        <StyledImg src={user.avatar_url} alt="avatar" />
        <h3>{user.name ? user.name : 'There is no name'}</h3>
        <p>{user.bio ? user.bio : 'There in no bio'}</p>
        <StyledA target="_blank" rel="noopener noreferrer" href={user.html_url}>GitHub</StyledA>
    </StyledCart>

  );
}

const StyledCart = styled.div`
  background-color: #e9c35b;
  align-items: center;
  width: 500px;
  padding: 20px;
  margin: 10px auto;
  box-shadow: 7px 6px 6px 0px rgba(0,0,0,0.72);
-webkit-box-shadow: 7px 6px 6px 0px rgba(0,0,0,0.72);
-moz-box-shadow: 7px 6px 6px 0px rgba(0,0,0,0.72);
`;

const StyledImg = styled.img`
    width: 400px;
    height: auto;
`;

const StyledA = styled.a`
  cursor: pointer;
  align-items: center;
  margin-top: 10px;
`;