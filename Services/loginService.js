import http from 'k6/http';
import { check } from 'k6';

const BASE_URL = __ENV.BASE_URL;
const TOKEN = __ENV.TOKEN;

const HEADERS = {
    headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
    }
};

// Función para el login para UserLogin
export function loginUser(loginPayload) {
    console.log(`🔍 Iniciando login en ${BASE_URL}/UserLogin`);

    let res = http.post(`${BASE_URL}/UserLogin`, loginPayload, HEADERS);
    let responseJson;

    try {
        responseJson = JSON.parse(res.body);
    } catch (e) {
        console.error('❌ Error al parsear JSON:', e);
        return null;
    }

    console.log(`🔹 Código de respuesta: ${res.status}`);
    console.log(`🔹 Cuerpo de respuesta: ${res.body}`);


    return { res, responseJson };
}


// Función login para endpoint UserPolicyDetail
export function userPolicyDetail(loginPayload) {
    console.log(`🔍 Iniciando login en ${BASE_URL}/UserPolicyDetail`);

    let res = http.post(`${BASE_URL}/UserPolicyDetail`, loginPayload, HEADERS);
    let responseJson;

    try {
        responseJson = JSON.parse(res.body);
    } catch (e) {
        console.error('❌ Error al parsear JSON:', e);
        return null;
    }

    console.log(`🔹 Código de respuesta: ${res.status}`);
    console.log(`🔹 Cuerpo de respuesta: ${res.body}`);

    return { res, responseJson };
}

//Función para el login de UserCarnets
export function userCarnets(loginPayload) {
    console.log(`🔍 Iniciando login en ${BASE_URL}/UserCarnet`);

    let res = http.post(`${BASE_URL}/UserCarnet`, loginPayload, HEADERS);
    let responseJson;

    try {
        responseJson = JSON.parse(res.body);
    } catch (e) {
        console.error('❌ Error al parsear JSON:', e);
        return null;
    }

    console.log(`🔹 Código de respuesta: ${res.status}`);
    console.log(`🔹 Cuerpo de respuesta: ${res.body}`);

    return { res, responseJson };
}

//Función para el login de UserAddBankAccountInfo
export function userAddBankAccountInfo(loginPayload) {
    console.log(`🔍 Iniciando login en ${BASE_URL}/UserAddBankAccountInfo`);

    let res = http.post(`${BASE_URL}/UserAddBankAccountInfo`, loginPayload, HEADERS);
    let responseJson;

    try {
        responseJson = JSON.parse(res.body);
    } catch (e) {
        console.error('❌ Error al parsear JSON:', e);
        return null;
    }

    console.log(`🔹 Código de respuesta: ${res.status}`);
    console.log(`🔹 Cuerpo de respuesta: ${res.body}`);

    return { res, responseJson };
}
//Función para el login de UserBankAccountInfo
export function userBankAccountInfo(loginPayload) {
    console.log(`🔍 Iniciando login en ${BASE_URL}/UserBankAccountInfo`);

    let res = http.post(`${BASE_URL}/UserBankAccountInfo`, loginPayload, HEADERS);
    let responseJson;

    try {
        responseJson = JSON.parse(res.body);
    } catch (e) {
        console.error('❌ Error al parsear JSON:', e);
        return null;
    }

    console.log(`🔹 Código de respuesta: ${res.status}`);
    console.log(`🔹 Cuerpo de respuesta: ${res.body}`);

    return { res, responseJson };
}

//Función para el login de updatePolicyAccount
export function updatePolicyAccount(loginPayload) {
    console.log(`🔍 Iniciando login en ${BASE_URL}/UpdatePolicyAccount`);

    let res = http.post(`${BASE_URL}/UpdatePolicyAccount`, loginPayload, HEADERS);
    let responseJson;

    try {
        responseJson = JSON.parse(res.body);
    } catch (e) {
        console.error('❌ Error al parsear JSON:', e);
        return null;
    }

    console.log(`🔹 Código de respuesta: ${res.status}`);
    console.log(`🔹 Cuerpo de respuesta: ${res.body}`);

    return { res, responseJson };
}

//Funcion para el login de submitPolicyPayment
export function submitPolicyPayment(loginPayload) {
    console.log(`🔍 Iniciando login en ${BASE_URL}/SubmitPolicyPayment`);

    let res = http.post(`${BASE_URL}/SubmitPolicyPayment`, loginPayload, HEADERS);
    let responseJson;

    try {
        responseJson = JSON.parse(res.body);
    } catch (e) {
        console.error('❌ Error al parsear JSON:', e);
        return null;
    }

    console.log(`🔹 Código de respuesta: ${res.status}`);
    console.log(`🔹 Cuerpo de respuesta: ${res.body}`);

    return { res, responseJson };
}

//Función para el login de GetPolicyBalanceValues
export function getPolicyBalanceValues(loginPayload) {
    console.log(`🔍 Iniciando login en ${BASE_URL}/GetPolicyBalanceValues`);

    let res = http.post(`${BASE_URL}/GetPolicyBalanceValues`, loginPayload, HEADERS);
    let responseJson;

    try {
        responseJson = JSON.parse(res.body);
    } catch (e) {
        console.error('❌ Error al parsear JSON:', e);
        return null;
    }

    console.log(`🔹 Código de respuesta: ${res.status}`);
    console.log(`🔹 Cuerpo de respuesta: ${res.body}`);

    return { res, responseJson };
}


//Funcion para el login de policySubmission
export function policySubmission(loginPayload) {
    console.log(`🔍 Iniciando login en ${BASE_URL}/PolicySubmission`);

    let res = http.post(`${BASE_URL}/PolicySubmission`, loginPayload, HEADERS);
    let responseJson;

    try {
        responseJson = JSON.parse(res.body);
    } catch (e) {
        console.error('❌ Error al parsear JSON:', e);
        return null;
    }

    console.log(`🔹 Código de respuesta: ${res.status}`);
    console.log(`🔹 Cuerpo de respuesta: ${res.body}`);

    return { res, responseJson };
}

//Funcion para el login de PolicyUpdateBeneficiaries
export function policyUpdateBeneficiaries(loginPayload) {
    console.log(`🔍 Iniciando login en ${BASE_URL}/PolicyUpdateBeneficiaries`);

    let res = http.post(`${BASE_URL}/PolicyUpdateBeneficiaries`, loginPayload, HEADERS);
    let responseJson;

    try {
        responseJson = JSON.parse(res.body);
    } catch (e) {
        console.error('❌ Error al parsear JSON:', e);
        return null;
    }

    console.log(`🔹 Código de respuesta: ${res.status}`);
    console.log(`🔹 Cuerpo de respuesta: ${res.body}`);

    return { res, responseJson };
}

