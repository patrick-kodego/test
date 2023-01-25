import {jokeSourceURL} from './const';

export const getJoke = () => {
    return fetch(jokeSourceURL)
}