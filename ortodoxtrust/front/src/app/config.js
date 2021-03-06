import ListPage from "../containers/list-page";
import PriesthoodList from "../containers/priesthood-list"

export const config = {
    site: 'http://pure.loc',//window.location.origin,
    socials: [
        {
            url: 'https://vk.com/club172766164',
            text: 'ВКонтакте',
            FontAwesomeIcon: 'vk',
        },
        {
            url: 'https://www.instagram.com/central_blag/',
            text: 'Instagram',
            FontAwesomeIcon: 'instagram',
        },
    ],
    footer_sites: [
        {'url': 'http://www.patriarchia.ru/', 'text': 'Официальный сайт Московского Патриархата'},
        {'url': 'http://volgeparhia.ru/', 'text': 'Официальный сайт Волгоградской епархии'},
        {'url': 'http://sobor-aleksandra-nevskogo.ru/', 'text': 'Храм Александра Невского'},
    ],
    contacts: [
        {
            text: 'site@central-blag.ru',
            FontAwesomeIcon: 'envelope',
        },
        {
            text: '+7 (999) 628-84-86, телефон секретаря',
            FontAwesomeIcon: 'phone',
        },
    ],
    listMap: {
        hrams: ListPage,
        holy: ListPage,
        duhovenstvo: PriesthoodList
    },
    categories:{
      CANDLE_MENU: 'candlemenu',
      PARENT_PAGE_OF_CAROUSEL: 'carousel',
      DUHOVENSTVO_CATEGORY: 'duhoventstvolist',
    },
};
