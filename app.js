const { createApp } = Vue; // import the fct from vue

// create an instance of view App and mount it the element with the id='app'
createApp({
  data() {
    return {
      header: "Welcome to my assessment",
      subHeader: "Hope you enjoy my work!",
      texts: [
        "lorem Dolor fugiat amet eu anim consectetur quis ipsum. Cillum eu eiusmod in et cupidatat Lorem. Exercitation aliqua mollit consequat non excepteur. Qui non ex anim elit eu veniam irure aliqua id occaecat est proident. Sunt adipisicing non consectetur veniam ut aliqua ut id.",
        "My Name is Yahya Nashar",
        "I am a full stack web developer",
        "MERN STACK",
        "VUE.JS",
        "NUXT.JS",
        "NEXT.JS",
      ],
      searchForMe: "", // here i store the search query
      visibleText: true, // here is a personal addition of mine to show / hide texts
      notFound: "No Search Results Match Your Query",
    };
  },
  computed: {
    // this method checks the text array and based on the input, it filters out the elements containing matching results.
    searchResults() {
      return this.texts.filter((text) =>
        text.toLowerCase().includes(this.searchForMe.toLowerCase())
      );
    },
  },
  methods: {
    // using this method i toggle on / off text visibility
    toggleTexts() {
      this.visibleText = !this.visibleText;
    },
    // this methods turns the visibility of the texts to true automatically when the user inputs smtg in the search box
    onSearchInputChange(event) {
      this.searchForMe = event.target.value;
      this.visibleText = true;
    },
    // this methods highlights the searchForMe query in the results of the filtered texts by adding the highlight tags which are styled inside the global css file
    // the regex is used to match upper case and lower case letters alike by the i- flag
    // the g-flag is used to match all occurences, and not just the first one
    highlightText(text) {
      if (!this.searchForMe) return text;
      const regex = new RegExp(`(${this.searchForMe})`, "gi");
      return text.replace(regex, "<highlighted>$1</highlighted>");
    },
  },
}).mount("#app");
