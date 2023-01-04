<template>
    <header class="header">
        
        <div class="container-fluid d-flex align-items-center px-xxl-4">
            <a href="#" class="mburger d-flex align-items-center d-xl-none me-2" @click="onToggleMenuMB" :class="{ 'active' : isMenuMB }">
                <span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></span>
            </a>

            <nuxt-link to="/" class="logo">
                <img src="~images/components/header/logo.svg" alt="">
            </nuxt-link>
    

            <nav class="main__nav d-none d-xl-block">
                <ul class="c-menu">
                    <li class="menu-item menu-item-has-children">
                        <nuxt-link to="#">Giao dịch</nuxt-link>
                        <ul class="sub-menu">
                            <li class="menu-item"><a href="#">Giao dịch</a></li>
                            <li class="menu-item"><a href="#">Giao dịch</a></li>
                            <li class="menu-item"><a href="#">Giao dịch</a></li>
                        </ul>
                    </li>
                    <li class="menu-item menu-item-has-children">
                        <nuxt-link to="#">Hỗ trợ</nuxt-link>
                        <ul class="sub-menu">
                            <li class="menu-item"><a href="#">Giao dịch</a></li>
                            <li class="menu-item"><a href="#">Giao dịch</a></li>
                            <li class="menu-item"><a href="#">Giao dịch</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <button class="header__connect btn btn-primary ms-auto">Liên kết ví</button>

        </div>
    </header>

    <nav id="menu__mobile" class="nav__mobile" :class="{ 'active' : isMenuMB }">
        <div class="nav__mobile__header">
            <div class="nav__mobile__logo">
                <a href="/">
                    <img src="~images/components/header/logo.svg" alt="">
                </a>
            </div>
            <div class="ms-auto"><a href="#" class="mburger" @click="onToggleMenuMB" :class="{ 'active' : isMenuMB }">
                    <span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></span>
                </a></div>
        </div>
        <div class="nav__mobile__content">

            <ul class="nav__mobile--ul">
                <li class="menu-item menu-item-has-children">
                    <a href="#">Giao dịch</a>
                    <ul class="sub-menu">
                        <li class="menu-item"><a href="#">Giao dịch</a></li>
                        <li class="menu-item"><a href="#">Giao dịch</a></li>
                        <li class="menu-item"><a href="#">Giao dịch</a></li>
                    </ul>
                </li>
                <li class="menu-item menu-item-has-children">
                    <a href="#">Hỗ trợ</a>
                    <ul class="sub-menu">
                        <li class="menu-item"><a href="#">Giao dịch</a></li>
                        <li class="menu-item"><a href="#">Giao dịch</a></li>
                        <li class="menu-item"><a href="#">Giao dịch</a></li>
                    </ul>
                </li>
            </ul>

        </div>
    </nav>
</template>
<script>
export default {
    data(){
        return{
            isMenuMB : false
        }
    },
    methods:{
        onToggleMenuMB(){
            console.log( this.isMenuMB);
     
            this.isMenuMB = !this.isMenuMB;
        }
    }
}
</script>
<style lang="scss" src="~/assets/scss/layout/_header.scss" scoped></style>
<style lang="scss" src="~/assets/scss/component/_menu-mb.scss" scoped></style>