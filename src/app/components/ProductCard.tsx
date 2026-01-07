import { motion } from 'motion/react';
import { ShoppingCart, AlertTriangle } from 'lucide-react';
import { Button } from './ui/button';

interface ProductProps {
  id: string;
  name: string;
  price: string;
  imageSrc: string;
  description: string;
  errorCode: string;
}

export const ProductCard = ({ id, name,VP, price, imageSrc, description, errorCode }: ProductProps & { VP?: string }) => {
  // Fallback for legacy prop if needed, but prefer name
  const displayName = name || VP || "UNKNOWN_ITEM";
  
  return (
    <div className="group relative border-2 border-white bg-black p-4 flex flex-col h-full hover:bg-zinc-900 transition-colors">
      {/* Decorative Corner Markers */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-red-600 -translate-x-1 -translate-y-1" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-red-600 translate-x-1 translate-y-1" />
      
      {/* Error Badge */}
      <div className="flex justify-between items-start mb-4 border-b border-zinc-800 pb-2">
        <span className="font-mono text-xs text-red-500 flex items-center gap-1">
          <AlertTriangle size={12} />
          {errorCode}
        </span>
        <span className="font-mono text-xs text-zinc-500">ID: {id}</span>
      </div>

      {/* Image Container with Hover Glitch */}
      <div className="relative aspect-square mb-6 overflow-hidden bg-zinc-900 border border-zinc-800">
        <motion.img 
          src={imageSrc} 
          alt={displayName}
          className="w-full h-full object-contain p-4 filter grayscale group-hover:grayscale-0 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        />
        {/* Overlay Grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHNvgge...')] opacity-10 pointer-events-none" />
      </div>

      {/* Product Info */}
      <div className="flex-grow space-y-4">
        <h3 className="font-mono text-2xl font-bold text-white uppercase break-words leading-tight">
          {displayName}
        </h3>
        <p className="font-mono text-sm text-zinc-400 leading-relaxed border-l-2 border-zinc-700 pl-3">
          {description}
        </p>
      </div>

      {/* Actions */}
      <div className="mt-8 pt-4 border-t border-dashed border-zinc-700">
        <div className="flex justify-between items-end mb-4">
          <div className="flex flex-col">
            <span className="text-xs text-zinc-500 font-mono">COST_ANALYSIS</span>
            <span className="text-xl font-mono text-white font-bold">{price}</span>
          </div>
          <div className="text-xs text-right font-mono text-red-500 blink-animation">
            LOW_STOCK_WARNING
          </div>
        </div>

        <Button 
          asChild
          className="w-full bg-white text-black hover:bg-red-600 hover:text-white font-mono rounded-none border-2 border-transparent hover:border-white transition-all duration-0 uppercase font-bold tracking-wider h-12"
        >
          <a 
            href={id === "NULL_PTR_CAP" ? "https://brkset-q4.myshopify.com/products/trucker-caps" : "https://brkset-q4.myshopify.com/products/perfect-its-broken-t-shirt-funny-tech-humor-tee"} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Order Here
          </a>
        </Button>
      </div>
    </div>
  );
};
