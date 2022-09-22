<script lang="ts" setup>
definePageMeta({
  layout: 'page'
})

const username = 'Андрей'
</script>

<template>
  <PageWrapper>
    <PageBody>
      <PageSection>
        <PageSectionTitle :text="`Привет, ${username}`" />

      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
