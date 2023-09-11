import {Container, IconButton, Input, InputGroup, InputRightElement} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";

export const SearchMovies = ({handleSearch, inputValue, setInputValue}) => {

    return (
        <Container pt={10}>
            <InputGroup size='md'>
                <Input
                    id="search-input"
                    pr='4.5rem'
                    placeholder='Search films'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }}
                />
                <InputRightElement>
                    <IconButton
                        onClick={handleSearch}
                        colorScheme='blue'
                        aria-label='Search database'
                        icon={<SearchIcon/>}
                    />
                </InputRightElement>
            </InputGroup>
        </Container>
    );
};

