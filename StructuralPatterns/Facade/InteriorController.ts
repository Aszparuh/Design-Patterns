class InteriorController {
    DimLights(amount: number)
    {
        let desiredAmmount = amount;
        if (desiredAmmount < 0)
        {
            desiredAmmount = 0;
        }

        if (desiredAmmount > 100)
        {
            desiredAmmount = 100;
        }

        console.log(`Dimming lights to ${desiredAmmount}...`);
    }

    MoveCurtains(amount: number)
    {
        let desiredAmmount = amount;
        if (desiredAmmount < 0)
        {
            desiredAmmount = 0;
        }

        if (desiredAmmount > 100)
        {
            desiredAmmount = 100;
        }

        console.log(`Movin curtains to ${desiredAmmount}...`);
    }

    HideTable() {
        console.log("Table hidden");
    }
}

export default InteriorController;