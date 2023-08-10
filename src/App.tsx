import  { useState, FormEvent } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { fetchUser } from './redux/user/operationUser';
import {
  getUser,
  getLoaderStatus,
} from './redux/selectors';
import { Loader } from './components/Loader';
import { UserCart } from './components/UserCart';
import styled from 'styled-components';


function App() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const userState = useSelector(getUser);
  const isLoaderActive = useSelector(getLoaderStatus);
 
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!!inputValue){
    getData(inputValue)
    setInputValue('')
    }
  };


  const getData = (user: string) => {
    const payload = user;
    const action = fetchUser(payload);
    dispatch(action as any);
  };
  

  return (
    <Wrapper>
      <h1>Search Github users</h1>
      <form onSubmit={handleSubmit}>
        <SLabel>
          Who are we looking for?
          <SInput
            type="text"
            value={inputValue}
            placeholder="UserName"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </SLabel>
        <button type="submit">Search</button>
      </form>
       {isLoaderActive && <Loader />}
       {!!userState.user && Object.keys(userState.user).length !== 0 &&
           <UserCart user={userState.user}/>}
       {!userState.user  &&
          <h3>No such user</h3>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  background-color: #eeccb1;
  min-height: 100vh;
  height: 100%;
  padding: 20px;
`;

const SLabel = styled.label`
  margin-right: 10px;
`
const SInput = styled.input`
  margin-left: 10px;
`

export default App;
