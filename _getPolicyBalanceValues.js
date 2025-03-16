import { getPolicyBalanceValues } from './Services/loginService.js';
import { validateAndCompare } from './Helpers/validations.js';


//body
const loginPayload = JSON.stringify({
    "EffectiveDate": __ENV.EFFECTIVE_DATE,
    "CaseId": __ENV.CASE_ID
});


//body response
const expectedBalanceInquirySchema = {
    BalanceInquiryDate: 'string',
    Answer: 'string',
    PolicyNumber: 'string',
    MessageDetailed: 'string',
    InternalPolicyNumber: 'number',
    Message: 'string',
    BalanceInquiry: 'number'
  };
  

// Función para validar la respuesta
    export default function () {
        let { res, responseJson } = getPolicyBalanceValues(loginPayload);
        console.log('🔍 Datos que se envían a la API:', loginPayload);
    
        if (!responseJson || res.status !== 200) {
            console.error('❌ Error en la respuesta del login.');
            return;
        }
    
        console.log('🔍 Validando Data de GetPolicyBalanceValues...');
        const isValid = validateAndCompare(responseJson, expectedBalanceInquirySchema);
    
        if (isValid) {
            console.log('✅ Validación exitosa: La estructura de GetPolicyBalanceValues coincide con el esquema esperado.');
        } else {
            console.error('❌ Error: La estructura de GetPolicyBalanceValues no es válida.');
        }
    }
    
