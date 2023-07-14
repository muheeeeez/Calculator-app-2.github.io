const app = Vue.createApp({
  data() {
    return {
      operatorClicked: false,
      current: "",
      operator: null,
      previous: "",
    };
  },
  methods: {
    clear() {
      this.current = "";
    },
    percent() {
      this.current = this.current / 100 + "%";
    },
    dot() {
      if (this.current.indexOf(".") === -1) {
        this.append(".");
      }
    },
    append(number) {
      if (this.operatorClicked) {
        this.current = "";
        this.operatorClicked = false;
      }
      this.current = this.current += number;
    },
    clickedOperator() {
      this.previous = this.current;
      this.operatorClicked = true;
    },
    divide(a, b) {
      this.operator = (a, b) => a / b;
      this.clickedOperator();
    },
    add(a, b) {
      this.operator = (a, b) => Number(a) + Number(b);
      this.clickedOperator();
    },
    minus(a, b) {
      this.operator = (a, b) => a - b;
      this.clickedOperator();
    },
    times(a, b) {
      this.operator = (a, b) => a * b;
      this.clickedOperator();
    },
    sum() {
      this.current = this.operator(this.previous, this.current);
    },
  },
});
app.mount("#calculator");
