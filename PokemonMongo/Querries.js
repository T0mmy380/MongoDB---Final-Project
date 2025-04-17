1. // Insert a single trainer Tommy
db.trainers.insertOne(
    {
    name: "Tommy",
    rank: "Champion",
    region: "Kalos",
    team: [
        { name: "Greninja", type: ["Water", "Dark"] },
        { name: "Aegislash", type: ["Steel", "Ghost"] },
        { name: "Yveltal", type: ["Dark", "Flying"] },
        { name: "Gigalith", type: ["Rock"] },
        { name: "Krookodile", type: ["Ground", "Dark"] },
        { name: "Eelektross", type: ["Electric"] }
    ],
    record: { wins: 240, losses: 0 },
    money: 89000
    }
);
// Output:
{ acknowledged: true, insertedId: ObjectId('68003aa1d47c08049acb0d05') }

2. // Insert multiple trainers Ash and Misty
db.trainers.insertMany([
        {
        name: "Ash",
        rank: "Champion",
        region: "Kanto",
        team: [
            { name: "Pikachu", type: ["Electric"] },
            { name: "Charizard", type: ["Fire", "Flying"] },
            { name: "Butterfree", type: ["Bug", "Flying"] },
        ],
        record: { wins: 100, losses: 50 },
        money: 50000
    },
    {
        name: "Misty",
        rank: "Elite Four",
        region: "Johto",
        team: [
            { name: "Starmie", type: ["Water", "Psychic"] },
            { name: "Lapras", type: ["Water", "Ice"] },
            { name: "Seaking", type: ["Water"] },
            { name: "Golduck", type: ["Water"] }
        ],
        record: { wins: 80, losses: 20 },
        money: 60000
    }
]);
// Output:
{ acknowledged: true, insertedIds: [ ObjectId('68002f04d47c08049acb0ce7'), ObjectId('68002f04d47c08049acb0ce8') ] }

3. // Find all trainers in the Kanto region
db.trainers.find({ region: "Kanto" });
// Output:
[
    {
      _id: ObjectId('68002f04d47c08049acb0ce2'),
      name: 'Brock',
      rank: 'Gym Leader',
      region: 'Kanto',
      team: [
        { name: 'Geodude', type: [ 'Rock', 'Ground' ] },
        { name: 'Onix', type: [ 'Rock', 'Ground' ] },
        { name: 'Graveler', type: [ 'Rock', 'Ground' ] },
        { name: 'Rhydon', type: [ 'Ground', 'Rock' ] }
      ],
      record: { wins: 150, losses: 20 },
      money: 5000
    },
    {
      _id: ObjectId('68002f04d47c08049acb0ce3'),
      name: 'Youngster Joey',
      rank: 'Newcomer',
      region: 'Kanto',
      team: [ { name: 'Rattata', type: [ 'Normal' ] } ],
      record: { wins: 5, losses: 50 },
      money: 300
    },
    {
      _id: ObjectId('68002f04d47c08049acb0ce4'),
      name: 'Lt. Surge',
      rank: 'Gym Leader',
      region: 'Kanto',
      team: [
        { name: 'Voltorb', type: [ 'Electric' ] },
        { name: 'Raichu', type: [ 'Electric' ] },
        { name: 'Magneton', type: [ 'Electric', 'Steel' ] }
      ],
      record: { wins: 130, losses: 30 },
      money: 4500
    },
    {
      _id: ObjectId('68002f04d47c08049acb0ce5'),
      name: 'Ace Trainer Maya',
      rank: 'Ace Trainer',
      region: 'Kanto',
      team: [
        { name: 'Ninetales', type: [ 'Fire' ] },
        { name: 'Vaporeon', type: [ 'Water' ] },
        { name: 'Jolteon', type: [ 'Electric' ] },
        { name: 'Flareon', type: [ 'Fire' ] },
        { name: 'Espeon', type: [ 'Psychic' ] }
      ],
      record: { wins: 80, losses: 40 },
      money: 2500
    },
    {
      _id: ObjectId('68002f04d47c08049acb0ce6'),
      name: 'Blue',
      rank: 'Champion',
      region: 'Kanto',
      team: [
        { name: 'Pidgeot', type: [ 'Normal', 'Flying' ] },
        { name: 'Alakazam', type: [ 'Psychic' ] },
        { name: 'Charizard', type: [ 'Fire', 'Flying' ] },
        { name: 'Blastoise', type: [ 'Water' ] },
        { name: 'Exeggutor', type: [ 'Grass', 'Psychic' ] },
        { name: 'Arcanine', type: [ 'Fire' ] }
        ],
        record: { wins: 300, losses: 15 },
        money: 12000
    }
]

4. // Update Lance to change his 3rd pokemon from Charizard to Noivern
db.trainers.updateOne(
    { name: "Lance" },
    { $set: { "team.2": { name: "Noivern", type: ["Flying", "Dragon"] } } }
);
// Output:
{
    acknowledged: true,
    insertedId: null,
    matchedCount: 1,
    modifiedCount: 1,
    upsertedCount: 0,
}

5. // Update all trainers with rank "Champion" to "Master"
db.trainers.updateMany(
    { rank: "Champion" },
    { $set: { rank: "Master" } }
);
// Output:
{
    acknowledged: true,
    insertedId: null,
    matchedCount: 7,
    modifiedCount: 7,
    upsertedCount: 0
}

6. // Delete a single trainer Tommy
db.trainers.deleteOne({name:"Tommy"});
// Output:
{ acknowledged: true, deletedCount: 1 }

7. // Delete multiple trainers with rank "Master"
db.trainers.deleteMany({rank:"Master"});
// Output:
{ acknowledged: true, deletedCount: 7 }

8. // Find total money per region
db.trainers.aggregate([
    { $group: { 
        _id: "$region", 
        totalMoney: { $sum: "$money" } 
    }}
]);
// Output:
[
    { _id: 'Hoenn', totalMoney: 12000 },
    { _id: 'Alola', totalMoney: 7200 },
    { _id: 'Unova', totalMoney: 4100 },
    { _id: 'Kalos', totalMoney: 4500 },
    { _id: 'Johto', totalMoney: 18300 },
    { _id: 'Galar', totalMoney: 2010 },
    { _id: 'Sinnoh', totalMoney: 6600 },
    { _id: 'Kanto', totalMoney: 12300 }
]

9. // Sort trainers by losses (ascending)
db.trainers.find().sort({ "record.losses": 1 }).limit(3);
// Output:
[
    {
      _id: ObjectId('68002f04d47c08049acb0d02'),
      name: 'Milo',
      rank: 'Gym Leader',
      region: 'Galar',
      team: [
        { name: 'Gossifleur', type: [ 'Grass' ] },
        { name: 'Eldegoss', type: [ 'Grass' ] },
        { name: 'Appletun', type: [ 'Grass', 'Dragon' ] }
      ],
      record: { wins: 50, losses: 5 },
      money: 2000
    },
    {
      _id: ObjectId('68002f04d47c08049acb0cfa'),
      name: 'Viola',
      rank: 'Gym Leader',
      region: 'Kalos',
      team: [
        { name: 'Surskit', type: [ 'Bug', 'Water' ] },
        { name: 'Vivillon', type: [ 'Bug', 'Flying' ] },
        { name: 'Masquerain', type: [ 'Bug', 'Flying' ] }
      ],
      record: { wins: 60, losses: 10 },
      money: 2500
    },
    {
      _id: ObjectId('68002f04d47c08049acb0cf1'),
      name: 'Roark',
      rank: 'Gym Leader',
      region: 'Sinnoh',
      team: [
        { name: 'Geodude', type: [ 'Rock', 'Ground' ] },
        { name: 'Cranidos', type: [ 'Rock' ] },
        { name: 'Shieldon', type: [ 'Rock', 'Steel' ] }
      ],
      record: { wins: 80, losses: 10 },
      money: 3000
    }
]

10. // Create compound index on region and rank
db.trainers.createIndex({ region: 1, rank: 1 });
// Output:
region_1_rank_1

11. // Find trainers with Water-type Pokémon
db.trainers.createIndex({ "team.type": "text" });
// Output:
team.type_text

db.trainers.find({ $text: { $search: "Water" } });
// Output:
[
    {
      _id: ObjectId('68002f04d47c08049acb0ceb'),
      name: 'Lance',
      rank: 'Elite Four',
      region: 'Johto',
      team: [
        { name: 'Dragonite', type: [ 'Dragon', 'Flying' ] },
        { name: 'Gyarados', type: [ 'Water', 'Flying' ] },
        { name: 'Noivern', type: [ 'Flying', 'Dragon' ] },
        { name: 'Aerodactyl', type: [ 'Rock', 'Flying' ] },
        { name: 'Tyranitar', type: [ 'Rock', 'Dark' ] },
        { name: 'Kingdra', type: [ 'Water', 'Dragon' ] }
      ],
      record: { wins: 250, losses: 20 },
      money: 10000
    },
    {
      _id: ObjectId('68002f04d47c08049acb0cfe'),
      name: 'Hala',
      rank: 'Island Kahuna',
      region: 'Alola',
      team: [
        { name: 'Crabrawler', type: [ 'Fighting' ] },
        { name: 'Hariyama', type: [ 'Fighting' ] },
        { name: 'Primeape', type: [ 'Fighting' ] },
        { name: 'Poliwrath', type: [ 'Water', 'Fighting' ] }
      ],
      record: { wins: 100, losses: 20 },
      money: 4000
    },
    {
      _id: ObjectId('68002f04d47c08049acb0cfa'),
      name: 'Viola',
      rank: 'Gym Leader',
      region: 'Kalos',
      team: [
        { name: 'Surskit', type: [ 'Bug', 'Water' ] },
        { name: 'Vivillon', type: [ 'Bug', 'Flying' ] },
        { name: 'Masquerain', type: [ 'Bug', 'Flying' ] }
      ],
      record: { wins: 60, losses: 10 },
      money: 2500
    },
    {
      _id: ObjectId('68002f04d47c08049acb0cee'),
      name: 'Veteran Hector',
      rank: 'Veteran Trainer',
      region: 'Hoenn',
      team: [
        { name: 'Swampert', type: [ 'Water', 'Ground' ] },
        { name: 'Breloom', type: [ 'Grass', 'Fighting' ] },
        { name: 'Manectric', type: [ 'Electric' ] },
        { name: 'Altaria', type: [ 'Dragon', 'Flying' ] },
        { name: 'Aggron', type: [ 'Steel', 'Rock' ] }
      ],
      record: { wins: 200, losses: 30 },
      money: 7000
    },
    {
      _id: ObjectId('68002f04d47c08049acb0ced'),
      name: 'Swimmer Finn',
      rank: 'Swimmer',
      region: 'Hoenn',
      team: [ { name: 'Marill', type: [ 'Water', 'Fairy' ] } ],
      record: { wins: 10, losses: 45 },
      money: 500
    },
    {
      _id: ObjectId('68002f04d47c08049acb0cea'),
      name: 'Rising Star Hugo',
      rank: 'Rising Star',
      region: 'Johto',
      team: [
        { name: 'Quilava', type: [ 'Fire' ] },
        { name: 'Croconaw', type: [ 'Water' ] },
        { name: 'Bayleef', type: [ 'Grass' ] },
        { name: 'Noctowl', type: [ 'Normal', 'Flying' ] }
      ],
      record: { wins: 45, losses: 25 },
      money: 1500
    },
    {
      _id: ObjectId('68002f04d47c08049acb0ce5'),
      name: 'Ace Trainer Maya',
      rank: 'Ace Trainer',
      region: 'Kanto',
      team: [
        { name: 'Ninetales', type: [ 'Fire' ] },
        { name: 'Vaporeon', type: [ 'Water' ] },
        { name: 'Jolteon', type: [ 'Electric' ] },
        { name: 'Flareon', type: [ 'Fire' ] },
        { name: 'Espeon', type: [ 'Psychic' ] }
      ],
      record: { wins: 80, losses: 40 },
      money: 2500
    }
]

12. // Find trainers with "chu" in Pokémon names
db.trainers.find({
    "team.name": { $regex: /chu/i }
  }
);
// Output:
[
    {
      _id: ObjectId('68002f04d47c08049acb0ce4'),
      name: 'Lt. Surge',
      rank: 'Gym Leader',
      region: 'Kanto',
      team: [
        { name: 'Voltorb', type: [ 'Electric' ] },
        { name: 'Raichu', type: [ 'Electric' ] },
        { name: 'Magneton', type: [ 'Electric', 'Steel' ] }
      ],
      record: { wins: 130, losses: 30 },
      money: 4500
    }
]

13. // Transaction to transfer money between trainers
const session = db.getMongo().startSession();
session.startTransaction();
const trainer = session.getDatabase("pokemonLeague").getCollection("trainers");

trainer.updateOne(
  { name: "Falkner" },
  { $inc: { money: -1500 } },
  { session }
);
trainer.updateOne(
  { name: "Bugsy" },
  { $inc: { money: 1500 } },
  { session }
);

session.commitTransaction();
session.endSession();

// Output:
{
  acknowledged: true,
  modifiedCount: 1,
  matchedCount: 1,
  upsertedCount: 0,
  upsertedId: null
}
{
  acknowledged: true,
  modifiedCount: 1,
  matchedCount: 1,
  upsertedCount: 0,
  upsertedId: null
}