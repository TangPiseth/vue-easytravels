<template>
  <div class="container mt-5 EG-Default">
    <h2 class="text-center mb-5">Provinces</h2>

    <!-- Search Bar -->
    <div class="mb-4">
      <input 
        type="text" 
        v-model="searchQuery" 
        class="form-control" 
        placeholder="Search by province name..." 
      />
    </div>

    <!-- Province Cards -->
    <div class="row g-3">
      <div 
        class="col-md-3 mb-3" 
        v-for="site in filteredProvinces" 
        :key="site.id"
      >
        <div class="card h-100 shadow-sm">
          <img :src="site.image" class="card-img-top" :alt="site.title" />
          <div class="card-body">
            <h5 class="card-title">{{ site.title }}</h5>
            <p class="card-text">{{ site.description }}</p>
          </div>
          <div class="card-footer bg-transparent border-0">
            <router-link 
              :to="{ name: 'ProvinceDetail', params: { id: site.id } }" 
              class="btn btn-outline-success btn-block"
            >
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
      province: [], // Array to store fetched data
      searchQuery: '', // Search query for filtering provinces
    };
  },
  created() {
    // Replace with the correct raw URL to your GitHub-hosted data.json
    const jsonUrl = 'https://raw.githubusercontent.com/TangPiseth/WCTProject/main/list.json';

    fetch(jsonUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Correctly access 'province' and set it to the 'province' array
        const provinceData = data.province;

        // Add base URL for images
        provinceData.forEach((site) => {
          site.image = `https://raw.githubusercontent.com/TangPiseth/WCTProject/main/${site.image}`;
        });

        this.province = provinceData; // Assign fetched data to the 'province' array
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  },
  computed: {
    filteredProvinces() {
      // Filter provinces based on the search query
      const query = this.searchQuery.toLowerCase();
      return this.province.filter((site) =>
        site.title.toLowerCase().includes(query)
      );
    },
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

input.form-control {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  margin-bottom: 20px;
}
</style>
