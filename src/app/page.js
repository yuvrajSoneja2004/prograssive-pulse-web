'use client'

import { SitePrimaryFont } from '@/fonts/Fonts';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Center, HStack, Heading, Spinner, VStack } from '@chakra-ui/react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'


function page() {
  // Shadow Width
  const HEADING_SHADOW_WIDTH = 2;
  const LOGO_SIZE = 400;
  const {user , logout} = useAuth0();

  // Router to navigate to "/get-started" if user is logged in
  const navigate = useRouter();

  useEffect(() => {
    if(user){
      navigate.push("/get-started");
    }
    

  } , [user])


  // if(user === undefined){
  //   return <Spinner />
  // }

  // Requiring the auth0 hook
  const { loginWithRedirect} = useAuth0();
  return (
    <VStack bg={'#09090B'} h={'100vh'} w={'100%'} spacing={0} textAlign={'center'}>
      <Image    src='/logo.png' alt='logo' width={LOGO_SIZE} height={LOGO_SIZE}/>
        <Heading size='2xl' textShadow={'outline'}  className={SitePrimaryFont.className} color={'#09090B'} css={{textShadow: `-${HEADING_SHADOW_WIDTH}px -${HEADING_SHADOW_WIDTH}px 0 #000, ${HEADING_SHADOW_WIDTH}px -${HEADING_SHADOW_WIDTH}px 0 #000, -${HEADING_SHADOW_WIDTH}px ${HEADING_SHADOW_WIDTH}px 0 #000, ${HEADING_SHADOW_WIDTH}px ${HEADING_SHADOW_WIDTH}px 0 #000`}} letterSpacing={'4px'}><span style={{color: '#fff'}}  >TRACK</span> EVERYING!</Heading>
        <Button variant={'outline'} textTransform={'uppercase'} className={SitePrimaryFont.className} fontSize={'md'} mt={'10'} letterSpacing={'1px'} onClick={() => loginWithRedirect()}>Register</Button>
    </VStack> 

  )
}

export default page