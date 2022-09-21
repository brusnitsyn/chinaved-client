<script lang="ts" setup>
definePageMeta({
  layout: 'page'
})

</script>

<template>
  <PageWrapper>
    <PageBody>
      <PageSection>
        <PageSectionTitle text="Поиск" />
        <SearchInput autofocus placeholder="Введите поисковой запрос" />
      </PageSection>
      <PageSection>
        <PageSectionTitle text="Результаты" />
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
