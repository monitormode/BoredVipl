const Migrations = artifacts.require("BeanedVipla");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
