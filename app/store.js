import { configureStore } from '@reduxjs/toolkit'
import selfPublishReducer from '@/Redux/self-publish/self-publish-slice'

export const store = configureStore({
    reducer: {
        selfPublish: selfPublishReducer,
    },
})