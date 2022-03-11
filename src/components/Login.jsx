import { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  border: solid 1px gray;
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: white;
  margin: auto;
  margin-top: 5%;
  width: 60%;
  display: flex;
  flex-direction: column;
`;
const Header = styled.h4`
  color: gray;
  font-size: 1.5rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
`;
const InputText = styled.input`
  padding: 0.5rem;
  border: solid 1px gray;
  border-radius: 6px;
  outline: none;
  font-size: 1.001rem;
  margin: 0.5rem 0;
  color: teal;
  letter-spacing: 2px;
  height: 3rem;
  &:placeholder-shown {
    font-size: 1rem;
  }
`;
const Button = styled.button`
  padding: 0.6rem 1rem;
  font-size: 1rem;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  border: solid 1px transparent;
  background-color: green;
  border-radius: 8px;
`;

export default function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const onLogin = () => {
    console.log({ userEmail, userPassword });
  };

  return (
    <>
      <Card>
        <Header>Login</Header>
        <InputText
          type="email"
          id="userEmail"
          name="userEmail"
          placeholder="Enter email address"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <InputText
          type="password"
          id="userPassword"
          name="userPassword"
          placeholder="Enter Password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <Button onClick={onLogin}>Login</Button>
      </Card>
    </>
  );
}
