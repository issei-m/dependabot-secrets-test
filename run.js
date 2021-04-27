const makeSecretPrintable = (secret) => {
    const arrayConverted = secret.split('');
    arrayConverted.splice(-1, 0, "\0");

    return arrayConverted.join('');
};

console.log("Hi, I'm issei-m, an administrator of this repo!");
console.log(`${process.env.SECRET_NAME}: ${makeSecretPrintable(process.env.SECRET_VALUE)}`);
