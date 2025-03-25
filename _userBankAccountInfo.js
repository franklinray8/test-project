import { userBankAccountInfo } from './Services/loginService.js';
import { validateAndCompare } from './Helpers/validations.js';

//body request
const loginPayload = JSON.stringify({
  "AccountId": __ENV.ACCOUNT_ID_01,
});


//body response
const expectedSchema = {
  UserBankAccountInfo: {
    Answer: 'string',
    Message: 'string',
    Success: 'string',
    BankInfo: [
      {
        CustomerBankAccountId: 'string',
        BankId: 'string',
        BankName: 'string',
        BankAccountType: 'string',
        BankAccountNumber: 'string',
        BankAccountStatus: 'string'
      }
    ]
  }
};




//Funcion para validar y comparar la respuesta
export default function () {
  let { res, responseJson } = userBankAccountInfo(loginPayload);
  console.log('🔍 Datos que se envían a la API:', loginPayload);

  if (!responseJson || res.status !== 200) {
    console.error('❌ Error en la respuesta del login.');
    return;
  }

  console.log('🔍 Validando Data de UserBankAccountInfo...');
  const isValid = validateAndCompare(responseJson.UserBankAccountInfo, expectedSchema.UserBankAccountInfo);

  if (isValid) {
    console.log('✅ Validación exitosa: La estructura de UserBankAccountInfo coincide con el esquema esperado.');
  } else {
    console.error('❌ Error: La estructura de UserBankAccountInfo no es válida.');
  }
}
