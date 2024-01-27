<template>
    <div>
        <div class="main-content screen-width">
            <TopHeader headerText="تابلو اعلانات" icon="1" />
            <div class="container mt-4">
                <div class="row">
                    <div class="accordion px-0" id="info">
                        <div class="accordion-item">
                            <div class="border-right-width border-success">
                                <div class=" my-2">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            عنوان اعلامیه یا خبر
                                        </button>
                                        <div class="text-muted fs-xxSmall accordion-desc">نویسنده : سروش اربابی
                                            |
                                            دوشنبه 12 اسفند 1401
                                        </div>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                        aria-labelledby="headingOne" data-bs-parent="#info">
                                        <div class="accordion-body">
                                            اعلان هایی که هنوز مشاهده نشده اند به صورت باز و با رنگ سبز نمایش داده میشود . و
                                            اعلامهایی
                                            که یک بار در این صفحه نمایش داده شده به صورت آبی و فقط با تیتر نمایش داده میشود.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <div class="border-right-width border-info">
                                <div class=" my-2">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                            عنوان اعلامیه یا خبر
                                        </button>
                                        <div class="text-muted fs-xxSmall accordion-desc">نویسنده : سروش اربابی
                                            |
                                            دوشنبه 12 اسفند 1401
                                        </div>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse " aria-labelledby="headingTwo"
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

<style></style>