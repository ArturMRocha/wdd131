document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const submitButton = form.querySelector('button');
    
    // Função para validar o formulário
    function validateForm(event) {
        event.preventDefault();  // Impede o envio do formulário até que a validação seja concluída
        
        // Captura os campos do formulário
        const firstName = document.getElementById('first-name').value.trim();
        const lastName = document.getElementById('last-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validar os campos obrigatórios
        if (!firstName || !lastName || !email || !message) {
            alert("Please fill in all the required fields!");
            return;
        }

        // Verificar formato do email
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        
        // Se tudo estiver correto, mostrar uma mensagem de sucesso
        alert("Thank you for reaching out! We will get back to you soon.");
        
        // Aqui você pode simular o envio ou processar os dados
        // Após a validação, limpar os campos do formulário
        form.reset();
    }

    // Adicionar o evento de envio do formulário
    submitButton.addEventListener('click', validateForm);
});
