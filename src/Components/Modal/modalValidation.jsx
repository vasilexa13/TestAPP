import { useEffect, useState } from "react";

const useValidation = (value, validations) => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [isMinLengthError, setIsMinLengthError] = useState(false);
    const [isMaxLengthError, setIsMaxLengthError] = useState(false);
    const [inputValid, setInputValid] = useState(false);
    const [numberValid, setNumberValid] = useState(false);

    useEffect(() => {

    }, []);

    useEffect(() => {
        setIsEmpty(!value);
        setIsMaxLengthError(value.length > validations.maxLength);
    }, [value, validations.maxLength]);

    useEffect(() => {
        setIsEmpty(!value);
        setIsMinLengthError(value.length < validations.minLength);
    }, [value, validations.minLength]);

    useEffect(() => {
        setInputValid(!isEmpty && !isMinLengthError);
    }, [isEmpty, isMinLengthError]);

    return {
        isEmpty,
        isMinLengthError,
        isMaxLengthError,
        minLength: validations.minLength,
        inputValid
    };
}

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setIsDirty] = useState(false);
    const valid = useValidation(value, validations);

    const onChange = (e) => {
        setValue(e.target.value);
        setIsDirty(true);
    }

    const onBlur = () => {
        setIsDirty(true);
    }

    return {
        value,
        setValue,
        onChange,
        onBlur,
        isDirty,
        setIsDirty,
        ...valid
    };
}

export { useInput, useValidation };