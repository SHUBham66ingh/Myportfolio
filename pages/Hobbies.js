import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

export default function Gallery() {
  const images = [
    "https://i.ibb.co/bMJ629vx/Screenshot-2025-08-25-060618.png",
    "https://i.ibb.co/VcLcQ0Gt/Screenshot-2025-08-25-060631.png",
    "https://i.ibb.co/7NVtSkfx/Screenshot-2025-08-25-060640.png",
    "https://i.ibb.co/FbMmpmJs/Screenshot-2025-08-25-060650.png",
    "https://i.ibb.co/fdbT0QY3/Screenshot-2025-08-25-060709.png",
    "https://i.ibb.co/fV1VfXPq/Screenshot-2025-08-25-060718.png",
    "https://i.ibb.co/svprhFJd/Screenshot-2025-08-25-060729.png",
    "https://i.ibb.co/607CQxRy/Screenshot-2025-08-25-060742.png",
    "https://i.ibb.co/DHP8VBR9/immmmggg.jpg",
     "https://i.ibb.co/Gf9WL0LT/Screenshot-2025-08-25-063449.png",
     "https://i.ibb.co/XZjsJQxP/Screenshot-2025-08-25-063431.png",
     "https://i.ibb.co/3m1TRZ4c/Screenshot-2025-08-25-063507.png",
     "https://i.ibb.co/k2g88Gpm/Screenshot-2025-08-25-063517.png",
     "https://i.ibb.co/HpR9DHYm/Screenshot-2025-08-25-063918.png",
     "https://i.ibb.co/rGVPvxTw/Screenshot-2025-08-25-063928.png",

  ];

  return (
    <>
      <Header />
      <section className="min-h-screen py-20 px-6 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-14 text-gray-900 dark:text-white tracking-wide">
            <span className="text-blue-400">M</span>y Gallery
          </h2>

          <div className="grid gap-10 grid-cols-1 md:grid-cols-3">
            {images.map((src, index) => (
              <div
                key={index}
                className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 hover:shadow-3xl transition-all duration-500 border-2 border-gray-200 dark:border-gray-700"
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-[36rem] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-10 transition-opacity duration-300 rounded-3xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}


