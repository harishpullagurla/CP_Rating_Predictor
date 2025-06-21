const W = 0.8316
const B = -32.63
let Selected_Platform = ""
const rating_ranges = {
    codeforces: [
            { min: 0, max: 1199, name: 'Newbie', color: '#808080' },
            { min: 1200, max: 1399, name: 'Pupil', color: '#008000' },
            { min: 1400, max: 1599, name: 'Specialist', color: '#03A89E' },
            { min: 1600, max: 1899, name: 'Expert', color: '#0000FF' },
            { min: 1900, max: 2099, name: 'Candidate Master', color: '#AA00AA' },
            { min: 2100, max: 2299, name: 'Master', color: '#FF8C00' },
            { min: 2300, max: 2399, name: 'International Master', color: '#FF8C00' },
            { min: 2400, max: 2599, name: 'Grandmaster', color: '#FF0000' },
            { min: 2600, max: 2999, name: 'International Grandmaster', color: '#FF0000' },
            { min: 3000, max: 4000, name: 'Legendary Grandmaster', color: '#FF0000' }
        ],
    codechef: [
            { min: 0, max: 1399, name: '1 Star', color: '#666666' },
            { min: 1400, max: 1599, name: '2 Star', color: '#1e7e34' },
            { min: 1600, max: 1799, name: '3 Star', color: '#138496' },
            { min: 1800, max: 1999, name: '4 Star', color: '#5a6c7d' },
            { min: 2000, max: 2199, name: '5 Star', color: '#795548' },
            { min: 2200, max: 2499, name: '6 Star', color: '#f39c12' },
            { min: 2500, max: 4000, name: '7 Star', color: '#e74c3c' }
    ]
}
function Choose_Platform(Platform){
    Selected_Platform=Platform
    document.getElementById('input-area').style.display='block';
    document.getElementById('rating-label').innerText=`Enter ${Platform.charAt(0).toUpperCase()+Platform.slice(1)} Rating`
    document.getElementById('output').innerHTML='';
}
function Predict_Rating(){
    const rating_value = parseFloat(document.getElementById('rating').value)
    if(isNaN(rating_value)){
        return ;
    }
    let predicted = 0 ;
    let target ='';
    if(Selected_Platform=='codechef'){
        predicted = W*rating_value+B;
        target='codeforces'
    }
    else{
        predicted = (rating_value-B)/W;
        target='codechef'
    }
    predicted=Math.round(predicted)
    const tier = rating_ranges[target].find(t=>predicted>=t.min && predicted<=t.max)
    document.getElementById('output').innerHTML=`
    <div>Predicted <span style="color:#0fffc1">${target.charAt(0).toUpperCase() + target.slice(1)} Rating</span>: <strong>${predicted}</strong></div>
    <div class="tier" style="color: ${tier?.color || '#fff'}">${tier?.name || 'Unranked'}</div>`
    
}