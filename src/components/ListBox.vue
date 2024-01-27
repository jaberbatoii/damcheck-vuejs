<template>
    <div class="col-12 bg-white rounded-6 text-shadow my-2">
        <div class="d-flex justify-content-between py-3">
          <div>
            <img v-if="hasIcon" :src="require(`@/assets/images/${icon}.svg`)" width="15" />

            <span class="fs-small ps-2">{{title}}</span>
          </div>

          <div class="fs-xSmall pe-2">
          {{ desc }}
          </div>
        </div>
      </div>
</template>
<script>
export default {
    props : ['desc','title','hasIcon','icon']    

}
</script>

<style>

</style>