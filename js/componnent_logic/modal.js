document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const isSuccess = true;

    const modalMessage = document.getElementById('modalMessage');
    if (isSuccess) {
        modalMessage.textContent = 'Ваше сообщение успешно отправлено!';
    } else {
        modalMessage.textContent = 'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.';
    }

    const feedbackModal = new bootstrap.Modal(document.getElementById('feedbackModal'));
    feedbackModal.show();
});

