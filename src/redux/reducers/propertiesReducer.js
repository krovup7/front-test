import {
    ADD_PROPERTY,
    DELETE_PROPERTY,
} from "../types/types";

let initialState = {
    properties: [{
        id: 1,
        name: 'Цвет авто',
        type: 'Dropdown'
    }, {
        id: 2,
        name: 'Год выпуска',
        type: 'Number'
    }, {
        id: 3,
        name: 'Тип топлива',
        type: 'String'
    },
        {
            id: 4,
            name: 'Кузов',
            type: "String",
        }],
    propertiesNames: ['Цвет авто', 'Год выпуска', 'Тип топлива'],
    loading: false,
    error: '',
};

const propertiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROPERTY:
            return {
                ...state, properties: [...state.properties, action.property],
                propertiesNames: [...state.propertiesNames, action.property.name]
            };
        case DELETE_PROPERTY:
            const newProperty = state.properties.filter((property) => property.id !== action.id);
            return {
                ...state, properties: newProperty,
            };
        default:
            return state;
    }
}

export default propertiesReducer;
