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
				<li>
					<a href="" class="menu-option active-option">
						<span class="material-symbols-outlined">library_books</span>
						<p>Book</p>
					</a>
				</li>
				<li>
					<a href="" class="menu-option">
						<span class="material-symbols-outlined">menu_book</span>
						<p>Chapters</p>
					</a>
				</li>
				<li>
					<a href="" class="menu-option">
						<span class="material-symbols-outlined">edit_note</span>
						<p>Notes</p>
					</a>
				</li>
				<li>
					<a href="" class="menu-option">
						<span class="material-symbols-outlined">settings</span>
						<p>Settings</p>
					</a>
				</li>
				<li>
					<a href="" class="menu-option">
						<span class="material-symbols-outlined">grid_view</span>
						<p>Resources</p>
					</a>
				</li>
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
	height: 85vh;
	top: 0;
	position: sticky;
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

.left-menu-options ul {
	list-style-type: none;
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

.left-menu-options a {
	color: var(--text-color-grey);
}

.menu-option {
	display: flex;
	flex-direction: row;
	gap: 1.5rem;
}

.active-option {
	color: var(--text-color-blue) !important;
}

.menu-option span {
	font-size: 2rem;
}

.menu-option p {
	font-size: 1.5rem;
}

</style>