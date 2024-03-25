import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css'; // Import Swiper styles
// import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/css/bundle";

const Categories = () => {
  return (
    <Swiper
      className="swiper-container categories-swiper"
      spaceBetween={30}
      slidesPerView={1}
      // slide
      // navigation
      // pagination={{ clickable: true }}
      // modules={[Navigation]}
      breakpoints={{
        // when window width is >= 640px
        991: {
          slidesPerView: 3,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
        },
      }}
    >
      <SwiperSlide>
        <div className="category-slide">
          <div className="s-img">
            <img
              src="https://themenectar.com/salient/mag/wp-content/uploads/sites/41/2023/06/prince-akachi-qoW-WKyyv44-unsplash-3-jpg.webp"
              alt=""
            />
          </div>
          <div className="swipe-1-text">
            <h3>Tips for Thriving in our Virtual World</h3>
            <p>
              As remote work, online education, and virtual interactions have
              become the new norm, it's crucial…
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper">
          <div className="s-img">
            <img
              src="https://themenectar.com/salient/mag/wp-content/uploads/sites/41/2023/06/resource-database-GaBX_ooh8-g-unsplash-2-jpg.webp"
              alt=""
            />
          </div>
          <div className="swipe-1-text">
            <h3>Tips for Thriving in our Virtual World</h3>
            <p>
              As remote work, online education, and virtual interactions have
              become the new norm, it's crucial…
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper">
          <div className="s-img">
            <img
              src="https://themenectar.com/salient/mag/wp-content/uploads/sites/41/2023/06/kateryna-hliznitsova-Fqv0o0WE3FU-unsplash-jpg.webp"
              alt=""
            />
          </div>
          <div className="swipe-1-text">
            <h3>Tips for Thriving in our Virtual World</h3>
            <p>
              As remote work, online education, and virtual interactions have
              become the new norm, it's crucial…
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper">
          <div className="s-img">
            <img
              src="https://themenectar.com/salient/mag/wp-content/uploads/sites/41/2023/06/prince-akachi-qoW-WKyyv44-unsplash-2-jpg.webp"
              alt=""
            />
          </div>
          <div className="swipe-1-text">
            <h3>Tips for Thriving in our Virtual World</h3>
            <p>
              As remote work, online education, and virtual interactions have
              become the new norm, it's crucial…
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Categories;
