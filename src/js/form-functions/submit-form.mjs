export function submitForm(form, loader, data, formFunction, localStorage) {
    form.addEventListener("submit", async function(event) {
        try {
            event.preventDefault();
            localStorage.setItem("user", JSON.stringify(data.email));
            await formFunction(data);

        } catch(error) {
            console.log(error)
            alert("Sorry, we where not able to proseed :( Tecnical details: " + error);
        }
    })
};