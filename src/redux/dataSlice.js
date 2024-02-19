import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    producrsdata: []
}

const producrsdataState = createSlice({
    name: "product datas",
    initialState,
    reducers: {
        getProducts: (state, action) => {
            state.producrsdata = action.payload
        }
    }

})

export const { getProducts } = producrsdataState.actions
export default producrsdataState.reducer