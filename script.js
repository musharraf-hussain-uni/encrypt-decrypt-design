const encryption = () => {
    document.querySelector('#encrypt-btn').addEventListener('click', function () {
        const input = document.getElementById('txtMsg').value;
        console.log(input);
        const password = document.getElementById('password').value;
        console.log(password);

        const str = input.split('');
        console.log(str);

        let clutter = '';
        str.forEach(element => {
            clutter += `&#128${element.charCodeAt()}`;
        });
        console.log(clutter);

        document.querySelector('#result').innerHTML = clutter;

        var dataarr = [];


        if (JSON.parse(localStorage.getItem('data1'))) {
            dataarr = JSON.parse(localStorage.getItem('data1'))

            dataarr.push({
                'input': input,
                'pass': password,
                'output': clutter
            })
        } else {
            dataarr = [{
                'input': input,
                'pass': password,
                'output': clutter
            }]
        }

        localStorage.setItem('data1', JSON.stringify(dataarr))
    });
}
encryption();


const decryption = () => {
    document.querySelector('#decrypt-btn').addEventListener('click', function () {
        var clutter2 = '';
        var input2 = document.querySelector('#emojiMsg').value;
        var pass2 = document.querySelector('#finalPassword').value;

        var user = JSON.parse(localStorage.getItem('data1'))
        console.log(user)
    })


}
const btnClicking = () => {
    document.querySelector('#dec-btn').addEventListener('click', function () {
        document.querySelector('#decryption').style.display = 'block'
        document.querySelector('#encryption').style.display = 'none'
        document.querySelector('#dec-btn').style.backgroundColor = '#333'
        document.querySelector('#enc-btn').style.backgroundColor = '#222'
        document.querySelector('#result').style.display = 'none'

        document.querySelector('#main > h1 > span > img').style.transform = 'rotate(180deg)';

    })

    document.querySelector('#enc-btn').addEventListener('click', function () {
        document.querySelector('#encryption').style.display = 'block'
        document.querySelector('#decryption').style.display = 'none'
        document.querySelector('#enc-btn').style.backgroundColor = '#333'
        document.querySelector('#dec-btn').style.backgroundColor = '#222'
        document.querySelector('#main > h1 > span > img').style.transform = 'rotate(0deg)';
        document.querySelector('#result').style.display = 'none'


    })
    document.querySelector('#encrypt-btn').addEventListener('click', function () {
        document.querySelector('#result').style.display = 'block'
    })

    document.querySelector('#decrypt-btn').addEventListener('click', function () {
        document.querySelector('#result').style.display = 'block'
    })


}
btnClicking()