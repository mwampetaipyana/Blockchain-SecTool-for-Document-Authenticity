const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

// Define LegalModule
const SecToolModule = buildModule("SecToolModule", (m) => {
    const sectool = m.contract("SecTool");
    return { sectool };
});

// Export LegalModule
module.exports = SecToolModule;
//0x5FbDB2315678afecb367f032d93F642f64180aa3