<script setup>
  import { useMonitor } from '@/composables/monitor';

  const { menu } = useMonitor();
  const { footer } = useMonitor();
</script>

<template>
  <div>
    <component :is="menu" />
    <main>
      <router-view />
    </main>
    <footer>
      <component :is="footer" />
    </footer>
  </div>
</template>