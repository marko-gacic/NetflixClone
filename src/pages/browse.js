import React from 'react'
import { BrowseContainer } from '../containers/browse'
import { useContent } from '../hooks'
import selectionFilter from '../utils/selection-filter'



export default function Browse() {
    //ubaciti serije i filmove

    const { series } = useContent('series')
    const { films } = useContent('films')
    //ubaciti slajd

    const slides = selectionFilter({ series, films })

    //preneti na browse container
    return <BrowseContainer slides={slides} />

}