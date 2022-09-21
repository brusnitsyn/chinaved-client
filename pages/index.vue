<script lang="ts" setup>
  definePageMeta({
    layout: 'page'
  })
</script>

<template>
  <div>
    <HeroSwiper />
    <PageWrapper>
      <PageBody>
        <PageSection>
          <PageSectionTitle text="Каталог" />
          <ShortcutCategoryWrapper>
            <ShortcutCategoryItem title="Запчасти" url="https://via.placeholder.com/342x122"/>
            <ShortcutCategoryItem title="Спецтехника" url="https://via.placeholder.com/342x122"/>
            <ShortcutCategoryItem title="Масла и смазки" url="https://via.placeholder.com/342x122"/>
            <ShortcutCategoryItem title="Резина" url="https://via.placeholder.com/342x122"/>
          </ShortcutCategoryWrapper>
        </PageSection>
        <PageSection>
          <PageSectionTitle text="Новости" :route="{name: 'Все новости', to: {name: 'news'}}" />
          <ShortcutNewsWrapper>
            <ShortcutNewsItem image="https://via.placeholder.com/334x167" user="admin" title="Заголовок новости 1" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque debitis dicta dolor, est ex facere, provident quasi qui quibusdam, quisquam sed veritatis voluptates. Consequuntur fugiat ipsum nemo quae tempora." />
            <ShortcutNewsItem image="https://via.placeholder.com/334x167" user="admin" title="Заголовок новости 2" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque debitis dicta dolor, est ex facere, provident quasi qui quibusdam, quisquam sed veritatis voluptates. Consequuntur fugiat ipsum nemo quae tempora." />
            <ShortcutNewsItem image="https://via.placeholder.com/334x167" user="admin" title="Заголовок новости 3" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque debitis dicta dolor, est ex facere, provident quasi qui quibusdam, quisquam sed veritatis voluptates. Consequuntur fugiat ipsum nemo quae tempora." />
            <ShortcutNewsItem image="https://via.placeholder.com/334x167" user="admin" title="Заголовок новости 4" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque debitis dicta dolor, est ex facere, provident quasi qui quibusdam, quisquam sed veritatis voluptates. Consequuntur fugiat ipsum nemo quae tempora." />
          </ShortcutNewsWrapper>
        </PageSection>
      </PageBody>
    </PageWrapper>
  </div>
</template>