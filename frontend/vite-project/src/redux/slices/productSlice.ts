// import {} from
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { ProductsApi } from "../../services/products";
import { Banner, MeatJerk, Packing, PigJerk, Sausage, Chickens } from '../../types/Product';


interface IInitialState {
    banners: Banner[] | null;
    meatJerks: MeatJerk[] | null;
    packings: Packing[] | null;
    pigJerks: PigJerk[] | null;
    sausages: Sausage[] | null;
    chicken: Chickens[] | null;
}

const initialState: IInitialState = {
    banners: null,
    meatJerks: null,
    packings: null,
    pigJerks: null,
    sausages: null,
    chicken: null,
};

const slice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        logout: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(ProductsApi.endpoints.getBanners.matchFulfilled, (state, action) => {
                state.banners = action.payload;
            })
            .addMatcher(ProductsApi.endpoints.getAllMeatJerk.matchFulfilled, (state, action) => {
                state.meatJerks = action.payload;
            })
            .addMatcher(ProductsApi.endpoints.getAllPacking.matchFulfilled, (state, action) => {
                state.packings = action.payload;
            })
            .addMatcher(ProductsApi.endpoints.getAllPigJerks.matchFulfilled, (state, action) => {
                state.pigJerks = action.payload;
            })
            .addMatcher(ProductsApi.endpoints.getAllSausages.matchFulfilled, (state, action) => {
                state.sausages = action.payload;
            })
            .addMatcher(ProductsApi.endpoints.getChickens.matchFulfilled, (state, action) => {
                state.chicken = action.payload;
            });
    }
});

export default slice.reducer;
export const selectProducts = (state: RootState) => state.products;