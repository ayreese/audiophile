import { Product } from "../interface/interfaces";

export const suggestions = (
  currentProduct: Product,
  data: Product[],
): Product[] => {
  const items: Product[] = [];
  const potentialItems = data.filter(
    (item) => item.slug !== currentProduct.slug,
  );
  while (items.length < 3) {
    const productNum = Math.floor(Math.random() * potentialItems.length);
    if (
      items.find(
        (element) => element.slug === potentialItems[productNum].slug,
      ) === undefined
    ) {
      items.push(potentialItems[productNum]);
    }
  }

  return items;
};
