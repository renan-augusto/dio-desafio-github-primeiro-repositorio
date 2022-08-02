function getAdmins(map) {
  let admins = [];
  for ([key, value] of map) {
    if (value === "Admin") {
      admins.push(key);
    }
  }
  return admins;
}

const usuarios = new Map();

usuarios.set("Luiz", "Admin");
usuarios.set("Renan", "Admin");
usuarios.set("Fernanda", "Admin");
usuarios.set("João", "User");

console.log(getAdmins(usuarios));
