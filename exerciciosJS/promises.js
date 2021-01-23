function talkAfter(time, string) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(string);
        }, time * 1000);
    })
}

talkAfter(3, "Meu nome é Matheus")
    .then(string => string.concat(',estou estudando Javascript'))
    .then(string => string.concat('e essa promisse funcionou!'))
    .then(anotherString => console.log(anotherString));
