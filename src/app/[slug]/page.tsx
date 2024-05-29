import ProductImages from "@/components/ProductImages";

const SinglePage = () => {
  return (
    <div className="relative flex flex-col gap-16 px-4 md:px-8 lg:flex-row lg:px-16 xl:px-32 2xl:px-64">
      {/* IMG */}
      <div className="top-20 h-max w-full lg:sticky lg:w-1/2">
        <ProductImages />
      </div>
      {/* TEXT */}
      <div className="w-full flex-col gap-6 lg:w-1/2">TEXTS</div>
    </div>
  );
};

export default SinglePage;
