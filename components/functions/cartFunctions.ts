export const numberOfItems = (prop: string | any[] | null): number => {
  let num = 0;
  if (prop != null) {
    for (let i = 0; i < prop.length; i++) {
      num += prop[i].quantity;
    }
  }

  return num;
};

export const getPrice = (prop: any[]): number => {
  let totalPrice = 0;
  const cartLength = prop.length;
  if (cartLength > 0) {
    for (let i = 0; i < cartLength; i++) {
      if (prop[i].price) {
        const str = prop[i].price;
        const num = parseFloat(str.replace(/,/g, ""));
        let price = Number(num);
        const totalOfQuantity = price * prop[i].quantity;

        totalPrice += totalOfQuantity;
      }
    }
  }

  return totalPrice;
};
