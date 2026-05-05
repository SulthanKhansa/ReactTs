interface CategoryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  aosDelay?: string;
}

export const CategoryCard = ({ title, description, imageUrl, aosDelay }: CategoryCardProps) => {
  return (
    <div data-aos="zoom-in" data-aos-delay={aosDelay} className="w-full bg-white flex flex-col group cursor-pointer transition-all duration-300 rounded-xl overflow-hidden shadow-sm hover:shadow-md">
      <div className="overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-auto object-cover mb-4 group-hover:scale-[1.02] transition-transform duration-500" 
        />
      </div>
      <div className="flex flex-col flex-1 text-left px-5 pb-6">
        <h3 className="text-slate-800 text-xl font-bold mb-3">{title}</h3>
        <p className="text-slate-500 text-base leading-relaxed flex-1 mb-6">{description}</p>
        <div>
          <button className="px-5 py-2.5 bg-[#7B2440] text-white text-sm font-bold rounded-lg uppercase tracking-wider hover:bg-[#5a1a2e] transition-colors">
            INFO SELENGKAPNYA
          </button>
        </div>
      </div>
    </div>
  );
};
