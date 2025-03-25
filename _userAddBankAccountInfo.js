import { userAddBankAccountInfo } from './Services/loginService.js';
import { validateAndCompare } from './Helpers/validations.js';

// //body request
const loginPayload = JSON.stringify({
    "AccountId": __ENV.ACCOUNT_ID_01,
    "BankAccountNumber": __ENV.BANK_ACCOUNT_NUMBER,
    "BankAccountType": __ENV.BANK_ACCOUNT_TYPE,
    "BankId": __ENV.BANK_ID
});

//body response
const expectedBankAccountSchema = {
    Answer: 'string',
    Message: 'string',
    Success: 'string',
    CustomerBankAccountId: 'string',
    CaseId: 'string'
  };
  


//Funcion para validar y comparar la respuesta
export default function () {
    let { res, responseJson } = userAddBankAccountInfo(loginPayload);
    console.log('🔍 Datos que se envían a la API:', loginPayload);

    if (!responseJson || res.status !== 200) {
        console.error('❌ Error en la respuesta del login.');
        return;
    }

    console.log('🔍 Validando Data de UserAddBankAccountInfo...');
    const isValid = validateAndCompare(responseJson, expectedBankAccountSchema);

    if (isValid) {
        console.log('✅ Validación exitosa: La estructura de UserAddBankAccountInfo coincide con el esquema esperado.');
    } else {
        console.error('❌ Error: La estructura de UserAddBankAccountInfo no es válida.');
    }
}
