export const numberOfItems = (prop: string | any[] | null): number => {
  let num = 0;
  if (prop != null) {
    for (let i = 0; i < prop.length; i++) {
      num += prop[i].quantity;
    }
  }

  return num;
};

export const getPrice = (prop: any[]): string => {
  let totalPrice = 0;
  const cartLength = prop.length;
  if (cartLength > 0) {
    for (let i = 0; i < cartLength; i++) {
      if (prop[i].price) {
        const totalOfQuantity = prop[i].price * prop[i].quantity;
        totalPrice += totalOfQuantity;
      }
    }
  }
  const newTotal = new Intl.NumberFormat().format(totalPrice);
  return newTotal;
};

export const formatTotal = (total: string, shipping: number): string => {
  const num = parseFloat(total.replace(/,/g, ""));
  let price = Number(num) + shipping;
  const newTotal = new Intl.NumberFormat("eng", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return newTotal;
};

export const productName = (prop: string): string => {
  let re: RegExp = /^([\w\-]+)/;
  const newName = prop.match(re) || "";
  return newName[0];
};
