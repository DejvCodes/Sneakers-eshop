import { createSlice } from "@reduxjs/toolkit";

// Počáteční stav
const initialState = {
  items: [],
  notification: false,
}

const shoppingBagSlice = createSlice({
  name: 'shoppingBag', // Prefix při vytváření názvů akcí
  initialState, // Počáteční stav
  reducers: {
    addToShoppingBag(state, action) {
      const {productId, quantity} = action.payload
      // Hledání produktu v poli 'items' podle productId
      const indexProductId = (state.items).findIndex((item) => {
        return item.productId === productId
      })
      if (indexProductId >= 0) {
        // Pokud produkt existuje, zvýšíme jeho množství
        state.items[indexProductId].quantity += quantity
      } else {
        state.items.push({productId, quantity})
      }
    },
    changeQuantity(state, action) {
      const {productId, quantity} = action.payload
      const indexProductId = (state.items).findIndex((item) => {
        return item.productId === productId
      })
      if (quantity > 0) {
        state.items[indexProductId].quantity = quantity
      } else {
        // delete state.items[indexProductId]
        state.items = (state.items).filter(item => item.productId !== productId)
      }
    },
    deleteProduct(state, action) {
      const {productId} = action.payload
      const indexProductId = (state.items).findIndex((item) => {
        return item.productId === productId
      })      
      if (indexProductId !== -1) {
        state.items = (state.items).filter(item => item.productId !== productId)
      }
    },
    // Notifikace
    showNotification(state) {
      state.notification = true;
    },
    hideNotification(state) {
      state.notification = false;
    }
  },
})

export const {addToShoppingBag, changeQuantity, deleteProduct, showNotification, hideNotification} = shoppingBagSlice.actions
export default shoppingBagSlice.reducer