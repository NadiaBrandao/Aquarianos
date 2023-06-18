
//botão
    function funcao1(){
    alert("Agradecemos sua inscrição! Em breve você receberá um e-mail de confirmação.")
    }

   function funcao2(){
    alert("Você será redirecionado a uma loja parceira!")

    }

//formulário

    const form = document.querySelector("#form")
    const nomeInput = document.querySelector("#nome")
    const emailInput = document.querySelector("#email")
    const telefoneInput = document.querySelector("#telefone")
    const textoInput = document.querySelector("#texto")


    form.addEventListener("submit", (event) => {
        event.preventDefault();
  
        //verifica nome
        if(nomeInput.value === "") {
            alert("Por favor preencha o seu nome completo");
            return;
        }
        //verifica email
        if(emailInput.value === "") {
            alert("Por favor preencha o seu E-mail");
            return;
        }
         //verifica texto
        if(textoInput.value === "") {
            alert("Por favor escreva sua mensagem");
            return;
        }
        form.submit();
    })

