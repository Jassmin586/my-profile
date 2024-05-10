<template>
  <header class="z-40 px-5 py-2.5 md:p-5">
    <div class="grid grid-cols-[200px_auto_200px] items-center">
      <RouterLink to="/" :title="$t('userProfile')">
        <img src="" :alt="$t('logo')" />
      </RouterLink>
      <AppNavbar />
    </div>
  </header>
</template>
