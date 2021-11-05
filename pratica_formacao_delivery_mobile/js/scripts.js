let bebida = false;
let prato = false;
let sobremesa = false;
let check_pedido =false;

let valor_bebida = 0;
let valor_prato = 0;
let valor_sobremesa = 0;
let total_do_pedido = 0;

function selecionaBebida(position, price) {
    const bebidasall = document.getElementsByName("bebidas")
    bebidasall.forEach(item =>{
        if(document.getElementsByClassName("selecionado")){
            item.classList.remove("selecionado");
            valor_bebida = 0;
            bebida = false;
        }
    })

    if(!bebida) {
        const item = document.querySelector(".bebida"+position);
        item.classList.add("selecionado");
        valor_bebida = price;
        bebida = true;
    }
    else{
        const item = document.querySelector(".bebida"+position);
        item.classList.remove("selecionado");
        valor_bebida = 0;
        bebida = false;
    }
    somaPedido();
}

function selecionaPrato(position, price) {
    const pratosall = document.getElementsByName("pratos")
    pratosall.forEach(item =>{
        if(document.getElementsByClassName("selecionado")){
            item.classList.remove("selecionado");
            valor_prato = 0;
            prato = false;
        }
    })
    if(!prato) {
        const item = document.querySelector(".prato"+position);
        item.classList.add("selecionado");
        valor_prato = price;
        prato = true;
    }
    else{
        const item = document.querySelector(".prato"+position);
        item.classList.remove("selecionado");
        valor_prato = 0;
        prato = false;
    }
    somaPedido();
}

function selecionaSobremesa(position, price) {
    const sobremesasall = document.getElementsByName("sobremesas")
    sobremesasall.forEach(item =>{
        if(document.getElementsByClassName("selecionado")){
            item.classList.remove("selecionado");
            valor_sobremesa = 0;
            sobremesa = false;
        }
    })  
    if(!sobremesa) {
        const item = document.querySelector(".sobremesa"+position);
        item.classList.add("selecionado");
        valor_sobremesa = price;
        sobremesa = true;
    }
    else{
        const item = document.querySelector(".sobremesa"+position);
        item.classList.remove("selecionado");
        valor_sobremesa = 0;
        sobremesa = false;
    }
    somaPedido();
}

function somaPedido(){
    total_do_pedido = valor_bebida + valor_prato + valor_sobremesa;
    const item = document.querySelector(".valor_pedido");
    item.innerHTML = `Total do Pedido: R$ ${total_do_pedido.toFixed(2)}`;
}

function fechaPedido(){
    if(bebida == true && prato == true && sobremesa == true){
        var msg = "Boa noite. Eu gostaria de fazer o seguinte pedido:\n\
                - Prato: xxxxx\n\
                - Bebida: xxxxx\n\
                - Sobremesa: xxxxx\n\
                Total: R$ xxxx.xx"
        let target = `https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`
        
        window.open(target);

    }
}
