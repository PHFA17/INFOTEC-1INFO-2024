const themeBtns = document.querySelectorAll(".btnTheme");
const backgrounds = document.querySelectorAll(".background");

themeBtns.forEach((button) => {
    button.addEventListener("click", () => {
        // Verifica se algum dos elementos de background tem a classe 'lightTheme'
        const hasLightTheme = Array.from(backgrounds).some((background) => 
            background.classList.contains("lightTheme")
        );
        
        if (hasLightTheme) {
            // Remove a classe 'lightTheme' para voltar ao tema escuro (preto)
            backgrounds.forEach((background) => {
                background.classList.remove("lightTheme");
            });
            button.innerHTML = "Modo Escuro"; // Atualiza o texto do botão
            button.classList.add("lightTheme")
        } else {
            // Adiciona a classe 'lightTheme' para mudar para o tema claro (branco)
            backgrounds.forEach((background) => {
                background.classList.add("lightTheme");
            });
            button.innerHTML = "Modo Claro"; // Atualiza o texto do botão
            button.classList.remove("lightTheme")
        }
    });
});
