import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Layout from '../src/components/Layout';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

const Input = styled.input`
  background-color: #333333;
  border-style:none;
  padding: 15px;
  width: 100%;
  color: white;
  outline-style:none;
`;

const Button = styled.button`
  background-color: ${((props) => (props.disabled ? '#6F6F6F' : ({ theme }) => theme.colors.primary))};
 &:hover{
    background-color:${((props) => (props.disabled ? '#6F6F6F' : '#b23c17'))};
    cursor: ${((props) => (props.disabled ? 'not-allowed' : 'pointer'))};
  }

  padding: 15px;
  width: 100%;
  border-style: none;
  margin-top: 30px;
  color: white;
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  const onChange = (event) => {
    setName(event.target.value);
  };
  console.log(setName);
  return (
    <Layout ogImage={db.bg}>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
              <form onSubmit={function (event) {
                event.preventDefault();

                router.push(`/quiz?name=${name}`);
              }}
              >
                <Input
                  onChange={onChange}
                  placeholder="Diz ai o seu nome"
                />
                <Button type="submit" disabled={name.length === 0}>
                  Jogar
                  {name}
                </Button>
              </form>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Quizes da Galera</h1>

              <p>lorem ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/omariosouto" />
      </QuizBackground>
    </Layout>
  );
}
