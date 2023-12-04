import { postToShopify } from "@/utils/shopify";

export default async function handler(_req, res) {
  const data = await postToShopify({
    query: `
    query getProductList {
      products(first: 150) {
        edges {
          node {
            id
            title
            description
            handle
            totalInventory
            featuredImage {
                url
            }
          }
        }
      }
    }
    `,
    variables: {},
  });

  res.status(200).json(data);
}