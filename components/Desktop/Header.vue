<template>
    <header class="header">
			<div class="container-fluid d-flex align-items-center px-xxl-4">
				<a href="#menu__mobile" class="mburger d-flex align-items-center d-xl-none me-2">
	              <span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></span>
	          	</a>
				<div class="logo">
					<img src="~images/components/header/logo.svg" alt="">
				</div>

				<nav class="main__nav d-none d-xl-block">
		            <ul class="c-menu">
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