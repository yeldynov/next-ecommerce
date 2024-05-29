import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";

const SinglePage = () => {
  return (
    <div className="relative flex flex-col gap-16 px-4 md:px-8 lg:flex-row lg:px-16 xl:px-32 2xl:px-64">
      {/* IMG */}
      <div className="top-20 h-max w-full lg:sticky lg:w-1/2">
        <ProductImages />
      </div>
      {/* TEXT */}
      <div className="flex w-full flex-col gap-6 lg:w-1/2">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          molestias dolorum et, accusantium molestiae animi excepturi deleniti
          est repellat. Nihil inventore sed dignissimos provident eius est!
          Nihil dignissimos exercitationem ipsa.
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="text-2xl font-medium">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="mb-4 font-medium">Title</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ut eos
            ab cupiditate deleniti at illo id, ullam consectetur nobis culpa,
            tenetur nostrum commodi sapiente non, illum quisquam.
            Necessitatibus, sapiente.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="mb-4 font-medium">Title</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ut eos
            ab cupiditate deleniti at illo id, ullam consectetur nobis culpa,
            tenetur nostrum commodi sapiente non, illum quisquam.
            Necessitatibus, sapiente.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="mb-4 font-medium">Title</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ut eos
            ab cupiditate deleniti at illo id, ullam consectetur nobis culpa,
            tenetur nostrum commodi sapiente non, illum quisquam.
            Necessitatibus, sapiente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
