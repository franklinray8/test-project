import { loginUser } from './Services/loginService.js';
import { validateAndCompare } from './Helpers/validations.js';

//body
const loginPayload = JSON.stringify({
    "DocumentId": __ENV.DOCUMENT_ID,
    "DocumentType": __ENV.DOCUMENT_TYPE,
    "Email": __ENV.EMAIL,
    "Password": __ENV.PASSWORD,
    "Pin": __ENV.PIN,
    "UserId": __ENV.USER_ID
});


//body response
const expectedSchema = {
  UserHomeData: {
    Answer: 'string',
    Message: 'string',
    UserId: 'string',
    Success: 'string',
    AccountId: 'string',
    WelcomeMessage1: 'string',
    WelcomeMessage2: 'string',
    Profile: {
      UserFullName: 'string',
      DateOfBirth: 'string',
      Email: 'string',
      PhoneNumber: 'string',
      PictureProfile: 'any',
      UserCountry: 'any',
      UserRUC: 'any',
      UserIsActive: 'string'
    },
    BankInfo: {
      CustomerBankAccountId: 'string',
      BankId: 'string',
      BankName: 'string',
      BankAccountType: 'string',
      BankAccountNumber: 'string',
      BankAccountStatus: 'string'
    },
    Policies: [
      {
        InsurancePolicySFId: 'string',
        Stype: 'string',
        InsurancePolicyName: 'string',
        InsurancePolicyVTId: 'string',
        LineOfBusiness: 'string',
        BranchOfficeCountry: 'string',
        BranchOfficeNumber: 'string',
        PaymentDueDate: 'string',
        RenewalDate: 'string',
        MaxCoverage: 'string',
        MaxCoverageType: 'string',
        Deductible: 'string',
        DeductibleType: 'string',
        FamilyDeductibleCount: 'string',
        Role: 'string'
      }
    ],
    InswitchEntity: {
      entityId: 'string',
      alias: 'string',
      creationDate: 'string',
      lastLoginDate: 'any',
      name: {
        title: 'any',
        firstName: 'string',
        middleName: 'any',
        lastName: 'string',
        secondlastName: 'any',
        fullName: 'any',
        nativeName: 'any'
      },
      contact: {
        phoneNumber: 'string',
        email: 'string',
        postalAddress: {
          addressLine1: 'any',
          addressLine2: 'any',
          addressLine3: 'any',
          city: 'any',
          stateProvince: 'any',
          postalCode: 'any',
          country: 'any'
        }
      },
      idDocuments: [
        {
          idType: 'string',
          idNumber: 'any',
          issueDate: 'any',
          expiryDate: 'any',
          issuer: 'any',
          issuerPlace: 'any',
          issuerCountry: 'string',
          otherDescription: 'any'
        }
      ],
      dateOfBirth: 'any',
      birthCountry: 'any',
      nationality: 'any',
      residenceCountry: 'any',
      occupation: 'any',
      gender: 'any',
      entityType: 'string',
      entityStatus: 'string',
      entitySubStatus: 'string',
      entitySubStatusDescription: 'string',
      wallet: {
        id: 'string',
        alias: 'string'
      },
      firstPaymentMethod: {
        id: 'string',
        accountID: 'string',
        alias: 'string',
        accountMaxBalance: 'number'
      }
    },
    PaymentMethod: {
      inactiveReason: 'any',
      paymentMethodAlias: 'string',
      paymentMethodData: {
        accountID: 'string',
        maxBalance: 'string'
      },
      paymentMethodId: 'string',
      paymentMethodStatus: 'string',
      paymentMethodType: 'string',
      paymentMethodTypeClass: 'string',
      paymentMethodTypeCountry: 'any',
      paymentMethodTypeCurrency: 'string',
      paymentMethodTypeDesc: 'string',
      paymentMethodTypeDirection: 'any',
      paymentMethodTypeImageUrl: 'any',
      paymentMethodTypeStatus: 'string',
      paymentMethodTypeUsage: 'any',
      walletId: 'string'
    }
  }
};

//Funcion para validar y comparar la respuesta
export default function () {
    let { res, responseJson } = loginUser(loginPayload);
    console.log('🔍 Datos que se envían a la API:', loginPayload);

    
    if (!responseJson || res.status !== 200) {
        console.error('❌ Error en la respuesta del login.');
        return;
    }

    console.log('🔍 Validando Data de UserLogin...');
    const isValid = validateAndCompare(responseJson.UserHomeData, expectedSchema.UserHomeData);

    if (isValid) {
        console.log('✅ Validación exitosa: La estructura de UserLogin coincide con el esquema esperado.');
    } else {
        console.error('❌ Error: La estructura de UserLogin no es válida.');
    }
}
