import { ProductCard } from './ProductCard';
import tShirtImg from 'figma:asset/7b2bf9cf48b715ae015a1c97afcacbc3294d476b.png';
import hatImg from 'figma:asset/21a7609b160904790948b73fa2b9ffc340bde596.png';

export const ProductShowcase = () => {
  const products = [
    {
      id: "ERR_404_TEE",
      name: "BROKEN LOGIC TEE",
      price: "$27.99 - $29.99",
      imageSrc: tShirtImg,
      description: "Celebrate the chaotic beauty of high-tech failure. 100% Cotton. 0% Intelligence. Features a minimal tribute to those awe-inspiring moments where the logic breaks so spectacularly.",
      errorCode: "STACK_OVERFLOW"
    },
    {
      id: "NULL_PTR_CAP",
      name: "HEAD_EMPTY TRUCKER",
      price: "$24.69",
      imageSrc: hatImg,
      description: "Keeps the sun out of your eyes while you debug in production. 'Perfect! Its broken' embroidered on foam front. Mesh back for ventilation when your CPU overheats.",
      errorCode: "SEGMENTATION_FAULT"
    }
  ];

  return (
    <div id="AVAILABLE_ASSETS" className="w-full bg-black py-20 px-4 md:px-10 border-b-4 border-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-mono text-white mb-16 border-l-8 border-red-600 pl-6 uppercase">
          Available_Assets
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              {...product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
