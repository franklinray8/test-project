// Función para validar la estructura JSON
export function validateAndCompare(responseData, expectedSchema) {
    function checkStructure(obj, schema, path = '') {
        let isValid = true;

        for (const key in schema) {
            const expectedType = schema[key];
            const actualValue = obj[key];

            if (!(key in obj)) {
                console.error(`❌ Falta el campo "${path}${key}" en la respuesta.`);
                isValid = false;
                continue;
            }

            if (typeof expectedType === 'object' && !Array.isArray(expectedType)) {
                if (!checkStructure(actualValue, expectedType, `${path}${key}.`)) {
                    isValid = false;
                }
            } else if (Array.isArray(expectedType)) {
                if (!Array.isArray(actualValue)) {
                    console.error(`❌ El campo "${path}${key}" debería ser un array.`);
                    isValid = false;
                } else if (expectedType.length > 0 && actualValue.length > 0) {
                    for (let i = 0; i < actualValue.length; i++) {
                        if (!checkStructure(actualValue[i], expectedType[0], `${path}${key}[${i}].`)) {
                            isValid = false;
                        }
                    }
                }
            } else {
                const actualType = typeof actualValue;
                if (expectedType !== 'any' && actualType !== expectedType) {
                    console.error(`❌ El campo "${path}${key}" debería ser de tipo "${actualType}", pero es de tipo "${expectedType}".`);
                    isValid = false;
                }
            }
        }

        for (const key in obj) {
            if (!(key in schema)) {
                console.error(`❌ El campo "${path}${key}" no está en el esquema esperado.`);
                isValid = false;
            }
        }

        return isValid;
    }

    return checkStructure(responseData, expectedSchema);
}
