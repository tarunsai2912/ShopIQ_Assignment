import Image from 'next/image';

export default function HeroSlide({ slide, isActive, priority }) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="relative w-full h-full">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          className="object-cover"
          priority={priority}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
          <p className="text-lg md:text-xl">{slide.description}</p>
        </div>
      </div>
    </div>
  );
}