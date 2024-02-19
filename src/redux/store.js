import { configureStore } from '@reduxjs/toolkit'
import producrsdataState from './dataSlice'
import newCollectionState from './newCollectins'
import allProductDetailsState from './allproductSlice'

const store = configureStore({
    reducer: {
        productdatas: producrsdataState,
        newCollectionsdata: newCollectionState,
        allProductsData: allProductDetailsState
    }
})
export default store
