// called when a user clicks checkout btn
export const deleteLocalCart = () => {
  localStorage.removeItem("orderId")
}

// called when a user clicks addToCart btn from SingleProduct and AllProduct to create {"orderId": orderId} in localStorage
export const createLocalCart = (orderId) => {
  if (!("orderId" in localStorage)) {
    localStorage.setItem("orderId", orderId)
  }
}

