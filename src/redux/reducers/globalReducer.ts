import { createReducer, createAction } from '@reduxjs/toolkit';


export interface GlobalReducerType {
    isSidebarOpen: boolean;
};

const initialState = {
    isSidebarOpen: false
} as GlobalReducerType;


const openSidebar = createAction('openSidebar');
const closeSidebar = createAction('closeSidebar');
const toggleSidebar = createAction('toggleSidebar');

const globalReducer = createReducer(initialState, (builder) => {
    builder.addCase(openSidebar, (state, action) => {
        state.isSidebarOpen = true;
    });
    builder.addCase(closeSidebar, (state, action) => {
        state.isSidebarOpen = false;
    });
    builder.addCase(toggleSidebar, (state, action) => {
        state.isSidebarOpen = !state.isSidebarOpen;
    });
});

export default globalReducer;