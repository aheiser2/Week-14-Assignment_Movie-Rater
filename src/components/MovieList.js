/*  MovieList – a container for all the Movie components and their data.  */

import Argo from '../assets/Argo.jpg';
import Gladiator from '../assets/Gladiator.jpg';
import Titanic from '../assets/Titanic.jpg';

import React from "react";
import Movie from "./Movie";

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [ {
                title: "Argo",
                image: Argo,
                synopsis: "It's about Iran",
                rating: "R",
                reviews: []
            },
            {
                title: "Titanic",
                image: Titanic,
                synopsis: "It's about a boat",
                rating: "PG-13",
                reviews: []
            },
            {
                title: "Gladiator",
                image: Gladiator,
                synopsis: "It's about Rome",
                rating: "R",
                reviews: []
            }]
        };
    };
    render() {
        let movies;

        if(this.state.movies) {
            movies = this.state.movies.map((movie, index) => <Movie key={index} {...movie} />);
        }
        return (
            <div className="d-flex flex-wrap justify-content-center">
                {movies}
            </div>
        )
    }  
}

    