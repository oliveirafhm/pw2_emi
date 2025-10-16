// Este arquivo contém o código JavaScript que adiciona interatividade à página.

document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.createElement('h1');
    greetingElement.textContent = 'Bem-vindo à Página Web Simples!';
    document.body.appendChild(greetingElement);

    const buttonElement = document.createElement('button');
    buttonElement.textContent = 'Clique aqui!';
    document.body.appendChild(buttonElement);

    buttonElement.addEventListener('click', () => {
        alert('Você clicou no botão!');
    });
});