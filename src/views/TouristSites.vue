<template>
  <div class="container mt-5 EG-Default">
    <h2 class="text-center mb-5 fs-1 fw-bold">Top Destinations</h2>

    <!-- Search Bar -->
    <div class="input-group mb-4">
      <input
        type="text"
        class="form-control"
        placeholder="Search for a destination..."
        v-model="searchQuery" />
    </div>

    <h2 class="text-center mb-5 fs-4 fw-bold">Temple Area</h2>
    <div class="row g-3">
      <div class="col-md-3 mb-3" v-for="site in filteredTempleArea"
        :key="site.id">
        <div class="card h-100 shadow-sm">
          <img :src="site.image" class="card-img-top" :alt="site.name" />
          <div class="card-body">
            <h5 class="card-title">{{ site.name }}</h5>
            <p class="card-text">{{ site.description }}</p>
          </div>
          <div class="card-footer bg-transparent border-0">
            <router-link
              :to="{ name: 'SiteDetail', params: { id: site.id, category: 'temple' } }"
              class="btn btn-outline-success btn-block">
              Learn More
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <h2 class="text-center mb-5 mt-5 fs-4 fw-bold">Beach Area</h2>
    <div class="row g-3">
      <div class="col-md-3 mb-3" v-for="site in filteredBeachArea"
        :key="site.id">
        <div class="card h-100 shadow-sm">
          <img :src="site.image" class="card-img-top" :alt="site.name" />
          <div class="card-body">
            <h5 class="card-title">{{ site.name }}</h5>
            <p class="card-text">{{ site.description }}</p>
          </div>
          <div class="card-footer bg-transparent border-0">
            <router-link
              :to="{ name: 'SiteDetail', params: { id: site.id, category: 'beach' } }"
              class="btn btn-outline-success btn-block">
              Learn More
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <h2 class="text-center mb-5 mt-5 fs-4 fw-bold">Mountain Area</h2>
    <div class="row g-3">
      <div class="col-md-3 mb-3" v-for="site in filteredMountainArea"
        :key="site.id">
        <div class="card h-100 shadow-sm">
          <img :src="site.image" class="card-img-top" :alt="site.name" />
          <div class="card-body">
            <h5 class="card-title">{{ site.name }}</h5>
            <p class="card-text">{{ site.description }}</p>
          </div>
          <div class="card-footer bg-transparent border-0">
            <router-link
              :to="{ name: 'SiteDetail', params: { id: site.id, category: 'mountain' } }"
              class="btn btn-outline-success btn-block">
              Learn More
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <h2 class="text-center mb-5 mt-5 fs-4 fw-bold">Recreation Area</h2>
    <div class="row g-3">
      <div class="col-md-3 mb-3" v-for="site in filteredRecreationArea"
        :key="site.id">
        <div class="card h-100 shadow-sm">
          <img :src="site.image" class="card-img-top" :alt="site.name" />
          <div class="card-body">
            <h5 class="card-title">{{ site.name }}</h5>
            <p class="card-text">{{ site.description }}</p>
          </div>
          <div class="card-footer bg-transparent border-0">
            <router-link
              :to="{ name: 'SiteDetail', params: { id: site.id, category: 'recreation' } }"
              class="btn btn-outline-success btn-block">
              Learn More
            </router-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      templeArea: [],
      beachArea: [],
      mountainArea: [],
      recreationArea: [],
    };
  },
  computed: {
    filteredTempleArea() {
      return this.templeArea.filter((site) =>
        site.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    filteredBeachArea() {
      return this.beachArea.filter((site) =>
        site.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    filteredMountainArea() {
      return this.mountainArea.filter((site) =>
        site.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    filteredRecreationArea() {
      return this.recreationArea.filter((site) =>
        site.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  created() {
    const jsonUrl =
      "https://raw.githubusercontent.com/TangPiseth/WCTProject/main/list.json";
    fetch(jsonUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        this.templeArea = data.templeArea.map((site) => ({
          ...site,
          image: `https://raw.githubusercontent.com/TangPiseth/WCTProject/main/${site.image}`,
        }));
        this.beachArea = data.beachArea.map((site) => ({
          ...site,
          image: `https://raw.githubusercontent.com/TangPiseth/WCTProject/main/${site.image}`,
        }));
        this.mountainArea = data.mountainArea.map((site) => ({
          ...site,
          image: `https://raw.githubusercontent.com/TangPiseth/WCTProject/main/${site.image}`,
        }));
        this.recreationArea = data.recreationArea.map((site) => ({
          ...site,
          image: `https://raw.githubusercontent.com/TangPiseth/WCTProject/main/${site.image}`,
        }));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
};
</script>

<style scoped>
.container {
  margin-block: 50px;
}

.card {
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.05);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.card-text {
  font-size: 1rem;
}

.card-footer {
  text-align: center;
}

.btn-primary {
  background-color: #007bff;
  border: none;
  width: 100%;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>
