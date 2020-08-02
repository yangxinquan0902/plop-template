const My = () => import(/* webpackChunkName: "my" */ '../../views/My/index.vue');


const Router = {
    path: `/my`,
    name: My,
    component: My,
    meta: {
      title: '',
    }
};

export default Router;