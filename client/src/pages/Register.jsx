import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';
import { publicRequest } from '../requestMethods';
import { useNavigate } from 'react-router-dom';
import { set } from 'immer/dist/internal';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: '75%' })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (password !== confirmPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  }, [password, confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!passwordError) {
      try {
        await publicRequest.post('/auth/register', { name, email, password });
        setName('');
        setPassword('');
        setEmail('');
        navigate('/login');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder='username'
            type='text'
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder='email'
            type='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder='password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder='confirm password'
            type='password'
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>

          <Button>CREATE</Button>
        </Form>
        <Link to='/login'>Already have an account? Login</Link>
        {passwordError && (
          <p>Your password does not match, please try again!</p>
        )}
      </Wrapper>
    </Container>
  );
};

export default Register;
