<script lang="ts" setup>
  definePageMeta({
    layout: 'page'
  })
</script>

<template>
  <PageWrapper>
    <PageBody>
      <PageSection>
        <PageSectionTitle text="Каталог" />
        <CatalogWrapperTag>
          <CatalogTag>
            Запчасти
          </CatalogTag>
          <CatalogTag>
            Спецтехника
          </CatalogTag>
          <CatalogTag>
            Масла и смазки
          </CatalogTag>
          <CatalogTag>
            Резина
          </CatalogTag>
        </CatalogWrapperTag>
        <CatalogWrapper class="pt-4">
          <template #bar>
            <div class="hidden lg:block">

            </div>
          </template>
          <template #content>
            <CatalogWrapperItem>
              <CatalogItem />
              <CatalogItem />
              <CatalogItem />
            </CatalogWrapperItem>
          </template>
        </CatalogWrapper>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>