export default {
  props: ['value'], 
  data() {
    return {
      innerValue: ''
    };
  },
  mounted() {
    this.innerValue = `${this.value}`; //clone value 
  },
  methods: {
    removeTrailingWhitespace(s) {
      const sanitized = s ? s : ''; 
      return sanitized.replace(/^\s+|\s+$/g, '');
    },
    updateValue() {
      const cleanedText = this.removeTrailingWhitespace(this.$el.innerText); 
      if (this.model !== cleanedText) { 
        this.$emit('input', { 
          target: { 
            type: 'input',
            originalTarget: this.$el,
            value: cleanedText} 
        } );
      }
    } 
  }
};
