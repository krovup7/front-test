import {
    ADD_ITEM,
    CHANGE_ITEM,
    DELETE_ITEM,
    HIDE_ALERT,
    SHOW_ALERT,
    DELETE_PROPERTY,
    SORT_ITEMS_BY_PRICE
} from "../types/types";



let initialState = {
    items: [
        {
            id: 1,
            name: 'BMW VALLEY LANE',
            price: 500000,
            currency: '$',
            changed: '01.10.20',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHBqE92DytFaue_RhjgIxjdYoffmZJtKRGrA&usqp=CAU',
            title: 'История предумышленного убийства рассказывается самим преступником: и Моцарта, и все происходящее мы видим глазами Сальери. Пьеса начинается с его монолога: «Все говорят: нет правды на земле. Но правды нет и выше». Это похоже на речь обвиняемого. Оказывается, убийство задумано давно, готово и орудие – «последний дар моей Изоры». Но кто такая Изора? Где целых восемнадцать лет Сальери хранил яд – в пузырьке? Поэт Арсений Тарковский считал, что яд был в перстне: «Ты безумна, Изора, безумна и зла. Ты кому подарила свой перстень с отравой?»',
            property: {
                1: ['черный', 'синий'],
                2: 2010,
                3: 'Дизель',
            }
        },
        {
            id: 2,
            name: 'MAZDA DURUN HOUSE',
            price: 1216000,
            currency: '$',
            changed: '01.10.20',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3_MW6xpXIET09246czRhwKNVM02iMyhrqjg&usqp=CAU',
            title: 'Трагедия Пушкина «Моцарт и Сальери» занимает всего десять страниц. О чем она? О зависти или о том, что «гений и злодейство – две вещи несовместные»? Есть ли оправдание Сальери, который, по версии Пушкина, отравил Моцарта?',
            property: {
                1: ['черный', 'синий'],
                2: 2015,
                3: 'Бензин',
            }
        },
        {
            id: 3,
            name: 'Mercedes S550 4matic',
            price: 118000,
            currency: '$',
            changed: '01.10.20',
            photo: 'https://libertycity.ru/uploads/download/gta5_mercedesbenz/fulls/59hd7mlsh4dgasg1oh52uu3o25/15194206609074_7.jpg',
            title: 'Перед нами «теоретическое преступление», то есть совершенное ради идеи. «Нет, никогда я зависти не знал», – говорит Сальери. Настоящий завистник не признает гениальности соперника, а Сальери не сомневается в величии Моцарта, но верит, что его смерть принесет человечеству благо.\n' +
                'На этот же путь встанет и Родион Раскольников. Сальери убивает гения, Раскольников – никому не нужную старуху-процентщицу, но в обоих случаях это злодейство.',
            property: {
                1: ['черный', 'синий'],
                2: 2020,
                3: 'Дизель',
            }
        },
    ],
    alert: null,
    sortbyPrice: false,
    loading: false,
    error: '',
};

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_ITEM:
            const newItem = state.items.filter((item) => item.id !== action.id);
            return {
                ...state, items: newItem,
            };
        case CHANGE_ITEM:
            return {
                ...state, items: state.items.map(item => {
                    if (item.id === action.item.id) {
                        return action.item;
                    }
                    return item;
                })
            };
        case ADD_ITEM:
            return {
                ...state, items: [...state.items, action.item]
            };
        case SORT_ITEMS_BY_PRICE:
            if (!state.sortbyPrice) {
                return {
                    ...state, items: state.items.slice().sort((a, b) => (a.price - b.price)), sortbyPrice: true
                }
            } else {
                return {
                    ...state, items: state.items.slice().sort((a, b) => (b.price - a.price)), sortbyPrice: false
                }
            }
        case SHOW_ALERT:
            return {

                ...state, alert: action.payload
            };
        case HIDE_ALERT:
            return {
                ...state, alert: null
            };
        case DELETE_PROPERTY:
            state.items.map(item => delete item.property[action.id])

        default:
            return state;

    }
}

export default itemsReducer;
