export default function ProductGallery({ images, thumbnail, title }) {
  return (
    <div className="space-y-4">
      <div className="relative aspect-square rounded-lg overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square rounded-md overflow-hidden cursor-pointer"
          >
            <img
              src={image}
              alt={`${title} - Image ${index + 1}`}
              className="object-cover w-full h-full hover:opacity-75 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
}