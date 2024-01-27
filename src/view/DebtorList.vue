<template>
    <div>
        <div class="main-content screen-width">
            <TopHeader headerText="سایر بدهکاران مجموعه" icon="1" />
            <div class="container ">
                <div class="row pt-4">                
                    <ListBox desc="500.000 تومان" title="سروش اربابی" icon="" />
                    <ListBox desc="500.000 تومان" title=" رامین" icon="" />
                </div>
            </div>
        </div>
        <BottomNav/>
    </div>
</template>

<script>
import TopHeader from '../components/TopHeader.vue';
import BottomNav from '../components/BottomNav.vue';
import ListBox from '../components/ListBox.vue';
export default {

    components: {

        TopHeader, BottomNav,ListBox
    },
    data() {
        return {


        }
    }

}
</script>

<style></style>