export function submitForm(form, loader, data, formFunction, localStorage) {
    form.addEventListener("submit", async function(event) {
        try {
            event.preventDefault();
            localStorage.setItem("user", JSON.stringify(data.email));

            await formFunction(data);
    
            // loader.innerHTML = `<div class= "d-flex align-items-start">
            //                          <span class="spinner border-sm" role="status" aria-hidden="true"></span>
            //                         </div>`;
    
            // setTimeout(() => {
            //     window.location.replace("/profile/");
            // }, 500);
        } catch(error) {
            console.log(error)
            alert("Sorry, we where not able to proseed :( Tecnical details: " + error);
        }
    })
};