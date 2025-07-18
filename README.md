# 🌐 DecentraX — Decentralized Crowdfunding dApp 🚀

Welcome to **DecentraX**, a fully decentralized crowdfunding platform built on the **Ethereum blockchain**.  
This dApp empowers individuals to raise funds transparently and securely, without third-party interference.

> 
![Crowdfunding dApp UI](https://raw.githubusercontent.com/anishsingh90/1-Decentralised-CrowdFunding-Projects-dApps-/c590ed316b5afd4bf1641c126de369e4260df52e/crowdfunding.png)
 

---

## 📌 Table of Contents

- [✨ Features](#-features)  
- [🛠️ Tech Stack](#-tech-stack)  
- [📜 Smart Contracts Overview](#-smart-contracts-overview)  
- [⚙️ Getting Started](#-getting-started)  
- [🖼️ UI Experience](#-ui-experience)  
- [🚀 Use Cases](#-use-cases)  
- [🌱 Future Enhancements](#-future-enhancements)  
- [📬 Contact](#-contact)  

---

## ✨ Features

- 📢 **Launch Campaigns** – Start fundraising campaigns with custom goals, deadlines, and descriptions.
- 💸 **Donate with ETH** – Seamless on-chain donations using connected crypto wallets.
- 🧾 **On-Chain Transparency** – All donations and campaign data are stored and viewable on-chain.
- 📊 **Track Campaign Progress** – View donation amounts, donors, and how close the campaign is to its goal.
- 🔒 **Security-First** – Uses Solidity smart contracts with ETH transfer logic via `.call` to avoid custodial risks.
- 👁️‍🗨️ **Real-Time Donor List** – See who donated and how much, ensuring open accountability.

---

## 🛠️ Tech Stack

| Layer            | Technology                      |
|------------------|----------------------------------|
| 💻 Frontend       | React.js                         |
| ⚙️ Smart Contracts | Solidity                         |
| 🔗 Blockchain     | Ethereum (EVM)                   |
| 🧰 Integration     | Ethers.js + Thirdweb SDK           |
| 👛 Wallets        | MetaMask, WalletConnect, Coinbase|

---

## 📜 Smart Contracts Overview

### 🔹 `CrowdFunding.sol`
Handles campaign logic:
- Campaign creation with target, deadline, image, description
- Stores donations and contributor data
- Directly transfers ETH to campaign owners
- Fetches all campaigns and donor details

**Key Functions:**
- `createCampaign(...)`
- `donateToCampaign(uint256 _id)`
- `getDonators(uint256 _id)`
- `getCampaigns()`

🛑 **Important Validation:**  
The `createCampaign` function ensures that the **deadline must be in the future**.

---

## ⚙️ Getting Started

### 🔧 Clone the Repository
```bash
git clone https://github.com/anishsingh90/1-Decentralised-CrowdFunding-Projects-dApps-.git
cd 1-Decentralised-CrowdFunding-Projects-dApps-
