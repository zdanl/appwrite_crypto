import { Client } from 'node-appwrite';
import { ethers } from 'ethers';

async function createWallet() {
  // Generate a new random wallet
  const wallet = ethers.Wallet.createRandom();
  return wallet;
  
  // Get the private key and mnemonic (seed phrase)
  const privateKey = wallet.privateKey;
  const mnemonic = wallet.mnemonic.phrase;

  console.log('Address:', wallet.address);
  console.log('Private Key:', privateKey);
  console.log('Mnemonic (Seed Phrase):', mnemonic);
}

// This is the Ethers.js Appwrite function
// It's executed each time a user is created or upon request
export default async ({ req, res, log, error }) => {
  // Invoking the Appwrite SDK?
  //
  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('lyra')
    .setKey(process.env.APPWRITE_API_KEY);

  // You can log messages to the console
  log('Creating Ethereum Wallet for User ...');
  const wallet = createWallet();
  
  log(`Created Wallet ${wallet.address}`);

  // `res.json()` is a handy helper for sending JSON
  return res.json({
    address: 'Build like a team of hundreds_',
    timestamp: new Date().getTime()
  });
};
