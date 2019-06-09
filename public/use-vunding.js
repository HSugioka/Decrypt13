let account;
let address;
let instance;

function initBlockchain(handleProjectRegistered, handleCandidateRegistered) {
  if (typeof window.ethereum === 'undefined') {
    console.error('MetaMask not found');
  } else {
    console.log('MetaMask found!');
    ethereum.enable().then((accounts) => {
      account = accounts[0];
      console.log('My account is ' + account);

      address = Vunding.networks[5777].address;
      console.log('My contract address is ', address);

      instance = web3.eth.contract(Vunding.abi).at(address);

      instance.ProjectRegistered().watch((e, ev) => {
        if (e) {
          console.error(e);
        } else {
          handleProjectRegistered(ev);
        }
      });

      instance.CandidateRegistered().watch((e, ev) => {
        if (e) {
          console.error(e);
        } else {
          handleCandidateRegistered(ev);
        }
      });
    });
  }
}

function registerProject(name, fundingDeadline, fundingTarget, desc) {
  instance.registerProject(name, fundingDeadline, fundingTarget, desc, (e, hash) => {
    if (e) {
      console.error(e);
    } else {
      web3.eth.getTransactionReceipt(hash, (e, receipt) => {
        if (e) {
          console.error(e);
        } else {
          console.log(receipt);
        }
      });
    }
  });
}
