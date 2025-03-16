import { policySubmission } from './Services/loginService.js';
import { validateAndCompare } from './Helpers/validations.js';

//body
const loginPayload = JSON.stringify({
  "PolicySubmission": {
      "SubmissionId": __ENV.SUBMISSION_ID,
      "Opportunity": {
          "Country": __ENV.COUNTRY,
          "Name": __ENV.NAME,
          "Company": __ENV.COMPANY,
          "JobTitle": __ENV.JOB_TITLE,
          "Employer": __ENV.EMPLOYER,
          "ProductCode": __ENV.PRODUCT_CODE,
          "FaceAmount": parseFloat(__ENV.FACE_AMOUNT),
          "PremiumAmount": parseFloat(__ENV.PREMIUM_AMOUNT),
          "PremiumFrequency": __ENV.PREMIUM_FREQUENCY,
          "PaymentAmount": __ENV.PAYMENT_AMOUNT,
          "PremiumPaymentMode": __ENV.PREMIUM_PAYMENT_MODE,
          "SignedAt": __ENV.SIGNED_AT,
          "AgentId": __ENV.AGENT_ID,
          "PreparedBy": __ENV.PREPARED_BY,
          "CloseDate": __ENV.CLOSE_DATE,
          "Language": __ENV.LANGUAGE,
          "Accounts": [
              {
                  "AccountId": __ENV.ACCOUNT_ID,
                  "DateOfBirth": __ENV.DATE_OF_BIRTH,
                  "CivilStatus": __ENV.CIVIL_STATUS,
                  "FirstName": __ENV.FIRST_NAME,
                  "LastName": __ENV.LAST_NAME,
                  "SurName": __ENV.SUR_NAME,
                  "Gender": __ENV.GENDER,
                  "PersonEmail": __ENV.PERSON_EMAIL,
                  "BirthPlace": __ENV.BIRTH_PLACE,
                  "Country": __ENV.COUNTRY,
                  "CountryNT": __ENV.COUNTRY_NT,
                  "Municipality": __ENV.MUNICIPALITY,
                  "CellPhone": __ENV.CELL_PHONE,
                  "BillingCountry": __ENV.BILLING_COUNTRY,
                  "BillingState": __ENV.BILLING_STATE,
                  "BillingCity": __ENV.BILLING_CITY,
                  "BillingStreet": __ENV.BILLING_STREET,
                  "PersonalId": __ENV.PERSONAL_ID,
                  "PersonalIdType": __ENV.PERSONAL_ID_TYPE,
                  "IssuingDate": __ENV.ISSUING_DATE,
                  "Proffesion": __ENV.PROFFESION,
                  "EconomicActivity": __ENV.ECONOMIC_ACTIVITY,
                  "EconomicActAmount": parseFloat(__ENV.ECONOMIC_ACT_AMOUNT),
                  "ExtraEconomicActAmount": parseFloat(__ENV.EXTRA_ECONOMIC_ACT_AMOUNT),
                  "ExtraEconomicActOrigin": __ENV.EXTRA_ECONOMIC_ACT_ORIGIN,
                  "SSN": __ENV.SSN,
                  "ForeignFunds": __ENV.FOREIGN_FUNDS
              }
          ],
          "Documents": [
              {
                  "FileName": __ENV.FILE_NAME,
                  "DocumentId": __ENV.DOCUMENT_ID,
                  "FileCategory": __ENV.FILE_CATEGORY,
                  "FileLink": __ENV.FILE_LINK
              }
          ],
          "Roles": [
              {
                  "AccountId": __ENV.ACCOUNT_ID,
                  "IsPolicyOwner": __ENV.IS_POLICY_OWNER,
                  "Role": __ENV.ROLE,
                  "Contingency": __ENV.CONTINGENCY === "true",
                  "BeneficiarySharePercentage": parseFloat(__ENV.BENEFICIARY_SHARE_PERCENTAGE),
                  "Relationship": __ENV.RELATIONSHIP
              }
          ]
      }
  }
});

//body response
const expectedSubmissionSchema = {
  Answer: 'string',
  Message: 'string',
  ApplicationId: 'string',
  CaseId: 'string',
  SFAccountId: 'string'
};



//Funcion para validar y comparar la respuesta
export default function () {
    let { res, responseJson } = policySubmission(loginPayload);
    console.log('🔍 Datos que se envían a la API:', loginPayload);

    if (!responseJson || res.status !== 200) {
        console.error('❌ Error en la respuesta del login.');
        return;
    }

    console.log('🔍 Validando Data de PolicySubmission...');
    if (Array.isArray(responseJson) && responseJson.length > 0) {
        responseJson = responseJson[0]; // Extraemos el primer objeto del array
    }

    const isValid = validateAndCompare(responseJson, expectedSubmissionSchema);


    console.log('Datos de la respuesta ' + responseJson);

    if (isValid) {
        console.log('✅ Validación exitosa: La estructura PolicySubmission coincide con el esquema esperado.');
    } else {
        console.error('❌ Error: La estructura de PolicySubmission no es válida.');
    }

     if (responseJson.Answer == 'OK') {
         console.log('✅ Respuesta de OK esperada!!.');
     } else {
         console.error('❌ Error: La Respuesta no es OK');
     }
}
