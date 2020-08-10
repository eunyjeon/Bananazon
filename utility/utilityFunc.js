// called when a user clicks checkout btn
export const deleteLocalCart = () => {
  localStorage.removeItem('orderId');
};

// called when a user clicks addToCart btn from SingleProduct and AllProduct to create {"orderId": orderId} in localStorage
export const createLocalCart = (orderId) => {
  if (!('orderId' in localStorage)) {
    localStorage.setItem('orderId', orderId);
  }
};
//adding a checker to see if a User is admin or not
export const isAdmin = (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    const error = new Error(`Nice try, you're not an Admin!`);
    return next(error);
  }
  next();
};
