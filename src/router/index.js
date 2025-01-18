import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import TouristSites from '@/views/TouristSites.vue';
import Contact from '@/views/Contact.vue';
import Province from '@/views/Province.vue';
import AboutUs from '@/views/Aboutus.vue';
import ProvinceDetail from '@/views/ProvinceDetail.vue';
import SiteDetail from '@/views/SiteDetail.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/sites', name: 'TouristSites', component: TouristSites },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/provinces', name: 'Province', component: Province },
  { path: '/about', name: 'AboutUs', component: AboutUs },
  { path: '/province/:id', name: 'ProvinceDetail', component: ProvinceDetail, props: true },
  { path: '/site/:category/:id', name: 'SiteDetail', component: SiteDetail, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
