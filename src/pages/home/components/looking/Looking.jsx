const Looking = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[29rem] px-4 bg-gray-200 text-gray-800">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-4">
        Looking for a Specific Product
      </h1>
      <h2 className="text-lg md:text-xl text-center font-medium mb-6">
        The HubSpot Customer Platform includes six core products:1235
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <img
          className="w-full md:w-1/2 max-w-sm"
          src="https://www.hubspot.com/hs-fs/hubfs/mh-multi-row-1-en@3x.webp?width=764&height=549&name=mh-multi-row-1-en@3x.webp"
          alt="HubSpot Products"
        />
        <p className="text-center max-w-lg text-sm md:text-base leading-relaxed">
          Whether you're looking for tools to manage your marketing, sales,
          customer service, content management, operations, or any other aspect
          of your business, HubSpot has you covered. Each product is designed to
          work together seamlessly, helping you deliver an outstanding experience
          to your customers while achieving your goals.
        </p>
      </div>
    </div>
  );
};


export default Looking;
