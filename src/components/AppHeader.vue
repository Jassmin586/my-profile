<template>
  <header class="py-6 container mx-auto grid md:grid-cols-[200px_auto_200px] items-center">
    <RouterLink to="/" :title="$t('userProfile')" class="max-w-[200px] mx-auto mb-4 md:mb-0">
      <img src="/logo.png" :alt="$t('logo')" />
    </RouterLink>
    <AppNavbar />
  </header>
</template>
