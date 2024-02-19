function kanyeFunc() {
    fetch('https://api.kanye.rest')
        .then(response => response.json())
        .then(data => {
            const resp = document.getElementById('kanyePar')
            resp.textContent = `Kanye disse: ${data.quote}` 
        })
        .catch(error => console.log(error))
}

const kanyeBtn = document.getElementById('kanye-Btn').addEventListener('click', kanyeFunc)