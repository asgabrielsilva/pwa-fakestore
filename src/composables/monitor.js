import {
    defineAsyncComponent,
    onMounted,
    onUnmounted,
    ref,
    shallowRef,
  } from 'vue';
  
  export function useMonitor() {
    const breakpoint = ref('sm');
    const menu = shallowRef(
      defineAsyncComponent(() => import('../components/menu-superior/MenuSuperiorXs.vue')),
    );
    const footer = shallowRef(
      defineAsyncComponent(() => import('../components/footer/FooterXs.vue')),
    );
  
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 576) {
        breakpoint.value = 'xs';
        menu.value = defineAsyncComponent(() =>
          import('../components/menu-superior/MenuSuperiorXs.vue'),
        );
        footer.value = defineAsyncComponent(() =>
          import('../components/footer/FooterXs.vue'),
        );
      } else if (width < 768) {
        breakpoint.value = 'sm';
        menu.value = defineAsyncComponent(() =>
          import('../components/menu-superior/MenuSuperiorSm.vue'),
        );
        footer.value = defineAsyncComponent(() =>
          import('../components/footer/FooterSm.vue'),
        );
      } else if (width < 992) {
        breakpoint.value = 'md';
        menu.value = defineAsyncComponent(() =>
          import('../components/menu-superior/MenuSuperiorMd.vue'),
        );
        footer.value = defineAsyncComponent(() =>
          import('../components/footer/FooterMd.vue'),
        );
      } else if (width < 1200) {
        breakpoint.value = 'lg';
        menu.value = defineAsyncComponent(() =>
          import('../components/menu-superior/MenuSuperiorLg.vue'),
        );
        footer.value = defineAsyncComponent(() =>
          import('../components/footer/FooterLg.vue'),
        );
        
      } else {
        breakpoint.value = 'xl';
        menu.value = defineAsyncComponent(() =>
          import('../components/menu-superior/MenuSuperiorXl.vue'),
        );
        footer.value = defineAsyncComponent(() =>
          import('../components/footer/FooterXl.vue'),
        );
      }
    };
  
    onMounted(() => {
      updateBreakpoint();
      window.addEventListener('resize', updateBreakpoint);
    });
  
    onUnmounted(() => {
      window.removeEventListener('resize', updateBreakpoint);
    });
  
    return {
      breakpoint,
      menu,
      footer,
    };
  }