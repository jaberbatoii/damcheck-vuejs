<template>
  <div>
  <div class="main-content screen-width">
    <TopHeader headerText="واحد شماره ۱۰۴ " />
    <div class="container mt-5">
      <div class="card text-center box-shadow">
        <div class="card-header bg-gray text-white py-3 border-0 fs-medium">
          صورت حساب شما
        </div>
        <div class="card-body">
          <div class="text-gray py-3  fs-medium">مبلغ قابل پرداخت</div>
          <div class=" fs-large">3,650,000 ریال</div>
          <div class="row">
            <div class="col-6 ps-2">
              <button type="submit" class="btn btn-warning text-white my-3 w-100" @click="$router.push('/saveReceipt')">ثبت فیش
              </button>

            </div>
            <div class="col-6  pe-2">
              <button type="submit" class="btn btn-primary my-3 w-100" @click="$router.push('/onlinePayment')">پرداخت آنلاین
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row pt-4">
      <YellowBoxIcon title="بدهکاران" icon="volunteer" @click="$router.push('/debtors')" />
      <YellowBoxIcon title="اعلانات" icon="trending"  @click="$router.push('/notification')"/>
      <YellowBoxIcon title="صورت حساب" icon="receipt" @click="$router.push('/invoices')"/>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-12 fs-small">لیست هزینه ها</div>
        <ListBox desc="10000 تومان" title="قبض آب" hasIcon="1" icon="up" />
        <ListBox desc="10000 تومان" title="قبض برق" hasIcon="1"  icon="down" />
      </div>
    </div>
  </div>
  <BottomNav />
</div>
</template>

<script>
import TopHeader from '../components/TopHeader.vue';
import BottomNav from '../components/BottomNav.vue';
import YellowBoxIcon from '../components/YellowBoxIcon.vue';
import ListBox from '../components/ListBox.vue';

export default {

  components: {

    TopHeader, BottomNav, YellowBoxIcon, ListBox
  },
  data() {
    return {


    }
  }

}
</script>

<style></style>
