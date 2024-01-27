<template>
    <div>
    <div class="main-content screen-width">
        <TopHeader headerText="پرداخت آنلاین" icon="1" />
        <div class="container mt-5">
            <div class="row">
                <div class="col-12 pt-1">
                    <label for="priceTxt" class="form-label fs-small mb-2">
                        جمع مبلغ قابل پرداخت
                    </label>
                    <input type="text" class="form-control text-center" id="priceTxt" value="3.650.000">
                    <label class="fs-xSmall text-info pt-3">به ریال نوشته شده است. میتوانید مبلغ پرداخت را به هر عدد دیگری تغییر دهید.
                    </label>
                </div>
                <div class="col-12 pt-4">
                    <label for="descTxt" class="form-label fs-small mb-2">توضیحات </label>
                    <textarea class="form-control text-center" id="descTxt" rows="4"></textarea>
                </div>
                
                <div class="col-12 pt-5 text-center">
                    <!-- 
                        با کلیک روی دکمه باید به درگاه انتقال داده شود و پس از پرداخت به صفحه 
                        checkPayment 
                        برود . من برای دیدن صفحه بعد، برای دکمه لینک گذاشتم
                    -->
                    <button type="submit" class="btn btn-primary text-white px-4"
                        @click="$router.push('/checkPayment')">انتقال به بانک سامان
                    </button>
                </div>
            </div>
        </div>
    </div>
    <BottomNav />
</div>
</template>
  
<script>
import TopHeader from '../components/TopHeader.vue';
import BottomNav from '../components/BottomNav.vue';

export default {

    components: {

        TopHeader, BottomNav
    },
    data() {
        return {


        }
    }

}
</script>
  
<style></style>
  