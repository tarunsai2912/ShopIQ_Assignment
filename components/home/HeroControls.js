export default function HeroControls({ totalSlides, currentSlide, onChange }) {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {[...Array(totalSlides)].map((_, index) => (
        <button
          key={index}
          className={`w-3 h-3 rounded-full transition-colors ${
            currentSlide === index ? 'bg-white' : 'bg-white/50'
          }`}
          onClick={() => onChange(index)}
        />
      ))}
    </div>
  );
}