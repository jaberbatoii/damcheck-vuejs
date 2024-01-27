<template>
  <div>
    <div class="main-content screen-width">
      <TopHeader headerText="پروفایل"  icon="1" />
      <div class="container mt-5">
        <div class="row">
          <div class="col ps-0">
            <div class="fs-large">نام و نام خانوادگی</div>
            <div class="text-shadow text-muted fw-normal pt-2">09123456789 </div>
            <div class="text-shadow text-muted pt-2 fs-xSmall"> شماره واحد 140
            </div>
          </div>
          <div class="col-auto">
            <img src="../assets/images/profile/profile.png" class="rounded-circle" alt="profile" width="110" height="110" />
          </div>
        </div>
        <div class="row pt-4">
          <IconBox />
        </div>
        <div class="row pt-4">
          <ListBox desc="" title="خروج از حساب کاربری" hasIcon="1" icon="lock" />
  
        </div>
      </div>
    </div>
    <BottomNav />
  </div>
  </template>
  
  <script>
  import TopHeader from '../components/TopHeader.vue';
  import BottomNav from '../components/BottomNav.vue';
  import IconBox from '../components/IconBox.vue';
  import ListBox from '../components/ListBox.vue';
  
  export default {
  
    components: {
  
      TopHeader, BottomNav, IconBox,ListBox
    },
    data() {
      return {
  
  
      }
    }
  
  }
  </script>
  
  <style></style>
  