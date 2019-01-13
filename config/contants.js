const defaultConfig = {
    PORT: process.env.PORT || 8000,
};

const stringConnectData = {
    user: 'postgres',
    host: '68.183.188.217',
    database: 'postgres',
    password: '1041992a@',
    port: 5432,
    keepAlive:true,
    ssl: false
}

const message = 'Success';

const stringSQL = {
    insertUser: 'INSERT INTO "Users" ("userName","passWord","permission") VALUES ($1,$2,$3)',
    updateUser: 'UPDATE "Users" SET "passWord"= $1 WHERE "id" = $2',
    selectUser: 'SELECT * FROM "Users" WHERE "permission" > 1',
    selectUserByUser: 'SELECT * FROM "Users" WHERE "userName" = $1',
    deleteUser: 'DELETE FROM "Users" WHERE "id" = $1',
    //Machine Query
    insertMachine: 'INSERT INTO "Machine" ("name","state") VALUES ($1,$2)',
    selectMachine: 'SELECT * FROM "Machine" ORDER BY "name"',
    getIdNewMachine: 'SELECT "id" FROM "Machine" ORDER BY "id" DESC LIMIT 1',
    selectMachineState: 'SELECT * FROM "Machine" WHERE "state" = $1 ORDER BY "name"',
    selectMachineId: 'SELECT * FROM "Machine" WHERE "id" = $1',
    updateMachineState: 'UPDATE "Machine" SET "state" = $1 WHERE "id" = $2',
    updateMachineName: 'UPDATE "Machine" SET "name" = $1 WHERE "id" = $2',
    deleteMachine: 'DELETE FROM "Machine" WHERE "id" = $1',
    //Product Query
    insertProdcut: 'INSERT INTO "Product" ("name","price","amount","active","type","priceBuy") VALUES ($1,$2,$3,$4,$5,$6)',
    selectProduct: 'SELECT * FROM "Product" WHERE "active" = true',
    getIDNewProduct: 'SELECT "id" FROM "Product" ORDER BY "id" DESC LIMIT 1',
    selectProductById: 'SELECT * FROM "Product" WHERE "id" = $1',
    updateProduct: 'UPDATE "Product" SET "name" =$1,"amount" =$2,"price" =$3, "type" =$4,"priceBuy" = $5 WHERE "id" =$6',
    updateAmountByID: 'UPDATE "Product" SET "amount" =$1 WHERE "id" =$2',
    updatePriceByID: 'UPDATE "Product" SET "price" =$1 WHERE "id" =$2',
    getPriceById: 'SELECT "price" FROM "Product" WHERE "id" =$1 AND "active" = true',
    updateProductisAcivte: 'UPDATE "Product" SET "active" =$1 WHERE "id" =$2',
    selectProductISActive: 'SELECT * FROM "Product" WHERE "active" = true',
    selectNameProductAmount: 'SELECT "name" FROM "Product" WHERE "active" = true AND "amount" > 0',
    selectProductByType: 'SELECT * FROM "Product" WHERE "active" = true AND "type" = $1',
    selectMoneyMachine: 'SELECT price FROM "Product" WHERE "active" = false AND "type" = 5',
    updateMoneyMachine:'UPDATE "Product" SET "price" = $1 WHERE "active" = false AND "type" = 5',
    updateMoneyMachine2VS2: 'UPDATE "Product" SET "price" = $1 WHERE "active" = false AND "type" = 6',
    selectMoneyMachine2VS2: 'SELECT price FROM "Product" WHERE "active" = false AND "type" = 6',
    selectAllMoneyMachine: 'SELECT price FROM "Product" WHERE "active" = false AND ("type" = 6 OR "type" =5) ORDER BY "price"',
    deleteProduct: 'DELETE FROM "Product" WHERE "id" = $1',
    //MachineBill Query
    getAllMachineBill: 'SELECT * FROM "MachineBill" WHERE "timeEnd" > 0',
    insertMachineBill: 'INSERT INTO "MachineBill" ("timeStart","timeEnd","sumMoney","machineMoney","machineId","type","note") VALUES ($1,$2,$3,$4,$5,$6,$7)',
    changeMachineInBill: 'UPDATE "MachineBill" SET "machineId" = $1 WHERE "id" = $2',
    updateTimeEndMachine: 'UPDATE "MachineBill" SET "timeEnd" = $1 ,"machineMoney" = $2,"sumMoney" = $3 WHERE  "id" =$4',
    updateNoteInBill: 'UPDATE "MachineBill" SET "note" = $1 WHERE  "id" =$2',
    getMachineBillByID : 'SELECT * FROM "MachineBill" WHERE "id" =$1',
    updateSumMoneyMachine: 'UPDATE "MachineBill" SET "sumMoney" = $1 WHERE id =$2',
    getListMachineBillDuringTime: 'SELECT * FROM "MachineBill" WHERE "timeEnd" BETWEEN $1 AND $2 ORDER BY "timeEnd" DESC',
    getListBillDuringTimeByMachine: 'SELECT * FROM "MachineBill" WHERE "timeEnd" BETWEEN $1 AND $2 AND "machineId" =$3 ORDER BY "timeEnd" DESC',
    getListBillTimeLastByMachine: 'SELECT * FROM "MachineBill" WHERE "timeEnd" >= $1 AND "machineId" = $2 ORDER BY "timeEnd" DESC',
    getTimeNewStart: 'SELECT MAX("timeStart") FROM "MachineBill" WHERE "machineId" =$1',
    getBillNewMachine: 'SELECT * FROM "MachineBill" WHERE "machineId" =$1 AND "timeEnd" = 0 ORDER BY "id" DESC LIMIT 1',
    getLastIDMachineBill: 'SELECT "id" FROM "MachineBill" WHERE "machineId" =$1 ORDER BY ID DESC LIMIT 1',
    getTimeStartLastMachineBill: 'SELECT "timeStart" FROM "MachineBill" WHERE "id" =$1',

    //Machine Join Bill Query
    getListMachineBillAndIdMachine: 'SELECT "Machine"."id" as machineId, "Machine"."name" as nameMachine, "MachineBill"."sumMoney" as sumMoney, "MachineBill"."id" as machinebillid, "MachineBill"."machineMoney" as machineMoney, "MachineBill"."timeEnd" as dateTimeEnd FROM "Machine" INNER JOIN "MachineBill" ON "Machine"."id" = "MachineBill"."machineId" AND "MachineBill"."timeEnd" > 0',
    getAllMachineBillDuringTime: 'SELECT "Machine"."id" as machineId, "Machine"."name" as nameMachine, "MachineBill"."sumMoney" as sumMoney, "MachineBill"."id" as machinebillid, "MachineBill"."machineMoney" as machineMoney, "MachineBill"."timeEnd" as dateTimeEnd FROM "Machine" INNER JOIN "MachineBill" ON "Machine"."id" = "MachineBill"."machineId" AND "MachineBill"."timeEnd" BETWEEN $1 AND $2 ORDER BY "MachineBill"."timeEnd" DESC',
    getAllMachineBillByTimeEnd: 'SELECT "Machine"."id" as machineId, "Machine"."name" as nameMachine, "MachineBill"."sumMoney" as sumMoney, "MachineBill"."id" as machinebillid, "MachineBill"."machineMoney" as machineMoney, "MachineBill"."timeEnd" as dateTimeEnd FROM "Machine" INNER JOIN "MachineBill" ON "Machine"."id" = "MachineBill"."machineId" AND "MachineBill"."timeEnd" >= $1 ORDER BY "MachineBill"."timeEnd" DESC',
    getListMachineMoneyWithMachineId: 'SELECT "Machine"."id" as machineId, "Machine"."name" as nameMachine, SUM("MachineBill"."machineMoney") as sumMoneyWithMachine FROM "Machine" INNER JOIN "MachineBill" ON "Machine"."id" = "MachineBill"."machineId" GROUP BY "Machine"."id"',
    getListMachineMoneyWithMachineIdLastTime: 'SELECT "Machine"."id" as machineId, "Machine"."name" as nameMachine, SUM("MachineBill"."machineMoney") as sumMoneyWithMachine FROM "Machine" INNER JOIN "MachineBill" ON "Machine"."id" = "MachineBill"."machineId"  AND "MachineBill"."timeEnd" >= $1 GROUP BY "Machine"."id"',
    getListMachineMoneyWithMachineIdDuringTime: 'SELECT "Machine"."id" as machineId, "Machine"."name" as nameMachine, SUM("MachineBill"."machineMoney") as sumMoneyWithMachine FROM "Machine" INNER JOIN "MachineBill" ON "Machine"."id" = "MachineBill"."machineId"  AND "MachineBill"."timeEnd" BETWEEN $1 AND $2 GROUP BY "Machine"."id"',
    getListSumMoneyAndMachineIdDuringTime: 'SELECT "Machine"."id" as machineId, "Machine"."name" as nameMachine, SUM("MachineBill"."sumMoney") as sumMoneyWithMachine, COUNT("MachineBill"."id") as coutBill FROM "Machine" INNER JOIN "MachineBill" ON "Machine"."id" = "MachineBill"."machineId"  AND "MachineBill"."timeEnd" BETWEEN $1 AND $2 GROUP BY "Machine"."id"',
    getListSumMoneyAndMachineIdLastTime: 'SELECT "Machine"."id" as machineId, "Machine"."name" as nameMachine, SUM("MachineBill"."sumMoney") as sumMoneyWithMachine, COUNT("MachineBill"."id") as coutBill FROM "Machine" INNER JOIN "MachineBill" ON "Machine"."id" = "MachineBill"."machineId"  AND "MachineBill"."timeEnd" >= $1 GROUP BY "Machine"."id"',
    //BillService Query
    addBillService: 'INSERT INTO "BillService" ("money","amount","idBill","idProduct") VALUES ($1,$2,$3,$4)',
    getAllBillService: 'SELECT * FROM "BillService"',
    getMoneyByIDMachineBill: 'SELECT SUM("money") AS sumMoney FROM "BillService" WHERE "idBill" = $1',
    updateAmountProduct: 'UPDATE "BillService" SET "amount" = $1, "money" =$2 WHERE "id" = $3',
    getBillServiceWithProduct: 'SELECT * FROM "BillService" WHERE "idBill" = $1 AND "idProduct" =$2',
    deleteBillSericeById: 'DELETE FROM "BillService" WHERE "id" =$1',
    getIDNewProductBill: 'SELECT "id" FROM "BillService" ORDER BY "id" DESC LIMIT 1',
    //Product join bill Query
    getProductServiceJoinBillServices: 'SELECT "BillService"."amount" as amoutProduct, "BillService"."id" as idProductBill, "Product"."name" as nameProduct, "Product"."type" as typeProduct,"Product"."id" as idPS,"Product"."amount" as amountProductTable, "BillService"."money" as moneyProduct FROM "BillService" INNER JOIN "Product" ON "BillService"."idProduct" = "Product"."id" AND "BillService"."idBill" = $1',
    //Combo query
    addCombo : 'INSERT INTO "ComboMachine" ("name","type","money","moneyService","timePlay") VALUES ($1,$2,$3,$4,$5)',
    getListCombo: 'SELECT * FROM "ComboMachine"',
    editMachineMoney: 'UPDATE "ComboMachine" SET "money" = $1 WHERE  "id" =$2',
    editComboById : 'UPDATE "ComboMachine" SET "name" = $1,"type" = $2,"money" =$3,"moneyService" = $4,"timePlay" =$5 WHERE  "id" =$6',
    deleteCombo: 'DELETE FROM "ComboMachine" WHERE "id" = $1',
    getComboById: 'SELECT * FROM "ComboMachine" WHERE "id" = $1',

    //Token query
    addToken : 'INSERT INTO "TokenFireBase" ("token","permission") VALUES ($1,$2)',
    getListToken: 'SELECT "token" FROM "TokenFireBase" WHERE "permission" =$1'
}

const JWT_SECRET = 'thisisasecret'
const MACHINE_PENDING = 'PENDING'
const MACHINE_PLAYING = 'PLAY'
const MACHINE_MAINTENCE = 'MAINTENCE'

module.exports = {
    defaultConfig,
    stringConnectData,
    JWT_SECRET,
    MACHINE_PENDING,
    MACHINE_PLAYING,
    MACHINE_MAINTENCE,
    stringSQL,
    message
}