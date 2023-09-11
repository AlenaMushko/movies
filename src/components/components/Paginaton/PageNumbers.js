import {Button, Flex} from "@chakra-ui/react";

import {ArrowBtn} from "../ScrollToTopButton/ArrowBtn";

export const PageNumbers = ({currentPage, totalPages, onChangePage}) => {
    const pagesToShow = 3;
    let showPages = totalPages > 500 ? 500 : totalPages;

    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(showPages, startPage + pagesToShow - 1);

    if (endPage - startPage < pagesToShow - 1) {
        startPage = Math.max(1, endPage - pagesToShow + 1);
    }

    const showStart = startPage > 1;
    const showEnd = endPage < showPages;

    const pageNumbers = Array.from({length: endPage - startPage + 1}, (_, index) => startPage + index);

    const buttonStyles = {
        bg: "#22559c",
        color: "rgb(253, 253, 253)",
        transition: "background-color 300ms",
    };

    return (
        <Flex justifyContent="center" gap="2vw">
            {showStart && (
                <ArrowBtn
                    arrow={1}
                    onClick={() => onChangePage(1)}
                    isActive={currentPage === 1}
                    disabled={currentPage <= 1}
                    styles={currentPage === 1 ? buttonStyles : undefined}
                />
            )}
            {showStart && <Button bg="transparent" disabled>...</Button>}
            {pageNumbers.map((pageNumber) => (
                <ArrowBtn
                    key={pageNumber}
                    arrow={pageNumber}
                    onClick={() => onChangePage(pageNumber)}
                    isActive={currentPage === pageNumber}
                    styles={currentPage === pageNumber ? buttonStyles : undefined}
                />
            ))}
            {showEnd && <Button bg="transparent" disabled>...</Button>}
            {showEnd && (
                <ArrowBtn
                    arrow={showPages}
                    disabled={currentPage >= showPages}
                    onClick={() => onChangePage(showPages)}
                    isActive={currentPage === showPages}
                    styles={currentPage === showPages ? buttonStyles : undefined}
                />
            )}
        </Flex>
    );
};
