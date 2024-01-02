const { run } = require("hardhat")

const verify = async (contractAddress, args) => {
    console.log("Verifying contract ...")
    console.log(`Contract Adress: ${contractAddress}`)
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!")
        } else {
            console.log(e)
        }
    }
}

module.exports = { verify }
