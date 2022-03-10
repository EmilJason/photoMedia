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
  font-size: 1.5rem;
  margin: 0.5rem 0;
  color: teal;
  letter-spacing: 2px;
  height: 3rem;
  &:placeholder-shown {
    font-size: 1rem;
  }
`;

export default function Login() {
  return (
    <>
      <Card>
        <Header>Login</Header>
        <InputText
          type="email"
          id="userEmail"
          name="userEmail"
          placeholder="Enter email address"
        />
        <InputText
          type="password"
          id="userPassword"
          name="userPassword"
          placeholder="Enter Password"
        />
      </Card>
    </>
  );
}
