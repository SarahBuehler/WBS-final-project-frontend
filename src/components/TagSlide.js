import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "react-bootstrap";
import tags from "./Tags";

const TagSlide = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 8,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: false,
                    dots: false,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="slider">
            <Slider {...settings}>
                {tags.map((item) => (
                    <Button
                        className="tag-button"
                        key={tags.id}
                        d-flex
                        justify-content-around
                        variant="dark"
                        size="sm"
                    >
                        {item.title}
                    </Button>
                ))}
            </Slider>
        </div>
    );
};

export default TagSlide;
