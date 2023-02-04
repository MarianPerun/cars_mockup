import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import styles from '../styles/Home.module.css'

import DefaultImage from '../assets/images/image1.jpg';

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } }) => (
    <Link href={`/property/${externalID}`} passHref>
        <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0px' justifyContent='flex-start' cursor='pointer' >
            <Box style={{width: '384px', height: '216px', position: 'relative'}}>
                <Image src={DefaultImage}
                    fill
                    alt="car"
                />
            </Box>
            <Box w='full'>
                <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
                    <Flex alignItems='center'>
                        <Text fontWeight='bold' fontSize='lg'>50,000 USD</Text>
                    </Flex>
                </Flex>
                <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
                    2022  | Hyundai | 90,000 km
                </Flex>
                <Text fontSize='lg'>
                    Car for sale
                </Text>
            </Box>
        </Flex>
    </Link>
);

export default Property;