function usuariosFunc() { 
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            const tabela = document.getElementById('listaUsuarios');
            data.forEach(user => {
                const row = tabela.insertRow();
                row.innerHTML = `
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                `;
            });
        })
        .catch(error => console.error(error))
}
usuariosFunc()