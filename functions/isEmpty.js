module.exports = data => {
    return data === '' ||
        data === null ||
        data === undefined ||
        !data ||
        (typeof data === 'object' && Object.keys(data).length <= 0);
};
