import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";

const PRODUCT_PER_PAGE = 20;

const ProductList = async ({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}) => {
  const wixClient = await wixClientServer();

  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || PRODUCT_PER_PAGE)
    .find();

  return (
    <div className="mt-10 flex flex-wrap justify-between gap-x-8 gap-y-16">
      {res.items.map((product: products.Product) => (
        <Link
          key={product._id}
          href={`/${product.slug}`}
          className="flex w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative h-80 w-full">
            <Image
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              alt=""
              fill
              sizes="25vw"
              className="absolute z-10 rounded-md object-cover transition-opacity duration-500 ease-linear hover:opacity-0"
            />
            {product.media?.items && (
              <Image
                src={product.media?.items[1]?.image?.url || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className="absolute rounded-md object-cover"
              />
            )}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">${product.price?.price}</span>
          </div>
          {product.additionalInfoSections && (
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  product.additionalInfoSections.find(
                    (section: any) => section.title === "shortDesc",
                  )?.description || "",
                ),
              }}
              className="text-sm text-gray-500"
            ></div>
          )}
          <button className="w-max rounded-2xl px-4 py-2 text-xs ring-1 ring-softRed hover:bg-softRed hover:text-white">
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
