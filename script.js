const bot = "7598730625:AAF6SC-Dq70RYt1CQx8pYxkpZDv3lwvnstY";
const my_id = "6580422083";

document.getElementById("tg_form").addEventListener("submit",
    function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;

        const message = `name: ${name}; `

        fetch(`https://api.telegram.org/bot${bot}/sendMessage`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    chat_id: my_id,
                    text: message
                })
            }
        )

        .then(response => {
            if (response.ok){
                alert("Данные отправленны")
                document.getElementById("tg_form").resert()
            } else {
                alert("Ошибка")
            }
        })
        .catch(error => console.error("у нас ошибка", error))
    })