window.alert('the service is under maintenance!')

function clover() {
    /*if (itens_blue === undefined || itens_blue.value <= 0) {
        window.alert('[ERROR] please insert one number!')
        document.location.reload(true)
        window.alert(`[Error] THE PRODUCT QUATITY ${itens_blue.value}  IS NOT VALID!`)
        //If condition for false, condition return error

    } else {
       */
        let confirm = window.confirm('do you wish to continue?')

        if ( confirm == true) {
            var blue = document.getElementById('bb')
            const pill_blue_btc = 0.0029 
            const pill_blue_eth = 0.0114 
            
        
            window.alert(`Total to pay ${pill_blue_btc} BTC or ${pill_blue_eth} ETH`)
            blue.innerHTML = `Total to pay ${pill_blue_btc} BTC or ${pill_blue_eth} ETH`
             
            setTimeout(function bb(){
                blue.innerHTML=''
                location.reload(true)
            }, 30000)

            //Condition true for continue buy
                
        } else {
            
            window.alert('Sorry but you without finalizing the order you cannot buy!')
            location.href='../../index.html'

            
        }
        
    } 
    
    


function red() {
    
    /*if (itens_red === undefined || itens_red.value <= 0) {
        window.alert('[ERROR] please insert one number!')
        document.location.reload(true)
        window.alert(`[Error] THE PRODUCT QUATITY ${itens_red.value}  IS NOT VALID!`)

    } else {
        window.alert(itens_red.value) */
        let confirm = window.confirm('Do you wish to continue?')

        if (confirm == true) {
            var red = document.getElementById('br')
            let red_pill_btc = 0.0013 
            let red_pill_eth = 0.0523 
            
            
            window.alert(`Total to pay ${red_pill_btc} BTC or ${red_pill_eth} ETH`)
            red.innerHTML = `Total to pay ${red_pill_btc} BTC or ${red_pill_eth} ETH`

            setTimeout(function br(){
                red.innerHTML=''
                location.reload(true)
            }, 30000)
            
           
        }

    }
    


function purple() {
    /* if (itens_purple === undefined || itens_purple.value <= 0) {
        window.alert('[ERROR] please insert one number!')
        document.location.reload(true)
        window.alert(`[Error] THE PRODUCT QUATITY ${itens_red.value}  IS NOT VALID!`)

    } else { */
        window.alert(itens_purple.value) 
        let confirm = window.confirm('Do you wish to continue?')

        if (confirm == true) {
            var purple = document.getElementById('bp')
            const purple_pill_btc = 0.0021
            const purple_pill_eth = 0.0802

            window.alert(`Total to pay ${purple_pill_btc} BTC or ${purple_pill_eth} ETH`)
            purple.innerHTML = `Total to pay ${purple_pill_btc} BTC or ${purple_pill_eth} ETH`

            setTimeout(function bp(){
                purple.innerHTML=''
                location.reload(true)
            }, 30000)

        } 
        
    }



function green() {
    /* if (itens_green === undefined || itens_green.value <= 0) {
        window.alert('[ERROR] please insert one number!')
        document.location.reload(true)
        window.alert(`[Error] THE PRODUCT QUATITY ${itens_green.value}  IS NOT VALID!`)

    } else { */
        window.alert(itens_green.value) 
        let confirm = window.confirm('Do you wish to continue?')

        if (confirm == true) {
            var green = document.getElementById('bg')
            const green_pill_btc = 0.0044 * itens_green.value
            const green_pill_eth = itens_green.value * 0.1667

            window.alert(`Total to pay ${green_pill_btc} BTC or ${green_pill_eth} ETH`)
            green.innerHTML = `Total to pay ${green_pill_btc} BTC or ${green_pill_eth} ETH`

            setTimeout(function bg(){
                green.innerHTML=''
                location.reload(true)
            }, 30000)

        } 
    }




