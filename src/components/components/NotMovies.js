import {Center, Container, Image, Text} from "@chakra-ui/react";

import errorPage from "../img/error.webp";

export const NotMovies = ({searchQuery}) => {

    return (
        <Container mt={10}>
            <Center fontSize='2xl'>Sorry, but nothing was found for your query -
                <Text as='b' color='tomato'>'{searchQuery}'</Text>
            </Center>
            <Image src={errorPage}
                   alt="Error page"
                   borderRadius={"md"}
                   mt={10}
            />
        </Container>
    );
};

