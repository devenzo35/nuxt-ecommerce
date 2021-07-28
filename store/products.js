export const state = () => ({
  products: [],
})

export const mutations = {
  addProduct(state, product) {
    state.products.push(product)
  },
  loadProducts(state, products) {
    state.products = products
  },
}
