<template>
    <div>
    <div class="main-content screen-width">
        <TopHeader headerText="پشتیبانی" icon="1" />
        <div class="container ">
            <div class="row pt-4">
                <div class="col-12 bg-white rounded-6 text-shadow my-1 pe-0">
                    <!-- کلاس 
                        border-success
                        برای رنگ دادن به حاشیه سمت راست باکس هست
                      -->
                    <div class="border-right-width px-3 border-success">
                        <div class=" my-3">
                            <div class="fs-small pb-2">
                                اطلاعیه
                            </div>
                            <div class="fw-normal fs-xSmall">

                                با سلام خدمت شما همراه ارجمند برنامه. در صورت مواجه با مشکل یا نیاز به راهنمایی، میتوانید در
                                بین
                                مطالب این صفحه جستجو نموده و جواب خود را پیدا کنید و در صورتی که مشکل یا راهنمایی مورد نظر
                                شما
                                پاسخ داده نشد با شماره 09153520267 تماس حاصل نمایید

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="accordion px-0" id="info">
                    <div class="accordion-item">
                        <div class="border-right-width border-info">
                            <div class=" my-2">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        عنوان راهنمایی
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                                    data-bs-parent="#info">
                                    <div class="accordion-body">
                                        اعلان هایی که هنوز مشاهده نشده اند به صورت باز و با رنگ سبز نمایش داده میشود . و
                                        اعلامهایی
                                        که یک بار در این صفحه نمایش داده شده به صورت آبی و فقط با تیتر نمایش داده میشود.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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

<style>
</style>