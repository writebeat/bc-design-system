
(function( $ ){
  var $dt = $('#decisionTree');
  var $title = $dt.find('.decisionTree--title');
  var $content = $dt.find('.decisionTree--content');

  var decisionTree = {
    // Placeholder for the current question.
    currentQuestion: null,

    prevQuestion: null,

    // Flag that will prevent from the script running more than once.
    // initiated: false,

    // Array that will contain the questions imported from the data json file.
    questions: [],

    prevButton: null,

    /**
     * Initializes decisionTree by importing JSON data and loading the first
     * question.
     */
    init: function() {
      var _this = this;
      // if (_this.initiated) return;
      // _this.initiated = true;
      $.get('/patterns/00-atoms-buttons-button/00-atoms-buttons-button.mustache', function(template) {
        _this.prevButton = Mustache.render(template, {btnText: "Previous Question"})
        $.getJSON('/js/json/decision-tree.json', function(data) {
          _this.questions = data.questions;
          // Set current question to the first question.
          _this.currentQuestion = _this.questions[0];
          _this.loadCurrentQuestion();
        });
      });

    },

    loadCurrentQuestion: function() {
      if (!this.questions.length) return;
      var question = this.currentQuestion || this.questions[0];
      var _this = this;
      $title.text(question.text);
      $content.html(this.generateChoices(question));
      if (question.prevQuestion) {
        var $prevQuestionButton = this.prevQuestionButton();
        $content.append($prevQuestionButton);
      }
    },

    prevQuestionButton: function() {
      // var $button = $('<button class="decisionTree--button-previous">Previous Question</button>');
      var $button = $(this.prevButton);
      console.log($button);
      var _this = this;
      $button.click(function() {
        var $prevQuestionId = _this.currentQuestion.prevQuestion;
        _this.currentQuestion = _this.getQuestionById($prevQuestionId);
        _this.loadCurrentQuestion()
      });
      return $button
    },

    choice: function(choice) {
      var _this = this;
      var $li = $('<li data-nq="' + choice.nextQuestion + '">' + choice.text + '</li>');
      // $(document).on('click', $li, this.clickChoice.bind(this));
      $li.click(this.clickChoice.bind(this))
      return ($li);
    },

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

    clickChoice: function(e) {
      var $choice = $(e.target);
      var nextQuestion = this.getQuestionById($choice.data('nq'));
      this.prevQuestion = this.currentQuestion;
      this.currentQuestion = nextQuestion;
      this.loadCurrentQuestion();
    },

    generateChoices: function() {
      var _this = this;
      var $choiceList = $('<ul class="decisionTree--choices" />');
      $.each(_this.currentQuestion.choices, function(index, value) {
        $choiceList.append(_this.choice(value))
      });
      return $choiceList;
    }

  }
  if ($dt.length) {
    decisionTree.init();
  }
})( jQuery );
