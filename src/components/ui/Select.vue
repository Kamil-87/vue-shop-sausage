<template>
    <select>
        <option>Сортировка</option>
        <option
            v-for="category in categories"
            :key="category.id"
            :value="category.id"
        >{{ category.title }}</option>
    </select>
</template>

<script>
export default {
    name: 'Select',
    data() {
        return {
            categories: []
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>

</style>
