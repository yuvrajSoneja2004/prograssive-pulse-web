'use client'

import { Box, Center, Spinner } from '@chakra-ui/react'
import React from 'react'

function loading() {
  return (
    <Center w={'100%'} h={'100vh'}>
        <Spinner />

    </Center>
  )
}

export default loading