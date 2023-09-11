// import {useContext, useEffect, useState} from "react";
// import {Card} from "@chakra-ui/react";
//
// import {LoaderContext} from "../../routing/LoaderProvider";
// import {moviesService} from "../../services";
// import {PosterPreview} from "./PosterPreview";
// import {MovieDescription} from "./MovieDescription";
//
// export const MovieInfo = ({movieId}) => {
//
//     const {setIsLoading} = useContext(LoaderContext);
//     const [movie, setMovie] = useState({});
//
//     useEffect(() => {
//         setIsLoading(true);
//         moviesService.getById(movieId)
//             .then((res) => {
//                 setMovie(res.data);
//                 setIsLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Error fetching movies:", error);
//             })
//             .finally(setIsLoading(false));
//     }, [movieId, setIsLoading]);
//
//     const {
//         genres, vote_average, original_title, tagline, adult, title, poster_path,
//         release_date, overview, production_companies
//     } = movie;
//
//     return (
//         <>
//             <Card
//                 direction={{base: 'column', sm: 'row'}}
//                 overflow='hidden'
//                 variant='outline'
//                 boxShadow="0px 8px 43px rgba(34, 178, 218, 0.7)"
//             >
//                 <PosterPreview w="40%" posterPath={poster_path}
//                                secondTitle={original_title} title={title}
//                                adult={adult}/>
//                 <MovieDescription genres={genres} title={title} original_title={original_title}
//                                   vote_average={vote_average} tagline={tagline} release_date={release_date}
//                                   overview={overview} production_companies={production_companies}/>
//             </Card>
//
//         </>
//     );
// };
//
export {}
