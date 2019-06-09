let account;
let address;
let instance;

function initBlockchain(
  handleProjectRegistered,
	handleProjectAborted,

	handleFunded,
	handleRefunded,
	handleWithdrawn,

	handleCandidateRegistered,
	handleCandidateVoted,
) {
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

      instance.ProjectRegistered({}, {fromBlock: 0, toBlock: 'latest'}).watch((e, ev) => {
        if (e) {
          console.error(e);
        } else {
          handleProjectRegistered(ev);
        }
      });
      instance.ProjectAborted({}, {fromBlock: 0, toBlock: 'latest'}).watch((e, ev) => {
        if (e) {
          console.error(e);
        } else {
          handleProjectAborted(ev);
        }
      });

      instance.Funded({}, {fromBlock: 0, toBlock: 'latest'}).watch((e, ev) => {
        if (e) {
          console.error(e);
        } else {
          handleFunded(ev);
        }
      });

      instance.Refunded({}, {fromBlock: 0, toBlock: 'latest'}).watch((e, ev) => {
        if (e) {
          console.error(e);
        } else {
          handleRefunded(ev);
        }
      });

      instance.Withdrawn({}, {fromBlock: 0, toBlock: 'latest'}).watch((e, ev) => {
        if (e) {
          console.error(e);
        } else {
          handleWithdrawn(ev);
        }
      });

      instance.CandidateRegistered().watch((e, ev) => {
        if (e) {
          console.error(e);
        } else {
          handleCandidateRegistered(ev);
        }
      });

      instance.CandidateVoted().watch((e, ev) => {
        if (e) {
          console.error(e);
        } else {
          handleCandidateVoted(ev);
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

function fundProject(projId, amount) {
  instance.fundProject(projId, {from: account, value: web3.toWei(amount, 'ether')}, (e, hash) => {
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
