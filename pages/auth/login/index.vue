<script lang="ts" setup>
  definePageMeta({
    layout: 'auth'
  })
</script>

<template>
  <div class="md:mx-auto md:my-auto mt-12 px-4 md:px-8">
    <Form>
      <template #header>
        <FormHeader title="Войти в аккаунт" subTitle="магазина chinaved"/>
      </template>
      <template #body>
        <div class="space-y-4">
          <FormTextInput type="email" placeholder="Адрес электронной почты"/>
          <FormTextInput type="password" placeholder="Пароль"/>
        </div>
      </template>
      <template #footer>
        <div class="flex flex-col gap-y-2">
          <Button text="Войти"/>
          <Anchor text="У меня нет аккаунта" :to="{name: 'auth-register'}" />
        </div>
      </template>
    </Form>
  </div>
</template>