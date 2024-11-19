import { Banner,  MeatJerk, Packing, PigJerk, Sausage } from '../types/Product'

import { api } from './api';

export const ProductsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBanners: builder.query<Banner[], void>({
            query: () => ({
                url: '/banner/',
                method: "GET"
            })
        }),
        getOneBanner: builder.query<Banner, string>({
            query: (id) => ({
                url: `/banner/getOneBanner/${id}`, 
                method: "GET"
            })
        }),
        addBanner: builder.mutation<Banner, FormData>({
            query: (formData) => ({
                url: '/banner/addBanner',
                method: 'POST',
                body: formData,
            })
        }),
        updateBanner: builder.mutation<string, Banner>({
            query: (updatedBanner) => ({
                url: `/banner/updateBanner/${updatedBanner.id}`,
                method: "PUT",
                body: updatedBanner
            })
        }),
        removeBanner: builder.mutation<string, string>({
            query: (id) => ({
                url: `/banner/removeBanner/${id}`,
                method: "DELETE",
            })
        }),


        getAllMeatJerk: builder.query<MeatJerk[], void>({
            query: () => ({
                url: '/meatJerk',
                method: "GET",
            })
        }),
        getOneMeatJerk: builder.query<MeatJerk, string>({
            query:(id)=>({
                url: `/meatJerk/getOneMeatJerk/${id}`,
                method: "GET"
            })
        }),
        addMeatJerk: builder.mutation<MeatJerk, FormData>({
            query: (formData) => ({
                url: `/meatJerk/addMeatJerks`,
                method: "POST",
                body: formData
            })
        }),
        updateMeatJerk: builder.mutation<string, MeatJerk>({
            query: (updatedMeatJerk) => ({
                url: `/meatJerk/updateMeatJerk/${updatedMeatJerk.id}`,
                method: "PUT",
                body: updatedMeatJerk,
            })
        }),
        removeMeatJerk: builder.mutation<string, string>({
            query: (id) => ({
                url: `/meatJerk/removeMeatJerk/${id}`,
                method: "DELETE",
            })
        }),


        getAllPacking: builder.query<Packing[], void>({
            query: () => ({
                url: '/packing',
                method: "GET",
            })
        }),
        getOnePack: builder.query<Packing, string>({
            query:(id)=>({
                url: `/packing/getOnePackage/${id}`,
                method: "GET"
            })
        }),
        addPacking: builder.mutation<Packing, FormData>({
            query: (formData) => ({
                url: `/packing/addPackage`,
                method: "POST",
                body: formData
            })
        }),
        updatePack: builder.mutation<string, Packing>({
            query: (updatedPacking) => ({
                url: `/packing/updatePacking/${updatedPacking.id}`,
                method: "PUT",
                body: updatedPacking
            })
        }),
        removePacking: builder.mutation<string, string>({
            query: (id) => ({
                url: `/packing/removePacking/${id}`,
                method: "DELETE",
            })
        }),

        getAllPigJerks: builder.query<PigJerk[], void>({
            query: () => ({
                url: '/pigJerk',
                method: "GET",
            })
        }),
        getOnePigJerk: builder.query<PigJerk, string>({
            query:(id)=>({
                url: `/pigJerk/getOnePigJerk/${id}`,
                method: "GET"
            })
        }),
        addPigJerks: builder.mutation<PigJerk, FormData>({
            query: (formData) => ({
                url: `/pigJerk/addPigJerks`,
                method: "POST",
                body: formData
            })
        }),
        updatePigJerks: builder.mutation<string, PigJerk>({
            query: (updatedPigJerk) => ({
                url: `/pigJerk/updatePigJerk/${updatedPigJerk.id}`,
                method: "PUT",
                body: updatedPigJerk
            })
        }),
        removePigJerks: builder.mutation<string, string>({
            query: (id) => ({
                url: `/pigJerk/removePigJerk/${id}`,
                method: "DELETE",
            })
        }),
        getAllSausages: builder.query<Sausage[], void>({
            query: () => ({
                url: '/sausage',
                method: "GET",
            })
        }),
        getOneSausage: builder.query<Sausage, string>({
            query:(id)=>({
                url: `/sausage/getOneSausage/${id}`,
                method: "GET"
            })
        }),
        addSausages: builder.mutation<Sausage, FormData>({
            query: (formData) => ({
                url: `/sausage/addSausage`,
                method: "POST",
                body: formData
            })
        }),
        updateSausages: builder.mutation<string, Sausage>({
            query: (updatedSausage) => ({
                url: `/sausage/updateSausage/${updatedSausage.id}`,
                method: "PUT",
                body: updatedSausage
            })
        }),
        removeSausages: builder.mutation<string, string>({
            query: (id) => ({
                url: `/sausage/removeSausage/${id}`,
                method: "DELETE",
            })
        })
    })
})

export const { useAddBannerMutation, useGetBannersQuery, useGetOneBannerQuery,

    useGetOneMeatJerkQuery, useGetOnePackQuery, 
    useGetOneSausageQuery, useGetOnePigJerkQuery,
    useRemoveBannerMutation, useUpdateBannerMutation,
    useGetAllMeatJerkQuery, useAddMeatJerkMutation,
    useRemoveMeatJerkMutation, useUpdateMeatJerkMutation,
    useGetAllPigJerksQuery, useAddPigJerksMutation, useUpdatePigJerksMutation,
    useRemovePigJerksMutation, useGetAllSausagesQuery, useAddSausagesMutation, useUpdateSausagesMutation, useRemoveSausagesMutation,
    useGetAllPackingQuery, useAddPackingMutation, useUpdatePackMutation, useRemovePackingMutation
} = ProductsApi;

export const {
    endpoints:{
        getOneBanner,
        getBanners,
        addBanner,
        updateBanner,
        removeBanner,
        getAllMeatJerk,
        addMeatJerk,
        removeMeatJerk,
        updateMeatJerk,
        getAllPacking,
        addPacking,
        updatePack,
        removePacking,
        getAllPigJerks,
        addPigJerks,
        removePigJerks,
        updatePigJerks,
        getAllSausages,
        addSausages,
        removeSausages,
        updateSausages,
        getOneMeatJerk,
        getOnePack,
        getOnePigJerk,
        getOneSausage
        
    }
} =ProductsApi