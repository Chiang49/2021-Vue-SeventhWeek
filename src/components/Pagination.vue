<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <!-- 上一頁 -->
      <li class="page-item" v-if="pagination.has_pre === true">
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="pageAction(pagination.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <template v-for="page in pagination.total_pages" :key="page">
        <li class="page-item" :class="{ active: page === pagination.current_page }">
          <a class="page-link" href="#" @click.prevent="pageAction(page)">{{ page }}</a>
        </li>
      </template>
      <!-- 下一頁 -->
      <li class="page-item" v-if="pagination.has_next === true">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="pageAction(pagination.current_page + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    pagination: {
      type: Object
    }
  },
  methods: {
    pageAction (page) {
      this.$emit('page', page)
    }
  }
}
</script>
