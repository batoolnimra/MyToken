# MyToken

**MyToken** is a custom ERC-20 token created using Solidity and deployed using Hardhat. It represents a basic cryptocurrency that can be transferred between wallets on the Ethereum blockchain.

---

## 🔧 Tech Stack

- **Solidity** – Smart contract programming language  
- **Hardhat** – Smart contract development environment  
- **JavaScript** – Used for scripting and testing  
- **VS Code** – Code editor  
- **MetaMask** – Wallet to manage tokens  
- **Git & GitHub** – Version control and hosting  

---

## 🛠️ Features

- ERC-20 compatible token  
- Initial supply minted on deployment  
- Transferable between accounts  
- Tested using Hardhat  

---

## 📁 Project Structure
MyToken/
├── contracts/
│ └── MyToken.sol
├── scripts/
│ └── deploy.js
├── test/
│ └── MyTokenTest.js
├── screenshots/
│ └── mytoken-test.png
├── hardhat.config.js
├── package.json
└── README.md

---

## ✅ Test Result Screenshot

This screenshot shows that the smart contract passed the test:

![Test Passed](screenshots/mytoken-test-passed.png)


---

## 🚀 How to Deploy Locally

```bash
npx hardhat run scripts/deploy.js --network hardhat

### 🔁 Wallet-to-Wallet Token Transfer

After deploying MyToken, we used Hardhat Console to simulate sending tokens between wallets.

```js
// Transfer 100 tokens to addr1
await token.transfer(addr1.address, ethers.parseUnits("100", 18));

// Check addr1 balance
const addr1Balance = await token.balanceOf(addr1.address);
console.log("addr1 balance:", ethers.formatUnits(addr1Balance, 18));
// Output: addr1 balance: 100.0


✨ Author
Nimra Batool
Aspiring Blockchain Developer | Solidity | Smart Contracts | Web3.js


 
