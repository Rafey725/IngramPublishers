import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [
        'benefits-to-publish',
        '8steps-to-publish',
        'costs-to-publish',
        'pricing-your-book',
        'author-salary',
        'final-tips-to-publish',
    ],
}

export const selfPublishSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        handleScrollTo: (state, action) => {
            console.log(action.payload);
        }
    },
})

// Action creators are generated for each case reducer function
export const { handleScrollTo } = selfPublishSlice.actions

export default selfPublishSlice.reducer