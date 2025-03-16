import { userPolicyDetail } from './Services/loginService.js';
import { validateAndCompare } from './Helpers/validations.js';

//body
const loginPayload = JSON.stringify({
    "PolicyId": __ENV.POLICY_ID,
    "UserId": __ENV.USER_ID
});

//body response
  const expectedSchema = {
    PolicyDetail: {
      Answer: 'string',
      Message: 'string',
      Success: 'string',
      Name: 'string',
      PolicyType: 'string',
      LineOfBusiness: 'string',
      BranchOfficeCountry: 'string',
      BranchOfficeNumber: 'string',
      Number: 'string',
      Coverage: 'any',
      PaymentDueDate: 'string',
      RenewalDate: 'string',
      MaxCoverage: 'any',
      MaxCoverageType: 'string',
      Deductible: 'string',
      DeductibleType: 'string',
      FamilyDeductibleCount: 'any',
      Broker: 'string',
      PolicyIssuedDate: 'string',
      Owner: 'string',
      OwnerAccountId: 'string',
      Participants: [
        {
          Name: 'string',
          AccountId: 'string',
          Role: 'string'
        }
      ],
      Claims: [
        {
          CaseId: 'string',
          CaseNumber: 'string',
          AccountId: 'string',
          Insured: 'string',
          PaymentAmount: 'any',
          IssuedDate: 'string',
          SFStatus: 'string',
          BmiSuiteStatus: 'any'
        }
      ],
      InternalPolicyId: 'string',
      RecordType: 'string',
      Beneficiaries: 'any',
      BalanceInquiry: 'any'
    }
  };

export default function () {
    let { res, responseJson } = userPolicyDetail(loginPayload);
    console.log('🔍 Datos que se envían a la API:', loginPayload);

    if (!responseJson || res.status !== 200) {
        console.error('❌ Error en la respuesta del login.');
        return;
    }

    console.log('🔍 Validando Data de UserPolicyDetail...');
    const isValid = validateAndCompare(responseJson.PolicyDetail, expectedSchema.PolicyDetail);

    if (isValid) {
        console.log('✅ Validación exitosa: La estructura  de UserPolicyDetail coincide con el esquema esperado.');
    } else {
        console.error('❌ Error: La estructura de UserPolicyDetail no es válida.');
    }
}
