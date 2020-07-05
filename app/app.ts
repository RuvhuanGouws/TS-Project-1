//Ruvhuan Gouws

import { indexOf, concat } from "lodash";

//Register button code
document.getElementById('register')!.addEventListener('click', () => {
    let errCount: number = 0;
    let fornames: string = getInputValue('forenames');
    if (fornames.length < 1) 
    {
        console.error("Forenames must have at least a length of 1 character.");
        errCount++;
    }
    
    let surname: string = getInputValue('surname');
    if (surname.length < 2) 
    {
        console.error("Surname must have at least a length of 2 characters.");
        errCount++;
    }
    
    const nicknameVar : HTMLInputElement = <HTMLInputElement>document.getElementById('nickname');
    let nickname: string | undefined = nicknameVar.value;

    let email: string = getInputValue('email');
    if(email.length < 4 || !email.includes('@'))
    {
        console.error("Email must be at least 4 characters long and contain an @ sign.");
        errCount++;
    }

    let password: string = getInputValue('password');
    let confirmPassword: string = getInputValue('confirmPassword');
    if (password != confirmPassword || password.length < 4) 
    {
        console.error("The password do not match or are not at least 4 characters long.")
        errCount++;
    }

    if(errCount == 0)
    {
        console.log("Validated");
    }
    else
    {
        console.error(`Not Valid. There were ${errCount} errors.`)
    }

    console.log(fornames, surname, nickname, email, password, confirmPassword);//Just checking inputs
});

//Array Methods button code
document.getElementById('runArrayMethods')!.addEventListener('click', () => {
    //1
    let arrNumbers: number[] = [89, 5, 56, 102, 7];
    arrNumbers = arrNumbers.filter((arrNums) => {
        return arrNums > 50;
    });
    console.log(arrNumbers);

    //2
    let arrNames: string[] = ["John", "Sarah", "Beth", "Adam", "Peter"];
    arrNames.splice(2, 2, "Cindy", "Zoe");
    console.log(arrNames);

    //3
    let arrNames2: string[] = ["John", "Sarah", "Beth", "Adam", "Peter"];
    arrNames2.splice(3, 1);
    console.log(arrNames2);

    //4
    let arrNumbers2: number[] = [89, 5, 56, 102, 7];
    arrNumbers2.pop();
    console.log(arrNumbers2);

    //5
    let arrNumbers3: number[] = [89, 5, 56, 102, 7];
    arrNumbers3.push(78);
    console.log(arrNumbers3);

    //6
    let arrNumbers4: number[] = [89, 5, 56, 102, 7];
    console.log(indexOf(arrNumbers4, 5));

    //7
    let arrNames3: string[] = ["John", "Sarah", "Beth", "Adam", "Peter"];
    let arrNames4: string[] = arrNames3.slice(1, 4);
    console.log(arrNames4);

    //8
    let arrNumbers5: number[] = [89, 5, 56, 102, 7];
    arrNumbers5.unshift(14, 67);
    console.log(arrNumbers5);

    //9
    let arrNum: number[] = [1, 2, 3];
    let arrChars: string[] = ["a", "b", "c"];
    console.log(arrChars.concat(<any[]>arrNum));
});

//Toggles the Register button
document.getElementById('terms_conditions')!.addEventListener('change', () => {
    let tcs: HTMLInputElement = <HTMLInputElement>document.getElementById('terms_conditions');
    if (tcs.checked == true) {
        document.getElementById('register')!.removeAttribute('disabled');
    } else {
        document.getElementById('register')!.setAttribute('disabled', 'true');
    }
});

//Function to get values from inputs
function getInputValue(elementID: string): string {

    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
    return inputElement.value;
}