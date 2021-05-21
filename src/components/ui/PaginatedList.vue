<template>
    <div>
        <ul>
            <li v-for="page in paginatedData">
                {{ page }}
            </li>
        </ul>
        <button
            :disabled="pageNumber === 0"
            @click="prevPage">
            Предыдущая
        </button>
        <button
            :disabled="pageNumber >= pageCount -1"
            @click="nextPage">
            Следующая
        </button>
    </div>
</template>

<script>
export default {
    props: {
        listData: {
            type: Array,
            required: true
        },
        size: {
            type: Number,
            required: false,
            default: 5
        },
    },
    data() {
        return {
            pageNumber: 0
        }
    },
    methods: {
        nextPage() {
            this.pageNumber++
        },
        prevPage() {
            this.pageNumber--
        }
    },

    computed: {
        pageCount() {
            let l = this.listData.length
            let s = this.size
            return Math.ceil(l/s)
        },
        paginatedData() {
            const start = this.pageNumber * this.size
            const end = start + this.size
            return this.listData.slice(start, end);
        }
    }

}
</script>

<style scoped>

</style>
