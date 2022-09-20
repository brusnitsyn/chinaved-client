<script lang="ts" setup>
definePageMeta({
  layout: 'auth'
})
</script>

<template>
  <div class="md:mx-auto md:my-auto mt-12 px-4 md:px-8">
    <Form>
      <template #header>
        <FormHeader title="Создать аккаунт" subTitle="в магазине chinaved"/>
      </template>
      <template #body>
        <div class="space-y-4">
          <FormTextInput type="name" placeholder="Имя"/>
          <FormTextInput type="email" placeholder="Адрес электронной почты"/>
          <FormTextInput type="password" placeholder="Пароль"/>
        </div>
      </template>
      <template #footer>
        <div class="flex flex-col gap-y-2">
          <Button text="Зарегистрироваться"/>
          <Anchor text="У меня есть аккаунт" :to="{name: 'auth-login'}" />
        </div>
      </template>
    </Form>
  </div>
</template>