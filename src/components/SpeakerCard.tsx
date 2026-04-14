interface SpeakerCardProps {
  name: string;
  topic: string;
  job: string;
  imageUrl: string;
  aosDelay?: string;
}

export const SpeakerCard = ({ name, topic, job, imageUrl, aosDelay }: SpeakerCardProps) => {
  return (
    <div data-aos="fade-down" data-aos-delay={aosDelay} className="p-10 w-full h-64 sm:h-64 max-w-md mx-auto rounded-xl text-center bg-white hover:bg-invofest_secondary transition-all border-invofest border-4 relative group shadow-lg shadow-invofest_dark">
      <div className="flex flex-col absolute -top-[7rem] left-0.5 right-0.5 items-center w-full rounded-lg">
        <img src={imageUrl} alt="foto speaker" className="w-52 h-52 rounded-full object-cover border-y-invofest border-x-invofest_dark group-hover:border-x-invofest group-hover:border-y-invofest_dark border-8 group-hover:scale-110 transition-all duration-500" />
        <h3 className="text-invofest font-semibold mt-5 mb-2 text-xl sm:text-2xl">{name}</h3>
        <p className="sm:text-lg text-slate-500">{topic}</p>
        <p className="sm:text-lg text-slate-500">{job}</p>
      </div>
    </div>
  );
};
