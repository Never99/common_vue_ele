export default[{
  path: '/camera',
  name: 'camera',
  component: () => import(/* webpackChunkName: "camera" */'./camera')
}]