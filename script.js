document.addEventListener("DOMContentLoaded", () => {
    // Lógica para las Preguntas Frecuentes (Acordeón)
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const faqItem = question.parentElement;
            
            // Cierra las demás preguntas abiertas
            const activeItems = document.querySelectorAll(".faq-item.active");
            activeItems.forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove("active");
                }
            });

            // Abre o cierra la pregunta actual
            faqItem.classList.toggle("active");
        });
    });
});
