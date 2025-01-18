<template>
  <div class="container mt-5 py-5">
    <h2 class="text-center mb-4">Province Details</h2>
    <div v-if="province" class="col-12" data-aos="zoom-in">
      <div class="card border-0 shadow-sm rounded-5 overflow-hidden h-100 mb-5 box-shadow province-card">
        <img :src="getImageUrl(province.image)" class="card-img-top detail-image" :alt="province.title">
        <div class="card-body text-center px-4 pt-4">
          <a href="#" class="badge text-bg-success rounded-pill px-3 py-2">Province</a>
          <h3 class="card-title truncate-text fw-bold pt-3">{{ province.title }}</h3>
          <p class="card-text text-muted">{{ province.description }}</p>
        </div>
        <!-- New Section for Pictures -->
        <div class="additional-pictures px-4 py-4">
          <h4 class="text-center mb-3">More Views</h4>
          <div class="row g-2">
            <div class="col-md-6">
              <img :src="getImageUrl(province.pictures1)" class="img-fluid rounded-3" alt="Additional Picture 1">
            </div>
            <div class="col-md-6">
              <img :src="getImageUrl(province.pictures2)" class="img-fluid rounded-3" alt="Additional Picture 2">
            </div>
            <div class="col-md-6">
              <img :src="getImageUrl(province.pictures3)" class="img-fluid rounded-3" alt="Additional Picture 3">
            </div>
            <div class="col-md-6">
              <img :src="getImageUrl(province.pictures4)" class="img-fluid rounded-3" alt="Additional Picture 4">
            </div>
          </div>
        </div>
        <div class="card-footer bg-transparent border-0 px-4 pb-4">
          <button @click="$router.push('/provinces')" class="btn btn-secondary mt-4">Back to Provinces</button>
        </div>
      </div>
    </div>
    <div v-if="!province && !error" class="text-center">
      <p>Loading province details...</p>
    </div>
    <div v-if="error" class="text-center text-danger">
      <p>Error loading province details. Please try again later.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      province: null,
      error: null,
    };
  },
  methods: {
    getImageUrl(imageUrl) {
      return `https://raw.githubusercontent.com/TangPiseth/WCTProject/main/${imageUrl}`;
    }
  },
  created() {
    fetch('https://raw.githubusercontent.com/TangPiseth/WCTProject/main/detail.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const provinces = data.province;
        const province = provinces.find((p) => p.id === parseInt(this.$route.params.id, 10));
        if (province) {
          this.province = province;
        } else {
          console.error('Province not found!');
        }
      })
      .catch((error) => {
        console.error('Error fetching province details:', error);
        this.error = error;
      });
  },
};
</script>

<style scoped>

.additional-pictures {
  margin-top: 20px;
}
.additional-pictures img {
  max-height: 350px;
  object-fit: cover;
}
</style>
