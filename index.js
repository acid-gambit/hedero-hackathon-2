console.clear();
require("dotenv").config();
const { 
    AccountId,
    PrivateKey,
    Client,
    TopicCreateTransaction,
    TopicMessageQuery,
    TopicMessageSubmitTransaction,
 } = require("@hashgraph/sdk");

//Grab Hedera testnet account ID and private key from the .env file
const operatorId = AccountId.fromString(process.env.OPERATOR_ID);
const operatorKey = PrivateKey.fromString(process.env.OPERATOR_KEY);

// Build hedera testnet and mirro node client
const client = Client.forTestnet();

// Set operator ID and operator private key
client.setOperator(operatorId, operatorKey);

async function main() {

    // Hackathon Challenge #2 Testnet Topic ID
    let topicId = "0.0.34180338"

    // Send one message
    let sendResponse = await new TopicMessageSubmitTransaction({
        topicId: topicId,
        message: "", // Message to send
    }).execute(client);
    const getReceipt = await sendResponse.getReceipt(client);

    // Grab status of Tx
    const transactionStatus = getReceipt.status
    console.log("The message transaction status" + transactionStatus)
}
main();

