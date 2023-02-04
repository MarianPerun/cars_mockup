import { Box, Flex, Spacer, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import { baseUrl, fetchApi } from '../../utils/fetchApi';
import ImageScrollBar from "../../components/ImageScrollBar"

const PropertyDetails = ({ propertyDetails: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } }) => (
    <Box maxWidth="1000px" margin="auto" p="4">
        <ImageScrollBar />
        <Box w="full" p="6">
            <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
            2022  | Hyundai | 90,000 km
            </Flex>
            <Box marginTop="2">
                <Text fontSize="lg" marginBottom="2" fontWeight="bold">
                    Hyundai Santa Fe 2022 for sale
                </Text>
                <Text lineHeight="2" color="gray.600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis quam orci. Maecenas pretium ex eu interdum laoreet. In vehicula mi ipsum, eu dapibus lorem iaculis ut. Integer et pharetra felis, vitae posuere arcu. In purus tellus, pharetra at orci non, venenatis ornare velit. Donec congue sem et lectus scelerisque, at venenatis nibh luctus. Aliquam ac lorem tellus. Proin at urna odio. Phasellus euismod sem in rhoncus varius. Sed eu rutrum lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce porttitor turpis ut lacus molestie, quis tempus purus lobortis. Nunc in nulla volutpat, pellentesque libero in, malesuada nibh. Vestibulum sed augue a elit euismod varius feugiat vitae erat. Donec at vehicula mauris.

Aenean tristique, lorem id varius pellentesque, dolor quam venenatis nisi, ut iaculis augue erat vel urna. Donec a aliquam nibh. Quisque non nisl ex. Mauris rhoncus vel risus vel faucibus. Sed fringilla sem velit, quis consequat turpis sollicitudin at. Nulla urna risus, efficitur id venenatis vitae, tempus id risus. Phasellus sit amet est elit. Suspendisse sed diam purus. Quisque malesuada dignissim sem, sit amet facilisis turpis viverra ac. Sed luctus consectetur nisl euismod pretium.

Aliquam condimentum eros lorem, non aliquam libero sodales nec. Etiam dolor enim, sodales ac urna quis, finibus elementum magna. Nam nec urna sit amet diam porta ultricies. Cras sit amet luctus ipsum, ut pharetra lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer aliquam mauris dui, sit amet imperdiet velit pretium sit amet. Suspendisse nec aliquam nunc, eget sodales sapien. Nulla eget ullamcorper nisi.

Integer sapien urna, sollicitudin eu tortor nec, bibendum efficitur ipsum. Vestibulum semper dapibus elit et accumsan. Sed in fermentum orci, ut bibendum augue. Ut accumsan, libero a pulvinar viverra, dui erat pretium massa, id dapibus ex neque in augue. Vivamus id erat at libero pulvinar pretium pretium quis ante. Mauris dapibus et dui in viverra. Proin pretium ut metus ac rutrum. Etiam mi orci, tempor gravida faucibus fermentum, facilisis eu dui. Donec ultricies, est iaculis luctus finibus, felis velit lacinia lectus, eu elementum lectus ante ut neque. In iaculis ullamcorper tellus id sodales. Aenean nec lobortis leo. Donec molestie mauris nisi.

Aliquam et libero suscipit, imperdiet orci sit amet, semper leo. Aliquam erat volutpat. Nam consequat interdum purus, id faucibus diam porttitor quis. Sed commodo consequat dui sed blandit. Quisque vitae ultrices elit. Quisque viverra felis et enim accumsan euismod. Cras vitae tellus posuere massa lobortis blandit. Quisque mi risus, rhoncus vel placerat et, tristique eleifend urna. Suspendisse et tristique nunc, eget ullamcorper urna.
                </Text>
            </Box>
            <Flex flexWrap="wrap" textTransform="uppercase" justifyContent="space-between">
                <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
                    <Text>Type</Text>
                    <Text fontWeight="bold">SUV</Text>
                </Flex>
                <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
                    <Text>Fuel type</Text>
                    <Text fontWeight="bold">Gas</Text>
                </Flex>
                
            </Flex>
        </Box>
    </Box>
)

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

    return {
        props: {
            propertyDetails: data,
        },
    };
}