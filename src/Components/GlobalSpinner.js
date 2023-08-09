'use client'

import { Center, Spinner } from '@chakra-ui/react'
import React from 'react'

function GlobalSpinner() {
  return (
    <Center h={'100vh'} w={'100%'}>
        <Spinner size={'lg'} thickness='5px'/>
    </Center>
  )
}

export default GlobalSpinner