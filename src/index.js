/* Automatic generated by ./build/build-entry.js */

import Actionsheet from './components/actionsheet';
import Article from './components/article';
import Badge from './components/badge';
import Button from './components/button';
import Cell from './components/cell';
import Checkbox from './components/checkbox';
import Container from './components/container';
import Datetime from './components/datetime';
import Dialog from './components/dialog';
import FlexItem from './components/flex-item';
import Flex from './components/flex';
import Footer from './components/footer';
import Gallery from './components/gallery';
import GridItem from './components/grid-item';
import Grid from './components/grid';
import Group from './components/group';
import Header from './components/header';
import Icon from './components/icon';
import Input from './components/input';
import LoadMore from './components/load-more';
import Mask from './components/mask';
import Msg from './components/msg';
import Panel from './components/panel';
import Picker from './components/picker';
import Popup from './components/popup';
import PreviewItem from './components/preview-item';
import Preview from './components/preview';
import Progress from './components/progress';
import PullRefresh from './components/pull-refresh';
import Radio from './components/radio';
import Search from './components/search';
import SelectInline from './components/select-inline';
import Slider from './components/slider';
import SwiperItem from './components/swiper-item';
import Swiper from './components/swiper';
import Switch from './components/switch';
import TabItem from './components/tab-item';
import Tab from './components/tab';
import TabbarItem from './components/tabbar-item';
import Tabbar from './components/tabbar';
import Tip from './components/tip';
import Toast from './components/toast';
import Uploader from './components/uploader';
import ToastPlugin from './plugins/toast';

import locale from './locale';

const version = '0.0.6';

const install = (Vue) => {
  locale.init(Vue);

  Vue.component('UiActionsheet', Actionsheet);
  Vue.component('UiArticle', Article);
  Vue.component('UiBadge', Badge);
  Vue.component('UiButton', Button);
  Vue.component('UiCell', Cell);
  Vue.component('UiCheckbox', Checkbox);
  Vue.component('UiContainer', Container);
  Vue.component('UiDatetime', Datetime);
  Vue.component('UiDialog', Dialog);
  Vue.component('UiFlexItem', FlexItem);
  Vue.component('UiFlex', Flex);
  Vue.component('UiFooter', Footer);
  Vue.component('UiGallery', Gallery);
  Vue.component('UiGridItem', GridItem);
  Vue.component('UiGrid', Grid);
  Vue.component('UiGroup', Group);
  Vue.component('UiHeader', Header);
  Vue.component('UiIcon', Icon);
  Vue.component('UiInput', Input);
  Vue.component('UiLoadMore', LoadMore);
  Vue.component('UiMask', Mask);
  Vue.component('UiMsg', Msg);
  Vue.component('UiPanel', Panel);
  Vue.component('UiPicker', Picker);
  Vue.component('UiPopup', Popup);
  Vue.component('UiPreviewItem', PreviewItem);
  Vue.component('UiPreview', Preview);
  Vue.component('UiProgress', Progress);
  Vue.component('UiPullRefresh', PullRefresh);
  Vue.component('UiRadio', Radio);
  Vue.component('UiSearch', Search);
  Vue.component('UiSelectInline', SelectInline);
  Vue.component('UiSlider', Slider);
  Vue.component('UiSwiperItem', SwiperItem);
  Vue.component('UiSwiper', Swiper);
  Vue.component('UiSwitch', Switch);
  Vue.component('UiTabItem', TabItem);
  Vue.component('UiTab', Tab);
  Vue.component('UiTabbarItem', TabbarItem);
  Vue.component('UiTabbar', Tabbar);
  Vue.component('UiTip', Tip);
  Vue.component('UiToast', Toast);
  Vue.component('UiUploader', Uploader);

  Vue.use(ToastPlugin);
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  Actionsheet,
  Article,
  Badge,
  Button,
  Cell,
  Checkbox,
  Container,
  Datetime,
  Dialog,
  FlexItem,
  Flex,
  Footer,
  Gallery,
  GridItem,
  Grid,
  Group,
  Header,
  Icon,
  Input,
  LoadMore,
  Mask,
  Msg,
  Panel,
  Picker,
  Popup,
  PreviewItem,
  Preview,
  Progress,
  PullRefresh,
  Radio,
  Search,
  SelectInline,
  Slider,
  SwiperItem,
  Swiper,
  Switch,
  TabItem,
  Tab,
  TabbarItem,
  Tabbar,
  Tip,
  Toast,
  Uploader,
};

export default {
  version,
  install,
};
