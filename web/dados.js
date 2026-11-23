function dados() {
    //Dicionário de dados
    const ds = [
        {id:1, login:"capitão", senha:"1234", nome:"Steve Rogers", email:"capamerica@ig.com"}, //0
        {id:2, login:"ironman", senha:"12345", nome:"Tony Stark", email:"stark@ig.com"}, //1
        {id:3, login:"asgard", senha:"1234@", nome:"Thor", email:"frost@ig.com"} //2
    ]

   let json = JSON.stringify(ds)

   localStorage.setItem("banco",json)

}

function logar() {
    const ds = JSON.parse(localStorage.getItem("banco"))

    let lg = document.querySelector("#login").value
    let sn = document.querySelector("#senha").value

    //alert(lg + "\n" + sn)

    for(let i = 0; i < ds.length; i++) {

        if(lg == ds[i].login && sn == ds[i].senha){
          alert("Logado!!! aí simm")
        }

    }
}

function cadastro() {
    const ds = JSON.parse(localStorage.getItem("banco"))

    let lg = document.querySelector("#login").value
    let sn = document.querySelector("#senha").value

    //alert(lg + "\n" + sn)

    for(let i = 0; i < ds.length; i++) {

        if(lg == ds[i].login && sn == ds[i].senha){
          alert("Logado!!! aí simm")
        }

    }
}
