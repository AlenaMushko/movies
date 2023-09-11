import {useEffect, useState} from 'react';
import {PiArrowFatLineLeftThin, PiArrowFatLineRightThin} from 'react-icons/pi';
import {Flex} from "@chakra-ui/react";

import {ArrowBtn} from "../ScrollToTopButton/ArrowBtn";
import {PageNumbers} from "./PageNumbers";


export const Pagination = ({page, totalPages, setCurrentPage}) => {
    const [myPage, setMyPage] = useState(page);
    let showPages = totalPages > 500 ? 500 : totalPages;

    useEffect(() => {
        setMyPage(page)
    }, [page])

    const handleNextPage = () => {
        if (myPage < totalPages) {
            setMyPage(prevPage => prevPage + 1);

        }
    };

    const handlePrevPage = () => {
        setMyPage(prevPage => prevPage - 1);
        setCurrentPage(myPage);
    };

    const handleChangePage = (pageNumber) => {
        setMyPage(pageNumber);
        setCurrentPage(myPage);
    };

    useEffect(() => {
        setCurrentPage(myPage);
        window.scrollTo(0, 0);
    }, [myPage, setCurrentPage])

    return (
        <Flex justifyContent="center" gap='4vw' pb={10}>
            <ArrowBtn arrow={<PiArrowFatLineLeftThin style={{fontSize: 25}}/>}
                      onClick={handlePrevPage}
                      isActive={myPage > 1}/>

            <PageNumbers currentPage={myPage} totalPages={totalPages} onChangePage={handleChangePage}/>

            <ArrowBtn arrow={<PiArrowFatLineRightThin style={{fontSize: 25}}/>}
                      onClick={handleNextPage}
                      isActive={myPage !== showPages}/>
        </Flex>
    );
};

