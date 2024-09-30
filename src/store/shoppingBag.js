import { createSlice } from "@reduxjs/toolkit";

// Počáteční stav
const initialState = {
  items: [],
  notification: false,
}

const shoppingBagSlice = createSlice({
  name: 'shoppingBag', // Název slice, bude sloužit jako prefix při generování názvů akcí
  initialState, // Definice počátečního stavu
  reducers: {
    addToShoppingBag(state, action) {
      const { productId, quantity } = action.payload

      // Hledání, zda produkt s daným productId již existuje
      const existingProduct = state.items.find((item) => item.productId === productId)

      if (existingProduct) {
        // Pokud produkt existuje, zvýší jeho množství o přidané quantity
        existingProduct.quantity += quantity
      } else {
        // Pokud produkt neexistuje, přidá jej do košíku
        state.items.push({ productId, quantity })
      }
    },
    changeQuantity(state, action) {
      const { productId, quantity } = action.payload

      // Hledání, zda produkt s daným productId již existuje
      const existingProduct = state.items.find((item) => item.productId === productId)

      if (quantity > 0) {
        // Pokud je nové množství větší než 0, aktualizuje se
        existingProduct.quantity = quantity
      } else {
        // Pokud je nové množství 0 nebo méně, odstraní se
        state.items = state.items.filter((item) => item.productId !== productId)
      }
    },
    deleteProduct(state, action) {
      const { productId } = action.payload
      // Odstranění produktu z košíku na základě productId
      state.items = state.items.filter((item) => item.productId !== productId)
    },
    // Notifikace pro zobrazení
    showNotification(state) {
      state.notification = true;
    },
    // Notifikace pro skrytí
    hideNotification(state) {
      state.notification = false;
    }
  },
})

// Exportování akcí generovaných slice
export const { addToShoppingBag, changeQuantity, deleteProduct, showNotification, hideNotification } = shoppingBagSlice.actions

// Exportování reduktoru slice, který bude přidán do hlavního Redux store
export default shoppingBagSlice.reducer