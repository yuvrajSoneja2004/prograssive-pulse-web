'use client'

import GlobalButton from '@/Components/GlobalButton';
import GlobalSpinner from '@/Components/GlobalSpinner';
import { SitePrimaryFont, SiteSecondaryFont } from '@/fonts/Fonts';
import { GlobalTheme } from '@/theme';
import { useAuth0 } from '@auth0/auth0-react'
import { Box, Center, Container, HStack, Heading, Input, Spinner, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'



function page() {
    // "user" object contains info related to user if authinticated
    const {user} = useAuth0();

    // Fixed size of the image
    const IMG_SIZE = 600;

    const [stepCount, setStepCount] = useState(0)

    // Array of Objects that carries info required for logic
    const dots = ["•","•", "•"];

    // No. of times workout state
    const [times , setTimes] = useState(3)

    // Shows the btn
    const [isNotEmpty , setIsNotEmpty] = useState(true);

    const handleSteps = () => {
        
            setStepCount(count => count < 3 ? count + 1 : 1);
        
    }


    if(!user){
        return <GlobalSpinner />
    }
    
    
    

  return (
    // Step 1 
    <Container w={'100%'} h={'100vh'} display={'flex'} alignItems={'center'}>
       <form action="">
       <VStack textAlign={'center'} >
            {/* Step: 1 Component */}
        {
            stepCount === 0 ? <Box>
            <Image  alt='step1' width={IMG_SIZE}  height={IMG_SIZE} src={'/get-started-assets/1.png'}/>
            <Heading fontWeight={'bold'} letterSpacing={'2px'} size={'3xl'} className={SitePrimaryFont.className}>Hello <span style={{color: GlobalTheme.primary}}>{user.name.split(" ")[0]}</span>.</Heading>
            <Text mt={'5'} color={'#fff'} className={SiteSecondaryFont.className}  >Thanks for trying out progressive pulse. I need some details in order to track your workout efficiently</Text>
            </Box> : stepCount === 1 ?  <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
            <Image  alt='step2' width={IMG_SIZE - 100}  height={IMG_SIZE -100} src={'/get-started-assets/2.png'}/>
            <Heading fontWeight={'bold'} letterSpacing={'2px'} size={'3xl'} className={SitePrimaryFont.className}>How many times do you workout?</Heading>
            <div>
            <Input  type='number' mt={'5'} placeholder='Enter here' textAlign={'center'} w={'30%'} required value={times} onChange={(e) => {
               setTimes(e.target.value) 
              
            }}/>
            </div>
            </Box> : stepCount === 2 ? <Box>three</Box> : null
        }
        
       
        <HStack mb={'7'}>
        {
            dots.map((dot , i) => {
                return <Text key={i} color={stepCount === i  ? GlobalTheme.primary : null}>{dot}</Text>
            })
        }
        </HStack>
        {
            !isNotEmpty ? null :  <Box onClick={handleSteps}>
            <GlobalButton variant='solid' value="OK , Next Step" rightIcon={<AiOutlineArrowRight />}  />
            </Box>
        }
    </VStack>
       </form>
    </Container>
  )
}

export default page