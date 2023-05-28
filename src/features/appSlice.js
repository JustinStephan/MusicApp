import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice ({
    name: "name",
    initialState: {
        channelId: null,
        channelName: null
    },
    reducers: {
        setChannelId: (state, action) => {
            state.app += action.payload;
        }
    }
})

export const { setChannelId } = appSlice.actions;

export const selectChannelId = (state) => state.app.channelId;
export const selectChannelNaem = (state) => state.app.channelName;

export default appSlice.reducer;