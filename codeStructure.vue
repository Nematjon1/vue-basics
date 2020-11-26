<template>
  <div>
    <!--
      This will be converted to v-bind:[someattr] in in-DOM templates.
      Unless you have a "someattr" property in your instance, your code won't work.
    -->
    <a v-bind:[someAttr]="value"> ... </a>
    
    <!--
      This is how you data bind in vue "url" is dynamic value not a string value
      "href" is an argument for "v-bind"
    -->
    <a v-bind:href="url">example web-site</a>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        someAttr: "",
        url: "https://example.com"
      };
    }
  }
</script>
