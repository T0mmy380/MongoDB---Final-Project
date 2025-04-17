db.trainers.insertMany([
    {
      name: "Brock",
      rank: "Gym Leader",
      region: "Kanto",
      team: [
        { name: "Geodude", type: ["Rock", "Ground"] },
        { name: "Onix", type: ["Rock", "Ground"] },
        { name: "Graveler", type: ["Rock", "Ground"] },
        { name: "Rhydon", type: ["Ground", "Rock"] }
      ],
      record: { wins: 150, losses: 20 },
      money: 5000
    },
    {
      name: "Youngster Joey",
      rank: "Newcomer",
      region: "Kanto",
      team: [
        { name: "Rattata", type: ["Normal"] }
      ],
      record: { wins: 5, losses: 50 },
      money: 300
    },
    {
      name: "Lt. Surge",
      rank: "Gym Leader",
      region: "Kanto",
      team: [
        { name: "Voltorb", type: ["Electric"] },
        { name: "Raichu", type: ["Electric"] },
        { name: "Magneton", type: ["Electric", "Steel"] }
      ],
      record: { wins: 130, losses: 30 },
      money: 4500
    },
    {
      name: "Ace Trainer Maya",
      rank: "Ace Trainer",
      region: "Kanto",
      team: [
        { name: "Ninetales", type: ["Fire"] },
        { name: "Vaporeon", type: ["Water"] },
        { name: "Jolteon", type: ["Electric"] },
        { name: "Flareon", type: ["Fire"] },
        { name: "Espeon", type: ["Psychic"] }
      ],
      record: { wins: 80, losses: 40 },
      money: 2500
    },
    {
      name: "Blue",
      rank: "Champion",
      region: "Kanto",
      team: [
        { name: "Pidgeot", type: ["Normal", "Flying"] },
        { name: "Alakazam", type: ["Psychic"] },
        { name: "Charizard", type: ["Fire", "Flying"] },
        { name: "Blastoise", type: ["Water"] },
        { name: "Exeggutor", type: ["Grass", "Psychic"] },
        { name: "Arcanine", type: ["Fire"] }
      ],
      record: { wins: 300, losses: 15 },
      money: 12000
    },
    {
      name: "Falkner",
      rank: "Gym Leader",
      region: "Johto",
      team: [
        { name: "Pidgeotto", type: ["Normal", "Flying"] },
        { name: "Noctowl", type: ["Normal", "Flying"] },
        { name: "Skarmory", type: ["Steel", "Flying"] }
      ],
      record: { wins: 120, losses: 25 },
      money: 4000
    },
    {
      name: "Bugsy",
      rank: "Gym Leader",
      region: "Johto",
      team: [
        { name: "Scyther", type: ["Bug", "Flying"] },
        { name: "Metapod", type: ["Bug"] }
      ],
      record: { wins: 60, losses: 30 },
      money: 2000
    },
    {
      name: "Pokéfan Clara",
      rank: "Breeder",
      region: "Johto",
      team: [
        { name: "Eevee", type: ["Normal"] },
        { name: "Togepi", type: ["Fairy"] }
      ],
      record: { wins: 20, losses: 15 },
      money: 800
    },
    {
      name: "Rising Star Hugo",
      rank: "Rising Star",
      region: "Johto",
      team: [
        { name: "Quilava", type: ["Fire"] },
        { name: "Croconaw", type: ["Water"] },
        { name: "Bayleef", type: ["Grass"] },
        { name: "Noctowl", type: ["Normal", "Flying"] }
      ],
      record: { wins: 45, losses: 25 },
      money: 1500
    },
    {
      name: "Lance",
      rank: "Elite Four",
      region: "Johto",
      team: [
        { name: "Dragonite", type: ["Dragon", "Flying"] },
        { name: "Gyarados", type: ["Water", "Flying"] },
        { name: "Charizard", type: ["Fire", "Flying"] },
        { name: "Aerodactyl", type: ["Rock", "Flying"] },
        { name: "Tyranitar", type: ["Rock", "Dark"] },
        { name: "Kingdra", type: ["Water", "Dragon"] }
      ],
      record: { wins: 250, losses: 20 },
      money: 10000
    },
    {
      name: "Roxanne",
      rank: "Gym Leader",
      region: "Hoenn",
      team: [
        { name: "Geodude", type: ["Rock", "Ground"] },
        { name: "Nosepass", type: ["Rock"] },
        { name: "Lileep", type: ["Rock", "Grass"] }
      ],
      record: { wins: 90, losses: 15 },
      money: 3500
    },
    {
      name: "Swimmer Finn",
      rank: "Swimmer",
      region: "Hoenn",
      team: [
        { name: "Marill", type: ["Water", "Fairy"] }
      ],
      record: { wins: 10, losses: 45 },
      money: 500
    },
    {
      name: "Veteran Hector",
      rank: "Veteran Trainer",
      region: "Hoenn",
      team: [
        { name: "Swampert", type: ["Water", "Ground"] },
        { name: "Breloom", type: ["Grass", "Fighting"] },
        { name: "Manectric", type: ["Electric"] },
        { name: "Altaria", type: ["Dragon", "Flying"] },
        { name: "Aggron", type: ["Steel", "Rock"] }
      ],
      record: { wins: 200, losses: 30 },
      money: 7000
    },
    {
      name: "Steven",
      rank: "Champion",
      region: "Hoenn",
      team: [
        { name: "Metagross", type: ["Steel", "Psychic"] },
        { name: "Aggron", type: ["Steel", "Rock"] },
        { name: "Skarmory", type: ["Steel", "Flying"] },
        { name: "Claydol", type: ["Ground", "Psychic"] },
        { name: "Armaldo", type: ["Rock", "Bug"] },
        { name: "Cradily", type: ["Rock", "Grass"] }
      ],
      record: { wins: 290, losses: 12 },
      money: 13000
    },
    {
      name: "Hex Maniac Luna",
      rank: "Hex Maniac",
      region: "Hoenn",
      team: [
        { name: "Shuppet", type: ["Ghost"] },
        { name: "Duskull", type: ["Ghost"] }
      ],
      record: { wins: 30, losses: 40 },
      money: 1000
    },
    {
      name: "Roark",
      rank: "Gym Leader",
      region: "Sinnoh",
      team: [
        { name: "Geodude", type: ["Rock", "Ground"] },
        { name: "Cranidos", type: ["Rock"] },
        { name: "Shieldon", type: ["Rock", "Steel"] }
      ],
      record: { wins: 80, losses: 10 },
      money: 3000
    },
    {
      name: "Cynthia",
      rank: "Champion",
      region: "Sinnoh",
      team: [
        { name: "Garchomp", type: ["Dragon", "Ground"] },
        { name: "Lucario", type: ["Fighting", "Steel"] },
        { name: "Spiritomb", type: ["Ghost", "Dark"] },
        { name: "Milotic", type: ["Water"] },
        { name: "Togekiss", type: ["Fairy", "Flying"] },
        { name: "Roserade", type: ["Grass", "Poison"] }
      ],
      record: { wins: 320, losses: 10 },
      money: 15000
    },
    {
      name: "Parasol Lady Daisy",
      rank: "Parasol Lady",
      region: "Sinnoh",
      team: [
        { name: "Pachirisu", type: ["Electric"] }
      ],
      record: { wins: 15, losses: 25 },
      money: 600
    },
    {
      name: "Black Belt Kenji",
      rank: "Black Belt",
      region: "Sinnoh",
      team: [
        { name: "Machoke", type: ["Fighting"] },
        { name: "Medicham", type: ["Fighting", "Psychic"] },
        { name: "Toxicroak", type: ["Poison", "Fighting"] },
        { name: "Heracross", type: ["Bug", "Fighting"] }
      ],
      record: { wins: 70, losses: 35 },
      money: 2200
    },
    {
      name: "Galactic Grunt",
      rank: "Team Galactic",
      region: "Sinnoh",
      team: [
        { name: "Stunky", type: ["Poison", "Dark"] },
        { name: "Glameow", type: ["Normal"] }
      ],
      record: { wins: 25, losses: 60 },
      money: 800
    },
    {
      name: "Cilan",
      rank: "Gym Leader",
      region: "Unova",
      team: [
        { name: "Pansage", type: ["Grass"] },
        { name: "Simisage", type: ["Grass"] },
        { name: "Ferrothorn", type: ["Grass", "Steel"] }
      ],
      record: { wins: 70, losses: 12 },
      money: 2800
    },
    {
      name: "School Kid Timmy",
      rank: "School Kid",
      region: "Unova",
      team: [
        { name: "Petilil", type: ["Grass"] }
      ],
      record: { wins: 8, losses: 42 },
      money: 400
    },
    {
      name: "Iris",
      rank: "Champion",
      region: "Unova",
      team: [
        { name: "Haxorus", type: ["Dragon"] },
        { name: "Hydreigon", type: ["Dark", "Dragon"] },
        { name: "Druddigon", type: ["Dragon"] },
        { name: "Salamence", type: ["Dragon", "Flying"] },
        { name: "Flygon", type: ["Ground", "Dragon"] },
        { name: "Altaria", type: ["Dragon", "Flying"] }
      ],
      record: { wins: 300, losses: 20 },
      money: 14000
    },
    {
      name: "Backpacker Zoe",
      rank: "Backpacker",
      region: "Unova",
      team: [
        { name: "Deerling", type: ["Normal", "Grass"] },
        { name: "Audino", type: ["Normal"] }
      ],
      record: { wins: 25, losses: 30 },
      money: 900
    },
    {
      name: "Viola",
      rank: "Gym Leader",
      region: "Kalos",
      team: [
        { name: "Surskit", type: ["Bug", "Water"] },
        { name: "Vivillon", type: ["Bug", "Flying"] },
        { name: "Masquerain", type: ["Bug", "Flying"] }
      ],
      record: { wins: 60, losses: 10 },
      money: 2500
    },
    {
      name: "Furisode Girl Sophie",
      rank: "Furisode Girl",
      region: "Kalos",
      team: [
        { name: "Spritzee", type: ["Fairy"] }
      ],
      record: { wins: 12, losses: 28 },
      money: 700
    },
    {
      name: "Diantha",
      rank: "Champion",
      region: "Kalos",
      team: [
        { name: "Gardevoir", type: ["Psychic", "Fairy"] },
        { name: "Hawlucha", type: ["Fighting", "Flying"] },
        { name: "Tyrantrum", type: ["Rock", "Dragon"] },
        { name: "Aurorus", type: ["Rock", "Ice"] },
        { name: "Gourgeist", type: ["Ghost", "Grass"] },
        { name: "Goodra", type: ["Dragon"] }
      ],
      record: { wins: 310, losses: 15 },
      money: 14500
    },
    {
      name: "Punk Guy Vince",
      rank: "Punk Guy",
      region: "Kalos",
      team: [
        { name: "Scraggy", type: ["Dark", "Fighting"] },
        { name: "Pancham", type: ["Fighting"] }
      ],
      record: { wins: 40, losses: 35 },
      money: 1300
    },
    {
      name: "Hala",
      rank: "Island Kahuna",
      region: "Alola",
      team: [
        { name: "Crabrawler", type: ["Fighting"] },
        { name: "Hariyama", type: ["Fighting"] },
        { name: "Primeape", type: ["Fighting"] },
        { name: "Poliwrath", type: ["Water", "Fighting"] }
      ],
      record: { wins: 100, losses: 20 },
      money: 4000
    },
    {
      name: "Trial Guide Kiawe",
      rank: "Trial Guide",
      region: "Alola",
      team: [
        { name: "Salandit", type: ["Poison", "Fire"] },
        { name: "Turtonator", type: ["Fire", "Dragon"] },
        { name: "Marowak", type: ["Fire", "Ghost"] }
      ],
      record: { wins: 75, losses: 25 },
      money: 3000
    },
    {
      name: "Office Worker Rick",
      rank: "Office Worker",
      region: "Alola",
      team: [
        { name: "Alolan Meowth", type: ["Dark"] }
      ],
      record: { wins: 5, losses: 55 },
      money: 200
    },
    {
      name: "Kukui",
      rank: "Champion",
      region: "Alola",
      team: [
        { name: "Incineroar", type: ["Fire", "Dark"] },
        { name: "Braviary", type: ["Normal", "Flying"] },
        { name: "Lycanroc", type: ["Rock"] },
        { name: "Kommo-o", type: ["Dragon", "Fighting"] },
        { name: "Vikavolt", type: ["Bug", "Electric"] },
        { name: "Mudsdale", type: ["Ground"] }
      ],
      record: { wins: 250, losses: 30 },
      money: 11000
    },
    {
      name: "Milo",
      rank: "Gym Leader",
      region: "Galar",
      team: [
        { name: "Gossifleur", type: ["Grass"] },
        { name: "Eldegoss", type: ["Grass"] },
        { name: "Appletun", type: ["Grass", "Dragon"] }
      ],
      record: { wins: 50, losses: 5 },
      money: 2000
    },
    {
      name: "Leon",
      rank: "Champion",
      region: "Galar",
      team: [
        { name: "Charizard", type: ["Fire", "Flying"] },
        { name: "Dragapult", type: ["Dragon", "Ghost"] },
        { name: "Aegislash", type: ["Steel", "Ghost"] },
        { name: "Haxorus", type: ["Dragon"] },
        { name: "Corviknight", type: ["Steel", "Flying"] },
        { name: "Toxtricity", type: ["Electric", "Poison"] }
      ],
      record: { wins: 350, losses: 5 },
      money: 20000
    },
    {
      name: "Ball Guy",
      rank: "Stadium Staff",
      region: "Galar",
      team: [
        { name: "Voltorb", type: ["Electric"] }
      ],
      record: { wins: 0, losses: 100 },
      money: 10
    }
  ]);