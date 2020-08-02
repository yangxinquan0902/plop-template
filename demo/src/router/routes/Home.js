const Home = () => import(/* webpackChunkName: "home" */ '../../views/Home/index.vue');


const Router = {
    path: `/home`,
    name: Home,
    component: Home,
    meta: {
      title: '',
    }
};

export default Router;