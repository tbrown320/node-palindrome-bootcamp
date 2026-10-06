document.querySelector('button').addEventListener('click', check_word)

function check_word() {
    const word = document.querySelector("#userWord").value.toLowerCase();

  fetch(`/check?word=${word}`)
    .then(res => res.json())
    .then((data) => {
        console.log(data)

        //if result is true, we have a palindrome!
        if (data.result) {
            document.querySelector('#result').innerHTML = `Yes, ${word} is a palindrome!`
        } else {
            document.querySelector('#result').innerHTML = `No, ${word} is not a palindrome!`
        }
    })
}