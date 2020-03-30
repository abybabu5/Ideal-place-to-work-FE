import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';


const DetailPageCarousel = (props) => {
    const placeImages = [
        {
            src: props.place.Pictures[0],
            altText: '',
            caption: '',
            header: '',
            key: '1'
        },
        {
            src: props.place.Pictures[1],
            altText: '',
            caption: '',
            header: '',
            key: '2'
        },
        {
            src: props.place.Pictures[2],
            altText: '',
            caption: '',
            header: '',
            key: '3'
        },
        {
            src: props.place.Pictures[3],
            altText: '',
            caption: '',
            header: '',
            key: '4'
        },
    ];
    return <UncontrolledCarousel items={placeImages} />;
};
export default DetailPageCarousel;
