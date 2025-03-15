export default function ProductDetails({
    params,
  }: {
    params: { productId: string }; // Expecting params as a normal object (not a Promise)
  }) {
    // Extract the productId directly from params
    const { productId } = params;
  
    return (
      <>
        <h1>Details about the Product {productId}</h1>
      </>
    );
  }
  