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
    
    <input type="date" ref="startDataIput" />
    <input type="data" ref="endDataInput" />
  </div>
</template>

<script>
  export default {
  
    // Provide will inject this property into all child components
    // in any child use inject: ['providedDataName'] e.g. ["getAttr"]
    provide: function () {
      return {
        getAttr: this.geAttr
      }
    },
    data() {
      return {
        someAttr: "",
        url: "https://example.com"
      };
    },
    
    computed: {
      getAttr() {
        return this.someAttr;
      }
    },
    methods: {
      // Assume we have Pikaday constructor
      attachDatepicker: function (refName) {
        var picker = new Pikaday({
          field: this.$refs[refName],
          format: 'YYYY-MM-DD'
        })

        this.$once('hook:beforeDestroy', function () {
          picker.destroy()
        })
      }
    },
    mounted() {
      this.attachDatepicker('startDateInput')
      this.attachDatepicker('endDateInput')
    }
  }
</script>
