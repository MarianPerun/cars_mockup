import { useContext } from "react";
import Image from "next/image";
import { Box, Icon, Flex } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleDown, FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";


import DefaultImage1 from '../assets/images/image1.jpg';
import DefaultImage2 from '../assets/images/image2.jpg';
var defaultImage1 = {id: 1, url: DefaultImage1};
var defaultImage2 = {id: 2, url: DefaultImage2};


var data = [defaultImage1, defaultImage2]

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon
                as={FaArrowAltCircleLeft}
                onClick={() => scrollPrev()}
                fontSize="2xl"
                cursor="pointer"
            />
        </Flex>
    )

}
const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon
                as={FaArrowAltCircleRight}
                onClick={() => scrollNext()}
                fontSize="2xl"
                cursor="pointer"
            />
        </Flex>
    )
}

console.log(data);

const ImageScrollBar = () => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'hidden' }}>
        {data.map((item) => (
            <Box key={item.id} width="910px" itemId={item.id} overflow="hidden" p="1">
                <Image
                    alt=""
                    placeholder="blur"
                    src={item.url}
                    width={1000}
                    height={500}
                    sizes="(max-width:500px) 100px, (max-width):1023px 400px, 1000px"
                />
            </Box>
        ))}
    </ScrollMenu>
)

export default ImageScrollBar;