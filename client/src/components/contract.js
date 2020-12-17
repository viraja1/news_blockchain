import Web3 from 'web3'
import abi from "./Media";
const web3 = new Web3(window.web3.currentProvider);
const address = '0xfba2624baaf48b8af85835be658cf56a98ec00b4';
const Media = new web3.eth.Contract(abi, address);
export {Media, web3}
