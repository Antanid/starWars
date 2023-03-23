import {
    SWAPI_PEOPLE,
    SWAPI_ROOT,
    GUIDE_IMG_EXTENSION,
    URL_IMG_PERSON
} from './network';

export const getId = (url, category) => {
    if (url) {
        const id = url
            .replace(SWAPI_ROOT + SWAPI_PEOPLE, '')
            .replace(/\//g, '');
            return id
    }
}

export const getPeopleData = (url) => {
    getId(url, SWAPI_PEOPLE)
}

export const getPeopleIdImage = id => `${URL_IMG_PERSON}/${id+GUIDE_IMG_EXTENSION}`