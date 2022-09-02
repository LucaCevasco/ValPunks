const deploy = async () => {
  const [deployer] = await ethers.getSigners();

  console.log('deploying contract with the account:', deployer.address)

  const ValPunks = await ethers.getContractFactory('ValPunks');
  const deployed = await ValPunks.deploy(10000);

  console.log('Val punks is deployed at:', deployed.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
