import BookOptionsComp from '@/pages/publish/book-options/BookOptionsComp';
import React from 'react'

export const metadata = {
    title: "Print Book Options: Trim Sizes | IngramPublishers",
    description: "",
    icons: {
        icon: '/IngramLogo.png'
    }
};

const BookBuildingTools = () => {
    return (
        <>
        <BookOptionsComp />
        </>
    )
}

export default BookBuildingTools