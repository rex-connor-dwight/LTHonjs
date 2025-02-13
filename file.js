

const checkUserInput = () => {


    const rd = document.getElementById(`rd`);
    const userInput = `I am having Headache and Fever`;
    const isIncluded = userInput.toLowerCase().includes(`headache`);

    const remedies = {
        headache: `Drink water, rest, take pain relievers like paracetamol, and consult a doctor if symptoms persist.`,
        fever: `Drink water, rest, take paracetamol, use a cool compress, and visit a doctor if symptoms persist or worsen.`,
        stomachache: `Drink water, avoid heavy or spicy foods, rest, take antacids if needed, and consult a doctor if symptoms persist.`,
        sorethroat: `Drink warm liquids, gargle with salt water, rest, take lozenges or pain relievers, and see a doctor if symptoms persist.`,
        sunstroke: `Move to a cool place, drink water, apply cool compresses, rest, and seek immediate medical attention.`,
        malaria: `Seek immediate medical attention, take prescribed antimalarial medication, rest, and stay hydrated.`
    };

    const rdKeys = Object.keys(remedies)
    let found = false;

    const r1 = rdKeys[1]

    for(const symptom of rdKeys){
        if(userInput.toLowerCase().includes(symptom)){
            rd.innerHTML = r1
            found = true
        }
    }
    if (!found){
        rd.innerHTML = `E no dey`
    }

    

    

    {
        // const listItems = document.querySelector(`#remedies li`);
        // let remediesText = ``
        // for(const keys in remedies){
            // remediesText += `<li> ${remedies[keys]}</li>`;
            // if(userInput.toLowerCase().includes(`headache` && `fever`)){
            //     remediesText = `${remedies.headache} or try \n ${remedies.fever}`
            // }
        // }
        // listItems.innerHTML = remediesText;



        // let remediesText = ``
        // for(let rd = 1; rd <=5; rd++){
        //     remediesText += `<li>${rd}</li> `;
        // }
        // listItems.innerHTML = remediesText
    }

    
}

checkUserInput()