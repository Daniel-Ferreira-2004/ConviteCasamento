    // Conteúdo das outras seções
    const sections = {
        presente: `
            <p>Não queremos que levem presentes, porém se quiserem nos ajudar com a lua de Mel, faça um pix:</p>
            <img src="../img/qrcode-pix (1).png" alt="QR Code" class="img-fluid my-3">
            <p><strong>Chave pix:</strong> +55 11 98102-5872</p>
            <p><strong>Banco:</strong> NU</p>
        `,
        endereco: `<p>Estr. dos Fernandes, 2100 - Parque Santa Rosa, Suzano - SP, 08664-005</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.283050856709!2d-46.334931124670014!3d-23.558275578801883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce70787b0d830d%3A0xd778c499e8b5d56e!2sEstr.%20dos%20Fernandes%2C%202100%20-%20Parque%20Santa%20Rosa%2C%20Suzano%20-%20SP%2C%2008664-005!5e0!3m2!1spt-PT!2sbr!4v1758908072261!5m2!1spt-PT!2sbr" width="100%" height="auto" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        observacoes: `
            <p>❌ Não levar presentes</p>
            <p>⚪ Não usar branco</p>
            <p>🚸 Crianças não podem correr no estacionamento</p>
            <p>🍷 Se for beber, levar as suas bebidas alcoólicas</p>
        `
    };

    const modalEl = document.getElementById('sectionModal');
    const bootstrapModal = new bootstrap.Modal(modalEl);

    document.querySelectorAll('.info-box[data-section]').forEach(box => {
        box.addEventListener('click', () => {
            const key = box.getAttribute('data-section').trim();
            document.getElementById('sectionModalLabel').innerText = box.nextElementSibling.innerText;
            document.getElementById('sectionModalBody').innerHTML = sections[key] || "<p>Em breve...</p>";
            bootstrapModal.show();
        });
    });

    // Modal RSVP
    const rsvpModalEl = document.getElementById('rsvpModal');
    const rsvpModal = new bootstrap.Modal(rsvpModalEl);

    document.getElementById('openRsvpModal').addEventListener('click', () => {
        rsvpModal.show();
    });

    // Abrir WhatsApp ao clicar nas opções
    document.getElementById('vouParticipar').addEventListener('click', () => {
        window.open("https://wa.link/tl1qrn", "_blank");
        rsvpModal.hide();
    });

    // Contagem regressiva
    function pad(num){ return num<10?"0"+num:num; }
    const countDownDate = new Date("2025-11-22T11:00:00-03:00").getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        if(distance < 0){
            document.getElementById("countdown").innerHTML = "<h2>Tempo Esgotado!</h2>";
            return;
        }
        const days = Math.floor(distance/(1000*60*60*24));
        const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
        const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
        const seconds = Math.floor((distance%(1000*60))/1000);
        document.getElementById("days").innerText = pad(days);
        document.getElementById("hours").innerText = pad(hours);
        document.getElementById("minutes").innerText = pad(minutes);
        document.getElementById("seconds").innerText = pad(seconds);
    },1000);