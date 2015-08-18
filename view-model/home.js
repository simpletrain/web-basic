function HomeViewModel(topics, inputs, score) {
    this.topics = topics;
    this.inputs = inputs;
    this.score = score;
}

HomeViewModel.prototype.getFillInBlanks = function () {
    return this.topics.fill_in_blanks;
};

HomeViewModel.prototype.getSingleChoice = function () {
    return this.topics.single_choice;
};

HomeViewModel.prototype.getMultiChoice = function () {
    return this.topics.multi_choice;
};

HomeViewModel.prototype.getJudge = function () {
    return this.topics.judge;
};

HomeViewModel.prototype.getSubject = function () {
    return this.topics.subjective;
};

HomeViewModel.prototype.getInformation = function () {
    if(this.inputs){
        return {
            class_name: this.inputs.class_name,
            id_number: this.inputs.id_number,
            student_name: this.inputs.student_name,
            score: this.score
        };
    } else {
        return {
            class_name: '',
            id_number: '',
            student_name: '',
            score: ''
        };
    }
};

module.exports = HomeViewModel;