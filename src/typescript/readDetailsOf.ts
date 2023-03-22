export default async function detailsOf(skill:any){
    const conceptsUl = document.querySelector(".concepts-container") as HTMLUListElement;
    
    try{
        const requestJson = await fetch(`./assets/languages/skillsListEn.json`);
        const response    = await requestJson.json();
        const readTech    = response.tech.find((index:any) => index.id == skill);
       
        const addConteptFragment  = document.createDocumentFragment();

        for(let i in readTech.concepts){
            let addContept = document.createElement("LI") as HTMLLIElement;
            addContept.textContent = readTech.concepts[i];

            addContept.setAttribute("data-section", `${readTech.id}`);
            addContept.setAttribute("data-value", `${addContept.textContent!.split(" ")[0]}`);

            addConteptFragment.appendChild(addContept);
        }
        
        conceptsUl.appendChild(addConteptFragment)
    }catch(e){ console.log(e) };
}