function iniciar() {
    
//variables base
let damage = 0
let armor = 0
let totalPrice = 0
let totalWeight = 0

function added(parameterX) { alert("You've equipped "+parameterX+".\n Current armor: "+armor+" - Current damage: "+damage+" - Weight: "+totalWeight+"/160"); }
function removed(parameterX) { alert("You've deleted "+parameterX+".\n Current armor: "+armor+" - Current damage: "+damage+" - Weight: "+totalWeight+"/160"); }

//array de objetos que se pueden seleccionar mediante un prompt usando su id
const itemIds = 
[
    { id: 100, name: "Ivory Helm of Silent Glory", type: "armor", armor: 227, damage: 0, weight: 0, price: 1500 },
    { id: 101, name: "Ivory Batteplate of Silent Glory", type: "armor", armor: 227, damage: 0, weight: 0, price: 1500 },
    { id: 102, name: "Ivory Pauldrons of Silent Glory", type: "armor", armor: 227, damage: 0, weight: 0, price: 1500 },
    { id: 103, name: "Ivory Handguards of Silent Glory", type: "armor", armor: 227, damage: 0, weight: 0, price: 1500 },
    { id: 104, name: "Ivory Leggings of Silent Glory", type: "armor", armor: 227, damage: 0, weight: 0, price: 1500 },
    { id: 110, name: "Helmet of Extintion", type: "armor", Armor: 227, damage: 0, weight: 0, price: 500 },
    { id: 111, name: "Chestguard of Extinction", type: "armor", armor: 227, damage: 0, weight: 0, price: 500 },
    { id: 112, name: "Pauldrons of Extinction", type: "armor", armor: 227, damage: 0, weight: 0, price: 500 },
    { id: 113, name: "Gauntlets of Extinction", type: "armor", armor: 227, damage: 0, weight: 0, price: 500 },
    { id: 114, name: "Leggings of Extinction", type: "armor", armor: 227, damage: 0, weight: 0, price: 500 },
    { id: 200, name: "Shield", type: "shield", armor: 227, damage: 0, weight: 0, price: 400 },
    { id: 300, name: "Blazefury, Gift of the Lasting Night", type: "sword", armor: 0, damage: 159, weight: 0, price: 2500 },
    { id: 301, name: "Silverlight, Ornament of Blessing", type: "sword", armor: 0, damage: 159, weight: 0, price: 3500 },
    { id: 302, name: "Ivory, Favor of Suffering's End", type: "sword", armor: 0, damage: 159, weight: 0, price: 1500 },
    { id: 400, name: "Knightfall, Hope of Agony", type: "hammer", armor: 0, damage: 159, weight: 0, price: 4500 },
    { id: 500, name: "Stormherald", type: "axe", armor: 0, damage: 159, weight: 0, price: 3500 },
    { id: 600, name: "Last Rites, Memory of the Gladiator", type: "spear", armor: 0, damage: 159, weight: 0, price: 7000 }
]


//prompt donde seleccionamos que tarea queremos hacer
let operateItem = (prompt("¿What do you want to do?: 'equip item', 'remove item', 'search item', 'see inventory' or 'exit'"))

const inventory = []

if (operateItem !== "exit") 
{ 

do{

switch (operateItem) {
    case "equip item":
        let equipItem = (prompt("Type the ID of the item you want to equip")) 

        switch (equipItem) {
            case "100": totalWeight = totalWeight + itemIds[0].weight; totalPrice = totalPrice + itemIds[0].price; armor = armor + itemIds[0].armor; inventory.push(itemIds[0].name); added(itemIds[0].name); break;
            case "101": totalWeight = totalWeight + itemIds[1].weight; totalPrice = totalPrice + itemIds[1].price; armor = armor + itemIds[1].armor; inventory.push(itemIds[1].name); added(itemIds[1].name); break;
            case "102": totalWeight = totalWeight + itemIds[2].weight; totalPrice = totalPrice + itemIds[2].price; armor = armor + itemIds[2].armor; inventory.push(itemIds[2].name); added(itemIds[2].name); break;
            case "103": totalWeight = totalWeight + itemIds[3].weight; totalPrice = totalPrice + itemIds[3].price; armor = armor + itemIds[3].armor; inventory.push(itemIds[3].name); added(itemIds[3].name); break;
            case "104": totalWeight = totalWeight + itemIds[4].weight; totalPrice = totalPrice + itemIds[4].price; armor = armor + itemIds[4].armor; inventory.push(itemIds[4].name); added(itemIds[4].name); break;
            case "110": totalWeight = totalWeight + itemIds[5].weight; totalPrice = totalPrice + itemIds[5].price; armor = armor + itemIds[5].armor; inventory.push(itemIds[5].name); added(itemIds[5].name); break;
            case "111": totalWeight = totalWeight + itemIds[6].weight; totalPrice = totalPrice + itemIds[6].price; armor = armor + itemIds[6].armor; inventory.push(itemIds[6].name); added(itemIds[6].name); break;
            case "112": totalWeight = totalWeight + itemIds[7].weight; totalPrice = totalPrice + itemIds[7].price; armor = armor + itemIds[7].armor; inventory.push(itemIds[7].name); added(itemIds[7].name); break;
            case "113": totalWeight = totalWeight + itemIds[8].weight; totalPrice = totalPrice + itemIds[8].price; armor = armor + itemIds[8].armor; inventory.push(itemIds[8].name); added(itemIds[8].name); break;
            case "114": totalWeight = totalWeight + itemIds[9].weight; totalPrice = totalPrice + itemIds[9].price; armor = armor + itemIds[9].armor; inventory.push(itemIds[9].name); added(itemIds[9].name); break;
            case "200": totalWeight = totalWeight + itemIds[10].weight; totalPrice = totalPrice + itemIds[10].price; armor = armor + itemIds[10].armor; inventory.push(itemIds[10].name); added(itemIds[10].name); break;
            case "300": totalWeight = totalWeight + itemIds[11].weight; totalPrice = totalPrice + itemIds[11].price; damage = damage + itemIds[11].damage; inventory.push(itemIds[11].name); added(itemIds[11].name); break;
            case "301": totalWeight = totalWeight + itemIds[12].weight; totalPrice = totalPrice + itemIds[12].price; damage = damage + itemIds[12].damage; inventory.push(itemIds[12].name); added(itemIds[12].name); break;
            case "302": totalWeight = totalWeight + itemIds[13].weight; totalPrice = totalPrice + itemIds[13].price; damage = damage + itemIds[13].damage; inventory.push(itemIds[13].name); added(itemIds[13].name); break;
            case "400": totalWeight = totalWeight + itemIds[14].weight; totalPrice = totalPrice + itemIds[14].price; damage = damage + itemIds[14].damage; inventory.push(itemIds[14].name); added(itemIds[14].name); break;
            case "500": totalWeight = totalWeight + itemIds[15].weight; totalPrice = totalPrice + itemIds[15].price; damage = damage + itemIds[15].damage; inventory.push(itemIds[15].name); added(itemIds[15].name); break;
            case "600": totalWeight = totalWeight + itemIds[16].weight; totalPrice = totalPrice + itemIds[16].price; damage = damage + itemIds[16].damage; inventory.push(itemIds[16].name); added(itemIds[16].name); break;
    
            default: alert("Not an existing ID"); break; } break;
    
    case "remove item":
        
        if (armor != 0 || damage != 0) 
        {
        let deleteItem = (prompt("Type the ID of the item you want to remove from your inventory"))

        switch (deleteItem) {
            case "100": totalWeight = totalWeight - itemIds[0].weight; totalPrice = totalPrice - itemIds[0].price; armor = armor - itemIds[0].armor; inventory.pop(itemIds[0].name); removed(itemIds[0].name); break;
            case "101": totalWeight = totalWeight - itemIds[1].weight; totalPrice = totalPrice - itemIds[1].price; armor = armor - itemIds[1].armor; inventory.pop(itemIds[1].name); removed(itemIds[1].name); break;
            case "102": totalWeight = totalWeight - itemIds[2].weight; totalPrice = totalPrice - itemIds[2].price; armor = armor - itemIds[2].armor; inventory.pop(itemIds[2].name); removed(itemIds[2].name); break;
            case "103": totalWeight = totalWeight - itemIds[3].weight; totalPrice = totalPrice - itemIds[3].price; armor = armor - itemIds[3].armor; inventory.pop(itemIds[3].name); removed(itemIds[3].name); break;
            case "104": totalWeight = totalWeight - itemIds[4].weight; totalPrice = totalPrice - itemIds[4].price; armor = armor - itemIds[4].armor; inventory.pop(itemIds[4].name); removed(itemIds[4].name); break;
            case "110": totalWeight = totalWeight - itemIds[5].weight; totalPrice = totalPrice - itemIds[5].price; armor = armor - itemIds[5].armor; inventory.pop(itemIds[5].name); removed(itemIds[5].name); break;
            case "111": totalWeight = totalWeight - itemIds[6].weight; totalPrice = totalPrice - itemIds[6].price; armor = armor - itemIds[6].armor; inventory.pop(itemIds[6].name); removed(itemIds[6].name); break;
            case "112": totalWeight = totalWeight - itemIds[7].weight; totalPrice = totalPrice - itemIds[7].price; armor = armor - itemIds[7].armor; inventory.pop(itemIds[7].name); removed(itemIds[7].name); break;
            case "113": totalWeight = totalWeight - itemIds[8].weight; totalPrice = totalPrice - itemIds[8].price; armor = armor - itemIds[8].armor; inventory.pop(itemIds[8].name); removed(itemIds[8].name); break;
            case "114": totalWeight = totalWeight - itemIds[9].weight; totalPrice = totalPrice - itemIds[9].price; armor = armor - itemIds[9].armor; inventory.pop(itemIds[9].name); removed(itemIds[9].name); break;
            case "200": totalWeight = totalWeight - itemIds[10].weight; totalPrice = totalPrice - itemIds[10].price; armor = armor - itemIds[10].armor; inventory.pop(itemIds[10].name); removed(itemIds[10].name); break;
            case "300": totalWeight = totalWeight - itemIds[11].weight; totalPrice = totalPrice - itemIds[11].price; damage = damage - itemIds[11].damage; inventory.pop(itemIds[11].name); removed(itemIds[11].name); break;
            case "301": totalWeight = totalWeight - itemIds[12].weight; totalPrice = totalPrice - itemIds[12].price; damage = damage - itemIds[12].damage; inventory.pop(itemIds[12].name); removed(itemIds[12].name); break;
            case "302": totalWeight = totalWeight - itemIds[13].weight; totalPrice = totalPrice - itemIds[13].price; damage = damage - itemIds[13].damage; inventory.pop(itemIds[13].name); removed(itemIds[13].name); break;
            case "400": totalWeight = totalWeight - itemIds[14].weight; totalPrice = totalPrice - itemIds[14].price; damage = damage - itemIds[14].damage; inventory.pop(itemIds[14].name); removed(itemIds[14].name); break;
            case "500": totalWeight = totalWeight - itemIds[15].weight; totalPrice = totalPrice - itemIds[15].price; damage = damage - itemIds[15].damage; inventory.pop(itemIds[15].name); removed(itemIds[15].name); break;
            case "600": totalWeight = totalWeight - itemIds[16].weight; totalPrice = totalPrice - itemIds[16].price; damage = damage - itemIds[16].damage; inventory.pop(itemIds[16].name); removed(itemIds[16].name); break;
    
            default: alert("You don't have that item on your inventory"); break; } break;
        }
        else { alert("Your inventory is already empty") }

    case "search item":
        
        let itemBuscado = (prompt("Search for an item by ID"))
        const FINDED = itemIds.find((parametroX) => parametroX.id == itemBuscado)
        if (FINDED != undefined){alert(FINDED.name+" - Type: "+FINDED.type+" - armor: "+FINDED.armor+" - Damage: "+FINDED.damage+" - Weight: "+FINDED.weight+" - Price: "+FINDED.price)}
        else{alert("That item does not exist")} break;


    case "see inventory": alert(inventory); break;
    
    default: alert(operateItem+" is not an existing function!"); break;
}

operateItem = (prompt("¿What do you want to do?: 'equip item', 'remove item', 'search item', 'see inventory' or 'exit'"))

}while (totalWeight < 160 && operateItem !== "exit") 

}
}