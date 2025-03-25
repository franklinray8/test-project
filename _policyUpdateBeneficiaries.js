import { policyUpdateBeneficiaries } from './Services/loginService.js';
import { validateAndCompare } from './Helpers/validations.js';

// body request
const loginPayload = JSON.stringify({
    "BeneficiariesSubmission": {
        "ApplicationId": __ENV.APPLICATION_ID,
        "Beneficiaries": [
            {
                "AccountId": __ENV.ACCOUNT_ID,
                "DateOfBirth": __ENV.DATE_OF_BIRTH,
                "FirstName": __ENV.FIRST_NAME,
                "LastName": __ENV.LAST_NAME,
                "BeneficiarySharePercentage":  parseFloat(__ENV.BENEFICIARY_SHARE_PERCENTAGE),
                "Relationship": __ENV.RELATIONSHIP,
                "PersonalId": __ENV.PERSONAL_ID,
                "PersonalIdType": __ENV.PERSONAL_ID_TYPE,
                "IssuingDate": __ENV.ISSUING_DATE
            }
        ]
    }
});


//body response
  const expectedBeneficiarySchema = 
    {
        Answer: 'string',
        Message: 'string',
        SFAccountId: 'string',
        AccountId: 'string',
        SharePercentage: 'number'
    };



//Funcion para validar y comparar la respuesta
export default function () {
    let { res, responseJson } = policyUpdateBeneficiaries(loginPayload);
    console.log('🔍 Datos que se envían a la API:', loginPayload);

    if (!responseJson || res.status !== 200) {
        console.error('❌ Error en la respuesta del login.');
        return;
    }

    console.log('🔍 Validando Data de PolicyUpdateBeneficiaries...');
    if (Array.isArray(responseJson) && responseJson.length > 0) {
        responseJson = responseJson[0]; // Extraemos el primer objeto del array
    }

    const isValid = validateAndCompare(responseJson, expectedBeneficiarySchema);


    console.log('Datos de la respuesta ' + responseJson);

    if (isValid) {
        console.log('✅ Validación exitosa: La estructura PolicyUpdateBeneficiaries coincide con el esquema esperado.');
    } else {
        console.error('❌ Error: La estructura de PolicyUpdateBeneficiaries no es válida.');
    }

     if (responseJson.Answer == 'OK') {
         console.log('✅ Respuesta de OK esperada!!.');
     } else {
         console.error('❌ Error: La Respuesta no es OK');
     }
}
