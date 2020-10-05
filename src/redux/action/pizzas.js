import GotServices from "../../services/services";

export const setLoading = (payload) => ({
    type: 'SET_LOADING',
    payload
})

const gotServices = new GotServices()
let sortData;


export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch(setLoading(false))

    const data = gotServices.getPizzas();

    function sort  (sort)  {
        switch (sort.type) {
            case "popular": {
                return sortData = data.sort((prev, next) => prev.id - next.id)
            }
            case 'price': {
                return sortData = data.sort((prev, next) => prev.price - next.price)
            }
            case 'name': {
                return sortData = data.sort((prev, next) => prev.name === next.name ? 0 : prev.name < next.name ? -1 : 1)
            }
            default :
                return data
        }

    }

    const categoryFilter = sort(sortBy).filter((el) => category === null ? el : el.category === category)
    dispatch(setPizzas(categoryFilter))
}


export const setPizzas = (items) => ({
    type: "SET_PIZZAS",
    payload: items
})



