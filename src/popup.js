import * as React from 'react'
import {render} from 'react-dom'

import { Button, ChakraProvider, Container, Heading, Icon, Text } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa'

import './popup.css';

function Popup() {
  const handleReport = () => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      let url = tabs[0].url
      console.log(url)

      const s = new URL('http://rickmortyandreact.vercel.app/')
      s.searchParams.set('r', url)

      chrome.windows.create({
        type: 'popup',
        url: s.href
      })
    })
  }

  return (
    <>
      <Icon as={FaGithub} w={6} h={6} position='absolute' right={4} top={4} />
      <Heading as='h1' size='2xl' className='title'>
        BRENDA
      </Heading>
      <Text>Detecta y reporta FakeNews</Text>
      <Container marginTop={8} className='button-container'>
        <Button onClick={handleReport} colorScheme={'red'}>
          REPORTAR
        </Button>
      </Container>
      <Text position='absolute' textDecoration={'underline'} bottom={4} size='xs'>
        Enviar comentarios
      </Text>
    </>
  )
}

render((
  <ChakraProvider>
    <Popup />
  </ChakraProvider>
),
  document.getElementById('root')
)