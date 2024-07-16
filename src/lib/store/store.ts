import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./features/auth/authSlice";
import drawerReducer from "./features/drawer/drawerSlice";
import formDialogReducer from "./features/dialog/formDialogSlice";
import productReducer from './features/product/productSlice';
import loaderReducer from './features/loader/loaderSlice';
import notificationReducer from './features/notification/notificationSlice';
import confirmDialogReducer from './features/dialog/confirmDialogSlice';
import categoryReducer from './features/category/categorySlice';
import tagReducer from './features/tagSlice';


export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      drawer: drawerReducer,
      formDialog: formDialogReducer,
      confirmDialog: confirmDialogReducer,
      product: productReducer,
      loader: loaderReducer,
      notification: notificationReducer,
      category: categoryReducer,
      tag: tagReducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
    }),
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']