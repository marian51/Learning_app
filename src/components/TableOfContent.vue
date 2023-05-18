<template>
  <div class="right-menu">
      <div class="right-menu-item account-setting">Account settings</div>
      <div class="table-of-content">
        <div class="toc-title">
          <h3>Table of content</h3>
        </div>
        <div class="toc-line">
          <div class="toc-line-icon fc-blue">
            <span class="material-symbols-outlined">groups</span>
          </div>
          <div class="toc-line-content">
            <h4>Dialogues</h4>
            <p>Dialogues done: 1/3</p>
          </div>
        </div>
        <div class="toc-line">
          <div class="toc-line-icon fc-violet">
            <span class="material-symbols-outlined">info</span>
          </div>
          <div class="toc-line-content">
            <h4>Grammar</h4>
            <p>Grammar learned: 2/5</p>
          </div>
        </div>
        <div class="toc-line"></div>
      </div>
      <div class="right-menu-item others">Other elemenst</div>
    </div>
</template>

<style>

.right-menu {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem;
  background-color: white;
}

.right-menu-item {
  width: 100%;
  /* background-color: red; */

}

.toc-title h3 {
  color: var(--text-color-grey);
  font-size: 1.5rem;
}

.table-of-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: sticky;
  top: 1rem;
  background-color: white;
}

.toc-line {
  display: flex;
  gap: 1rem;
}

.toc-line-icon {
  background-color: var(--color-background-soft-secondary);
  border-radius: 25%;
  padding: 0.4rem;
  cursor: pointer;
}

.toc-line-icon span {
  font-size: 3rem;
}

.toc-line-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.toc-line-content h4 {
  padding: 0;
  margin: 0;
  font-size: 1.25rem;
}

.toc-line-content p {
  color: var(--text-color-grey);
}

.fc-blue {
  color: var(--text-color-blue);
}

.fc-violet {
  color: var(--c-violet)
}

</style>