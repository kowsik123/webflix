"use client";

import { CategoryType, MovieDataType } from '@/types'
import React from 'react'
import Movie from './Movie';
import styled from 'styled-components';

type CategoryPropType = {
    category: CategoryType,
}

const CategoryCont = styled.div`
`;

const CategoryName = styled.h2`
    margin-bottom: 10px;
    padding-left: 20px;
    user-select: none;
`;

const MovieList = styled.div`
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: visible;
    width: 100%;
    padding-left: 20px;
    &::-webkit-scrollbar{
        display: none;
    }
`;

const Category = ({ category }: CategoryPropType) => {
    return category.movieRefList.length <= 1 ? null : (
        <CategoryCont>
            <CategoryName>{category.name}</CategoryName>
            <MovieList>
                {category.movieRefList.map((movieRef: any) => <Movie key={`movie-${movieRef}`} movieRef={movieRef} />)}
            </MovieList>
            <br />
        </CategoryCont>
    );
}

export default Category