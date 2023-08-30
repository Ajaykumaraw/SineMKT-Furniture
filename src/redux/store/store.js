import {configureStore} from '@reduxjs/toolkit'

import {addProducts} from '../cart/cartReducer'

export default configureStore({
    reducer : {
        cart:addProducts,
    },
})