<template>
    <header class="header">
			<div class="container-fluid d-flex align-items-center px-xxl-4">

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
</template>
<script>
export default {
    
}
</script>
<style lang="scss" src="~/assets/scss/layout/_header.scss" scoped></style>