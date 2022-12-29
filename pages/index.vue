<template>
    <div class="home">
        <component class="wrapper" :is="Component" />
    </div>
</template>
<script setup>
import MobileDetect from 'mobile-detect';
    let headers = useRequestHeaders()
    const md = process.server ? new MobileDetect(headers['user-agent']) : new MobileDetect(navigator.userAgent)
    const isMobile = md.phone() !== null || md.mobile() === 'UnknownMobile'
    const isTablet = md.tablet() !== null || md.mobile() === 'UnknownTablet'
    const desktop = !isMobile && !isTablet
    const Component = desktop ? resolveComponent('Desktop') : resolveComponent('Mobile')
</script>