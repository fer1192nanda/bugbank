import Image from 'next/image'
import styled from 'styled-components'
// import {
//   Container,
//   Header,
//   ContainerLink,
//   ContainerInformations,
//   ContainerInfos,
//   InitialLetterName,
//   LetterName,
//   ContainerText,
//   ContainerAccountNumber,
//   Text,
//   ContainerOptions,
//   ContainerBalance,
//   ContainerButtons,
//   Button,
//   Footer
// } from './styles'

import LinkText from '../../components/LinkText'

const buttons = [
  {
    "href": "/",
    "src": "/imgs/transfer.png"
  },
  {
    "href": "/",
    "src": "/imgs/payments.png"
  },
  {
    "href": "/",
    "src": "/imgs/bank-statement.png"
  },
  {
    "href": "/",
    "src": "/imgs/withdraw.png"
  }
]

function Home() {
  return (
    <Container>

      <Header>
        <Image src='/imgs/bugbank.png' width='150' height='54' />
        <ContainerLink>
          <LinkText href='/'>Sair</LinkText>
        </ContainerLink>
      </Header>

      <ContainerInformations>
        <ContainerInfos>
          <InitialLetterName>
            <LetterName>J</LetterName>
          </InitialLetterName>
          <ContainerText>
            <Text>{`Olá Jhonatas Matos,`}</Text>
            <Text>{`bem vindo ao BugBank :)`}</Text>
          </ContainerText>

          <ContainerAccountNumber>
            <Text>Conta digital: <span>{`123-4`}</span></Text>
          </ContainerAccountNumber>
        </ContainerInfos>
      </ContainerInformations>

      <ContainerOptions>
        <ContainerBalance>
          <Text>Saldo em conta <span>R$ 1.000,00</span></Text>
        </ContainerBalance>
        <ContainerButtons>
          {buttons.map((button) =>
            <Button key={button.src} href={button.href}>
              <Image key={button.src} src={button.src} width='60' height='60' s />
            </Button>
          )}
        </ContainerButtons>
      </ContainerOptions>

      <Footer>
        <Text>Obrigado por escolher o nosso banco</Text>
      </Footer>
    </Container>
  )
}


const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 30% auto;
  grid-template-rows: 7.4rem auto 5.4rem;
  grid-template-areas:
    "header header"
    "profile options"
    "footer footer";

  background-image: linear-gradient(
    to right bottom, ${(props) => props.theme.colors.primary}, ${(props) => props.theme.colors.secondary});

    @media(max-width: 600px){
      display: flex;
      flex-direction: column;
    }
`

const Header = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;

  grid-area: header;

  @media(max-width: 600px){
    margin-top: 1.2rem;
  }
`

const ContainerLink = styled.div`
  display: flex;
  width: 10rem;
  height: 3.4rem;
  border-radius: .6rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  background: ${(props) => props.theme.colors.white};

  @media(max-width: 600px){
    width: 4rem;
    height: 3rem;
  }
`

const ContainerInformations = styled.div`
  width: 100%;
  height: 100%;

  grid-area: profile;
`

const ContainerInfos = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-right: 1px solid ${(props) => props.theme.colors.white};

  @media(max-width: 600px){
    border-bottom: 1px solid ${(props) => props.theme.colors.white};
    border-right: none;
  }
`

const InitialLetterName = styled.div`
  display: flex;
  width: 16rem;
  height: 16rem;
  border-radius: 50%;

  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.colors.black};

  @media(max-width: 760px){
    width: 10rem;
    height: 10rem;
  }
`

const LetterName = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-size: 5.4rem;
`

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  margin-top: 2.4rem;

  align-items: center;
  justify-content: center;
`

const ContainerAccountNumber = styled.div`
  display: flex;
  width: 30rem;
  margin-top: 5rem;

  align-items: center;
  justify-content: center;

  @media(max-width: 600px){
    margin-top: 1.4rem;
  }
`

const Text = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 2rem;
  text-align: center;
  line-height: 1.4;
  margin: 0;

  span {
    font-weight: bold;
  }

  @media(max-width: 760px){
    font-size: 1.4rem;
  }
`

const ContainerOptions = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-area: options;

  grid-template-rows: 2fr 3fr 1fr;
  grid-template-areas:
    "balance"
    "buttons"
    "footer";

  @media(max-width: 600px){
    display: flex;
    flex-direction: column;
    padding: 0;
  }
`

const ContainerBalance = styled.div`
  display:flex;
  width: 100%;
  height: 5.4rem;
  align-items: center;
  justify-content: center;

  grid-area: balance;
`

const ContainerButtons = styled.div`
  display: flex;
  height: 100%;
  padding: 0 12rem;
  align-items: center;
  justify-content: space-between;

  grid-area: buttons;

  @media(max-width: 1100px){
    padding: 0 5rem;
  }

  @media(max-width: 760px){
    padding: 0 3rem;
  }

  @media(max-width: 600px){
    padding: 0 3rem;
    overflow: auto;
  }

`

const Button = styled.a`
  display: flex;
  width: 14rem;
  height: 14rem;
  border-radius: 1.2rem;

  align-items: center;
  justify-content: center;

  border: 1px solid ${(props) => props.theme.colors.white};
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));

  background-image:
    linear-gradient(40deg, ${(props) => props.theme.colors.secondary} 26%, rgba(164, 34, 227, 0) 80%);

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s;
  }

  @media(max-width: 1100px){
    width: 10rem;
    height: 10rem;
  }

  @media(max-width: 600px){
    width: 8rem;
    height: 8rem;
  }
`

const Footer = styled.div`
  display:flex;
  flex-direction: row;
  width: 100%;
  padding: 0 4rem;
  align-items: center;
  justify-content: flex-end;

  grid-area: footer;

  @media(max-width: 600px){
    justify-content: center;
  }
`

export default Home;