/**
 * Decision Tree module will generate a series of questions and answer
 * choices that will progress through questions one by one until the user
 * reaches the end of the series, where they can be shown some other content.
 */
(function( $, config ) {

  var $dt = $('#decisionTree');
  var $title = $dt.find('.decisionTree--title');
  var $content = $dt.find('.decisionTree--content');

  var decisionTree = {
    // Placeholder for the current question.
    currentQuestion: null,

    // Array that will contain the questions imported from the data json file.
    questions: [],

    // Will contain the patterns loaded from the loadPatterns function call.
    patterns: {},

    /**
     * Initializes decisionTree by importing JSON data and loading the first
     * question.
     */
    init: function() {
      var _this = this;
      // First load patterns that will be used in this script.
      loadPatterns(['button'], function(patterns) {
        _this.patterns = patterns;
        _this.loadData(function(data) {
          _this.questions = data.questions;
          // Set current question to the first question.
          _this.startOver()
        });
      });
    },

    /**
     * Loads test JSON data, and
     * @param  {Function} callback Function to execute once JSON data is loaded.
     * @todo Rewrite this function once we know where real data is coming from.
     */
    loadData: function(callback) {
      $.getJSON(config.decisionTreeData, callback);
    },

    /**
     * Renders the current question on the front end.
     */
    loadCurrentQuestion: function() {
      if (!this.questions.length) return;
      var question = this.currentQuestion || this.questions[0];
      var _this = this;
      $title.text(question.text);
      $content.html(this.generateChoices(question));
      if (question.prevQuestion) {
        var $prevQuestionButton = this.prevQuestionButton();
        var $startOverButton = this.startOverButton();
        $content
          .append($prevQuestionButton)
          .append($startOverButton);
      }
    },

    /**
     * Generates the Start Over button.
     * @return {element} jQuery element for the Start Over button.
     */
    startOverButton: function() {
      var data = {
        btnText: 'Start Over',
      };
      var pattern = Mustache.render(this.patterns.button, data);
      var $button = $(pattern);
      $button.click(this.startOver.bind(this));
      return $button;
    },

    /**
     * Generates the Previous Question button.
     * @return {element} jQuery element for the Previous Question button.
     */
    prevQuestionButton: function() {
      var data = {
        btnText: 'Previous Question',
      };
      var pattern = Mustache.render(this.patterns.button, data);
      var $button = $(pattern);
      var _this = this;
      $button.click(function() {
        var $prevQuestionId = _this.currentQuestion.prevQuestion;
        _this.currentQuestion = _this.getQuestionById($prevQuestionId);
        _this.loadCurrentQuestion()
      });
      return $button
    },

    /**
     * Generates an element that represents an answer selection.
     * @param  {object} choice  Contains the data for a given answer.
     * @return {element}        jQuery element for the list item with the click
     *                          event attached.
     */
    choice: function(choice) {
      var _this = this;
      var $li = $('<li data-nq="' + choice.nextQuestion + '">' + choice.text + '</li>');
      // $(document).on('click', $li, this.clickChoice.bind(this));
      $li.click(this.clickChoice.bind(this))
      return ($li);
    },

    /**
     * Gets a particular question's data by the question ID.
     * @param  {number} questionId ID representing the question we wish to retrieve.
     * @return {object}            Question data, including the question text and
     *                             answer choices.
     */
    getQuestionById: function(questionId) {
      if (!questionId || !this.questions.length) return;
      var questions = this.questions
      for(var i = 0; i < questions.length; i++) {
        if (questions[i].id === questionId) {
          return questions[i];
        }
      }
      return null;
    },

    /**
     * Gets called when user clicks on an answer choice, loads up the next
     * question based on the data-nq attribute on the list item.
     * @param  {object} e Click Event from the list item being clicked.
     */
    clickChoice: function(e) {
      var $choice = $(e.target);
      var nextQuestion = this.getQuestionById($choice.data('nq'));
      this.prevQuestion = this.currentQuestion;
      this.currentQuestion = nextQuestion;
      this.loadCurrentQuestion();
    },

    /**
     * Builds the unordered list that contains the answer choices for the
     * current question that is loaded.
     * @return {element} jQuery element containing a UL with the answer choices.
     */
    generateChoices: function() {
      var _this = this;
      var $choiceList = $('<ul class="decisionTree--choices" />');
      $.each(_this.currentQuestion.choices, function(index, value) {
        $choiceList.append(_this.choice(value))
      });
      return $choiceList;
    },

    /**
     * Sets the current question to 0 (first question) and then loads it.
     */
    startOver: function() {
      this.currentQuestion = this.questions[0];
      this.loadCurrentQuestion();
    }

  }

  // If the decisionTree element is found on the page, initialize it.
  if ($dt.length) {
    decisionTree.init();
  }

})( jQuery, config );
