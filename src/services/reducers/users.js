const initialState = {
    users: [
        {id:1, name: 'Oleg Tinkof'},
        {id:2, name: 'Vasya Vakulenko'},
        {id:3, name: 'Petya Ahtung'},
        {id:4, name: 'Sasha Smirnof'},
        {id:5, name: 'Egor Petrucho'}
    ]
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state
        }
    }
}