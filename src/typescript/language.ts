export default async function changeLanguage(language:string){
    const textToChange:Element[] = [... document.querySelectorAll("[data-section]")];
    try{
        const requestJson = await fetch(`./assets/languages/${language}.json`);
        const response    = await requestJson.json();

        for(let i in textToChange){
            let text = textToChange[i] as HTMLElement;
            let section:string = text.dataset.section!;
            let value:string   = text.dataset.value!;

            text.textContent = response[section][value];
        }
        return response
    }catch(e){console.log(e)}
}