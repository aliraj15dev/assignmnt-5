const callBtns = document.getElementsByClassName('call')
for(let callBtn of callBtns){
    callBtn.addEventListener('click', function(){
        const subTitle = callBtn.parentNode.parentNode.childNodes[3].childNodes[1].innerText
        const number = callBtn.parentNode.parentNode.childNodes[5].childNodes[1].innerText

        const coins = document.getElementById('coins').innerText
        let newCoins = Number(coins)

        if(newCoins<20){
            alert('Earn Coint and then Call')
            return;
        }
        newCoins-=20;

        alert(`Calling to ${subTitle} ${number}...`)
        document.getElementById('coins').innerText = newCoins

        const historyContainer = document.getElementById('history-container')
        const history = document.createElement('div')
        let time = new Date().toLocaleTimeString()
        history.innerHTML = `
        <div class="flex items-center justify-between bg-gray-100 p-4 rounded-xl mt-5">
              <div>
                <h3 class="font-semibold">${subTitle}</h3>
                <p class="text-xl">${number}</p>
              </div>
              <p>${time}</p>
        </div>
        `
        historyContainer.prepend(history)

        const clearBtn = document.getElementById('clear')
        clearBtn.addEventListener('click', function(){
            historyContainer.innerText = ""
        })
    })
}

const copyBtns = document.getElementsByClassName('copy')
for(let copyBtn of copyBtns){
    copyBtn.addEventListener('click', function(){
        const number = copyBtn.parentNode.parentNode.childNodes[5].childNodes[1].innerText
        navigator.clipboard.writeText(number)
        const copyContainer = document.getElementById('copy-container').innerText
        alert('Your callimg number'+' '+number+' '+"is copied")
        let copyCount = Number(copyContainer)
        copyCount++
        document.getElementById('copy-container').innerText = copyCount

    })
}


const hearts = document.getElementsByClassName('heart')
for(let heart of hearts){

    heart.addEventListener('click', function(){
        const count = document.getElementById('heart-count').innerText
        let heartCount = Number(count)
        heartCount++;
        document.getElementById('heart-count').innerText = heartCount
    })
}