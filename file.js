const checkUserInput = () => {


    const userInput = `I am having Headache and Fever`;

    const remedies = {
        headache: `Drink water`,
        fever: `Drink water, sleep, take panadol, then visit a doctor if systoms perisit`,
        stomachache: `Drink water, sleep, take panadol, then visit a doctor if systoms perisit`,
        sorethroat: `Drink water, sleep, take panadol, then visit a doctor if systoms perisit`,
        suncongition: `Drink water, sleep, take panadol, then visit a doctor if systoms perisit`,
        maleria: `Drink water, sleep, take panadol, then visit a doctor if systoms perisit`
    };

    for (const keys in remedies)

    if (userInput.toLowerCase().includes(`headache`) && keys === `headache`){
        console.log(remedies[keys]) 
    } 
}

checkUserInput()