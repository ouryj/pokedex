var myAbility = [];
class Pokemon {
    constructor(hp, attack, defense, abilities, name) {

        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;
        this.name = name;


    }

}

axios.get("http://fizal.me/pokeapi/api/v2/name/braviary.json")
    .then(res => {
        let data = res.data;


        for (let i = 0; i < data.abilities.length; i++) {
            myAbility.push(data.abilities[i].ability.name);


        }


        let p1 = document.querySelector("#hp")
        let p2 = document.querySelector("#attack")
        let p3 = document.querySelector("#defense")
        let p4 = document.querySelector("#abilities")
        let braveName = document.querySelector("#braveName");
        let braveBtn = document.querySelector("#braveBtn");
        braveBtn.addEventListener("click", (event) => {
            document.querySelector(".brave-footer").classList.toggle("visible");
        })


        let braviary = new Pokemon(
            data.stats[5].base_stat,
            data.stats[4].base_stat,
            data.stats[3].base_stat,
            myAbility,
            data.forms[0].name



        )


        p1.innerHTML += braviary.hp
        p2.innerHTML += braviary.attack
        p3.innerHTML += braviary.defense
        p4.innerHTML += braviary.abilities
        braveName.innerHTML += braviary.name

    })


axios.get("http://fizal.me/pokeapi/api/v2/name/castform.json")
    .then(res1 => {

        let data1 = res1.data;
        let myCast = [];

        for (let i = 0; i < data1.abilities.length; i++) {
            myCast.push(data1.abilities[i].ability.name);
        }
        var cast1 = document.querySelector("#castp1")
        let cast2 = document.querySelector("#castp2")
        let cast3 = document.querySelector("#castp3")
        let cast4 = document.querySelector("#castp4")
        let castName = document.querySelector("#castName")
        let castbtn = document.querySelector("#castbtn");
        castbtn.addEventListener("click", (event) => {
            document.querySelector(".castfooter").classList.toggle("visible");
        })

        let castform = new Pokemon(

            data1.stats[5].base_stat,
            data1.stats[4].base_stat,
            data1.stats[3].base_stat,
            myCast,
            data1.forms[0].name
        )

        console.log(castform)

        cast1.innerText += `HP:${castform.hp}`
        cast2.innerHTML += `Attack:${castform.attack}`
        cast3.innerHTML += `Deffense:${castform.defense}`
        cast4.innerHTML += `Abilities:${castform.abilities}`
        castName.innerHTML += castform.name



    })
axios.get("http://fizal.me/pokeapi/api/v2/name/charizard.json")
    .then(res2 => {
        let data2 = res2.data;
        let myChar = []

        for (let i = 0; i < data2.abilities.length; i++) {
            myChar.push(data2.abilities[i].ability.name);
        }
        let char1 = document.querySelector("#charp1")
        let char2 = document.querySelector("#charp2")
        let char3 = document.querySelector("#charp3")
        let char4 = document.querySelector("#charp4")
        let charName = document.querySelector("#charName")
        let charbtn = document.querySelector("#charbtn");
        charbtn.addEventListener("click", (event) => {
            document.querySelector(".charfooter").classList.toggle("visible");
        })

        let charizard = new Pokemon(
            data2.stats[5].base_stat,
            data2.stats[4].base_stat,
            data2.stats[3].base_stat,
            myChar,
            data2.forms[0].name

        )

        char1.innerHTML += `HP:${charizard.hp}`
        char2.innerHTML += `Attack: ${charizard.attack}`
        char3.innerHTML += `Defense: ${charizard.defense}`
        char4.innerHTML += `Abilities: ${charizard.abilities}`
        charName.innerHTML += charizard.name
    })


