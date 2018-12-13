var myAbility =[];
    class Pokemon {
        constructor(hp, attack, defense, abilities) {
            
            this.hp = hp;
            this.attack = attack;
            this.defense = defense;
            this.abilities = abilities;
         
            
        }
       /* serebi() {
            p1.innerHTML += this.hp;
            p2.innerHTML += this.attack;
            p3.innerHTML += this.defense;
            p4.innerHTML += this.abilities;   
        }*/
    }

axios.get("http://fizal.me/pokeapi/api/v2/name/braviary.json")
    .then(res => {
        let data = res.data;
       

        for(let i = 0; i < data.abilities.length; i++){
            myAbility.push(data.abilities[i].ability.name);
       
            
        }
        
      
        let p1 = document.querySelector("#hp")
        let p2 = document.querySelector("#attack")
        let p3 = document.querySelector("#defense")
        let p4 = document.querySelector("#abilities")
       //for(let i = 0; i<data.abilities.length;i++){
         //  console.log(data.abilities[i].ability)
      // }
        //console.log(data.abilities.length);

        // p1.innerHTML += data.stats[5].base_stat;
        // p2.innerHTML += data.stats[4].base_stat;
        // p3.innerHTML += data.stats[3].base_stat;
        // for(let i=0; i<data.abilities.length; ++i){
        // p4.innerHTML += ` ${data.abilities[i].ability.name}`;
        // }
       
        let braviary = new Pokemon(
            data.stats[5].base_stat,
            data.stats[4].base_stat,
            data.stats[3].base_stat,
            myAbility
            
       
        
        )
    
       
        p1.innerHTML += braviary.hp
        p2.innerHTML += braviary.attack
        p3.innerHTML += braviary.defense
        p4.innerHTML += braviary.abilities
        

  
        
    })

    
axios.get("http://fizal.me/pokeapi/api/v2/name/castform.json")
.then(res1 =>{
    let data1 = res1.data;
    for(let i = 0; i < data1.abilities.length; i++){
        myAbility.push(data1.abilities[i].ability.name);
    }
    var cast1 = document.querySelector("#castp1")
    let cast2 = document.querySelector("#castp2")
    let cast3 = document.querySelector("#castp3")
    let cast4 = document.querySelector("#castp4")

    let castform = new Pokemon(

            data1.stats[5].base_stat,
            data1.stats[4].base_stat,
            data1.stats[3].base_stat,
            myAbility
    )

    cast1.innerText += `HP:${castform.hp}`
    cast2.innerHTML += `Attack:${castform.attack}`
    cast3.innerHTML += `Deffense:${castform.defense}`
    cast4.innerHTML += `Abilities:${castform.abilities}`

})
axios.get("http://fizal.me/pokeapi/api/v2/name/charizard.json")
.then(res2 =>{
    let data2 = res2.data;
    console.log(dat2[2].weight)
    for(let i = 0; i < data2.abilities.length; i++){
        myAbility.push(data2.abilities[i].ability.name);
    }
    let char1 = document.querySelector("#charp1")
    let char2 = document.querySelector("#charp2")
    let char3 = document.querySelector("#charp3")
    let char4 = document.querySelector("#charp4")
    

    let charizard = new Pokemon(
        data2.stats[5].base_stat,
            data2.stats[4].base_stat,
            data2.stats[3].base_stat,
            myAbility

    )

    char1.innerHTML += `HP:${charizard.hp}`
    char2.innerHTML += `Attack: ${charizard.attack}`
    char3.innerHTML += `Defense: ${charizard.defense}`
    char4.innerHTML += `Abilities: ${charizard.abilities}`
})
let btn = document.querySelector("#btn");
let div2 = document.querySelector(".row-div2");
btn.addEventListener("click", (addFeatures))
  
   

function addFeatures(){

    let p = document.createElement("p");
   
    p.innerHTML += "lot : 54";
    p.innerHTML += `weight : ${data1.weight}`;
    p.innerHTML += "power : 90";
    div2.append(p);
    
}

