import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_REACT_APP_BASE_URL }),
    reducerPath: "adminApi",
    tagTypes: [
        "User",
        "Products",
        "Customers",
        "Transactions",
        "Geography",
        "Sales",
        "Admins",
        "Performance",
        "Dashboard",
    ],
    endpoints: (builds) => ({
        getUser: builds.query({
            query: (id) => `general/user/${id}`,
            providesTags: ["User"]
        }),
        getProducts: builds.query({
            query: () => "client/products",
            providesTags: ["Products"]
        }),
        getCustomers: builds.query({
            query: () => "client/customers",
            providesTags: ["Customers"]
        }),
        getTransactions: builds.query({
            query: ({ page, pageSize, sort, search }) => ({
                url: "client/transactions",
                method: "GET",
                params: { page, pageSize, sort, search }
            }),
            providesTags: ["Transactions"]
        }),
        getGeography: builds.query({
            query: () => "client/geography",
            providesTags: ["Geography"]
        }),
        getSales: builds.query({
            query: () => "sales/sales",
            providesTags: ["Sales"]
        }),
        getAdmins: builds.query({
            query: () => "management/admins",
            providesTags: ["Admins"]
        }),
        getUserPerformance: builds.query({
            query: (id) => `management/performance/${id}`,
            providesTags: ["Performance"]
        }),
        getDashboard: builds.query({
            query: (id) => "general/dashboard",
            providesTags: ["Dashboard"]
        }),
    })
})

export const {
    useGetUserQuery,
    useGetProductsQuery,
    useGetCustomersQuery,
    useGetTransactionsQuery,
    useGetGeographyQuery,
    useGetSalesQuery,
    useGetAdminsQuery,
    useGetUserPerformanceQuery,
    useGetDashboardQuery,
} = api