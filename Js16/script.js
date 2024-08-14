$(document).ready(function() {
    // Загрузка вопросов из JSON файла
    $.getJSON('questions/questions.json', function(data) {
        let questionsHtml = '';
        let selectedQuestions = data.questions.slice(0, 10); // Берем только первые 10 вопросов

        selectedQuestions.forEach((question, index) => {
            questionsHtml += `<div class="question">
                                <p>${question.text}</p>`;
            question.answers.forEach(answer => {
                questionsHtml += `<label><input type="radio" name="question${index}" value="${answer.isCorrect}">${answer.text}</label><br>`;
            });
            questionsHtml += `</div>`;
        });

        $('#questions').html(questionsHtml);
    });

    // Обработка отправки формы
    $('#submit').click(function() {
        let score = 0;
        $('input[type="radio"]:checked').each(function() {
            if ($(this).val() === "true") {
                score++;
            }
        });
        alert(`Поздравляем! Тест сдан на ${score} баллов.`);
    });
});
