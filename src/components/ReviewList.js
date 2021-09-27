/*  ReviewList – a container inside of a Movie that houses Review components.  */

import React from "react";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

export default class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [ {
                username: "JakeDDD",
                movieReview: "I hated this"
            },
            {
                username: "Hannah289",
                movieReview: "This was awesome!!"
            },
            {
                username: "moviecritic56698",
                movieReview: "WORST MOVIE EVER!!!!!!!!!!!!!"
            }
            ]
        };
    };

    addReview(review) {
        this.setState({
            reviews: [review, ...this.state.reviews]
        });
    }

    render() {
        let reviews;

        if(this.state.reviews) {
            reviews = this.state.reviews.map((review, index) => <Review key={index} {...review} />);
        }
        return (
            <div>
                <div><ReviewForm /></div>
                <div className="d-flex flex-wrap justify-content-center">
                    {reviews}
                </div>
            </div>
        )
    }  
    
}