import { Terminal } from 'lucide-react';

export const SystemFooter = () => {
  return (
    <footer className="bg-zinc-950 border-t-2 border-zinc-800 text-zinc-500 font-mono py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
            <Terminal size={20} />
            SYSTEM_LOGS
          </h3>
          <div className="bg-black border border-zinc-800 p-4 h-40 overflow-hidden text-xs font-mono text-green-500 opacity-70">
            <p>{`> INITIALIZING RENDER...`}</p>
            <p>{`> LOADING ASSETS... OK`}</p>
            <p>{`> DETECTING INTELLIGENCE... NOT FOUND`}</p>
            <p>{`> GENERATING EXCUSES... DONE`}</p>
            <p>{`> FATAL ERROR: TOO MUCH SWAG`}</p>
            <p>{`> REBOOTING...`}</p>
            <p>{`> ...`}</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-white text-lg font-bold mb-4 uppercase">Directories</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-500 cursor-pointer">{`> HOME`}</li>
            <li className="hover:text-red-500 cursor-pointer">{`> SHOP`}</li>
            <li className="hover:text-red-500 cursor-pointer">{`> ABOUT_US (CORRUPTED)`}</li>
            <li className="hover:text-red-500 cursor-pointer">{`> TERMS_OF_SERVICE.TXT`}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-bold mb-4 uppercase">Connect</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-cyan-400 cursor-pointer">{`> TWITTER / X`}</li>
            <li className="hover:text-cyan-400 cursor-pointer">{`> GITHUB`}</li>
            <li className="hover:text-cyan-400 cursor-pointer">{`> DISCORD`}</li>
            <li className="hover:text-cyan-400 cursor-pointer">{`> EMAIL: NULL@VOID.COM`}</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-zinc-900 text-xs text-center flex flex-col gap-2">
        <p>© 2024 Tril$oft. ALL RIGHTS RESERVED.</p>
        <p className="text-zinc-700">MEMORY LEAK DETECTED AT 0x000000</p>
      </div>
    </footer>
  );
};
