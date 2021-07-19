const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let data = {
        name,
        email,
    };
    let convertData = JSON.stringify(data);
    localStorage.setItem('lead', convertData);

    let content = document.getElementById("content");


    let loading = `<p id="message">Por favor, aguarde...</p>`;
    let done = `<p id="message">Muito obrigada! Seu cadastro foi enviado com sucesso.</p>`
    let error = `<p id="message">Oops.. Todos os campos devem ser preenchidos. Recarrege a página para tentar novamente.</p>`

    content.innerHTML = loading;

    if (name != null || email != null){
        content.innerHTML = error
    }
    else{
        setTimeout(()=>{
            content.innerHTML = done
        }, 1000)
    }
})

form.addEventListener('keypress', (e) => {
    if (e.key == 'Enter'){
        e.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let data = {
            name,
            email,
        };
        let convertData = JSON.stringify(data);
        localStorage.setItem('lead', convertData);

        let content = document.getElementById("content");
        let loading = `<p id="message">Por favor, aguarde...</p>`;
        let done = `<p id="message">Muito obrigada! Seu cadastro foi enviado com sucesso.</p>`

        content.innerHTML = loading;

        setTimeout(()=>{
            content.innerHTML = done
        }, 1000)
    }
})

function updateTimer() {
    future = Date.parse("jul 25, 2021 23:59:00");
    now = new Date();
    diff = future - now;
   
    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);
   
    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;
   
    document.getElementById("timer").innerHTML =
      "<div>" +
      d +
      "<span>dias</span></div>" +
      "<div>" +
      h +
      "<span>horas</span></div>" +
      "<div>" +
      m +
      "<span>minutos</span></div>" +
      "<div>" +
      s +
      "<span>segundos</span></div>";
  }
  setInterval("updateTimer()", 1000);