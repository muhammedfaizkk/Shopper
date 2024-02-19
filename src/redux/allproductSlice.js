    import { createSlice } from "@reduxjs/toolkit";

    const initialState = {
        allproductData: []
    };
    

    const allProductDetailsState = createSlice({
        name: "all products",
        initialState,
        reducers: {
            getAllpro: (state,action) => {
                state.allproductData = action.payload
            }
        }
    })

    export const { getAllpro } = allProductDetailsState.actions
    export default allProductDetailsState.reducer