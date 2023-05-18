<template>
	<div class="left-menu">
		<div class="logo">
				<span class="material-symbols-outlined">brightness_5</span>
			
			<div class="logo-name">
				<p>Learning App</p>
			</div>			
		</div>
		<div class="left-menu-options">
			<ul>
				<li>Option</li>
				<li>Option</li>
				<li>Option</li>
				<li>Option</li>
				<li>Option</li>
			</ul>
		</div>
		<div class="faq">FAQ</div>
	</div>
</template>

<script setup>

</script>

<style>
.left-menu {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	/* align-items: center; */
	/* padding: 3rem; */
	padding-top: 5rem;
}

.logo {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content:center ;
	gap: 1rem;
}

.logo span {
	color: var(--text-color-blue);
	font-size: 3rem;
}

.logo-name p {
	font-size: 1.5rem;
}
</style>