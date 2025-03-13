import { updatePolicyAccount } from './Services/loginService.js';
import { validateAndCompare } from './Helpers/validations.js';

// Cuerpo de la solicitud
const loginPayload = JSON.stringify({
    "PolicyAccountsUpdate": {
        "ApplicationId": __ENV.APPLICATION_ID,
        "Accounts": [{
            "AccountId": __ENV.ACCOUNT_ID,
            "CivilStatus": __ENV.CIVIL_STATUS,
            "PersonEmail": __ENV.PERSON_EMAIL,
            "CellPhone": __ENV.CELL_PHONE,
            "BillingStreet": __ENV.BILLING_STREET,
            "BillingState": __ENV.BILLING_STATE,
            "BillingCity": __ENV.BILLING_CITY,
            "JobTitle": __ENV.JOB_TITLE,
            "Employer": __ENV.EMPLOYER,
            "Proffesion": __ENV.PROFESSION,
            "EconomicActivity": __ENV.ECONOMIC_ACTIVITY,
            "EconomicActAmount": parseFloat(__ENV.ECONOMIC_ACT_AMOUNT),
            "ExtraEconomicActAmount": parseFloat(__ENV.EXTRA_ECONOMIC_ACT_AMOUNT),
            "ExtraEconomicActOrigin": __ENV.EXTRA_ECONOMIC_ACT_ORIGIN
        }]
    }
});


const expectedUpdatePolicyAccountSchema = {
    Answer: 'string',
    Message: 'string'
};


//Función para validar la respuesta  y comparar
export default function () {
    let { res, responseJson } = updatePolicyAccount(loginPayload);
    console.log('🔍 Datos que se envían a la API:', loginPayload);

    if (!responseJson || res.status !== 200) {
        console.error('❌ Error en la respuesta del login.');
        return;
    }

    console.log('🔍 Validando Data de UpdatePolicyAccount...');
    if (Array.isArray(responseJson) && responseJson.length > 0) {
        responseJson = responseJson[0]; // Extraemos el primer objeto del array
    }

    const isValid = validateAndCompare(responseJson, expectedUpdatePolicyAccountSchema);


    console.log('Datos de la respuesta ' + responseJson);

    if (isValid) {
        console.log('✅ Validación exitosa: La estructura UpdatePolicyAccount coincide con el esquema esperado.');
    } else {
        console.error('❌ Error: La estructura de UpdatePolicyAccount no es válida.');
    }

     if (responseJson.Answer == 'OK') {
         console.log('✅ Respuesta de OK esperada!!.');
     } else {
         console.error('❌ Error: La Respuesta no es OK');
     }
}
