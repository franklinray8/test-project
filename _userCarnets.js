import { userCarnets } from './Services/loginService.js';
import { validateAndCompare } from './Helpers/validations.js';

// body request
const loginPayload = JSON.stringify({
    "AccountId": __ENV.ACCOUNT_ID_03,
    "PolicyId": __ENV.POLICY_ID_01
});


//body response
const expectedSchema = {
    UserHomeData: {
      Answer: 'string',
      Message: 'string',
      Success: 'string',
      Carnet: [
        {
          Role: 'string',
          PolicyId: 'string',
          AetnaMemberIdNo: 'any',
          AetnaGroupNo: 'string',
          AetnaElectronicPayerNo: 'string'
        }
      ]
    }
  };
  

//Funcion para validar y comparar la respuesta
export default function () {
    let { res, responseJson } = userCarnets(loginPayload);
    console.log('🔍 Datos que se envían a la API:', loginPayload);

    if (!responseJson || res.status !== 200) {
        console.error('❌ Error en la respuesta del login.');
        return;
    }

    console.log('🔍 Validando Data de UserBankAccountInfo...');
    const isValid = validateAndCompare(responseJson.UserHomeData, expectedSchema.UserHomeData);

    if (isValid) {
        console.log('✅ Validación exitosa: La estructura de UserCarnets coincide con el esquema esperado.');
    } else {
        console.error('❌ Error: La estructura de UserCarnets no es válida.');
    }
}
