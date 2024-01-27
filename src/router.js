import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from './view/LoginPage.vue';
import ProfilePage from './view/ProfilePage.vue';
import DashboardPage from './view/DashboardPage.vue';
import SaveReceiptPage from './view/SaveReceiptPage.vue';
import CheckReceiptPage from './view/CheckReceiptPage.vue';
import CheckCodePage from './view/CheckCodePage.vue';
import OnlinePayment from './view/OnlinePayment.vue';
import CheckOnlinePayment from './view/CheckOnlinePayment.vue';
import SupportPage from './view/SupportPage.vue';
import Notification from './view/NotificationPage.vue';
import Debtors from './view/DebtorList.vue';
import Invoices from './view/InvoicePage.vue';



const routes = [
  {
    path: '/',
    component: LoginPage,
    name : 'login'
   },
   {
    path: '/dashboard',
    component: DashboardPage,
    name : 'dashboard'
   },
   {
    path: '/profile',
    component: ProfilePage,
    name : 'profile'
   },
   {
    path: '/saveReceipt',
    component: SaveReceiptPage,
    name:'saveReceipt'
   },
   {
    path: '/CheckReceipt',
    component: CheckReceiptPage,
    name : 'checkReceipt'
   },
   {
    path: '/CheckCode',
    component: CheckCodePage,
    name : 'checkCode'
   },
   {
    path: '/OnlinePayment',
    component: OnlinePayment,
    name : 'onlinePayment'
   },
   {
    path: '/checkPayment',
    component: CheckOnlinePayment,
    name : 'checkPayment'
},
   {
    path: '/support',
    component: SupportPage,
    name : 'support'
   },
   {
    path: '/notification',
    component: Notification,
    name : 'notification'
   },
   {
    path: '/debtors',
    component: Debtors,
    name : 'debtors'
   },
   {
    path: '/invoices',
    component: Invoices,
    name : 'invoices'
   },

]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router