let users = [
  {idUser: 1065432664, name: "Elid", lastName:"Gallardo", age:43, email:"elidg@gmail.com", address: "Calle 54", phone:1234, career:"Ing en sistemas"},
  {idUser: 1876754326, name: "Carolina", lastName:"Gallardo", age:25, email:"carolinag@gmail.com", address: "Calle 19", phone:1234, career:"Ing en sistemas"},
  {idUser: 1554278643, name: "José", lastName:"Llinas", age:16, email:"josel@gmail.com", address: "Calle 23", phone:1234, career:"Ing en sistemas"}
]
let tbody=document.getElementById("cTabla");
const listar=()=>{
  let contenido="";
  for(i=0;i<users.length;i++){
    contenido+="<tr><td>"+users[i].idUser+"</td><td>"+users[i].name+"</td><td>"+users[i].lastName+"</td><td>"+users[i].age+"</td><td>"+users[i].email+"</td><td>"+users[i].address+"</td><td>"+users[i].phone+"</td><td>"+users[i].career+"</td>"
  }
  tbody.innerHTML=contenido;
}

let registrar=()=>{
  let idExist = false;
  const idUser = document.getElementById("idUser").value;
  const name = document.getElementById("name").value;
  const lastName = document.getElementById("lastName").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const phone = document.getElementById("phone").value;
  const career = document.getElementById("career").value;
  users.forEach(objeto=>idUser == objeto.idUser ? idExist=true : false);
  if(idExist){
    alert("El usuario ya esta registrado");
  }else{
    if(idUser.trim() && name.trim() && lastName.trim() && age.trim() && email.trim() && address.trim() && phone.trim() && career.trim()){
      tbody.innerHTML+="<tr><td>"+idUser+"</td><td>"+name+"</td><td>"+lastName+"</td><td>"+age+"</td><td>"+email+"</td><td>"+address+"</td><td>"+phone+"</td><td>"+career+"</td>";
      const nuevo = {idUser: idUser, name: name, lastName: lastName, age:age, email: email, address: address, phone: phone, career: career};
      users.push(nuevo);
      document.getElementById("idUser").value="";
      document.getElementById("name").value="";
      document.getElementById("lastName").value="";
      document.getElementById("age").value="";
      document.getElementById("email").value="";
      document.getElementById("address").value="";
      document.getElementById("phone").value="";
      document.getElementById("career").value="";
    }else{
      alert("Por favor complete los campos")
    }
  }
}
