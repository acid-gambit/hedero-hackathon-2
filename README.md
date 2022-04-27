# hedero-hackathon-2
Hedero Hackathon Quest #2

"Taskbar Quest #2: Team Name. Earn 20 hbars by submitting your team name as an HCS message to testnet topic 0.0.34180338. After submitting your transaction to the Hedera tesnet, find it on the DragonGlass explorer and create a new task on Taskbar. In your new task, add a link to your DragonGlass transaction and follow the directions to share the task on Twitter. Have questions? Let us know in the #taskbar-quest channel on the Hedera Discord."

Includes index.js to send message to the above testnet topic. To get your environment set-up, follow the steps at https://docs.hedera.com/guides/getting-started/environment-set-up.

Steps to get started in your terminal:

```
npm init
```

```
npm install --save @hashgraph/sdk
```

```
npm install dotenv
```

Create a .env file in your root directory in the format: 
```
OPERATOR_ID = 0.0.3...
OPERATOR_KEY = 302...
```

And finally create index.js in the root directory.

To run, type in your cli:
```
node index.js 
```
