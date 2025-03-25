import { submitPolicyPayment } from './Services/loginService.js';
import { validateAndCompare } from './Helpers/validations.js';

//body request
const loginPayload = JSON.stringify({
        "CaseId": __ENV.CASE_ID,
        "ApplicationId": __ENV.APPLICATION_ID,
        "PaymentDate": __ENV.PAYMENT_DATE,
        "PaymentCurrency": __ENV.PAYMENT_CURRENCY,
        "PaymentOrderNumber": __ENV.PAYMENT_ORDER_NUMBER,
        "PaymentAmount": parseFloat(__ENV.PAYMENT_AMOUNT),
        "PaymentType": __ENV.PAYMENT_TYPE,
        "BusinessName": __ENV.BUSINESS_NAME,
        "CreditCardType": __ENV.CREDIT_CARD_TYPE
});

//body response
const expectedSubmitPolicyPaymentSchema = {
    Answer: 'string',
    Message: 'string',
    CaseId: 'string',
    TransactionId: 'string'
};



//Funcion para validar y comparar la respuesta
export default function () {
    let { res, responseJson } = submitPolicyPayment(loginPayload);
    console.log('🔍 Datos que se envían a la API:', loginPayload);

    if (!responseJson || res.status !== 200) {
        console.error('❌ Error en la respuesta del login.');
        return;
    }

    console.log('🔍 Validando Data de SubmitPolicyPayment...');
    if (Array.isArray(responseJson) && responseJson.length > 0) {
        responseJson = responseJson[0]; // Extraemos el primer objeto del array
    }

    const isValid = validateAndCompare(responseJson, expectedSubmitPolicyPaymentSchema);


    console.log('Datos de la respuesta ' + responseJson);

    if (isValid) {
        console.log('✅ Validación exitosa: La estructura SubmitPolicyPayment coincide con el esquema esperado.');
    } else {
        console.error('❌ Error: La estructura de SubmitPolicyPayment no es válida.');
    }

     if (responseJson.Answer == 'OK') {
         console.log('✅ Respuesta de OK esperada!!.');
     } else {
         console.error('❌ Error: La Respuesta no es OK');
     }
}
