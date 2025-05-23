
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface StoreHeaderProps {
  store: {
    name: string;
    logoUrl: string | null;
    bannerUrl: string | null;
  };
  isAdminMode: boolean;
  onToggleAdminMode: () => void;
}

export default function StoreHeader({ 
  store, 
  isAdminMode, 
  onToggleAdminMode 
}: StoreHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center">
            {store.logoUrl ? (
              <img 
                src={store.logoUrl} 
                alt={`Logo da ${store.name}`} 
                className="w-full h-full object-cover" 
              />
            ) : (
              <div className="text-gray-500 text-xl font-bold">
                {store.name.charAt(0)}
              </div>
            )}
          </div>
          <h1 className="font-serif text-xl md:text-2xl font-bold text-[#6B4E71]">
            {store.name}
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onToggleAdminMode}
            className={cn(
              "rounded-full text-sm px-3 py-1",
              isAdminMode ? "bg-pink-100 text-pink-700" : "bg-gray-200 text-gray-700"
            )}
          >
            {isAdminMode ? "Modo Cliente" : "Modo Admin"}
          </Button>
        </div>
      </div>
      <div className="w-full h-48 relative overflow-hidden mb-8">
        <img
          src={store.bannerUrl || "/images/default-banner.jpg"}
          alt="Banner da loja"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "/images/default-banner.jpg";
          }}
        />
      </div>
    </header>
  );
}
