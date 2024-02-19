import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    newCollecData: []
}

const newCollectionState = createSlice({
    name: "new collection",
    initialState,
    reducers: {
        getNewcollectins: (state, action) => {
            state.newCollecData = action.payload
        }
    }
})
export const { getNewcollectins } = newCollectionState.actions
export default newCollectionState.reducer
