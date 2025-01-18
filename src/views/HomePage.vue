<template>
  <div class="container-fluid p-0 bg-light EG-Default">
    <!-- Hero Section -->
    <section>
    <div class="headmast position-relative d-flex align-items-center justify-content-center text-white vh-100 mb-5">
      <swiper :autoplay="{ delay: 2000, disableOnInteraction: false }" :loop="true"
        modules="[Autoplay, Pagination, Navigation]"
        class="headmast position-relative d-flex align-items-center justify-content-center text-white vh-100 mb-5">
        <swiper-slide v-for="(slide, index) in slides" :key="index"
          class="image-container d-flex align-items-center justify-content-center">
          <img :src="slide.image" class="hero-banner position-absolute w-100 h-100" alt="" />
          <div class="black-overlay"></div>
          <div class="banner-txt position-relative z-3 text-center col-lg-8 col-md-10 col-sm-12 px-3">
            <h2 class="display-4 py-3 fw-bolder fs-1" style="text-shadow: #000 1px 0 10px">
              {{ slide.header }}
            </h2>
            <hr class="text-white mx-auto" style="width: 50%" />
            <h1 class="display-2 pb-3 fw-bold pt-3" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8)">
              {{ slide.title }}
            </h1>
            <hr class="text-white mx-auto" style="width: 50%" />
            <p class="fs-5 mt-4" style="text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6)">
              {{ slide.text }}
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>

    <!-- Our Services -->
    <section class="py-5 bg-blue popular-place">
      <div class="container-fluid ps-xl-5 ps-lg-3 pe-xl-5 pe-lg-3">
        <div class="row g-3 ps-xl-4 ps-0 pe-xl-3 pe-0">
          <h2 class="display-5 fw-bold mb-4">Top Destinations</h2>
          <div v-for="(item, index) in items" :key="index" :class="getColClass(index)">
            <div class="card border-0 bg-transparent">
              <div class="popular-place-img position-relative">
                <img :src="item.image" alt="Service Image" class="service-image" />
                <a href="#" class="stretched-link"></a>
                <div class="overlay"></div>
                <div class="rating">
                  <span class="m-0 me-1 rating-star">
                    <i class="fa-solid fa-star"></i>
                  </span>
                  <span class="m-0 rating-number">4.8</span>
                </div>
                <div class="save">
                  <a href="#"><i class="fa-regular fa-bookmark"></i></a>
                </div>
                <div class="place text-start">
                  <span class="m-0 mb-2">{{ item.title }}</span>
                  <p class="m-0">
                    <i class="fa-solid fa-location-dot"></i> {{ item.text }}
                  </p>
                </div>
                <div class="read-more">
                  <a href="#"><i class="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <img src="../assets/img/chooseus.jpg" class="img-fluid rounded shadow-lg" alt="Why Choose Us"
              style="background-color: transparent" />
          </div>
          <div class="col-lg-6">
            <h2 class="fw-bold mb-4">Why Choose EasyTravel?</h2>
            <ul class="list-unstyled">
              <li class="mb-3">
                <i class="fa-solid fa-check-circle text-success me-2"></i>
                Save time with our user-friendly interface.
              </li>
              <li class="mb-3">
                <i class="fa-solid fa-check-circle text-success me-2"></i>
                Enjoy personalized travel itineraries.
              </li>
              <li class="mb-3">
                <i class="fa-solid fa-check-circle text-success me-2"></i>
                Stay on top of your travel plans.
              </li>
              <li class="mb-3">
                <i class="fa-solid fa-check-circle text-success me-2"></i>
                Access a wide range of travel destinations.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- numbers section -->
    <section class="py-5 bg-light">
      <div class="bg-success text-white py-5">
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-8 col-md-10 col-12">
              <div class="text-center" data-aos="fade-up" data-aos-duration="1300">
                <p class="text-white-75">
                  <span class="bg-warning text-black px-3 py-2 rounded-pill">DISCOVER THE BEAUTY OF CAMBODIA</span>
                </p>
                <h1 class="fw-bold display-5 text-white pt-3">
                  Join millions of travelers in exploring the rich history,
                  culture, and natural wonders of Cambodia.
                </h1>
                <div class="row mt-5">
                  <div class="col-lg-4 col-12">
                    <div class="text-center">
                      <h1 class="text-warning fw-bold display-1">100+</h1>
                      <p class="mb-0 text-white-50">ANCIENT TEMPLES</p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-12">
                    <div class="text-center">
                      <h1 class="text-warning fw-bold display-1">50+</h1>
                      <p class="mb-0 text-white-50">EXOTIC ISLANDS</p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-12">
                    <div class="text-center">
                      <h1 class="text-warning fw-bold display-1">97%</h1>
                      <p class="mb-0 text-white-50">SATISFACTION RATE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- newsletters -->
    <div class="py-5 bg-light">
      <div class="container py-5">
        <div class="row justify-content-center">
          <div class="col-xl-9 col-lg-10 col-md-11 col-12">
            <div data-aos="flip-down" data-aos-duration="1300">
              <div class="row justify-content-center">
                <div class="col-xl-8 col-lg-9 col-md-10 col-12">
                  <div class="text-center mb-5">
                    <h1 class="fw-bold display-5 text-black">
                      Newsletter Updates
                    </h1>
                    <p class="text-muted lead">
                      Enter your email address below to subscribe to our tasty
                      newsletter
                    </p>
                  </div>
                  <div class="input-group gap-3">
                    <input type="email" class="form-control rounded-pill py-3 px-3" placeholder="Your email address"
                      aria-label="Your email address" aria-describedby="Email" />
                    <button class="btn btn-success rounded-pill py-2 px-4" type="button" id="Email">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Special Offers -->
    <section class="py-5 bg-light">
      <div class="container bg-dark-subtle p-5 rounded">
        <div class="row">
          <!-- Promotional Box -->
          <div class="col-md-4">
            <div class="promo-box text-start bg-dark text-white p-4 rounded">
              <h2>Best Hotels with high ratings</h2>
              <p>Start your journey in Cambodia today with these discounted prices!!</p>
            </div>
          </div>
          <!-- Hotel List -->
          <div class="col-md-8">
            <div class="hotel-list">
              <div class="hotel-item d-flex mb-3 p-2 rounded bg-dark text-white" v-for="hotel in hotels"
                :key="hotel.id">
                <div class="hotel-image">
                  <img :src="hotel.image" class="rounded" alt="hotel image" style="width: 100px; height: 100px" />
                </div>
                <div class="hotel-info ml-3">
                  <h3>{{ hotel.name }}</h3>
                  <div class="hotel-rating mb-2">
                    <span v-for="n in hotel.rating" :key="n" class="star">★</span>
                  </div>
                  <div class="hotel-pricing">
                    <span class="original-price text-danger mr-2">{{ hotel.originalPrice }}$</span>
                    <span class="discounted-price text-warning p-1">{{ hotel.discountedPrice }}$</span>
                  </div>
                  <div class="hotel-meta mt-2">
                    <span class="view-count mr-3"><i class="fa-solid fa-eye"></i> {{ hotel.views }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  data() {
    return {
      items: [
        {
          title: "Bayon Temple",
          text: "Siem Reap",
          image: require("@/assets/img/bayon.jpg"),
        },
        {
          title: "Koh Kong Krav",
          text: "Koh Kong",
          image: require("@/assets/img/kohkongkrav.jpg"),
        },
        {
          title: "Seahorse",
          text: "Kompot",
          image: require("@/assets/img/seahorse.jpg"),
        },
        {
          title: "Berng Mea Lea",
          text: "Siem Reap",
          image: require("@/assets/img/mealea.jpg"),
        },
        {
          title: "Ochheu Teal Beach",
          text: "Sihanoukville",
          image: require("@/assets/img/orcher.jpg"),
        },
        {
          title: "Kulen Mountain",
          text: "Siem Reap",
          image: require("@/assets/img/kuleb.jpg"),
        },
        {
          title: "Angkor Wat",
          text: "Siem Reap",
          image: require("@/assets/img/angkorwat.jpg"),
        },
        {
          title: "Wat Banan",
          text: "Battambong",
          image: require("@/assets/img/banan.jpg"),
        },
      ],
      offers: [
        {
          title: "Summer Special",
          description: "Save 20% on bookings.",
          cta: "Grab Offer",
          image: require("@/assets/img/20-percent.png"),
        },
        {
          title: "Last Minute Deals",
          description: "Exclusive deals for late planners.",
          cta: "Explore Now",
          image: require("@/assets/img/deal.png"),
        },
        {
          title: "Family Packages",
          description: "Exciting packages for families.",
          cta: "Book Now",
          image: require("@/assets/img/family.png"),
        },
      ],
      slides: [
        {
          image: require("@/assets/img/banner.png"),
          header: "Welcome to",
          title: "EasyTravels",
          text: "“Streamline your travels, elevate your experience..”",
        },
        {
          image: require("@/assets/img/banner3.png"),
          header: "Discover new places",
          title: "Travel with Ease",
          text: "“Your journey starts here..”",
        },
        {
          image: require("@/assets/img/banner4.jpg"),
          header: "Explore the world",
          title: "Your Adventure Awaits",
          text: "“Make memories that last..”",
        },
      ],

      hotels: [
        {
          id: 1,
          name: "Sokha Hotel",
          rating: 4,
          originalPrice: 150,
          discountedPrice: 75,
          views: 320,
          image: require("@/assets/img/sokha.jpg"),
        },
        {
          id: 2,
          name: "HOTEL KVL",
          rating: 3,
          originalPrice: 150,
          discountedPrice: 75,
          views: 450,
          image: require("@/assets/img/kvl.jpg"),
        },
        {
          id: 3,
          name: "TEMPLATION HOTEL",
          rating: 3,
          originalPrice: 150,
          discountedPrice: 75,
          views: 890,
          image: require("@/assets/img/templation.jpg"),
        },
        {
          id: 4,
          name: "G MEKONG HOTEL",
          rating: 4,
          originalPrice: 150,
          discountedPrice: 75,
          views: 90,
          image: require("@/assets/img/mekong.jpg"),
        },
      ],
    };
  },
  methods: {
    getColClass(index) {
      return index === 1
        ? "col-xl-3 col-lg-6 col-md-4 col-12"
        : "col-xl-3 col-lg-6 col-md-4 col-12";
    },
  },
};
</script>

<style scoped>
.vh-100 {
  height: 100vh !important;
}

.service-img {
  object-fit: contain;
  max-width: 150px;
  max-height: 180px;
  margin: 0 auto;
}

.object-fit-cover {
  object-fit: cover;
}

.col-lg-6 {
  margin-top: 20px;
}

.col-lg-6 h2 {
  margin-left: 40px;
}

ul.list-unstyled li {
  font-size: 1.2rem;
  margin-left: 40px;
}

ul.list-unstyled li i {
  font-size: 1.5rem;
}

.service-image {
  width: 100%;
  /* Make the image take the full width of its container */
  height: auto;
  /* Adjust the height proportionally */
  max-height: 400px;
  /* Set a maximum height if needed */
  object-fit: cover;
  /* Ensure the image covers the area without distortion */
}

.card {
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}


.popular-place .popular-place-img {
  width: 100%;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.4s;
}

.popular-place .popular-place-img .rating {
  content: '';
  position: absolute;
  width: 80px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  top: -50px;
  opacity: 0.8;
  left: -40px;
  border-radius: 6px;
  transition: 0.4s;
  background-color: #F4F5F6;
}

.popular-place .popular-place-img .rating .rating-star {
  color: gold;
}

.popular-place .popular-place-img .rating .rating-number {
  color: black;
  font-size: 20px;
  margin-left: 28px;
}

.popular-place .popular-place-img .save {
  content: '';
  position: absolute;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  top: -40px;
  right: -40px;
  border-radius: 6px;
  transition: 0.4s;
  overflow: hidden;
}

.popular-place .popular-place-img .save a,
.popular-place .popular-place-img .read-more a {
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 20px;
  align-items: center;
  color: black;
  background-color: #F4F5F6;
  justify-content: center;
  text-decoration: none;
  transition: 0.4s;
}

.popular-place .popular-place-img .read-more a i {
  transition: 0.4s;
}

.popular-place .popular-place-img .place {
  content: '';
  position: absolute;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
  bottom: 15px;
  font-size: 20px;
  left: 15px;
  border-radius: 6px;
}

.popular-place .popular-place-img .place p,
.popular-place .popular-place-img .place span {
  font-size: 18px;
  color: #F4F5F6;
}

.popular-place .popular-place-img .read-more {
  content: '';
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: 0.4s;
  z-index: 10;
  bottom: -40px;
  right: -40px;
}

.popular-place .popular-place-img:hover .save,
.popular-place .popular-place-img:hover img {
  top: 15px;
  right: 15px;
  transform: scale(1.1);
}

.popular-place .popular-place-img:hover .overlay-3 {
  background-color: rgba(0, 0, 0, 0.351);
}

.popular-place .popular-place-img:hover .rating {
  top: 15px;
  left: 15px;
}

.popular-place .popular-place-img:hover .read-more {
  bottom: 15px;
  right: 15px;
}

.popular-place .popular-place-img .save:hover a {
  color: white;
  background-color: #DD9D51;
}

.popular-place .popular-place-img .read-more a:hover i {
  margin-left: 10px;
}

.popular-place .popular-place-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.4s;
}

.place {
  position: absolute;
  bottom: 5px;
  /* Adjust the position */
  /* Adjust the position */
  margin: 0;
  /* Remove margin */
  padding: 5px;
  /* Add a small padding if needed */
}

.place span,
.place p {
  margin: 0;
  /* Remove margin */
  padding: 0;
  /* Remove padding */
}

.place span {
  display: block;
  /* Ensure block display */
  font-size: 16px;
  /* Adjust font size if needed */
}

.place p {
  font-size: 14px;
  /* Adjust font size if needed */
}


.rating,
.save,
.read-more {
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s;
}

.promo-box {
  background-color: #333;
  padding: 20px;
}

.promo-box button {
  margin-top: 10px;
}

.hotel-list {
  display: flex;
  flex-direction: column;
}

.hotel-item {
  display: flex;
  background-color: #333;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
}

.hotel-image img {
  width: 100px;
  height: 100px;
  border-radius: 8px;
}

.hotel-info {
  margin-left: 10px;
}

.hotel-rating .star {
  color: gold;
}

.original-price {
  text-decoration: line-through;
}

.discounted-price {
  color: #ff9900;
}

.view-count {
  margin-right: 10px;
}

.btn-sm {
  padding: 5px 10px;
}
.image-container {
  position: relative;
  display: inline-block;
}

.hero-banner {
  display: block; /* keeps the img's default block-level behavior */
}

.black-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.3; /* Adjust this value to make the black filter darker or lighter */
  pointer-events: none; /* Allows clicking through the overlay */
}

</style>