'use client'

import { SitePrimaryFont } from '@/fonts/Fonts';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Center, HStack, Heading, VStack } from '@chakra-ui/react'
import Image from 'next/image';
import React from 'react'


function page() {
  // Shadow Width
  const HEADING_SHADOW_WIDTH = 2;
  const LOGO_SIZE = 400;


  // Requiring the auth0 hook
  const { loginWithRedirect} = useAuth0();
  return (
    <VStack bg={'#09090B'} h={'100vh'} w={'100%'} spacing={0} textAlign={'center'}>
      <Heading>FUCK man</Heading>
    </VStack> 

  )
}

export default page