<template>
    <div>
        <div class="main-content screen-width">
            <TopHeader headerText="زیر اطلاعات صورت حساب " icon="1" />
            <div class="container my-4">
                <div class="card text-center box-shadow border-0">
                    <div class="card-body">
                        <div class="text-gray py-3  fs-medium">صورت حساب شما</div>
                        <div class=" fs-large">3,650,000 ریال</div>
                        <div class="row">
                            <div class="col-6 ps-2">
                                <button type="submit" class="btn btn-warning text-white my-3 w-100"
                                    @click="$router.push('/saveReceipt')">ثبت فیش
                                </button>

                            </div>
                            <div class="col-6  pe-2">
                                <button type="submit" class="btn btn-primary my-3 w-100"
                                    @click="$router.push('/onlinePayment')">پرداخت آنلاین
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 bg-white rounded-6 text-shadow my-2">
                <div class="d-flex justify-content-between px-2 py-3">
                    <div class="ps-2">
                        <div class="fs-small ">
                            عنوان حساب
                        </div>
                        <div class="fs-xxSmall text-muted">نویسنده : سروش اربابی
                        </div>
                    </div>
                    <div class="fs-xSmall pe-2">
                        60.000 تومان
                    </div>
                </div>
                <div class="fs-xSmall fw-normal px-3 pb-3">
                    توضیحات مربوطه در صورت نداشتن توضیح یا عکس کارت کوچک نمایش میباشد. ارتفاع این کارت و کارت تصویر با توجه
                    متن و عکس تغییر میکند به صورتی که نیاز به اسکرول داخل کارت نباشد

                </div>
            </div>
            <div class="container">
                <div class="row">
                    <ListBox desc="60.000 تومان" title="شارژ ماهانه" />
                </div>
            </div>
            
            <div class="col-12 bg-white rounded-6 text-shadow my-2">
                <div class="d-flex justify-content-between px-2 py-3">
                    <div class="ps-2">
                        <div class="fs-small ">
                            صورت حساب پرداخت شده
                        </div>
                        <div class="fs-xxSmall text-muted">نویسنده : سروش اربابی
                        </div>
                    </div>
                    <div class="fs-xSmall pe-2">
                        60.000 تومان
                    </div>
                </div>
                <div class="col-12 fs-xSmall fw-normal px-3 pb-3 text-center">
                    <img alt="pic1" src="../assets/images/invoice/12.png" width="205" class=" rounded-3" />
                </div>
            </div>
        </div>
        <BottomNav />
    </div>
</template>

<script>
import TopHeader from '../components/TopHeader.vue';
import BottomNav from '../components/BottomNav.vue';
import ListBox from '../components/ListBox.vue';
export default {

    components: {

        TopHeader, BottomNav, ListBox
    },
    data() {
        return {


        }
    }

}
</script>

<style></style>