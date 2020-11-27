<template>
  <div class="container">
    <header>
      <!-- THis is named slot -->
      <slot name="header"></slot>
    </header>
    <!--
      Now we can use syntax to reach the slot
        <template v-slot:header>
          <h1>Here might be a page title</h1>
        </template>
    -->
    <main>
      <!-- This is default slot, it can omit the name attribute -->
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "SlotComponent"
  };
</script>
