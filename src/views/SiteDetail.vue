<template>
  <div class="container mt-5 py-5">
    <h2 class="text-center mb-4">Site Details</h2>
    <div v-if="site" class="col-12" data-aos="zoom-in">
      <div
        class="card border-0 shadow-sm rounded-5 overflow-hidden h-100 site-card mb-5 box-shadow"
      >
        <img
          :src="getImageUrl(site.image)"
          class="card-img-top detail-image"
          :alt="site.name"
        />
        <div class="card-body text-center px-4 pt-4">
          <a href="#" class="badge text-bg-success rounded-pill px-3 py-2">{{
            $route.params.category
          }}</a>
          <h3 class="card-title truncate-text fw-bold pt-3">{{ site.name }}</h3>
          <p class="card-text text-muted">{{ site.description }}</p>
        </div>
        <div class="additional-pictures px-4 py-4">
          <h4 class="text-center mb-3">More Views</h4>
          <div class="row g-2">
            <div class="col-md-6" v-if="site.pictures1">
              <img
                :src="getImageUrl(site.pictures1)"
                class="img-fluid rounded-3"
                alt="Additional Picture 1"
              />
            </div>
            <div class="col-md-6" v-if="site.pictures2">
              <img
                :src="getImageUrl(site.pictures2)"
                class="img-fluid rounded-3"
                alt="Additional Picture 2"
              />
            </div>
            <div class="col-md-6" v-if="site.pictures3">
              <img
                :src="getImageUrl(site.pictures3)"
                class="img-fluid rounded-3"
                alt="Additional Picture 3"
              />
            </div>
            <div class="col-md-6" v-if="site.pictures4">
              <img
                :src="getImageUrl(site.pictures4)"
                class="img-fluid rounded-3"
                alt="Additional Picture 4"
              />
            </div>
          </div>
        </div>

        <div class="card-footer bg-transparent border-0 px-4 pb-4">
          <button @click="$router.go(-1)" class="btn btn-secondary mt-4">
            Back to Top Destinations
          </button>
        </div>
      </div>
    </div>
    <div v-if="!site && !error" class="text-center">
      <p>Loading site details...</p>
    </div>
    <div v-if="error" class="text-center text-danger">
      <p>{{ error }}</p>
      <button @click="$router.go(-1)" class="btn btn-secondary mt-3">
        Back to List
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      site: null,
      error: null,
    };
  },
  methods: {
    getImageUrl(imagePath) {
      return `https://raw.githubusercontent.com/TangPiseth/WCTProject/main/${imagePath}`;
    },
  },
  created() {
    const siteId = parseInt(this.$route.params.id);
    const category = this.$route.params.category;

    if (!category) {
      this.error = "Error: Missing category parameter";
      return;
    }

    fetch(
      "https://raw.githubusercontent.com/TangPiseth/WCTProject/main/detail.json"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        let categoryKey;
        switch (category) {
          case "temple":
            categoryKey = "templeArea";
            break;
          case "beach":
            categoryKey = "beachArea";
            break;
          case "mountain":
            categoryKey = "mountainArea";
            break;
          case "recreation":
            categoryKey = "recreationArea";
            break;
          default:
            throw new Error(`Unknown category: ${category}`);
        }

        const site = data[categoryKey]?.find((s) => s.id === siteId);
        if (site) {
          this.site = site;
        } else {
          throw new Error(`Site with ID ${siteId} not found in ${category}`);
        }
      })
      .catch((error) => {
        this.error = `Error: ${error.message}`;
      });
  },
};
</script>
<style scoped>

.detail-image {
  width: 100%;
  max-height: 750px;
  object-fit: cover;
}

.site-card {
  transition: transform 0.3s ease-in-out;
  margin-bottom: 30px;
}

.additional-pictures {
  margin-top: 20px;
}

.additional-pictures img {
  max-height: 350px;
  object-fit: cover;
}

.btn-secondary {
  display: inline-block;
  text-align: center;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
