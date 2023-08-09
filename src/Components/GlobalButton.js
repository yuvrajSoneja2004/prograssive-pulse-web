'use client'
import { GlobalTheme } from '@/theme'
import { Button } from '@chakra-ui/react'
import React from 'react'

function GlobalButton({variant , rightIcon  , value}) {


  return (
    <Button variant={variant} rightIcon={rightIcon ? rightIcon : null} bg={GlobalTheme.primary}>{value}</Button>

  )
}

export default GlobalButton