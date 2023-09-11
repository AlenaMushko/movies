// import {
//     CardBody, CardFooter,
//     Flex,
//     Heading,
//     Image, SimpleGrid,
//     Stack,
//     Table,
//     TableContainer,
//     Tbody,
//     Td,
//     Text,
//     Tr
// } from "@chakra-ui/react";
//
// export const MovieDescription = ({
//                                      genres,
//                                      vote_average,
//                                      title,
//                                      original_title,
//                                      tagline,
//                                      release_date,
//                                      overview,
//                                      production_companies
//                                  }) => {
//     function formatDateToMonthYear(dateString) {
//         const date = new Date(dateString);
//         const year = date.getFullYear();
//         const month = date.getMonth();
//
//         const monthNames = [
//             "January", "February", "March", "April", "May", "June",
//             "July", "August", "September", "October", "November", "December"
//         ];
//         const monthName = monthNames[month];
//         const formattedDate = `${monthName} ${year}`;
//
//         return formattedDate;
//     }
//
//     const releaseDate = formatDateToMonthYear(release_date);
//     const vote = vote_average?.toString().slice(0, 3);
//     const genresStr = genres?.map(item => item.name).join(', ');
//
//     const productionArr = production_companies?.map(item => ({
//         logo_path: item.logo_path,
//         name: item.name,
//         id: item.id,
//     }));
//
//     return (
//         <Stack w='80%'>
//             <CardBody>
//                 <Flex mt={5} gap={10}>
//                     <Heading size="md">{title || original_title || ''}</Heading>
//                     <Text fontSize="l" pl={4} color="gray.400">
//                         {releaseDate || ''}
//                     </Text>
//                 </Flex>
//
//                 <TableContainer mb={5}>
//                     <Table variant='simple'>
//                         <Tbody>
//                             <Tr>
//                                 <Td>Vote:</Td>
//                                 <Td>{vote}</Td>
//                             </Tr>
//                             <Tr>
//                                 <Td>Genres:</Td>
//                                 <Td>{genresStr}</Td>
//                             </Tr>
//                             <Tr>
//                                 <Td>Tagline:</Td>
//                                 <Td>{tagline}</Td>
//                             </Tr>
//                         </Tbody>
//                     </Table>
//                 </TableContainer>
//
//                 <Text as='i'>{overview}</Text>
//             </CardBody>
//             <CardFooter bg="rgb(253, 253, 253)">
//                 <SimpleGrid columns={{sm: 3, md: 4, lg: 5}} spacing="2vw">
//                     {production_companies && productionArr.map(({logo_path, name, id}) =>
//                         logo_path !== null
//                             ? (<Image key={id}
//                                       src={`https://image.tmdb.org/t/p/w500${logo_path}`}
//                                       alt={name || ""}
//                                       w="100px"
//                                       borderTopLeftRadius="lg"
//                                       borderTopRightRadius="lg"
//                             />)
//                             : null)}
//                 </SimpleGrid>
//             </CardFooter>
//         </Stack>
//     );
// };
//
export {

}
